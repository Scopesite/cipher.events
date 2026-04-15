import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Cipher Events',
  description:
    'Cipher Events is an underground events entertainment collective running party nights, club events, office parties, and bar takeovers across Somerset, Bristol, and Bath. Safe space focused, women-centred, LGBTQ+ friendly.',
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    'https://cipher.events',
  ogImage: '/images/logo/cipher_events-primary.png',
  instagram: '#',
  tiktok: '#',
  email: 'hello@cipher.events',
  areaServed: ['Somerset', 'Bristol', 'Bath'],
};

export function buildMetadata({
  title,
  description,
  path = '/',
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const fullTitle =
    title === siteConfig.name ? title : `${title} — ${siteConfig.name}`;
  const desc = description ?? siteConfig.description;
  const url = `${siteConfig.url}${path}`;

  return {
    title: fullTitle,
    description: desc,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
      locale: 'en_GB',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
      images: [siteConfig.ogImage],
    },
    robots: { index: true, follow: true },
    icons: {
      icon: '/images/logo/cipher_events-primary.svg',
      apple: '/images/logo/cipher_events-primary.png',
    },
  };
}
