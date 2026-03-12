import { defineType, defineField } from "sanity";

export const integration = defineType({
  name: "integration",
  title: "Integration",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
      description: "This maps to /application/{slug} to preserve old URLs.",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "CRM", value: "crm" },
          { title: "E-Commerce", value: "ecommerce" },
          { title: "Messaging", value: "messaging" },
          { title: "Productivity", value: "productivity" },
          { title: "Marketing", value: "marketing" },
          { title: "Education", value: "education" },
          { title: "Other", value: "other" },
        ],
      },
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "longDescription",
      title: "Full Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "features",
      title: "Key Features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "setupSteps",
      title: "Setup Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "step", type: "string", title: "Step" },
            { name: "description", type: "text", title: "Description" },
          ],
        },
      ],
    }),
    defineField({
      name: "seo",
      title: "SEO & AEO",
      type: "seo",
    }),
  ],
});
