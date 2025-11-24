import { TaggedItem } from "./index";

// Basic system items - can be expanded later
export const systemsItems: TaggedItem[] = [
  {
    id: "reporting-operating-system",
    label: "Reporting Operating System",
    href: "/systems#reporting-operating-system",
    tags: ["Reporting", "Data Architecture", "KPI Design", "Dashboarding", "Analytics"],
  },
  {
    id: "governance-control-fabric",
    label: "Governance & Control Fabric",
    href: "/systems#governance-control-fabric",
    tags: ["Governance", "Data Architecture", "Controls", "Process Design"],
  },
  {
    id: "automation-rules-fabric",
    label: "Automation & Rules Fabric",
    href: "/systems#automation-rules-fabric",
    tags: ["Automation", "Rule Engines", "Workflow Automation", "Process Design"],
  },
  {
    id: "operational-control-rooms",
    label: "Operational Control Rooms",
    href: "/systems#operational-control-rooms",
    tags: ["Workflow Automation", "Process Design", "Systems Design", "Dashboarding"],
  },
  {
    id: "product-sketchbooks",
    label: "Product Sketchbooks & Enablement",
    href: "/systems#product-sketchbooks",
    tags: ["Systems Design", "Process Design"],
  },
];
