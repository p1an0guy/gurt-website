import Image from 'next/image';
import type { Metadata } from 'next';
import { Footer } from '@/components/nav/Footer';
import { Navbar } from '@/components/nav/Navbar';
import { WaitlistForm } from '@/components/forms/WaitlistForm';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { ScrollStory } from '@/components/story/ScrollStory';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import {
  faqs,
  featureCards,
  heroChips,
  problemPoints,
  siteConfig,
  storySteps,
  trustPoints,
} from '@/lib/content';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative overflow-hidden pt-28 pb-18 sm:pt-32 lg:pt-36">
          <div className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_top_left,rgba(196,15,17,0.26),transparent_38%),radial-gradient(circle_at_top_right,rgba(114,144,255,0.18),transparent_32%)]" />
          <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-8">
              <div className="space-y-5">
                <Badge>The AI-powered study assistant for the modern student</Badge>
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  GURT
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                  GURT (Generative Uni Revision Tool) pops up on Canvas course pages, ingests full
                  course context, and turns scattered materials into cited answers, flashcards,
                  practice exams, and calendar-ready review plans.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button scrollToId="waitlist" size="lg">
                  Join the waitlist
                </Button>
                <Button href="#story" variant="secondary" size="lg">
                  See GURT in action
                </Button>
              </div>
              <ul className="flex flex-wrap gap-3">
                {heroChips.map((chip) => (
                  <li key={chip}>
                    <Badge variant="muted">{chip}</Badge>
                  </li>
                ))}
              </ul>
              <a
                href="#story"
                className="inline-flex items-center gap-3 text-sm font-medium tracking-[0.24em] text-slate-300 uppercase transition hover:text-white focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:outline-none"
              >
                Scroll down
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg">
                  ↓
                </span>
              </a>
            </div>
            <Card className="relative overflow-hidden border-white/12 bg-white/6 p-4 shadow-2xl shadow-black/35 backdrop-blur">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-300">Canvas course companion</p>
                  <p className="text-xs tracking-[0.3em] text-slate-500 uppercase">
                    Real extension screenshot
                  </p>
                </div>
                <Badge variant="accent">Live product UI</Badge>
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-white/12 bg-[#0f131c]">
                <Image
                  src="/images/hero-gurt.png"
                  alt="GURT Chrome extension screenshot"
                  width={675}
                  height={1282}
                  priority
                  className="h-auto w-full"
                />
              </div>
            </Card>
          </Container>
        </section>

        <Section
          id="problem"
          eyebrow="Why this matters"
          title="Students lose time to friction before they even start studying."
          description="GURT reduces context switching, copy-paste busywork, and trust issues that come with uncited AI answers."
        >
          <div className="grid gap-5 md:grid-cols-3">
            {problemPoints.map((point) => (
              <Card key={point.title} className="h-full border-white/8 bg-white/5 p-6">
                <p className="text-sm tracking-[0.24em] text-[#f0b4b5] uppercase">{point.kicker}</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{point.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-300">{point.description}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="story"
          eyebrow="See it to believe it"
          title="GURT in action"
          description="From assignment to A+"
        >
          <ScrollStory steps={storySteps} />
        </Section>

        <Section
          id="features"
          eyebrow="Feature set"
          title="Finally, a centralized study hub"
          description="No more fractured systems. Everything you need in one place."
        >
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((feature) => (
              <Card key={feature.title} className="h-full border-white/8 bg-white/5 p-6">
                <Badge variant="accent">{feature.label}</Badge>
                <h3 className="mt-5 text-2xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-300">{feature.description}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="trust"
          eyebrow="Why you can trust it"
          title="Built around retrieval, citations, and verifiable course context."
          description="Unlike other LLM wrappers, GURT ingests course materials into a knowledge base, retrieves against the course context, and returns answers that point back to the source."
        >
          <div className="grid gap-5 lg:grid-cols-3">
            {trustPoints.map((point) => (
              <Card key={point.title} className="border-white/8 bg-[#101521] p-6">
                <h3 className="text-2xl font-semibold text-white">{point.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-300">{point.description}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="faq"
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Workflow credibility, trust, privacy, and launch readiness."
        >
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[1.75rem] border border-white/10 bg-white/4 p-6 transition open:border-white/20 open:bg-white/6"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold text-white">
                  {faq.question}
                </summary>
                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Section>

        <Section
          id="waitlist"
          eyebrow="Launch access"
          title="Join the waitlist for free-trial access at launch."
          description="Waitlist access is open to early student testers anyone who wants to see the first public release."
        >
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <Card className="border-white/8 bg-gradient-to-br from-[#c40f11]/18 to-[#4f68f9]/14 p-6">
              <h3 className="text-3xl font-semibold text-white">What happens next</h3>
              <ul className="mt-5 space-y-4 text-base leading-7 text-slate-200">
                <li>Waitlist members get first notice when the free trial opens.</li>
                <li>We&apos;ll also send occasional updates about GURT.</li>
              </ul>
            </Card>
            <WaitlistForm />
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
