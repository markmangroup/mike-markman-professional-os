import PageLayout from "@/components/PageLayout";
import { careerMeta } from "@/core/metadata/career";

const workModelSteps = [
  {
    title: "Diagnose quickly",
    bullets: [
      "Identify failure points, hidden dependencies, and structural gaps",
      "Establish a clean map of \"what exists\" vs \"what needs to exist\"",
    ],
  },
  {
    title: "Design the system",
    bullets: [
      "Reporting flows",
      "Controls and governance",
      "Automation opportunities",
      "Data architecture",
      "Operating models",
      "Role design and accountability structures",
    ],
  },
  {
    title: "Build clarity",
    bullets: [
      "Rewrite processes so people understand how to do their jobs",
      "Replace ambiguity with rules, logic, and visibility",
      "Build platforms and tools that bring order to chaotic domains",
    ],
  },
  {
    title: "Deliver real outcomes",
    bullets: [
      "Lift reporting maturity",
      "Accelerate decision-making",
      "Remove manual overhead",
      "Strengthen governance",
      "Improve accuracy and speed",
      "Build repeatable systems used at scale",
    ],
  },
];

const timelineEntries = [
  {
    title: "Markman Group — Founder",
    period: "2024–Present",
    description:
      "Led data, reporting, and automation transformations for clients across private equity, agriculture, and financial services. Built full-stack systems including reporting engines, rules-based workflows, governance models, and interactive platforms used by operators and executives. Focused on clarity, process modernization, and operational intelligence.",
  },
  {
    title: "IQVIA — VP, Enterprise Data & Analytics",
    period: "2022–2024",
    description:
      "Owned global reporting modernization, enterprise automation, and data platform initiatives for a Fortune 500–scale environment. Led multi-functional teams across analytics engineering, governance, automation, shared services, and enterprise systems.",
  },
  {
    title: "IQVIA — Head of Global Shared Services Finance",
    period: "2019–2022",
    description:
      "Oversaw global accounting, reporting, and operational finance functions across more than 60 countries. Built governance structures, automation programs, shared service models, and leadership systems that strengthened accuracy, speed, and transparency worldwide.",
  },
  {
    title: "Q² Solutions (IQVIA + LabCorp JV) — Global Controller",
    period: "2017–2018",
    description:
      "Ran finance, reporting, and controls during a complex joint venture environment. Delivered clarity and structure across two-parent governance, financial reporting, and operational integration.",
  },
  {
    title: "Siguler Guff — Director, Corporate Accounting",
    period: "2013–2017",
    description:
      "Owned accounting and reporting infrastructure for a multi-billion AUM private equity firm. Built systems and processes supporting investor reporting, fund administration, and audit readiness.",
  },
  {
    title: "KKR — Finance Manager",
    period: "2010–2013",
    description:
      "Founding member of the FP&A function supporting management company forecasting, planning, and strategic analysis at a critical growth stage.",
  },
  {
    title: "Ernst & Young — Senior Auditor, Capital Markets",
    period: "2005–2010",
    description:
      "Audited global financial institutions, investment banks, and capital markets groups. Formed the technical and controls foundation that underpins my operating style today.",
  },
];

const careerThroughLine = [
  {
    title: "Build the system",
    description:
      "Create the operating model, reporting architecture, automation logic, and governance that make a complex organization function cleanly.",
  },
  {
    title: "Reveal what matters",
    description:
      "Turn fragmented data into coherent insight, make decisions faster, and align teams on shared truths.",
  },
  {
    title: "Reduce friction",
    description:
      "Replace ambiguity with clarity. Replace manual processes with rules. Replace scattered workflows with integrated systems.",
  },
];

export default function CareerPage() {
  return (
    <PageLayout
      title="Career"
      subtitle="A structured overview of my career across finance, data, analytics, and transformation roles."
      meta={careerMeta}
      tags={careerMeta.tags}
    >
      <section className="space-y-8 mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Overview</h2>
        <div className="max-w-prose space-y-4">
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            I build clarity, structure, and momentum inside complex organizations.
          </p>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            My career spans shared services, enterprise data platforms, reporting modernization, operational transformation, and full-stack analytics leadership. Across every role, the through-line is the same: fix what&apos;s unclear, build what&apos;s missing, and make the system work.
          </p>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            I&apos;ve owned global finance operations, led enterprise automation programs, architected data and reporting ecosystems, and delivered transformation for private-equity-backed businesses and public companies. My work blends deep financial judgment with technical fluency and operational design.
          </p>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            This page provides a clear, structured view of that progression.
          </p>
        </div>
      </section>

      <section className="space-y-8 mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">How I Work Across Roles</h2>
        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 max-w-prose">
          Across 20 years, my operating model has been consistent:
        </p>
        <ol className="space-y-6 list-decimal pl-5 max-w-prose">
          {workModelSteps.map((step) => (
            <li key={step.title} className="space-y-2">
              <p className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</p>
              <ul className="space-y-1 list-disc pl-5 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                {step.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 max-w-prose">
          My value is not &ldquo;projects&rdquo; — it&apos;s infrastructure that keeps working long after I leave the room.
        </p>
      </section>

      <section className="space-y-8 mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Professional Timeline</h2>
        <div className="space-y-4">
          {timelineEntries.map((entry) => (
            <div key={entry.title} className="border-l-2 border-gray-200 pl-4 dark:border-neutral-700 space-y-1">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {entry.title} ({entry.period})
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {entry.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8 mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Career Through-Line</h2>
        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 max-w-prose">
          Across every role, my work centers on three things:
        </p>
        <ol className="space-y-6 list-decimal pl-5 max-w-prose">
          {careerThroughLine.map((item) => (
            <li key={item.title} className="space-y-2">
              <p className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</p>
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">{item.description}</p>
            </li>
          ))}
        </ol>
        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 max-w-prose">
          This is the pattern that repeats across finance, data, analytics, operations, and executive leadership.
        </p>
      </section>
    </PageLayout>
  );
}
