interface BrainInput {
  scenarioId?: string;
  resumeText?: string;
  adapter?: "fortrea" | "pe" | null;
  skills?: string[];
}

const SCENARIO_SUMMARIES: Record<string, string> = {
  "cost-savings":
    "This scenario focuses on operating model efficiency, shared services leverage, and cycle-time reduction.",
  "reporting-modernization":
    "This scenario emphasizes reporting cycles, KPI visibility, dashboards, and performance alignment.",
  governance:
    "This scenario centers on data quality, controls, certification, and governance frameworks.",
  automation:
    "This scenario highlights automation centers of excellence, process mining, workflow orchestration, and ETL optimization.",
  "analytics-platform":
    "This scenario focuses on building analytics capabilities, data platforms, and self-service models.",
  "shared-services":
    "This scenario emphasizes global shared services leadership, scaling teams, and operational excellence.",
};

function detectScenarioFromText(text: string): string[] {
  const lowerText = text.toLowerCase();
  const matches: string[] = [];

  if (
    lowerText.includes("savings") ||
    lowerText.includes("cost") ||
    lowerText.includes("efficiency")
  ) {
    matches.push("cost-savings");
  }
  if (
    lowerText.includes("reporting") ||
    lowerText.includes("kpi") ||
    lowerText.includes("dashboard")
  ) {
    matches.push("reporting-modernization");
  }
  if (
    lowerText.includes("governance") ||
    lowerText.includes("quality") ||
    lowerText.includes("controls")
  ) {
    matches.push("governance");
  }
  if (
    lowerText.includes("automation") ||
    lowerText.includes("etl") ||
    lowerText.includes("workflow")
  ) {
    matches.push("automation");
  }
  if (
    lowerText.includes("shared services") ||
    lowerText.includes("global") ||
    lowerText.includes("footprint")
  ) {
    matches.push("shared-services");
  }
  if (
    lowerText.includes("platform") ||
    lowerText.includes("data") ||
    lowerText.includes("analytics")
  ) {
    matches.push("analytics-platform");
  }

  return matches;
}

export function getSummary(input: BrainInput): string {
  // Priority 1: Scenario ID
  if (input.scenarioId && SCENARIO_SUMMARIES[input.scenarioId]) {
    return SCENARIO_SUMMARIES[input.scenarioId];
  }

  // Priority 2: Adapter
  if (input.adapter === "fortrea") {
    return "Fortrea operates in a CRO/Critical Ops environment. Key value themes: cycle-time reduction, reporting clarity, governance, shared services optimization.";
  }
  if (input.adapter === "pe") {
    return "PE-backed firms prioritize cost visibility, fast reporting cycles, governance, automation, and value creation through scalable systems.";
  }

  // Priority 3: Resume Text
  if (input.resumeText) {
    const matchedScenarios = detectScenarioFromText(input.resumeText);
    if (matchedScenarios.length > 0) {
      const scenarioLabels = matchedScenarios.map((id) => {
        const labels: Record<string, string> = {
          "cost-savings": "Cost Savings",
          "reporting-modernization": "Reporting Modernization",
          governance: "Data Governance & Controls",
          automation: "Automation & Workflow",
          "shared-services": "Shared Services Leadership",
          "analytics-platform": "Analytics Platform Build",
        };
        return labels[id] || id;
      });

      if (scenarioLabels.length === 1) {
        return `This resume bullet primarily aligns with ${scenarioLabels[0]}, indicating experience in related capabilities and value delivery.`;
      } else {
        return `This resume bullet primarily aligns with ${scenarioLabels.slice(0, -1).join(", ")} and ${scenarioLabels[scenarioLabels.length - 1]}, indicating experience across multiple transformation domains.`;
      }
    }
    return "This resume bullet demonstrates relevant experience that may connect to multiple scenarios.";
  }

  // Priority 4: Skills
  if (input.skills && input.skills.length > 0) {
    const skillsText = input.skills.join(" ").toLowerCase();
    const matchedScenarios = detectScenarioFromText(skillsText);
    if (matchedScenarios.length > 0) {
      return `These skills align with ${matchedScenarios.length > 1 ? "multiple scenarios" : "a relevant scenario"}, demonstrating capability in related domains.`;
    }
  }

  return "Context summary not available for this input.";
}

export function explain(input: BrainInput): string {
  return getSummary(input);
}




