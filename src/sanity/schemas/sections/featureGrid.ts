import { defineType } from "sanity";

export const featureGrid = defineType({
  name: "featureGrid",
  title: "Feature Grid",
  type: "object",
  fields: [
    { name: "heading", type: "string", title: "Section Heading" },
    { name: "subheading", type: "text", title: "Section Subheading", rows: 2 },
    {
      name: "features",
      type: "array",
      title: "Features",
      of: [{ type: "reference", to: [{ type: "feature" }] }],
    },
    {
      name: "columns",
      type: "number",
      title: "Columns",
      options: { list: [2, 3, 4] },
      initialValue: 3,
    },
  ],
});
