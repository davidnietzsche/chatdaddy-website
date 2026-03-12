export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2024-01-01";

// Used for server-side fetching with token (drafts, revalidation)
export const token = process.env.SANITY_API_READ_TOKEN;
