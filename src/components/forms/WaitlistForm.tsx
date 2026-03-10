'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

const placeholderEndpoints = [
  'https://formspree.io/f/placeholder',
  'https://formspree.io/f/yourformid',
];

export function WaitlistForm() {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? '';
  const [status, setStatus] = useState<'idle' | 'error' | 'success' | 'submitting'>('idle');
  const [message, setMessage] = useState(
    'Launch updates only. No backend account is required for the waitlist.',
  );

  return (
    <Card className="border-white/8 bg-white/5 p-6">
      <form
        id="waitlist-form"
        className="space-y-5"
        onSubmit={async (event) => {
          event.preventDefault();
          setStatus('submitting');

          const formData = new FormData(event.currentTarget);
          const email = String(formData.get('email') ?? '').trim();
          const schoolOrMajor = String(formData.get('schoolOrMajor') ?? '').trim();
          const website = String(formData.get('website') ?? '').trim();

          if (website.length > 0) {
            setStatus('success');
            setMessage('Thanks. Your request has been recorded.');
            event.currentTarget.reset();
            return;
          }

          if (!endpoint) {
            setStatus('error');
            setMessage(
              'Waitlist endpoint not configured yet. Add NEXT_PUBLIC_FORMSPREE_ENDPOINT and retry.',
            );
            return;
          }

          if (placeholderEndpoints.includes(endpoint)) {
            setStatus('success');
            setMessage(
              'Placeholder mode active. Swap in the real Formspree endpoint before launch.',
            );
            event.currentTarget.reset();
            return;
          }

          try {
            const response = await fetch(endpoint, {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email,
                schoolOrMajor,
              }),
            });

            if (!response.ok) {
              throw new Error('Request failed');
            }

            setStatus('success');
            setMessage('Thanks. You are on the waitlist for launch updates.');
            event.currentTarget.reset();
          } catch {
            setStatus('error');
            setMessage('Submission failed. Please retry in a moment.');
          }
        }}
      >
        <div className="space-y-2">
          <h3 className="text-3xl font-semibold text-white">Request launch access</h3>
          <p className="text-base leading-7 text-slate-300">
            Join the free-trial waitlist for launch-day updates, judge follow-up, and early access.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-200">Email</span>
            <input
              type="email"
              name="email"
              required
              placeholder="judge@example.com"
              className="w-full rounded-2xl border border-white/10 bg-black/18 px-4 py-3 text-white placeholder:text-slate-500 focus-visible:border-white/30 focus-visible:outline-none"
            />
          </label>
          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-200">School or major (optional)</span>
            <input
              type="text"
              name="schoolOrMajor"
              placeholder="Cal Poly / Computer Science"
              className="w-full rounded-2xl border border-white/10 bg-black/18 px-4 py-3 text-white placeholder:text-slate-500 focus-visible:border-white/30 focus-visible:outline-none"
            />
          </label>
        </div>

        <label className="hidden">
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Button type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Submitting...' : 'Join the waitlist'}
          </Button>
          <p
            className={`text-sm ${
              status === 'error'
                ? 'text-[#ffb0b0]'
                : status === 'success'
                  ? 'text-emerald-200'
                  : 'text-slate-400'
            }`}
          >
            {message}
          </p>
        </div>
      </form>
    </Card>
  );
}
