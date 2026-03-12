import { defineType } from "sanity";

export const ctaSection = defineType({
  name: "ctaSection",
  title: "CTA Section",
  type: "object",
  fields: [
    { name: "heading", type: "string", title: "Heading" },
    { name: "subheading", type: "text", title: "Subheading", rows: 2 },
    { name: "ctaText", type: "string", title: "Button Text" },
    { name: "ctaLink", type: "string", title: "Button Link" },
    { name: "variant", type: "string", title: "Style", options: { list: ["default", "dark", "gradient"] }, initialValue: "default" },
  ],
});
