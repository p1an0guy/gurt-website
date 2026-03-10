import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { footerLinks, siteConfig } from '@/lib/content';

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-10">
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/6">
              <Image
                src="/images/logo.png"
                alt="GURT logo"
                width={34}
                height={34}
                className="h-auto w-auto"
              />
            </div>
            <div>
              <p className="text-lg font-semibold text-white">{siteConfig.name}</p>
              <p className="text-sm text-slate-400">
                Judge-facing marketing site for launch-day waitlist conversion.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm text-slate-400">
          {footerLinks.map((link) =>
            link.href.startsWith('/') ? (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </a>
            ),
          )}
        </div>
      </Container>
    </footer>
  );
}
