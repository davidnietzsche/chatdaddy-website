import { defineType } from "sanity";

export const seo = defineType({
  name: "seo",
  title: "SEO & AEO Settings",
  type: "object",
  fields: [
    {
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      description: "Max 60 characters. Include primary keyword near the start.",
      validation: (Rule) => Rule.max(60).warning("Keep under 60 characters for full display in SERPs"),
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      description: "Max 160 characters. Write a compelling summary with keywords.",
      validation: (Rule) => Rule.max(160).warning("Keep under 160 characters"),
    },
    {
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      description: "1200x630px recommended. Used when shared on social media.",
    },
    {
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "url",
      description: "Only set if this content exists at another URL (to avoid duplicate content).",
    },
    {
      name: "noIndex",
      title: "No Index",
      type: "boolean",
      description: "Hide this page from search engines.",
      initialValue: false,
    },
    {
      name: "focusKeyword",
      title: "Focus Keyword",
      type: "string",
      description: "Primary keyword for this page. Used for internal tracking.",
    },
    {
      name: "aiSummary",
      title: "AI Summary (AEO)",
      type: "text",
      rows: 4,
      description:
        "A clear, factual 2-3 sentence summary optimized for AI answer engines (Google AI Overviews, ChatGPT, Perplexity). Write in third person, be specific, include key facts.",
    },
  ],
});
