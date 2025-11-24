"use client";

import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export interface PageMeta {
  what?: string;
  why?: string;
  relatedSkills?: string[];
  relatedSystems?: Array<{ label: string; href: string }>;
  relatedEvidence?: Array<{ label: string; href: string }>;
}

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  meta?: PageMeta;
}

export default function PageLayout({
  title,
  subtitle,
  children,
  meta,
}: PageLayoutProps) {
  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <aside className="hidden lg:block">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">{title}</h1>
            {subtitle && (
              <p className="text-lg text-muted-foreground">{subtitle}</p>
            )}
          </div>
          {children}
        </div>
      </main>

      {/* Right Metadata Panel */}
      {meta && (
        <aside className="hidden xl:block w-80 border-l border-border bg-muted/30 p-6">
          <div className="space-y-6">
            {meta.what && (
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  What this is
                </h3>
                <p className="text-sm text-foreground">{meta.what}</p>
              </div>
            )}

            {meta.why && (
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Why it matters
                </h3>
                <p className="text-sm text-foreground">{meta.why}</p>
              </div>
            )}

            {meta.relatedSkills && meta.relatedSkills.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Related Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {meta.relatedSkills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {meta.relatedSystems && meta.relatedSystems.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Related Systems
                </h3>
                <ul className="space-y-1">
                  {meta.relatedSystems.map((system) => (
                    <li key={system.href}>
                      <Link
                        href={system.href}
                        className="text-sm text-primary hover:underline"
                      >
                        {system.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {meta.relatedEvidence && meta.relatedEvidence.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Related Evidence
                </h3>
                <ul className="space-y-1">
                  {meta.relatedEvidence.map((evidence) => (
                    <li key={evidence.href}>
                      <Link
                        href={evidence.href}
                        className="text-sm text-primary hover:underline"
                      >
                        {evidence.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>
      )}

    </div>
  );
}

