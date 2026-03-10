import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Footer } from '@/components/nav/Footer';
import { Navbar } from '@/components/nav/Navbar';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'Privacy information for the GURT marketing site and waitlist.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-28 pb-20">
        <Container className="space-y-8">
          <div className="max-w-3xl space-y-5">
            <p className="text-sm tracking-[0.28em] text-[#f0b4b5] uppercase">Privacy</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Privacy for the waitlist and demo site
            </h1>
            <p className="text-lg leading-8 text-slate-300">
              This site is a lightweight marketing surface for GURT. Its primary data collection
              point is the waitlist form used to notify judges and students about launch access.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            <Card className="border-white/8 bg-white/5 p-6">
              <h2 className="text-2xl font-semibold text-white">What we collect</h2>
              <p className="mt-3 leading-7 text-slate-300">
                The waitlist form collects an email address and an optional school or major. A
                hidden honeypot field is used to reduce automated spam.
              </p>
            </Card>
            <Card className="border-white/8 bg-white/5 p-6">
              <h2 className="text-2xl font-semibold text-white">How it is used</h2>
              <p className="mt-3 leading-7 text-slate-300">
                The information is used to send launch updates, waitlist access information, and
                follow-up communication directly related to GURT availability.
              </p>
            </Card>
            <Card className="border-white/8 bg-white/5 p-6">
              <h2 className="text-2xl font-semibold text-white">Where it goes</h2>
              <p className="mt-3 leading-7 text-slate-300">
                Form submissions are processed through Formspree. The marketing site itself does not
                run a custom backend for waitlist storage.
              </p>
            </Card>
          </div>
          <Card className="max-w-3xl border-white/8 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">Questions or removal requests</h2>
            <p className="mt-3 leading-7 text-slate-300">
              If you want your waitlist submission removed or want clarification about how your
              contact information is used, reach out through the GURT team contact listed in the
              project materials before launch.
            </p>
            <p className="mt-5 text-sm text-slate-400">
              You can also review the companion{' '}
              <Link
                className="text-white underline decoration-white/30 underline-offset-4"
                href="/terms"
              >
                terms page
              </Link>{' '}
              for launch and usage conditions.
            </p>
          </Card>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
