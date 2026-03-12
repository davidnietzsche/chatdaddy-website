import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | ChatDaddy",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="font-heading text-6xl font-bold">404</h1>
      <p className="mt-4 text-xl text-gray-600">
        This page doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-brand-500 px-8 py-3 font-semibold text-white hover:bg-brand-600 transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}
