import { GalleryGrid, type GalleryImage } from '@/components/GalleryGrid';
import { NewsletterSignup } from '@/components/NewsletterSignup';
import { Patchwork } from '@/components/Patchwork';
import { ScrollReveal } from '@/components/ScrollReveal';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Gallery',
  description:
    'Photos from Cipher Events nights across Somerset, Bristol and Bath. Coming soon.',
  path: '/gallery',
});

// Drop new images into /public/images/gallery and list them here.
const images: GalleryImage[] = [];

export default function GalleryPage() {
  return (
    <>
      <section className="relative grain overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,80,192,0.12),_transparent_60%)]" />
        <Patchwork className="top-16 left-8 opacity-60 hidden sm:grid" />

        <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 py-24 sm:py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-cipher-pink font-heading">
            The gallery
          </p>
          <h1 className="mt-6 font-heading text-5xl sm:text-7xl font-black text-white leading-[0.95]">
            Coming soon.
          </h1>
          <p className="mt-8 max-w-2xl text-lg sm:text-xl text-cipher-grey leading-relaxed">
            Our first events haven&rsquo;t happened yet, so there&rsquo;s
            nothing to show you — yet. When they do, this is where
            you&rsquo;ll find the night caught in pixels.
          </p>
        </div>
      </section>

      <ScrollReveal as="section" className="py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <GalleryGrid images={images} />
        </div>
      </ScrollReveal>

      <ScrollReveal
        as="section"
        className="py-20 bg-cipher-surface/40 border-t border-white/5"
      >
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Be in the first photo.
          </h2>
          <p className="mt-4 text-cipher-grey text-lg">
            Get on the list and you&rsquo;ll be the first to know about the
            night.
          </p>
          <div className="mt-8 flex justify-center">
            <NewsletterSignup />
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
