import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}/privacy`,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}/terms`,
      lastModified: new Date(),
    },
  ];
}
