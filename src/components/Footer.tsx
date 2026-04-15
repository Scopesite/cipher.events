import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/metadata';
import { Patchwork } from './Patchwork';

export function Footer() {
  return (
    <footer className="relative bg-cipher-surface border-t border-white/5 overflow-hidden">
      <Patchwork className="bottom-4 right-4 opacity-80" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <Link href="/" aria-label="Cipher Events — home">
            <Image
              src="/images/logo/cipher_events-primary.svg"
              alt="Cipher Events"
              width={180}
              height={48}
              className="h-10 w-auto"
            />
          </Link>
          <p className="mt-4 text-sm text-cipher-grey max-w-xs">
            The best kept secret in the South West. Underground events,
            safe spaces, good people.
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] text-cipher-pink font-heading">
            Where we run
          </h3>
          <ul className="mt-4 space-y-1 text-sm text-cipher-grey">
            {siteConfig.areaServed.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] text-cipher-pink font-heading">
            Follow
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={siteConfig.instagram}
                className="text-white hover:text-cipher-pink transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={siteConfig.tiktok}
                className="text-white hover:text-cipher-pink transition-colors"
              >
                TikTok
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-white hover:text-cipher-pink transition-colors"
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 text-center text-xs text-cipher-grey">
        &copy; 2026 Cipher Events. All rights reserved.
      </div>
    </footer>
  );
}
