export const TAGS = [
  // Core Execution Domains
  "Reporting",
  "Governance",
  "Automation",
  "Data Modeling",
  "Analytics",
  "Finance Operations",
  "Shared Services",
  "Process Design",
  "Controls",
  "FP&A",
  "Forecasting",
  "Variance Analysis",

  // Technical + Platform Areas
  "Data Architecture",
  "Integration",
  "Workflow Automation",
  "Rule Engines",
  "KPI Design",
  "Dashboarding",
  "Systems Design",
  "AI / ML",
  "Cloud",

  // Leadership + Organizational
  "Leadership",
  "Operating Model",
  "Transformation",
  "Operating Cadence",
  "Change Management",
  "Team Design",
  "Cross-Functional Execution",

  // Industry / Domain
  "Private Equity",
  "Healthcare / CRO",
  "Agriculture",
  "Manufacturing",
  "ESG",
  "Supply Chain",

  // General
  "Strategy",
  "Decision-Making",
  "Clarity",
  "Structure",
] as const;

export type Tag = typeof TAGS[number];






