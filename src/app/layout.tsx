import type { Metadata, Viewport } from 'next';
import { Roboto, Zilla_Slab } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/lib/schema';
import { organizationSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/metadata';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-roboto',
  display: 'swap',
});

const zilla = Zilla_Slab({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-zilla',
  display: 'swap',
});

export const metadata: Metadata = buildMetadata({
  title: 'Cipher Events — The Best Kept Secret in the South West',
  description:
    'Underground party nights, club events, and bar takeovers across Somerset, Bristol and Bath. Safe space focused. Women-centred. LGBTQ+ friendly.',
  path: '/',
});

export const viewport: Viewport = {
  themeColor: '#1C1C1C',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${zilla.variable}`}>
      <body className="bg-cipher-granite text-white min-h-screen flex flex-col">
        <JsonLd data={organizationSchema()} />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
