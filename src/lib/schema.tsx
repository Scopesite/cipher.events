import { siteConfig } from './metadata';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.ogImage}`,
    description: siteConfig.description,
    email: siteConfig.email,
    areaServed: siteConfig.areaServed.map((a) => ({
      '@type': 'City',
      name: a,
    })),
    sameAs: [] as string[],
  };
}

export type EventSchemaInput = {
  name: string;
  startDate: string;
  endDate?: string;
  venueName: string;
  venueAddress: string;
  city: string;
  description: string;
  image?: string;
  url?: string;
  price?: string;
  currency?: string;
};

// Usage example (leave commented — pass real data when an event is added):
//
// eventSchema({
//   name: 'Cipher Launch Night',
//   startDate: '2026-06-20T21:00:00+01:00',
//   venueName: 'TBA',
//   venueAddress: 'TBA',
//   city: 'Bristol',
//   description: 'Our first night. Get on the list.',
// })
export function eventSchema(e: EventSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: e.name,
    startDate: e.startDate,
    endDate: e.endDate,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: e.venueName,
      address: {
        '@type': 'PostalAddress',
        streetAddress: e.venueAddress,
        addressLocality: e.city,
        addressCountry: 'GB',
      },
    },
    image: e.image ? [e.image] : undefined,
    description: e.description,
    organizer: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    offers: e.price
      ? {
          '@type': 'Offer',
          price: e.price,
          priceCurrency: e.currency ?? 'GBP',
          url: e.url,
          availability: 'https://schema.org/InStock',
        }
      : undefined,
  };
}

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
