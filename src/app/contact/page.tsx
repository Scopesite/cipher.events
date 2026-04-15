import { ContactForm } from '@/components/ContactForm';
import { Patchwork } from '@/components/Patchwork';
import { ScrollReveal } from '@/components/ScrollReveal';
import { buildMetadata, siteConfig } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Contact',
  description:
    'Get in touch with Cipher Events. Private events, venue partnerships, press, or general enquiries.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <section className="relative grain overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,80,192,0.12),_transparent_60%)]" />
        <Patchwork className="top-16 right-8 opacity-60 hidden sm:grid" />

        <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 py-24 sm:py-28">
          <p className="text-xs uppercase tracking-[0.3em] text-cipher-pink font-heading">
            Get in touch
          </p>
          <h1 className="mt-6 font-heading text-5xl sm:text-6xl font-black text-white leading-[0.95]">
            Say hello.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-cipher-grey leading-relaxed">
            Want us at your venue? Hosting a private event? Writing about
            the scene? Drop us a line — we read everything.
          </p>
        </div>
      </section>

      <ScrollReveal as="section" className="pb-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-2xl border border-white/5 bg-cipher-surface/60 p-8 sm:p-10">
            <ContactForm />
          </div>

          <aside className="space-y-8">
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-cipher-pink font-heading">
                Direct
              </h2>
              <p className="mt-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-white hover:text-cipher-pink transition-colors text-lg font-heading"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-cipher-pink font-heading">
                Social
              </h2>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href={siteConfig.instagram}
                    className="text-white hover:text-cipher-pink transition-colors"
                  >
                    Instagram &rarr;
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.tiktok}
                    className="text-white hover:text-cipher-pink transition-colors"
                  >
                    TikTok &rarr;
                  </a>
                </li>
              </ul>
            </div>

            <div className="relative rounded-xl border border-white/5 bg-cipher-surface p-6 overflow-hidden">
              <Patchwork className="bottom-3 right-3" />
              <h2 className="text-xs uppercase tracking-[0.2em] text-cipher-pink font-heading">
                Where we run
              </h2>
              <p className="mt-3 text-white text-lg font-heading">
                Somerset &middot; Bristol &middot; Bath
              </p>
              <p className="mt-2 text-sm text-cipher-grey">
                And the surrounding South West.
              </p>
            </div>
          </aside>
        </div>
      </ScrollReveal>
    </>
  );
}
