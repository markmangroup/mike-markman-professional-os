import { ReactNode } from "react";

type SectionLink = {
  id: string;
  label: string;
  description?: string;
};

type MetaConfig = {
  what?: string;
  why?: string;
  relatedSkills?: string[];
  relatedSystems?: string[];
  relatedEvidence?: string[];
};

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  sections?: SectionLink[];
  meta: MetaConfig;
  children: ReactNode;
}

export default function PageLayout({
  title,
  subtitle,
  sections = [],
  meta,
  children,
}: PageLayoutProps) {
  return (
    <div className="bg-background text-foreground">
      <TopBar title={title} subtitle={subtitle} />

      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[15rem_minmax(0,1fr)_16rem] lg:gap-10">
          <SidebarNav sections={sections} />
          <section className="min-w-0 space-y-12">{children}</section>
          <MetadataPanel meta={meta} />
        </div>
      </div>
    </div>
  );
}

function TopBar({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Encyclopedia
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-3xl text-base text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </header>
  );
}

function SidebarNav({ sections }: { sections: SectionLink[] }) {
  if (!sections.length) {
    return <div className="hidden lg:block" />;
  }

  return (
    <aside className="hidden lg:block border-r border-border/60 pr-6">
      <div className="sticky top-28 space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Navigate
        </p>
        <ul className="space-y-1.5 text-sm">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="block rounded-xl px-3 py-2 text-muted-foreground transition-colors hover:bg-muted/70 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="font-medium text-foreground">{section.label}</span>
                {section.description && (
                  <span className="mt-0.5 block text-xs text-muted-foreground">
                    {section.description}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

function MetadataPanel({ meta }: { meta: MetaConfig }) {
  const relatedBuckets = [
    { label: "Related Skills", items: meta.relatedSkills ?? [] },
    { label: "Related Systems", items: meta.relatedSystems ?? [] },
    { label: "Related Evidence", items: meta.relatedEvidence ?? [] },
  ].filter((bucket) => bucket.items.length > 0);

  if (!meta.what && !meta.why && relatedBuckets.length === 0) {
    return <div className="hidden lg:block" />;
  }

  return (
    <aside className="hidden lg:block border-l border-border/60 pl-6">
      <div className="sticky top-28 space-y-6 text-sm leading-relaxed">
        {meta.what && (
          <MetadataCard label="What this covers" body={meta.what} />
        )}
        {meta.why && (
          <MetadataCard label="Why it matters" body={meta.why} />
        )}
        {relatedBuckets.map((bucket) => (
          <MetadataList key={bucket.label} label={bucket.label} items={bucket.items} />
        ))}
      </div>
    </aside>
  );
}

function MetadataCard({ label, body }: { label: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-muted/40 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 text-base text-foreground">{body}</p>
    </div>
  );
}

function MetadataList({
  label,
  items,
}: {
  label: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-border/60 bg-muted/40 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </p>
      <ul className="mt-3 space-y-2 text-foreground">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm">
            <span
              aria-hidden="true"
              className="mt-1.5 inline-block size-1.5 rounded-full bg-primary"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
