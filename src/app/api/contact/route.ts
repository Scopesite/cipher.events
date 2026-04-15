import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

type Payload = {
  name?: string;
  email?: string;
  message?: string;
  enquiryType?: string;
  website?: string; // honeypot
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(s: string, max = 2000) {
  return s.replace(/[\u0000-\u001f\u007f]/g, '').slice(0, max).trim();
}

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  // Honeypot: silently accept spam submissions
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  const name = sanitize(data.name ?? '', 120);
  const email = sanitize(data.email ?? '', 200);
  const message = sanitize(data.message ?? '', 5000);
  const enquiryType = sanitize(data.enquiryType ?? '', 120);

  if (!name || !email || !message || !enquiryType) {
    return NextResponse.json(
      { error: 'Please fill in every field.' },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: 'That email address looks wrong.' },
      { status: 400 }
    );
  }

  const to = process.env.CONTACT_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;

  // If no backend configured, log in dev and accept.
  if (!to || !apiKey) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.info('[contact] (dev) would send:', {
        to: to ?? 'CONTACT_EMAIL not set',
        from: email,
        name,
        enquiryType,
        message,
      });
      return NextResponse.json({ ok: true, dev: true });
    }
    return NextResponse.json(
      { error: 'Contact form is not configured yet.' },
      { status: 503 }
    );
  }

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    const subject = `Cipher Events — ${enquiryType} from ${name}`;
    const html = `
      <h2>New Cipher Events enquiry</h2>
      <p><strong>Type:</strong> ${escapeHtml(enquiryType)}</p>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
    `;

    const { error } = await resend.emails.send({
      from: 'Cipher Events <noreply@cipher.events>',
      to,
      reply_to: email,
      subject,
      html,
    });

    if (error) throw new Error(error.message);

    return NextResponse.json({ ok: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('[contact] send failed', err);
    return NextResponse.json(
      { error: 'Could not send right now. Please email us directly.' },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
