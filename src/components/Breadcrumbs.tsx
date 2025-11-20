"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function formatSegment(segment: string): string {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  // Build breadcrumb items
  const breadcrumbs = [
    { label: "Home", path: "/" },
    ...segments.map((segment, index) => {
      const path = "/" + segments.slice(0, index + 1).join("/");
      return {
        label: formatSegment(segment),
        path,
      };
    }),
  ];

  // Don't show breadcrumbs on home page
  if (pathname === "/") {
    return null;
  }

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <span key={crumb.path} className="flex items-center gap-2">
                {isLast ? (
                  <span className="text-gray-700 dark:text-white font-medium">
                    {crumb.label}
                  </span>
                ) : (
                  <>
                    <Link
                      href={crumb.path}
                      className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white transition-colors"
                    >
                      {crumb.label}
                    </Link>
                    <span className="text-gray-400 dark:text-gray-500"> / </span>
                  </>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

