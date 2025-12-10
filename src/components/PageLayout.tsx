"use client";

import { ReactNode, useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { PageMeta } from "@/core/metadata/types";
import { findRelatedByTags } from "@/core/relationships";
import AccentLine from "@/components/AccentLine";

type SectionLink = {
  id: string;
  label: string;
  description?: string;
};

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  sections?: SectionLink[];
  meta: PageMeta;
  tags?: string[];
  children: ReactNode;
}

export default function PageLayout({
  title,
  subtitle,
  sections = [],
  meta,
  tags = [],
  children,
}: PageLayoutProps) {
  // Find auto-linked items based on tags
  const autoLinked = useMemo(() => {
    if (tags.length === 0) {
      return {
        skills: [],
        systems: [],
        evidence: [],
        demos: [],
        cases: [],
      };
    }
    return findRelatedByTags(tags);
  }, [tags]);

  // Merge manual metadata with auto-linked items
  const mergedMeta = useMemo(() => {
    // Combine manual and auto-linked skills (deduplicate by label)
    const allSkills = new Map<string, string>();
    meta.relatedSkills.forEach((skill) => allSkills.set(skill, skill));
    autoLinked.skills.forEach((item) => allSkills.set(item.label, item.label));

    // Combine manual and auto-linked systems (deduplicate by href)
    const allSystems = new Map<string, { label: string; href: string }>();
    meta.relatedSystems.forEach((system) => allSystems.set(system.href, system));
    autoLinked.systems.forEach((item) =>
      allSystems.set(item.href, { label: item.label, href: item.href })
    );

    // Combine manual and auto-linked evidence (deduplicate by href)
    const allEvidence = new Map<string, { label: string; href: string }>();
    meta.relatedEvidence.forEach((evidence) => allEvidence.set(evidence.href, evidence));
    autoLinked.evidence.forEach((item) =>
      allEvidence.set(item.href, { label: item.label, href: item.href })
    );

    return {
      what: meta.what,
      why: meta.why,
      relatedSkills: Array.from(allSkills.values()),
      relatedSystems: Array.from(allSystems.values()),
      relatedEvidence: Array.from(allEvidence.values()),
    };
  }, [meta, autoLinked]);

  return (
    <div className="bg-white dark:bg-neutral-950">
      <div className="mx-auto flex w-full max-w-6xl gap-8 px-6 py-10">
        <SidebarNav sections={sections} />
        <main className="min-w-0 flex-1 max-w-4xl space-y-8">
          <div className="flex items-center gap-4 mb-6">
            <AccentLine orientation="vertical" length="48px" thickness="4px" />
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-2 max-w-prose text-base leading-relaxed text-gray-600 dark:text-gray-300">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          {children}
        </main>
        <MetadataPanel meta={mergedMeta} />
      </div>
    </div>
  );
}

function SidebarNav({ sections }: { sections: SectionLink[] }) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const updateActiveSection = () => {
      const hash = window.location.hash.slice(1);
      setActiveSection(hash);
    };

    updateActiveSection();
    window.addEventListener("hashchange", updateActiveSection);
    return () => window.removeEventListener("hashchange", updateActiveSection);
  }, []);

  if (!sections.length) {
    return <div className="hidden lg:block w-64" />;
  }

  return (
    <aside className="hidden lg:block w-64 border-r border-gray-200 bg-white/90 dark:bg-neutral-950/90 px-4 py-6 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
        Navigate
      </p>
      <ul className="space-y-1">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`block rounded-md px-2.5 py-1.5 text-sm transition-colors ${
                  isActive
                    ? "bg-gray-100 text-gray-900 font-semibold dark:bg-neutral-800 dark:text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-neutral-800 dark:hover:text-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  {isActive && (
                    <AccentLine orientation="vertical" length="20px" thickness="3px" />
                  )}
                  <span className="font-medium">{section.label}</span>
                </div>
                {section.description && (
                  <span className="mt-0.5 block text-xs text-gray-500 dark:text-gray-400">
                    {section.description}
                  </span>
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

function MetadataPanel({ meta }: { meta: PageMeta }) {
  const hasContent =
    meta.what ||
    meta.why ||
    meta.relatedSkills.length > 0 ||
    meta.relatedSystems.length > 0 ||
    meta.relatedEvidence.length > 0;

  if (!hasContent) {
    return <div className="hidden xl:block w-80" />;
  }

  const maxToShow = 6;

  return (
    <aside className="hidden xl:block w-80">
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/60 space-y-5">
        {meta.what && (
          <div>
            <div className="flex items-center gap-3 mb-1">
              <AccentLine orientation="vertical" length="20px" thickness="3px" />
              <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                What this is
              </p>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed mt-2">
              {meta.what}
            </p>
          </div>
        )}
        {meta.why && (
          <div>
            <div className="flex items-center gap-3 mb-1">
              <AccentLine orientation="vertical" length="20px" thickness="3px" />
              <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Why it matters
              </p>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed mt-2">
              {meta.why}
            </p>
          </div>
        )}
        {meta.relatedSkills.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-1">
              <AccentLine orientation="vertical" length="20px" thickness="3px" />
              <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Related Skills
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {meta.relatedSkills.slice(0, maxToShow).map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-neutral-800 dark:text-gray-100"
                >
                  {skill}
                </span>
              ))}
              {meta.relatedSkills.length > maxToShow && (
                <span className="inline-flex items-center text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 hover:underline cursor-pointer">
                  + {meta.relatedSkills.length - maxToShow} more skills
                </span>
              )}
            </div>
          </div>
        )}
        {meta.relatedSystems.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-1">
              <AccentLine orientation="vertical" length="20px" thickness="3px" />
              <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Related Systems
              </p>
            </div>
            <ul className="space-y-2 mt-3">
              {meta.relatedSystems.map((system) => (
                <li key={system.href}>
                  <Link
                    href={system.href}
                    className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 hover:underline"
                  >
                    {system.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        {meta.relatedEvidence.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-1">
              <AccentLine orientation="vertical" length="20px" thickness="3px" />
              <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Related Evidence
              </p>
            </div>
            <ul className="space-y-2 mt-3">
              {meta.relatedEvidence.map((evidence) => (
                <li key={evidence.href}>
                  <Link
                    href={evidence.href}
                    className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 hover:underline"
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
  );
}
