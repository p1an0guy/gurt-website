import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Footer } from '@/components/nav/Footer';
import { Navbar } from '@/components/nav/Navbar';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Terms',
  description: 'Terms for the GURT marketing site and waitlist.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-28 pb-20">
        <Container className="space-y-8">
          <div className="max-w-3xl space-y-5">
            <p className="text-sm tracking-[0.28em] text-[#f0b4b5] uppercase">Terms</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Terms for the marketing site and waitlist
            </h1>
            <p className="text-lg leading-8 text-slate-300">
              The GURT marketing site is an informational experience and waitlist capture surface
              for a product that is still progressing toward public launch.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            <Card className="border-white/8 bg-white/5 p-6">
              <h2 className="text-2xl font-semibold text-white">Informational use</h2>
              <p className="mt-3 leading-7 text-slate-300">
                Marketing content, screenshots, and demo materials are provided to explain the
                current product direction. They are not a promise of every future capability.
              </p>
            </Card>
            <Card className="border-white/8 bg-white/5 p-6">
              <h2 className="text-2xl font-semibold text-white">Launch access</h2>
              <p className="mt-3 leading-7 text-slate-300">
                Joining the waitlist does not guarantee immediate access, a specific launch date, or
                a particular feature set. It only records interest in the free-trial release.
              </p>
            </Card>
            <Card className="border-white/8 bg-white/5 p-6">
              <h2 className="text-2xl font-semibold text-white">Responsible use</h2>
              <p className="mt-3 leading-7 text-slate-300">
                Users are expected to follow course policies, institutional rules, and academic
                integrity requirements when evaluating or using GURT.
              </p>
            </Card>
          </div>
          <Card className="max-w-3xl border-white/8 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">Related information</h2>
            <p className="mt-3 leading-7 text-slate-300">
              Waitlist data handling is described on the{' '}
              <Link
                className="text-white underline decoration-white/30 underline-offset-4"
                href="/privacy"
              >
                privacy page
              </Link>
              . Any future product access terms can be expanded there or in a separate launch
              agreement once the free trial is live.
            </p>
          </Card>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
