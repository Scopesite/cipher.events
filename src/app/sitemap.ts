import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/events', '/about', '/gallery', '/contact'];
  const now = new Date();

  return routes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: path === '' || path === '/events' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}
