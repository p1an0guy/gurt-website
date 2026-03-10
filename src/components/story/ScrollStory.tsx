'use client';

import { useEffect, useRef, useState } from 'react';
import { DeviceFrame } from '@/components/story/DeviceFrame';
import { StoryStepCard } from '@/components/story/StoryStepCard';
import { isDesktopViewport, prefersReducedMotion } from '@/lib/motion';
import type { StoryStep } from '@/lib/content';

interface ScrollStoryProps {
  steps: StoryStep[];
}

export function ScrollStory({ steps }: ScrollStoryProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [enableDesktopAnimation, setEnableDesktopAnimation] = useState(false);

  useEffect(() => {
    const updateViewportMode = () => {
      setEnableDesktopAnimation(isDesktopViewport() && !prefersReducedMotion());
    };

    updateViewportMode();

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedMotionQuery.addEventListener('change', updateViewportMode);
    window.addEventListener('resize', updateViewportMode);

    return () => {
      reducedMotionQuery.removeEventListener('change', updateViewportMode);
      window.removeEventListener('resize', updateViewportMode);
    };
  }, []);

  useEffect(() => {
    if (!enableDesktopAnimation || !sectionRef.current || !mediaRef.current) {
      return;
    }

    let isCancelled = false;

    const initScrollStory = async () => {
      const gsapModule = await import('gsap');
      const scrollTriggerModule = await import('gsap/ScrollTrigger');
      if (isCancelled) {
        return;
      }

      const gsap = gsapModule.default || gsapModule.gsap;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      const context = gsap.context(() => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top+=112',
          end: 'bottom bottom-=112',
          pin: mediaRef.current,
          pinSpacing: false,
        });

        stepRefs.current.forEach((stepRef, index) => {
          if (!stepRef) {
            return;
          }

          ScrollTrigger.create({
            trigger: stepRef,
            start: 'top center+=48',
            end: 'bottom center+=48',
            onEnter: () => setActiveIndex(index),
            onEnterBack: () => setActiveIndex(index),
          });
        });
      }, sectionRef);

      return () => context.revert();
    };

    const cleanupPromise = initScrollStory();

    return () => {
      isCancelled = true;
      void cleanupPromise?.then((cleanup) => cleanup?.());
    };
  }, [enableDesktopAnimation]);

  if (!enableDesktopAnimation) {
    return (
      <div className="space-y-5">
        {steps.map((step, index) => (
          <StoryStepCard
            key={step.number}
            step={step}
            inlineMedia={<DeviceFrame step={step} priority={index === 0} />}
          />
        ))}
      </div>
    );
  }

  return (
    <div ref={sectionRef} className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="space-y-5">
        {steps.map((step, index) => (
          <div
            key={step.number}
            ref={(element) => {
              stepRefs.current[index] = element;
            }}
          >
            <StoryStepCard active={index === activeIndex} step={step} />
          </div>
        ))}
      </div>
      <div className="relative hidden lg:block">
        <div ref={mediaRef} className="top-28">
          <DeviceFrame priority step={steps[activeIndex]} />
        </div>
      </div>
    </div>
  );
}
