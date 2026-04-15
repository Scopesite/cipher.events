import { EventCard } from '@/components/EventCard';
import { NewsletterSignup } from '@/components/NewsletterSignup';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Patchwork } from '@/components/Patchwork';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Events',
  description:
    'Upcoming Cipher Events nights across Somerset, Bristol and Bath. Party nights, club events, and bar takeovers.',
  path: '/events',
});

// Future events go here. Example shape kept for reference.
const upcomingEvents: Array<React.ComponentProps<typeof EventCard>> = [];

export default function EventsPage() {
  return (
    <>
      <section className="relative grain overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,80,192,0.12),_transparent_60%)]" />
        <Patchwork className="top-16 right-8 opacity-60 hidden sm:grid" />

        <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 py-24 sm:py-32 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-cipher-pink font-heading">
            Upcoming events
          </p>
          <h1 className="mt-6 font-heading text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.95]">
            Something&rsquo;s brewing.
          </h1>
          <p className="mt-8 mx-auto max-w-2xl text-lg text-cipher-grey leading-relaxed">
            Our first night is locked in behind the scenes. Get on the list
            and you&rsquo;ll be first to know the date, the venue, and how
            to grab a ticket before it sells out.
          </p>

          <div className="mt-10 flex justify-center">
            <NewsletterSignup />
          </div>
        </div>
      </section>

      {upcomingEvents.length > 0 && (
        <ScrollReveal as="section" className="py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-10">
              What&rsquo;s on
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((e) => (
                <EventCard key={e.name} {...e} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      )}
    </>
  );
}
