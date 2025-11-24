"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";

export default function TopBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 h-14 flex items-center justify-between">
        <Link 
          href="/" 
          className="font-semibold text-lg hover:text-primary transition-colors"
        >
          Mike Markman Professional OS
        </Link>
        <div className="flex-1 max-w-md ml-8">
          <Input
            type="search"
            placeholder="Search..."
            className="w-full"
            disabled
          />
        </div>
      </div>
    </header>
  );
}

