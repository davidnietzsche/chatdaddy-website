import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { sitemapQuery } from "@/sanity/lib/queries";

const SITE_URL = "https://chatdaddy.tech";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await client.fetch(sitemapQuery);

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/our-story`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/pricing`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/integration`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/features`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/service-package`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // Dynamic pages from CMS
  const blogPosts: MetadataRoute.Sitemap = (data.posts || []).map(
    (post: any) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post._updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  const integrations: MetadataRoute.Sitemap = (data.integrations || []).map(
    (item: any) => ({
      url: `${SITE_URL}/application/${item.slug}`,
      lastModified: new Date(item._updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })
  );

  const features: MetadataRoute.Sitemap = (data.features || []).map(
    (item: any) => ({
      url: `${SITE_URL}/features/${item.slug}`,
      lastModified: new Date(item._updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  return [...staticPages, ...blogPosts, ...integrations, ...features];
}
