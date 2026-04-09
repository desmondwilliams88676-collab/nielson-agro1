import { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/utils';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    { url: siteUrl, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${siteUrl}/npk-fertilizer-supplier`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/urea-fertilizer-supplier`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/dap-fertilizer-supplier`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/bulk-fertilizer-export`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/fertilizer-supplier-africa`, priority: 0.85, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/blog`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${siteUrl}/blog/npk-fertilizer-complete-guide`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/blog/urea-vs-ammonium-nitrate`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/blog/fertilizer-import-africa-guide`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/blog/bulk-fertilizer-incoterms-explained`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/blog/dap-fertilizer-crop-applications`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/blog/fertilizer-market-prices-2024`, priority: 0.7, changeFrequency: 'monthly' as const },
  ];

  return routes.map((route) => ({
    url: route.url,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
