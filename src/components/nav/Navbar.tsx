import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/layout/Container';
import { navLinks } from '@/lib/content';

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-black/20 backdrop-blur-xl">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 text-white">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/6">
            <Image
              src="/images/logo.png"
              alt="GURT logo"
              width={34}
              height={34}
              priority
              className="h-auto w-auto"
            />
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight">GURT</p>
            <p className="text-xs tracking-[0.26em] text-slate-400 uppercase">Marketing site</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden sm:block">
          <Button scrollToId="waitlist" size="sm">
            Join the waitlist
          </Button>
        </div>
      </Container>
    </header>
  );
}
