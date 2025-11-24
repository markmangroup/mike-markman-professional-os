import skillsData from "@/core/skills.json";
import { TaggedItem } from "./index";

// Map skills to approved tags based on domain and skill name
const skillTagMap: Record<string, string[]> = {
  // Finance Transformation domain
  "Finance Transformation": ["Finance Operations", "Transformation", "Strategy"],
  "Global Shared Services": ["Shared Services", "Operating Model", "Leadership"],
  "Cost Optimization": ["Finance Operations", "Strategy"],
  "Enterprise Operations": ["Operating Model", "Finance Operations"],
  "Process Standardization": ["Process Design", "Transformation"],
  "SOX Compliance": ["Controls", "Governance"],
  "US GAAP": ["Controls", "Finance Operations"],

  // Analytics Automation domain
  "Process Mining (Celonis)": ["Analytics", "Process Design", "Automation"],
  "Automation COEs": ["Automation", "Leadership", "Operating Model"],
  "KPI & Performance Reporting": ["KPI Design", "Reporting", "Dashboarding"],
  "Self-Service Analytics": ["Analytics", "Dashboarding", "Data Architecture"],
  "ETL Automation (Alteryx)": ["Automation", "Data Architecture", "Integration"],
  "Python Data Engineering": ["Data Architecture", "Data Modeling", "Integration"],
  "Power BI / Tableau": ["Dashboarding", "Analytics", "Reporting"],
  "Operational Dashboards": ["Dashboarding", "KPI Design", "Reporting"],

  // Leadership Management domain
  "Global Team Leadership": ["Leadership", "Operating Model", "Team Design"],
  "Change Management": ["Change Management", "Transformation", "Leadership"],
  "Executive Stakeholder Engagement": ["Leadership", "Strategy", "Decision-Making"],
  "Cross-Functional Alignment": ["Cross-Functional Execution", "Leadership"],
  "Offshore/Onshore Delivery Models": ["Operating Model", "Team Design"],
  "M&A Integration": ["Transformation", "Integration", "Strategy"],

  // Strategic Reporting domain
  "Forecasting & Reporting": ["Forecasting", "Reporting", "FP&A"],
  "Cash Flow Visibility": ["Reporting", "Finance Operations", "Analytics"],
  "Variance Analysis": ["Variance Analysis", "Reporting", "FP&A"],
  "Management Reporting": ["Reporting", "Dashboarding", "Decision-Making"],
  "Board-Level Communication": ["Reporting", "Strategy", "Decision-Making"],

  // Technology Systems domain
  "ERP: SAP, NetSuite, PeopleSoft, Dynamics GP": ["Systems Design", "Integration", "Finance Operations"],
  "Automation: AssistEdge, AppZen, Automation Anywhere": ["Automation", "Workflow Automation"],
  "Visualization: Tableau, Power BI": ["Dashboarding", "Analytics", "Reporting"],
  "Analytics: Python, Celonis, Alteryx": ["Analytics", "Data Architecture"],
  "Process Automation": ["Automation", "Workflow Automation", "Process Design"],

  // Industry Experience domain
  "Private Equity": ["Private Equity", "Strategy"],
  "CRO / Life Sciences": ["Healthcare / CRO"],
  "Financial Services": ["Finance Operations"],
  "Global Operations": ["Operating Model", "Shared Services"],
  "Shared Services": ["Shared Services", "Operating Model"],
  "Regulated Environments": ["Controls", "Governance"],
};

// Helper function to get tags for a skill
function getTagsForSkill(skill: string): string[] {
  // Check direct mapping first
  if (skillTagMap[skill]) {
    return skillTagMap[skill];
  }

  // Fallback: try to match by keywords
  const skillLower = skill.toLowerCase();
  const tags: string[] = [];

  if (skillLower.includes("reporting") || skillLower.includes("report")) {
    tags.push("Reporting");
  }
  if (skillLower.includes("governance") || skillLower.includes("govern")) {
    tags.push("Governance");
  }
  if (skillLower.includes("automation") || skillLower.includes("automate")) {
    tags.push("Automation");
  }
  if (skillLower.includes("data") && (skillLower.includes("model") || skillLower.includes("architect"))) {
    tags.push("Data Architecture");
  }
  if (skillLower.includes("dashboard") || skillLower.includes("visualization")) {
    tags.push("Dashboarding");
  }
  if (skillLower.includes("kpi") || skillLower.includes("performance")) {
    tags.push("KPI Design");
  }
  if (skillLower.includes("process")) {
    tags.push("Process Design");
  }
  if (skillLower.includes("leadership") || skillLower.includes("lead")) {
    tags.push("Leadership");
  }
  if (skillLower.includes("finance") || skillLower.includes("financial")) {
    tags.push("Finance Operations");
  }
  if (skillLower.includes("analytics") || skillLower.includes("analytics")) {
    tags.push("Analytics");
  }

  // Always include the skill name itself if it's a reasonable tag
  if (tags.length === 0) {
    tags.push("Strategy");
  }

  return tags;
}

// Flatten the skills from all domains into a single array
const allSkills: string[] = [];
Object.values(skillsData.domains).forEach((domainSkills) => {
  allSkills.push(...domainSkills);
});

// Create TaggedItems from skills with proper tag mapping
export const skillsItems: TaggedItem[] = allSkills.map((skill) => ({
  id: skill.toLowerCase().replace(/\s+/g, "-"),
  label: skill,
  href: `/skills#${skill.toLowerCase().replace(/\s+/g, "-")}`,
  tags: getTagsForSkill(skill),
}));
