'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type Props = {
  images: GalleryImage[];
};

export function GalleryGrid({ images }: Props) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null);
      if (e.key === 'ArrowRight')
        setActive((a) => (a === null ? null : (a + 1) % images.length));
      if (e.key === 'ArrowLeft')
        setActive((a) =>
          a === null ? null : (a - 1 + images.length) % images.length
        );
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, images.length]);

  if (images.length === 0) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-lg bg-cipher-surface border border-white/5 relative overflow-hidden flex items-center justify-center"
          >
            <Image
              src="/images/logo/cipher_events-primary.svg"
              alt=""
              width={120}
              height={120}
              className="opacity-10"
              aria-hidden
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="masonry">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActive(i)}
            className="block w-full relative rounded-lg overflow-hidden border border-white/5 hover:border-cipher-pink/40 transition-colors"
            aria-label={`Open ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="w-full h-auto object-cover"
            />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image"
          className="fixed inset-0 z-[100] bg-cipher-granite/95 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute top-6 right-6 text-white hover:text-cipher-pink"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div
            className="relative max-w-5xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[active].src}
              alt={images[active].alt}
              width={images[active].width}
              height={images[active].height}
              className="max-h-[85vh] w-auto h-auto object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
