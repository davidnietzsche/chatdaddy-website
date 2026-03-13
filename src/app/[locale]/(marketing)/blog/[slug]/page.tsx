import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { blogPostBySlugQuery, allBlogPostsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/seo/JsonLd";

/* ------------------------------------------------------------------ */
/*  Static params                                                      */
/* ------------------------------------------------------------------ */

export async function generateStaticParams() {
  const posts = await client.fetch(allBlogPostsQuery);
  return posts.map((p: any) => ({ slug: p.slug.current || p.slug }));
}

/* ------------------------------------------------------------------ */
/*  SEO metadata                                                       */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/*  PortableText custom components                                     */
/* ------------------------------------------------------------------ */

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: { value: any }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-8">
          <Image
            src={urlFor(value).width(960).quality(85).url()}
            alt={value.alt || ""}
            width={960}
            height={540}
            className="rounded-lg w-full h-auto"
          />
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-gray-500">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    code: ({ value }: { value: any }) => (
      <pre className="my-6 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
        {value.language && (
          <div className="mb-2 text-xs font-mono uppercase tracking-wider text-gray-400">
            {value.language}
          </div>
        )}
        <code>{value.code}</code>
      </pre>
    ),
  },
  marks: {
    link: ({ children, value }: { children: React.ReactNode; value?: any }) => {
      const target = value?.openInNewTab ? "_blank" : undefined;
      const rel = value?.openInNewTab ? "noopener noreferrer" : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={rel}
          className="text-[#0f5bff] underline decoration-[#0f5bff]/30 underline-offset-2 hover:decoration-[#0f5bff] transition-colors"
        >
          {children}
        </a>
      );
    },
  },
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="mt-12 mb-4 text-2xl font-bold font-heading text-[#191a1c] sm:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="mt-10 mb-3 text-xl font-bold font-heading text-[#191a1c] sm:text-2xl">
        {children}
      </h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="mt-8 mb-3 text-lg font-semibold font-heading text-[#191a1c]">
        {children}
      </h4>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="my-6 border-l-4 border-[#0f5bff] pl-4 italic text-gray-600">
        {children}
      </blockquote>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mb-5 leading-relaxed text-gray-700">{children}</p>
    ),
  },
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await client.fetch(blogPostBySlugQuery, { slug });
  if (!post) notFound();

  const coverImageUrl = post.coverImage
    ? urlFor(post.coverImage).width(1200).quality(85).url()
    : null;

  const authorImageUrl = post.author?.image
    ? urlFor(post.author.image).width(80).height(80).url()
    : null;

  return (
    <>
      {/* ── Schema.org structured data ── */}
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
        imageUrl={coverImageUrl || undefined}
        datePublished={post.publishedAt}
        dateModified={post.updatedAt || post.publishedAt}
        authorName={post.author?.name || "ChatDaddy Team"}
      />

      {/* ── Article header ── */}
      <header className="bg-[#fafafa] border-b border-gray-100">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {post.categories.map((cat: any) => (
                <span
                  key={cat.slug?.current || cat.title}
                  className="inline-flex items-center rounded-full bg-[#0f5bff]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0f5bff]"
                >
                  {cat.title}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl font-bold font-heading text-[#191a1c] sm:text-4xl lg:text-5xl leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
          )}

          {/* Author & date */}
          <div className="mt-6 flex items-center gap-4">
            {authorImageUrl && (
              <Image
                src={authorImageUrl}
                alt={post.author?.name || ""}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
            )}
            <div className="text-sm text-gray-600">
              {post.author?.name && (
                <span className="font-semibold text-[#191a1c]">
                  {post.author.name}
                </span>
              )}
              <span className="mx-2 text-gray-300">|</span>
              <time dateTime={post.publishedAt}>
                {formatDate(post.publishedAt)}
              </time>
              {post.updatedAt && post.updatedAt !== post.publishedAt && (
                <>
                  <span className="mx-2 text-gray-300">|</span>
                  <span>Updated {formatDate(post.updatedAt)}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ── Cover image ── */}
      {coverImageUrl && (
        <div className="mx-auto max-w-4xl px-4 sm:px-6 -mt-0">
          <Image
            src={coverImageUrl}
            alt={post.coverImage?.alt || post.title}
            width={1200}
            height={630}
            priority
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      )}

      {/* ── Article body ── */}
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        {post.body && (
          <div className="prose prose-lg max-w-none">
            <PortableText
              value={post.body}
              components={portableTextComponents}
            />
          </div>
        )}
      </article>

      {/* ── Related posts / Back to blog ── */}
      <section className="border-t border-gray-100 bg-[#fafafa]">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
          {post.relatedPosts && post.relatedPosts.length > 0 ? (
            <>
              <h2 className="mb-8 text-2xl font-bold font-heading text-[#191a1c]">
                Related Articles
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {post.relatedPosts.map((related: any) => {
                  const relatedSlug =
                    related.slug?.current || related.slug;
                  const relatedImage = related.coverImage
                    ? urlFor(related.coverImage).width(400).height(225).url()
                    : null;
                  return (
                    <Link
                      key={relatedSlug}
                      href={`/blog/${relatedSlug}`}
                      className="group block overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-100 transition-shadow hover:shadow-md"
                    >
                      {relatedImage && (
                        <Image
                          src={relatedImage}
                          alt={related.coverImage?.alt || related.title}
                          width={400}
                          height={225}
                          className="aspect-video w-full object-cover"
                        />
                      )}
                      <div className="p-4">
                        <h3 className="text-base font-semibold text-[#191a1c] group-hover:text-[#0f5bff] transition-colors line-clamp-2">
                          {related.title}
                        </h3>
                        {related.excerpt && (
                          <p className="mt-1.5 text-sm text-gray-500 line-clamp-2">
                            {related.excerpt}
                          </p>
                        )}
                        {related.publishedAt && (
                          <p className="mt-2 text-xs text-gray-400">
                            {formatDate(related.publishedAt)}
                          </p>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </>
          ) : null}

          {/* Back to blog link — always shown */}
          <div className={post.relatedPosts?.length ? "mt-10 text-center" : "text-center"}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[15px] font-medium text-[#0f5bff] hover:text-[#0d4fdf] transition-colors"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
