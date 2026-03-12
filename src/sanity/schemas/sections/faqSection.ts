import { defineType } from "sanity";

export const faqSection = defineType({
  name: "faqSection",
  title: "FAQ Section",
  type: "object",
  fields: [
    { name: "heading", type: "string", title: "Heading", initialValue: "Frequently Asked Questions" },
    {
      name: "faqs",
      type: "array",
      title: "FAQs",
      of: [
        {
          type: "object",
          fields: [
            { name: "question", type: "string", title: "Question" },
            { name: "answer", type: "text", title: "Answer" },
          ],
        },
      ],
    },
  ],
});
