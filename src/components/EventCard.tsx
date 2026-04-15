import Image from 'next/image';
import { Patchwork } from './Patchwork';

export type EventCardProps = {
  name: string;
  date: string; // human-readable, e.g. "Fri 20 Jun 2026, 9pm"
  venue: string;
  location: string;
  description: string;
  price?: string;
  ticketUrl?: string;
  image?: string;
  soldOut?: boolean;
};

export function EventCard({
  name,
  date,
  venue,
  location,
  description,
  price,
  ticketUrl,
  image,
  soldOut = false,
}: EventCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-xl bg-cipher-surface border border-white/5 hover:border-cipher-pink/40 transition-all duration-500 hover:shadow-pink-glow">
      <div className="relative aspect-[4/5] bg-cipher-granite overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={`${name} at ${venue}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <Image
              src="/images/logo/cipher_events-primary.svg"
              alt=""
              width={160}
              height={160}
              aria-hidden
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-cipher-granite via-cipher-granite/50 to-transparent" />
        <Patchwork className="bottom-3 right-3" />
        {soldOut && (
          <span className="absolute top-4 left-4 bg-cipher-orange text-white text-xs font-heading font-bold uppercase tracking-wider px-3 py-1 rounded">
            Sold Out
          </span>
        )}
      </div>

      <div className="p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-cipher-pink font-heading">
          {date}
        </p>
        <h3 className="mt-2 text-2xl font-heading font-bold text-white">
          {name}
        </h3>
        <p className="mt-1 text-sm text-cipher-grey">
          {venue} &middot; {location}
        </p>
        <p className="mt-4 text-sm text-white/80 leading-relaxed">
          {description}
        </p>

        <div className="mt-6 flex items-center justify-between gap-4">
          {price && (
            <span className="text-sm font-heading text-white">{price}</span>
          )}
          {!soldOut && ticketUrl ? (
            <a
              href={ticketUrl}
              className="inline-flex items-center gap-2 bg-cipher-pink text-cipher-granite px-5 py-2 rounded-full text-sm font-heading font-bold uppercase tracking-wider hover:shadow-pink-glow-lg transition-shadow"
            >
              Get Tickets
            </a>
          ) : soldOut ? (
            <span className="text-sm font-heading text-cipher-orange uppercase tracking-wider">
              Sold Out
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
