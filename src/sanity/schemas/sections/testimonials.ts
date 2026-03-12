import { defineType } from "sanity";

export const testimonials = defineType({
  name: "testimonials",
  title: "Testimonials",
  type: "object",
  fields: [
    { name: "heading", type: "string", title: "Section Heading" },
    {
      name: "items",
      type: "array",
      title: "Testimonials",
      of: [
        {
          type: "object",
          fields: [
            { name: "quote", type: "text", title: "Quote" },
            { name: "name", type: "string", title: "Name" },
            { name: "role", type: "string", title: "Role" },
            { name: "company", type: "string", title: "Company" },
            { name: "avatar", type: "image", title: "Avatar" },
          ],
        },
      ],
    },
  ],
});
