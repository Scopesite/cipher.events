'use client';

import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState<string>('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error('Subscription failed');

      setStatus('success');
      setMessage("You're on the list. See you soon.");
      setEmail('');
    } catch {
      setStatus('error');
      setMessage(
        "Something went wrong. Try again, or email hello@cipher.events."
      );
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
      noValidate
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        autoComplete="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === 'loading' || status === 'success'}
        className="flex-1 px-5 py-3 rounded-full bg-cipher-surface border border-white/10 text-white placeholder:text-cipher-grey focus:border-cipher-pink outline-none transition-colors"
      />
      <button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className={`min-w-[180px] px-6 py-3 rounded-full font-heading font-bold uppercase tracking-wider text-sm text-center whitespace-nowrap transition-colors ${
          status === 'success'
            ? 'bg-cipher-orange text-white'
            : 'bg-cipher-pink text-cipher-granite hover:shadow-pink-glow-lg'
        } disabled:cursor-default`}
      >
        {status === 'loading'
          ? 'Joining…'
          : status === 'success'
            ? 'On the list'
            : 'Join the List'}
      </button>
      {message && (
        <p
          role="status"
          aria-live="polite"
          className={`sm:w-full text-sm mt-2 ${
            status === 'error' ? 'text-cipher-orange' : 'text-cipher-pink'
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
