import { defineType } from "sanity";

export const hero = defineType({
  name: "hero",
  title: "Hero Section",
  type: "object",
  fields: [
    { name: "heading", type: "string", title: "Heading" },
    { name: "subheading", type: "text", title: "Subheading", rows: 2 },
    { name: "ctaText", type: "string", title: "CTA Button Text" },
    { name: "ctaLink", type: "string", title: "CTA Link" },
    { name: "secondaryCtaText", type: "string", title: "Secondary CTA Text" },
    { name: "secondaryCtaLink", type: "string", title: "Secondary CTA Link" },
    { name: "image", type: "image", title: "Hero Image", options: { hotspot: true } },
    { name: "videoUrl", type: "url", title: "Video URL (optional)" },
  ],
});
