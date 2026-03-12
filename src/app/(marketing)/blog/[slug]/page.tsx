import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { blogPostBySlugQuery, allBlogPostsQuery } from "@/sanity/lib/queries";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd, BlogPostingJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";

export async function generateStaticParams() {
  const posts = await client.fetch(allBlogPostsQuery);
  return posts.map((p: any) => ({ slug: p.slug.current || p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(blogPostBySlugQuery, { slug });
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    seo: post.seo,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt || post.publishedAt,
    authors: post.author ? [post.author.name] : undefined,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await client.fetch(blogPostBySlugQuery, { slug });
  if (!post) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${slug}` },
        ]}
      />

      <BlogPostingJsonLd
        title={post.title}
        description={post.excerpt || ""}
        url={`https://chatdaddy.tech/blog/${slug}`}
        datePublished={post.publishedAt}
        dateModified={post.updatedAt || post.publishedAt}
        authorName={post.author?.name || "ChatDaddy Team"}
      />

      <article className="prose prose-lg mx-auto max-w-3xl">
        <h1>{post.title}</h1>
        {/* TODO: Render PortableText body */}
        {/* TODO: Render related posts */}
      </article>
    </>
  );
}
