import type { MetadataRoute } from 'next';
import { knowledgeArticles } from './knowledge/data';

const siteUrl = 'https://rongbao.yick.cc';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/knowledge`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteUrl}/privacy`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${siteUrl}/terms`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${siteUrl}/account-deletion`, changeFrequency: 'yearly', priority: 0.1 },
  ];

  const articlePages: MetadataRoute.Sitemap = knowledgeArticles.map((article) => ({
    url: `${siteUrl}/knowledge/${article.slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...articlePages];
}
