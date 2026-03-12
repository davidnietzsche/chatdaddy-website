import { page } from "./documents/page";
import { blogPost } from "./documents/blogPost";
import { integration } from "./documents/integration";
import { feature } from "./documents/feature";
import { faq } from "./documents/faq";
import { author } from "./documents/author";
import { category } from "./documents/category";
import { siteSettings } from "./documents/siteSettings";

// Section / block types
import { hero } from "./sections/hero";
import { featureGrid } from "./sections/featureGrid";
import { testimonials } from "./sections/testimonials";
import { faqSection } from "./sections/faqSection";
import { ctaSection } from "./sections/ctaSection";
import { richTextSection } from "./sections/richTextSection";

// Objects
import { seo } from "./objects/seo";

export const schemaTypes = [
  // Documents
  page,
  blogPost,
  integration,
  feature,
  faq,
  author,
  category,
  siteSettings,
  // Sections
  hero,
  featureGrid,
  testimonials,
  faqSection,
  ctaSection,
  richTextSection,
  // Objects
  seo,
];
