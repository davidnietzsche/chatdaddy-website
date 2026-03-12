import { groq } from "next-sanity";

// ─── Page queries ───
export const homePageQuery = groq`
  *[_type == "page" && slug.current == "home"][0] {
    title,
    seo,
    sections[] {
      ...,
      _type == "hero" => { ... },
      _type == "featureGrid" => { features[]-> },
      _type == "testimonials" => { items[] },
      _type == "faqSection" => { faqs[] },
      _type == "ctaSection" => { ... }
    }
  }
`;

export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    title,
    slug,
    seo,
    sections[] { ... }
  }
`;

// ─── Blog queries ───
export const allBlogPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    title,
    slug,
    excerpt,
    publishedAt,
    author-> { name, image },
    coverImage,
    categories[]-> { title, slug },
    seo
  }
`;

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    title,
    slug,
    body,
    excerpt,
    publishedAt,
    updatedAt,
    author-> { name, image, bio },
    coverImage,
    categories[]-> { title, slug },
    seo,
    "relatedPosts": *[_type == "blogPost" && slug.current != $slug && count(categories[@._ref in ^.^.categories[]._ref]) > 0][0..2] {
      title, slug, excerpt, coverImage, publishedAt
    }
  }
`;

// ─── Integration / Application queries ───
export const allIntegrationsQuery = groq`
  *[_type == "integration"] | order(title asc) {
    title,
    slug,
    shortDescription,
    logo,
    category
  }
`;

export const integrationBySlugQuery = groq`
  *[_type == "integration" && slug.current == $slug][0] {
    title,
    slug,
    shortDescription,
    longDescription,
    logo,
    category,
    features,
    setupSteps,
    seo,
    "relatedIntegrations": *[_type == "integration" && slug.current != $slug && category == ^.category][0..3] {
      title, slug, logo, shortDescription
    }
  }
`;

// ─── Feature queries ───
export const allFeaturesQuery = groq`
  *[_type == "feature"] | order(order asc) {
    title,
    slug,
    shortDescription,
    icon,
    category
  }
`;

export const featureBySlugQuery = groq`
  *[_type == "feature" && slug.current == $slug][0] {
    title,
    slug,
    shortDescription,
    longDescription,
    icon,
    benefits,
    seo,
    faqs
  }
`;

// ─── FAQ query (for AEO) ───
export const globalFaqsQuery = groq`
  *[_type == "faq"] | order(category asc, order asc) {
    question,
    answer,
    category
  }
`;

// ─── Sitemap queries ───
export const sitemapQuery = groq`{
  "pages": *[_type == "page" && defined(slug.current)] { "slug": slug.current, _updatedAt },
  "posts": *[_type == "blogPost" && defined(slug.current)] { "slug": slug.current, _updatedAt, publishedAt },
  "integrations": *[_type == "integration" && defined(slug.current)] { "slug": slug.current, _updatedAt },
  "features": *[_type == "feature" && defined(slug.current)] { "slug": slug.current, _updatedAt }
}`;
