"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigation = [
  { label: "Overview", href: "/" },
  { label: "Career", href: "/career" },
  { label: "Resume", href: "/resume" },
  { label: "Skills", href: "/skills" },
  { label: "Systems", href: "/systems" },
  { label: "Cases", href: "/cases" },
  { label: "Evidence", href: "/evidence" },
  { label: "Demos", href: "/demos/reporting-engine" },
  { label: "Scenarios", href: "/scenarios" },
  { label: "Adapters", href: "/adapters/fortrea" },
  { label: "Search", href: "/search" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="w-64 border-r border-border bg-sidebar p-6 space-y-1">
      <div className="mb-6">
        <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Navigation
        </h2>
      </div>
      <ul className="space-y-1">
        {navigation.map((item) => {
          // Special handling for home page
          const isActive = item.href === "/" 
            ? pathname === "/"
            : pathname === item.href || pathname.startsWith(item.href + "/");
          
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "block px-3 py-2 rounded-md text-sm transition-colors",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

