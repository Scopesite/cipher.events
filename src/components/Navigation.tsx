'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/events', label: 'Events' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cipher-surface/90 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-center relative"
      >
        <ul className="hidden md:flex items-center justify-center gap-10">
          {links.map((l) => {
            const active =
              l.href === '/'
                ? pathname === '/'
                : pathname?.startsWith(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`text-sm tracking-wide uppercase font-heading font-medium transition-colors ${
                    active
                      ? 'text-cipher-pink'
                      : 'text-white hover:text-cipher-pink'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="md:hidden absolute right-5 sm:right-8 p-2 text-white"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-cipher-surface border-t border-white/5">
          <ul className="px-6 py-6 flex flex-col items-center gap-5">
            {links.map((l) => {
              const active =
                l.href === '/'
                  ? pathname === '/'
                  : pathname?.startsWith(l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`block text-base font-heading font-medium uppercase tracking-wide text-center ${
                      active ? 'text-cipher-pink' : 'text-white'
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
