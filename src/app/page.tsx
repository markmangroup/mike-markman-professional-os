"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Mike Markman
        </h1>

        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-prose mx-auto leading-relaxed">
          Finance, data, and transformation leader. This is a living encyclopedia of my work —
          systems, frameworks, case studies, and the real artifacts behind them.
        </p>

        <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Built so anyone can quickly understand what I've done, how I operate, and the outcomes behind the work.
        </p>
      </section>

      {/* Audience Entry Paths */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="cursor-pointer rounded-xl border border-gray-200 bg-white p-5 shadow-xs transition-shadow hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
          <Link href="/career" className="block h-full">
            <CardHeader className="p-0">
              <CardTitle className="text-base font-semibold text-gray-900 dark:text-white">
                The Quick Story
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-2">
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Career overview, resume, and the high-signal summary of how I drive clarity and transformation.
              </p>
            </CardContent>
          </Link>
        </Card>

        <Card className="cursor-pointer rounded-xl border border-gray-200 bg-white p-5 shadow-xs transition-shadow hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
          <Link href="/systems" className="block h-full">
            <CardHeader className="p-0">
              <CardTitle className="text-base font-semibold text-gray-900 dark:text-white">
                Systems I've Built
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-2">
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Reporting engines, governance models, automation flows, and data platforms — with visuals and demos.
              </p>
            </CardContent>
          </Link>
        </Card>

        <Card className="cursor-pointer rounded-xl border border-gray-200 bg-white p-5 shadow-xs transition-shadow hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
          <Link href="/cases" className="block h-full">
            <CardHeader className="p-0">
              <CardTitle className="text-base font-semibold text-gray-900 dark:text-white">
                Cases & Evidence
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-2">
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Structured case studies and real artifacts — the actual deliverables and models behind outcomes.
              </p>
            </CardContent>
          </Link>
        </Card>
      </section>

      {/* Encyclopedia Section Grid */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Explore the Encyclopedia</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <HomeTile title="Career" href="/career" description="Timeline of leadership roles and impact across finance, analytics, and operations." />
          <HomeTile title="Resume" href="/resume" description="High-signal resume backed by structured metadata and real artifacts." />
          <HomeTile title="Skills" href="/skills" description="Mapped capabilities across finance, analytics, reporting, governance, and automation." />
          <HomeTile title="Systems" href="/systems" description="The systems, platforms, and operational models I've built and deployed." />
          <HomeTile title="Evidence" href="/evidence" description="Real deliverables, documents, diagrams, reporting samples, and specifications." />
          <HomeTile title="Cases" href="/cases" description="Compact breakdowns of real transformations and key outcomes." />
          <HomeTile title="Scenarios" href="/scenarios" description="How I navigate real-world situations: scaling, fixing, structuring, revealing hidden patterns." />
          <HomeTile title="Demos" href="/demos/reporting-engine" description="Interactive prototypes of reporting engines, governance explorers, rule engines, and more." />
          <HomeTile title="Adapters" href="/adapters/fortrea" description="Company-specific pages translating my background into context for different orgs." />
          <HomeTile title="Search" href="/search" description="Semantic search across career history, systems, evidence, cases, and skills." />
        </div>
      </section>

      {/* Featured Systems */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Featured Systems</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <HomeTile title="Reporting Engine" href="/demos/reporting-engine" description="Unified financial, operational, and commercial reporting systems." />
          <HomeTile title="Governance Model" href="/demos/governance-explorer" description="Data governance structures that reduce chaos and create clarity." />
          <HomeTile title="Automation Flow" href="/demos/automation" description="End-to-end automation replacing manual workflows with intelligent structure." />
        </div>
      </section>

      {/* Footer Note */}
      <section className="text-center text-sm text-gray-500 dark:text-gray-400 pt-6">
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
    <Card className="cursor-pointer rounded-xl border border-gray-200 bg-white p-5 shadow-xs transition-shadow hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
      <Link href={href} className="block h-full">
        <CardHeader className="p-0">
          <CardTitle className="text-base font-semibold text-gray-900 dark:text-white">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 mt-2">
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Link>
    </Card>
  );
}
