'use client';

import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

const enquiryTypes = [
  'Book us for a private event',
  'Venue partnership',
  'General enquiry',
  'Press',
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? 'Failed to send');
      }

      setStatus('success');
      setMessage(
        "Got it. We'll be in touch. If it's urgent, email hello@cipher.events directly."
      );
      form.reset();
    } catch (err) {
      setStatus('error');
      setMessage(
        err instanceof Error ? err.message : 'Something went wrong.'
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>

      <div>
        <label
          htmlFor="enquiryType"
          className="block text-xs uppercase tracking-[0.2em] text-cipher-pink font-heading mb-2"
        >
          What are you looking for?
        </label>
        <select
          id="enquiryType"
          name="enquiryType"
          required
          defaultValue=""
          className="w-full px-5 py-3 rounded-md bg-cipher-surface border border-white/10 text-white focus:border-cipher-pink outline-none transition-colors"
        >
          <option value="" disabled>
            Choose one…
          </option>
          {enquiryTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs uppercase tracking-[0.2em] text-cipher-pink font-heading mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full px-5 py-3 rounded-md bg-cipher-surface border border-white/10 text-white placeholder:text-cipher-grey focus:border-cipher-pink outline-none transition-colors resize-y"
          placeholder="Tell us about your event, venue, or idea…"
        />
      </div>

      {/* honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-8 py-3 rounded-full bg-cipher-pink text-cipher-granite font-heading font-bold uppercase tracking-wider text-sm hover:shadow-pink-glow-lg transition-shadow disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </button>

      {message && (
        <p
          role="status"
          aria-live="polite"
          className={`text-sm ${
            status === 'error' ? 'text-cipher-orange' : 'text-cipher-pink'
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs uppercase tracking-[0.2em] text-cipher-pink font-heading mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full px-5 py-3 rounded-md bg-cipher-surface border border-white/10 text-white placeholder:text-cipher-grey focus:border-cipher-pink outline-none transition-colors"
      />
    </div>
  );
}
