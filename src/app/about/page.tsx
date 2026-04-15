import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Patchwork } from '@/components/Patchwork';
import { buildMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'About',
  description:
    'Cipher Events is a women-centred, LGBTQ+ friendly events collective running party nights and bar takeovers across Somerset, Bristol and Bath.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <section className="relative grain overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,80,192,0.12),_transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 py-24 sm:py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-cipher-pink font-heading">
            The story so far
          </p>
          <h1 className="mt-6 font-heading text-5xl sm:text-7xl font-black text-white leading-[0.95]">
            A safe night out,
            <br />
            run properly.
          </h1>
          <p className="mt-8 max-w-2xl text-lg sm:text-xl text-cipher-grey leading-relaxed">
            Cipher Events is new. That&rsquo;s the point. We&rsquo;re
            building the kind of nights we&rsquo;ve been looking for — and
            if you&rsquo;re reading this, chances are you&rsquo;ve been
            looking for them too.
          </p>
        </div>
      </section>

      <ScrollReveal as="section" className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 grid gap-14 lg:grid-cols-[2fr_1fr] lg:items-start">
          <div className="space-y-8 text-lg leading-relaxed font-body text-cipher-grey">
            <div>
              <h2 className="font-heading text-3xl font-bold text-white mb-4">
                Our mission
              </h2>
              <p>
                Cipher Events exists to run events where women can go out
                without having to keep one eye over their shoulder, and
                where the LGBTQ+ community doesn&rsquo;t have to check the
                vibe before they walk in. That&rsquo;s the non-negotiable
                at the centre of everything we do.
              </p>
              <p className="mt-4">
                Rebecca started Cipher after too many nights out that
                didn&rsquo;t feel right — rooms that could have been
                brilliant, if only the people running them had cared a bit
                more. So she&rsquo;s running her own, and caring a lot.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-3xl font-bold text-white mb-4">
                What we do
              </h2>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-cipher-pink" aria-hidden>
                    &#9632;
                  </span>
                  <span>
                    <strong className="text-white">Party nights</strong> —
                    curated club events with the right music, the right
                    room, and the right people.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cipher-pink" aria-hidden>
                    &#9632;
                  </span>
                  <span>
                    <strong className="text-white">Bar takeovers</strong>{' '}
                    — we&rsquo;ll come into your existing venue and run
                    the night for you.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cipher-pink" aria-hidden>
                    &#9632;
                  </span>
                  <span>
                    <strong className="text-white">
                      Pop-up bar setups
                    </strong>{' '}
                    — no bar? No problem. We can bring one with us.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cipher-pink" aria-hidden>
                    &#9632;
                  </span>
                  <span>
                    <strong className="text-white">Private &amp; office events</strong>{' '}
                    — birthdays, work parties, anything that deserves a
                    proper night.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-3xl font-bold text-white mb-4">
                The safe space principle
              </h2>
              <p>
                Safety isn&rsquo;t a marketing line. It&rsquo;s staff who
                know what to watch for, door policies that mean something,
                clear ways to ask for help, and a refusal to tolerate the
                sort of behaviour that ruins a night for everyone else.
                If you&rsquo;ve ever felt like you had to settle for less,
                we&rsquo;re building this for you.
              </p>
            </div>
          </div>

          <aside className="relative rounded-2xl border border-white/5 bg-cipher-surface p-8 overflow-hidden">
            <Patchwork className="bottom-4 right-4" />
            <h3 className="text-xs uppercase tracking-[0.2em] text-cipher-pink font-heading">
              Where we run
            </h3>
            <ul className="mt-4 space-y-3 text-white font-heading text-xl">
              {siteConfig.areaServed.map((a) => (
                <li key={a} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-cipher-pink rounded-full" />
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-cipher-grey">
              And the surrounding South West. If you&rsquo;re close and
              you&rsquo;ve got a venue or an idea, get in touch.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-cipher-pink text-cipher-granite px-5 py-2.5 rounded-full text-sm font-heading font-bold uppercase tracking-wider hover:shadow-pink-glow-lg transition-shadow"
            >
              Want us at your venue?
            </Link>
          </aside>
        </div>
      </ScrollReveal>

      <ScrollReveal
        as="section"
        className="relative py-20 bg-cipher-surface/40 border-y border-white/5"
      >
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <Image
            src="/images/logo/cipher_events-primary.svg"
            alt="Cipher Events"
            width={220}
            height={60}
            className="h-14 w-auto mx-auto opacity-90"
          />
          <p className="mt-8 font-heading text-2xl sm:text-3xl text-white">
            &ldquo;The best kept secret you don&rsquo;t want to miss.&rdquo;
          </p>
        </div>
      </ScrollReveal>
    </>
  );
}
