"use client";

import Link from "next/link";

export default function GlobalTopBar() {
  return (
    <nav className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 dark:bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-200"
        >
          Mike Markman Professional OS
        </Link>
        <input
          className="h-8 w-48 rounded-md border border-gray-200 bg-white/70 px-3 text-sm text-gray-700 placeholder:text-gray-400 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 dark:border-neutral-800 dark:bg-neutral-900/70 dark:text-gray-200 dark:placeholder:text-gray-500"
          placeholder="Search (coming soon)"
          disabled
        />
      </div>
    </nav>
  );
}





