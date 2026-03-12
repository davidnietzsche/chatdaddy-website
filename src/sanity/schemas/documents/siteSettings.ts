import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "siteName", title: "Site Name", type: "string", initialValue: "ChatDaddy" }),
    defineField({ name: "siteUrl", title: "Site URL", type: "url", initialValue: "https://chatdaddy.tech" }),
    defineField({
      name: "defaultSeo",
      title: "Default SEO",
      type: "seo",
      description: "Fallback SEO values used when pages don't define their own.",
    }),
    defineField({
      name: "organizationSchema",
      title: "Organization Info (for Schema.org)",
      type: "object",
      fields: [
        { name: "legalName", type: "string", title: "Legal Name" },
        { name: "foundingDate", type: "date", title: "Founded" },
        { name: "email", type: "string", title: "Contact Email" },
        { name: "phone", type: "string", title: "Phone" },
        { name: "logo", type: "image", title: "Logo" },
        {
          name: "socialLinks",
          type: "array",
          title: "Social Media Links",
          of: [{ type: "url" }],
        },
      ],
    }),
  ],
});
