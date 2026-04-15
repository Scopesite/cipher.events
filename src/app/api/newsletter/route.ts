import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: { email?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const email = (body.email ?? '').trim().slice(0, 200);
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: 'That email address looks wrong.' },
      { status: 400 }
    );
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_LIST_ID;

  if (!apiKey || !listId) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.info('[newsletter] (dev) would subscribe:', email);
      return NextResponse.json({ ok: true, dev: true });
    }
    return NextResponse.json(
      { error: 'Signup is not configured yet.' },
      { status: 503 }
    );
  }

  try {
    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        email,
        listIds: [Number(listId)],
        updateEnabled: true,
      }),
    });

    if (!res.ok && res.status !== 204 && res.status !== 400) {
      throw new Error(`Brevo responded ${res.status}`);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('[newsletter] subscribe failed', err);
    return NextResponse.json(
      { error: 'Could not subscribe right now. Try again shortly.' },
      { status: 500 }
    );
  }
}
