import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { codeInput } from "@sanity/code-input";
import { schemaTypes } from "./src/sanity/schemas";
import { projectId, dataset } from "./src/sanity/env";

export default defineConfig({
  name: "chatdaddy",
  title: "ChatDaddy CMS",
  projectId,
  dataset,
  plugins: [structureTool(), codeInput()],
  schema: { types: schemaTypes },
});
