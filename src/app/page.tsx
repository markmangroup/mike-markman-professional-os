"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [showAllSections, setShowAllSections] = useState(false);
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">Mike Markman</h1>

        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Finance, data, and transformation leader. This is a living encyclopedia of my work —
          systems, frameworks, case studies, and the real artifacts behind them.
        </p>

        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Built so anyone can quickly understand what I've done, how I operate, and the outcomes behind the work.
        </p>
      </section>

      {/* Audience Entry Paths */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Recruiters & Executives */}
        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <Link href="/career" className="block h-full">
            <CardHeader>
              <CardTitle className="text-xl">The Quick Story</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Career overview, resume, and the high-signal summary of how I drive clarity and transformation.
              </p>
            </CardContent>
          </Link>
        </Card>

        {/* Operators & Technical Leaders */}
        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <Link href="/systems" className="block h-full">
            <CardHeader>
              <CardTitle className="text-xl">Systems I've Built</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Reporting engines, governance models, automation flows, and data platforms — with visuals and demos.
              </p>
            </CardContent>
          </Link>
        </Card>

        {/* People Evaluating Fit */}
        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <Link href="/cases" className="block h-full">
            <CardHeader>
              <CardTitle className="text-xl">Cases & Evidence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Structured case studies and real artifacts — the actual deliverables and models behind outcomes.
              </p>
            </CardContent>
          </Link>
        </Card>
      </section>

      {/* Encyclopedia Section Grid */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Explore the Encyclopedia</h2>
        </div>

        {/* Core 4 sections - always visible */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <HomeTile title="Career" href="/career" description="Timeline of leadership roles and impact across finance, analytics, and operations." />

          <HomeTile title="Resume" href="/resume" description="High-signal resume backed by structured metadata and real artifacts." />

          <HomeTile title="Systems" href="/systems" description="The systems, platforms, and operational models I've built and deployed." />

          <HomeTile title="Cases" href="/cases" description="Compact breakdowns of real transformations and key outcomes." />
        </div>

        {/* Expandable additional sections */}
        {showAllSections && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            <HomeTile title="Skills" href="/skills" description="Mapped capabilities across finance, analytics, reporting, governance, and automation." />

            <HomeTile title="Evidence" href="/evidence" description="Real deliverables, documents, diagrams, reporting samples, and specifications." />

            <HomeTile title="Scenarios" href="/scenarios" description="How I navigate real-world situations: scaling, fixing, structuring, revealing hidden patterns." />

            <HomeTile title="Demos" href="/demos/reporting-engine" description="Interactive prototypes of reporting engines, governance explorers, rule engines, and more." />

            <HomeTile title="Adapters" href="/adapters/fortrea" description="Company-specific pages translating my background into context for different orgs." />

            <HomeTile title="Search" href="/search" description="Semantic search across career history, systems, evidence, cases, and skills." />
          </div>
        )}

        {/* Toggle button */}
        <div className="flex justify-center pt-4">
          <Button
            variant="outline"
            onClick={() => setShowAllSections(!showAllSections)}
            className="min-w-[200px]"
          >
            {showAllSections ? "Show Less" : "View All Sections"}
          </Button>
        </div>
      </section>

      {/* Featured Systems */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Featured Systems</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <HomeTile title="Reporting Engine" href="/demos/reporting-engine" description="Unified financial, operational, and commercial reporting systems." />

          <HomeTile title="Governance Model" href="/demos/governance-explorer" description="Data governance structures that reduce chaos and create clarity." />

          <HomeTile title="Automation Flow" href="/demos/automation" description="End-to-end automation replacing manual workflows with intelligent structure." />

        </div>
      </section>

      {/* Footer Note */}
      <section className="text-center text-sm text-gray-500 pt-6">
        This encyclopedia evolves as I refine my work, frameworks, and published artifacts.
      </section>

    </div>
  );
}

function HomeTile({
  title,
  href,
  description,
}: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <Card className="cursor-pointer hover:shadow-lg transition-shadow">
      <Link href={href} className="block h-full">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Link>
    </Card>
  );
}
