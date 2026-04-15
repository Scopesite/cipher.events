import Image from 'next/image';
import Link from 'next/link';
import { NewsletterSignup } from '@/components/NewsletterSignup';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Patchwork } from '@/components/Patchwork';
import { GalleryGrid } from '@/components/GalleryGrid';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Cipher Events — The Best Kept Secret in the South West',
  description:
    'Underground party nights, club events, and bar takeovers across Somerset, Bristol and Bath. Safe space focused. Women-centred. LGBTQ+ friendly.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        aria-label="Introduction"
        className="relative grain overflow-hidden min-h-[92vh] flex items-center"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,80,192,0.15),_transparent_60%)]" />
        <Patchwork className="top-24 right-8 opacity-60 hidden sm:grid" />
        <Patchwork className="bottom-12 left-6 opacity-40 hidden sm:grid" />

        <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 py-24 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-cipher-pink font-heading animate-fade-up">
            Somerset &middot; Bristol &middot; Bath
          </p>
          <h1 className="mt-6 font-heading text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.95] text-white animate-fade-up [animation-delay:80ms]">
            The Best Kept{' '}
            <span className="text-cipher-pink">Secret</span>
            <br />
            in the South West
          </h1>
          <p className="mt-8 mx-auto max-w-2xl text-lg sm:text-xl text-cipher-grey leading-relaxed animate-fade-up [animation-delay:160ms]">
            Underground party nights, bar takeovers, and club events built
            as a safe space — women-centred, LGBTQ+ friendly, and made for
            people who just want to be themselves.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up [animation-delay:240ms]">
            <Link
              href="#upcoming"
              className="px-7 py-3 rounded-full bg-cipher-pink text-cipher-granite font-heading font-bold uppercase tracking-wider text-sm hover:shadow-pink-glow-lg transition-shadow"
            >
              See What&rsquo;s Coming
            </Link>
            <Link
              href="#newsletter"
              className="px-7 py-3 rounded-full border border-white/20 text-white font-heading font-bold uppercase tracking-wider text-sm hover:border-cipher-pink hover:text-cipher-pink transition-colors"
            >
              Join the List
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <ScrollReveal as="section" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cipher-pink font-heading">
              Who we are
            </p>
            <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-bold text-white">
              Nights run by people who actually give a damn.
            </h2>
            <div className="mt-6 space-y-5 text-base sm:text-lg text-cipher-grey leading-relaxed font-body">
              <p>
                Cipher Events is Rebecca&rsquo;s answer to a question a lot
                of us have been asking: where do you go for a night out that
                feels genuinely safe, welcoming, and a little bit magic?
              </p>
              <p>
                We run party nights, club events, office parties, and bar
                experiences across Somerset, Bristol, and Bath — sometimes
                bringing our own bar setup into a venue, sometimes taking
                over a room that&rsquo;s already there.
              </p>
              <p className="text-white">
                The rule is simple: everyone is welcome here, and everyone
                watches out for each other. Women-centred. LGBTQ+ friendly.
                No exceptions.
              </p>
            </div>
          </div>

          <div className="relative aspect-square max-w-md mx-auto lg:ml-auto">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cipher-pink/20 via-cipher-surface to-cipher-granite border border-white/5 grain overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/logo/cipher_events-primary.svg"
                  alt="Cipher Events skull mark"
                  width={320}
                  height={320}
                  className="opacity-90"
                />
              </div>
              <Patchwork className="bottom-5 right-5" />
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* UPCOMING */}
      <section
        id="upcoming"
        className="relative py-24 sm:py-32 bg-cipher-surface/40 border-y border-white/5"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.3em] text-cipher-pink font-heading">
              What&rsquo;s coming
            </p>
            <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-bold text-white max-w-2xl">
              Our first night is being planned right now.
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-cipher-grey leading-relaxed">
              This is the part where we&rsquo;d normally list a row of
              events. But Cipher is brand new — so instead, we&rsquo;re
              cooking something up. Get on the list so you don&rsquo;t miss
              the announcement.
            </p>
          </ScrollReveal>

          {/* Event grid ready for future listings */}
          <ScrollReveal delay={0.1}>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="relative aspect-[4/5] rounded-xl border border-dashed border-white/10 bg-cipher-granite/60 flex items-center justify-center overflow-hidden"
                >
                  <Image
                    src="/images/logo/cipher_events-primary.svg"
                    alt=""
                    width={120}
                    height={120}
                    className="opacity-10"
                    aria-hidden
                  />
                  <Patchwork className="bottom-3 right-3 opacity-60" />
                  <span className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.2em] text-cipher-grey font-heading">
                    Coming Soon
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* GALLERY TEASER */}
      <ScrollReveal as="section" className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-cipher-pink font-heading">
            Gallery
          </p>
          <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-bold text-white max-w-2xl">
            Empty — for now.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-cipher-grey leading-relaxed">
            The gallery is empty because we haven&rsquo;t started yet. That
            changes soon. In the meantime, imagine the kind of night
            you&rsquo;d want a photograph from.
          </p>

          <div className="mt-12">
            <GalleryGrid images={[]} />
          </div>

          <div className="mt-10">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-cipher-pink font-heading uppercase tracking-wider text-sm hover:underline"
            >
              Go to gallery &rarr;
            </Link>
          </div>
        </div>
      </ScrollReveal>

      {/* NEWSLETTER */}
      <ScrollReveal
        as="section"
        className="relative py-24 sm:py-32 bg-cipher-surface/60 border-t border-white/5 overflow-hidden"
      >
        <div
          id="newsletter"
          className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center"
        >
          <Patchwork className="top-6 right-6 opacity-50 hidden sm:grid" />
          <Patchwork className="bottom-6 left-6 opacity-50 hidden sm:grid" />

          <p className="text-xs uppercase tracking-[0.3em] text-cipher-pink font-heading">
            Stay in the loop
          </p>
          <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-bold text-white">
            Get on the list.
          </h2>
          <p className="mt-6 text-lg text-cipher-grey leading-relaxed">
            First to know about events. First to get access. No spam, no
            nonsense — just the good stuff.
          </p>

          <div className="mt-10 flex justify-center">
            <NewsletterSignup />
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
