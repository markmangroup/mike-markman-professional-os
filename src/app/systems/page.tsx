import Link from "next/link";
import PageLayout from "@/components/PageLayout";

type SystemCluster = {
  id: string;
  label: string;
  sidebarSummary: string;
  tagline: string;
  title: string;
  description: string;
  mechanics: string[];
  outcomes: string[];
  links: {
    href: string;
    label: string;
    description: string;
  }[];
};

const systemClusters: SystemCluster[] = [
  {
    id: "reporting-operating-system",
    label: "Reporting Operating System",
    sidebarSummary: "Reporting rooms, KPI architecture, executive instrumentation.",
    tagline: "Visibility + Decision Intelligence",
    title: "Reporting Operating System",
    description:
      "I turn fragmented data, spreadsheets, and ad-hoc reports into a single operating layer for executives, finance, and operations. The work blends canonical data models, KPI logic, scenario views, and guided narratives so leadership teams can run the business from one environment.",
    mechanics: [
      "Model financial and operational truth into a unified semantic layer with clean KPI definitions.",
      "Design decision rooms that pair executive views with investigative explorers, commentary, and variance flows.",
      "Ship reporting like a product: versioned releases, usage telemetry, and structured change gates.",
    ],
    outcomes: [
      "Executives see the entire company on one canvas instead of waiting for bespoke decks.",
      "Variance, forecast, and accountability cadences become programmatic, not personality-driven.",
      "Analytics, finance, and operations teams collaborate on a shared logic engine.",
    ],
    links: [
      {
        href: "/demos/reporting-engine",
        label: "Reporting Engine Demo",
        description: "Walk the canonical reporting flows and scenario views.",
      },
      {
        href: "/demos/kpi-dashboard",
        label: "Executive KPI Dashboard",
        description: "See how the leadership instrumentation feels in use.",
      },
      {
        href: "/cases?q=reporting",
        label: "Reporting Case Work",
        description: "Examples of modernization programs I have led.",
      },
    ],
  },
  {
    id: "governance-control-fabric",
    label: "Governance Control Fabric",
    sidebarSummary: "Ownership maps, controls, lineage, and change management.",
    tagline: "Controls + Stewardship",
    title: "Governance & Control Fabric",
    description:
      "Every system I build includes a governance layer that makes ownership and accountability unmistakable. That means mapping lineage, defining policy engines, and giving stakeholders a live understanding of how trusted data actually travels through the enterprise.",
    mechanics: [
      "Trace data lineage from source system to consumption, noting policy, SLA, and stewardship at each hop.",
      "Codify rule sets, certification cadences, and change windows so that controls are observable, not theoretical.",
      "Expose an interactive contract between data owners, product teams, and the business so decisions remain auditable.",
    ],
    outcomes: [
      "Teams know exactly who owns which metric, rule, and dataset at any moment.",
      "Regulators, auditors, and executives can see the binding policy attached to each decision.",
      "Quality, trust, and change management move from tribal knowledge to a designed workflow.",
    ],
    links: [
      {
        href: "/demos/governance-explorer",
        label: "Governance Explorer",
        description: "Navigate lineage, ownership, and control states.",
      },
      {
        href: "/cases?q=governance",
        label: "Governance Case Notes",
        description: "Programs where I rebuilt stewardship foundations.",
      },
      {
        href: "/evidence",
        label: "Evidence Library",
        description: "Artifacts supporting governance and control work.",
      },
    ],
  },
  {
    id: "automation-rules-fabric",
    label: "Automation & Rules Fabric",
    sidebarSummary: "Classification logic, orchestration, and guardrails.",
    tagline: "Automation + Classification",
    title: "Automation & Rules Fabric",
    description:
      "Rules engines and orchestration layers let me convert expert judgment into deterministic logic. I combine routing, scoring, prioritization, and SLA handling so workflows keep moving without manual babysitting.",
    mechanics: [
      "Capture classification, exception, and escalation rules in human-readable logic that compiles to code.",
      "Trigger workflows, notifications, and integrations automatically when state changes or thresholds trip.",
      "Provide sandboxes so operators can test tweaks without jeopardizing production systems.",
    ],
    outcomes: [
      "Manual swivel-chair work disappears as guardrails drive the next best action.",
      "Every automated decision is traceable with inputs, rule versions, and owners.",
      "Ops, finance, and product teams co-own a living logic catalog instead of static SOPs.",
    ],
    links: [
      {
        href: "/demos/rule-engine",
        label: "Rule Logic Engine",
        description: "See how classification and orchestration connect.",
      },
      {
        href: "/cases?q=automation",
        label: "Automation Case Work",
        description: "Programs where bots and humans share the workload.",
      },
      {
        href: "/cases?q=classification",
        label: "Classification Case Files",
        description: "Mapping efforts for reconciliation and controls.",
      },
    ],
  },
  {
    id: "operational-control-rooms",
    label: "Operational Control Rooms",
    sidebarSummary: "Field execution, service delivery, readiness tracking.",
    tagline: "Field + Service Execution",
    title: "Operational Control Rooms",
    description:
      "Whether it is rental equipment, lab operations, or shared services, I build control rooms that mirror the real-world journey. Intake, approvals, logistics, and customer updates live inside one playbook so operators know what is stuck and what is next.",
    mechanics: [
      "Map the full lifecycle from lead/intake through fulfillment, service, and renewal with explicit state changes.",
      "Instrument SLAs, handoffs, and backlog heatmaps so blockers are visible the moment they occur.",
      "Broadcast narrative dashboards that explain the day for frontline teams and executives simultaneously.",
    ],
    outcomes: [
      "People in the field and people at headquarters operate from the same truth.",
      "Bottlenecks surface immediately with ownership and remediation steps.",
      "Customer and partner experiences become reliable because the system enforces the choreography.",
    ],
    links: [
      {
        href: "/demos/automation",
        label: "Operations Workflow Engine",
        description: "Walk through the intake-to-fulfillment sequence.",
      },
      {
        href: "/cases?q=laurel",
        label: "Laurel Field Ops Case",
        description: "How the rental lifecycle platform was assembled.",
      },
      {
        href: "/cases?q=operations",
        label: "Operations Case Library",
        description: "Broader operational systems I've delivered.",
      },
    ],
  },
  {
    id: "product-sketchbooks",
    label: "Product Sketchbooks & Enablement",
    sidebarSummary: "Prototypes, guided tours, and enablement systems.",
    tagline: "Enablement + Product Thinking",
    title: "Product Sketchbooks & Enablement",
    description:
      "I pair every system with enablement assets so teams adopt it quickly. Lightweight UI prototypes, interactive tours, and knowledge bases compress the time between idea, design, and confident use in the field.",
    mechanics: [
      "Prototype UI flows that clarify roles, state changes, and mental models before engineering begins.",
      "Embed guided tours, playbooks, and modal explainers directly in the product experience.",
      "Connect the knowledge base, search, and evidence artifacts so teams can self-serve answers.",
    ],
    outcomes: [
      "Stakeholders understand the product narrative before code ships.",
      "Adoption accelerates because learning happens in-product, not from static decks.",
      "Sales, ops, and tech teams share a living reference for how the system should behave.",
    ],
    links: [
      {
        href: "/demos/ui-prototypes",
        label: "UI Prototype Sketchbook",
        description: "Examples of lightweight exploration tooling.",
      },
      {
        href: "/search?q=systems",
        label: "Search the Encyclopedia",
        description: "See how the content network connects.",
      },
      {
        href: "/skills",
        label: "Skills Inventory",
        description: "The capability stack that supports these systems.",
      },
    ],
  },
];

export default function SystemsPage() {
  return (
    <PageLayout
      title="Systems I've Built"
      subtitle="A structured view of the reporting, governance, automation, and operational systems I've designed and implemented."
      sections={systemClusters.map(({ id, label, sidebarSummary }) => ({
        id,
        label,
        description: sidebarSummary,
      }))}
      meta={{
        what:
          "A structured view of the major reporting, automation, governance, and operational systems I've built across my career.",
        why: "These systems represent the core of how I create clarity, structure, scale, and decision-making strength inside organizations.",
        relatedSkills: [
          "Reporting",
          "Governance",
          "Automation",
          "Data Modeling",
          "Rule Design",
        ],
        relatedSystems: [],
        relatedEvidence: [],
      }}
    >
      <div className="space-y-16">
        {systemClusters.map((cluster) => (
          <section
            key={cluster.id}
            id={cluster.id}
            className="space-y-6 scroll-mt-32 border-b border-border/40 pb-12 last:border-none last:pb-0"
          >
            <header className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                {cluster.tagline}
              </p>
              <h2 className="text-2xl font-semibold tracking-tight">
                {cluster.title}
              </h2>
              <p className="text-base text-muted-foreground">
                {cluster.description}
              </p>
            </header>

            <div className="grid gap-4 lg:grid-cols-2">
              <DetailCard title="How I build it" items={cluster.mechanics} />
              <DetailCard title="What it unlocks" items={cluster.outcomes} />
            </div>

            <div className="flex flex-wrap gap-3">
              {cluster.links.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  className="group flex w-full flex-col rounded-2xl border border-border/60 bg-muted/40 px-4 py-3 transition hover:border-primary/60 hover:bg-background/70 sm:w-auto"
                >
                  <span className="text-sm font-semibold tracking-tight group-hover:text-primary">
                    {link.label}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {link.description}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageLayout>
  );
}

function DetailCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-background/60 p-5">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
        {title}
      </p>
      <ul className="mt-3 space-y-2 text-sm text-foreground">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span
              aria-hidden="true"
              className="mt-2 inline-block size-1.5 rounded-full bg-primary"
            />
            <span className="text-base leading-relaxed text-muted-foreground">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

