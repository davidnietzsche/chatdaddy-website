import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { allBlogPostsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Blog — WhatsApp Business Tips, Guides & Updates",
  description:
    "Expert guides on WhatsApp CRM, business automation, chatbot strategies, and messaging best practices from the ChatDaddy team.",
  path: "/blog",
});

interface BlogPost {
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt: string;
  author?: { name: string; image?: any };
  coverImage?: { asset?: any; alt?: string };
  categories?: { title: string; slug: { current: string } }[];
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function PostCard({ post }: { post: BlogPost }) {
  const slug = post.slug.current || post.slug;
  const imageUrl = post.coverImage?.asset
    ? urlFor(post.coverImage).width(640).height(360).format("webp").url()
    : null;

  return (
    <Link
      href={`/blog/${slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 hover:-translate-y-1"
    >
      {/* Cover image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={post.coverImage?.alt || post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-300"
            >
              <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <line x1="10" y1="9" x2="8" y2="9" />
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {post.categories.map((cat) => (
              <span
                key={cat.slug.current}
                className="inline-block rounded-full bg-blue-50 px-2.5 py-0.5 text-[12px] font-medium text-blue-600"
              >
                {cat.title}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h2 className="text-[17px] font-semibold leading-snug text-gray-900 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors">
          {post.title}
        </h2>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-[14px] leading-relaxed text-gray-500 line-clamp-3 mb-4">
            {post.excerpt}
          </p>
        )}

        {/* Footer: date + author */}
        <div className="mt-auto flex items-center gap-3 pt-4 border-t border-gray-100">
          {post.author?.image?.asset && (
            <Image
              src={urlFor(post.author.image)
                .width(64)
                .height(64)
                .format("webp")
                .url()}
              alt={post.author.name}
              width={28}
              height={28}
              className="rounded-full"
            />
          )}
          <div className="flex flex-col text-[13px]">
            {post.author?.name && (
              <span className="font-medium text-gray-700">
                {post.author.name}
              </span>
            )}
            <time dateTime={post.publishedAt} className="text-gray-400">
              {formatDate(post.publishedAt)}
            </time>
          </div>
        </div>
      </div>
    </Link>
  );
}

function EmptyState() {
  return (
    <div className="mx-auto max-w-lg py-20 text-center">
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-400"
        >
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      </div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-3">
        Coming Soon
      </h2>
      <p className="text-gray-500 leading-relaxed mb-8">
        We are working on insightful guides about WhatsApp business automation,
        chatbot strategies, and CRM best practices. Check back soon!
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-blue-700"
      >
        Back to Home
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}

export default async function BlogPage() {
  const posts: BlogPost[] = await client.fetch(allBlogPostsQuery);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0a0e1a] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[800px] h-[600px] rounded-full bg-gradient-to-b from-blue-600/20 via-blue-500/5 to-transparent blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-[13px] font-medium text-blue-300 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Blog
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Tips, Guides &amp; Updates
          </h1>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-white/60 leading-relaxed">
            Expert insights on WhatsApp CRM, business automation, chatbot
            strategies, and messaging best practices from the ChatDaddy team.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {posts && posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostCard
                  key={post.slug.current || (post.slug as unknown as string)}
                  post={post}
                />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
      </section>
    </>
  );
}
