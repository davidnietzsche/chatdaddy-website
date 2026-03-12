import { defineType } from "sanity";

export const richTextSection = defineType({
  name: "richTextSection",
  title: "Rich Text Section",
  type: "object",
  fields: [
    { name: "heading", type: "string", title: "Section Heading" },
    { name: "content", type: "array", title: "Content", of: [{ type: "block" }, { type: "image", options: { hotspot: true } }] },
  ],
});
