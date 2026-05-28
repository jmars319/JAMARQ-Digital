import { MetadataRoute } from 'next'
import { notes, servicePages } from '@/lib/growthContent';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jamarq.digital';
  const coreLastModified = '2026-05-28';
  const serviceRoutes = servicePages.map((page) => ({
    url: `${baseUrl}/services/${page.slug}`,
    lastModified: coreLastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));
  const noteRoutes = [
    {
      url: `${baseUrl}/notes`,
      lastModified: coreLastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
    ...notes.map((note) => ({
      url: `${baseUrl}/notes/${note.slug}`,
      lastModified: note.date,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];

  return [
    {
      url: baseUrl,
      lastModified: coreLastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: coreLastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...serviceRoutes,
    ...noteRoutes,
    {
      url: `${baseUrl}/process`,
      lastModified: coreLastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mission`,
      lastModified: coreLastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: coreLastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: coreLastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: coreLastModified,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: '2026-05-10',
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: coreLastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/case-studies/trbg`,
      lastModified: coreLastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies/mmh`,
      lastModified: coreLastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies/mms`,
      lastModified: coreLastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies/mjr`,
      lastModified: coreLastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
