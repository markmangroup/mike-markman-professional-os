"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import evidenceData from "@/core/evidence/evidence.json";
import { rankEvidence } from "@/lib/relevance";
import { explain } from "@/lib/mikeBrain";

interface EvidenceItem {
  id: string;
  title: string;
  source: string;
  resumeRefs: string[];
  skills: string[];
  links?: {
    demo?: string;
    data?: string;
  };
}

interface Scenario {
  id: string;
  label: string;
  keywords: string[];
  description: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "cost-savings",
    label: "Cost Savings",
    keywords: ["savings", "cost", "efficiency", "shared services"],
    description: "Examples of large-scale cost reduction and operating model transformation.",
  },
  {
    id: "reporting-modernization",
    label: "Reporting Modernization",
    keywords: ["reporting", "kpi", "dashboard", "visibility"],
    description: "Upgrading reporting systems for faster cycles, transparency, and KPI clarity.",
  },
  {
    id: "governance",
    label: "Data Governance & Controls",
    keywords: ["governance", "controls", "data quality", "certification"],
    description: "Governance frameworks, data lineage, and reporting quality improvements.",
  },
  {
    id: "automation",
    label: "Automation & Workflow",
    keywords: ["automation", "process", "workflow", "etl", "coE"],
    description: "Automation centers of excellence, process mining, and workflow orchestration.",
  },
  {
    id: "analytics-platform",
    label: "Analytics Platform Build",
    keywords: ["platform", "data", "analytics", "mining"],
    description: "Building analytics capabilities, data platforms, and self-service models.",
  },
  {
    id: "shared-services",
    label: "Shared Services Leadership",
    keywords: ["shared", "services", "global", "transformation"],
    description: "Leading global shared services, scaling teams, and delivering operational excellence.",
  },
];

function ScenariosContent() {
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);
  const allEvidence = evidenceData.evidence as EvidenceItem[];
  const searchParams = useSearchParams();
  const evidenceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const evidenceSectionRef = useRef<HTMLDivElement | null>(null);

  // Auto-select scenario based on resumeRef query param
  useEffect(() => {
    const resumeRef = searchParams.get("resumeRef");
    if (resumeRef && !selectedScenario) {
      const decodedRef = decodeURIComponent(resumeRef).toLowerCase();
      
      // Find matching scenario by checking keywords
      let bestMatch: Scenario | null = null;
      let bestMatchCount = 0;

      for (const scenario of SCENARIOS) {
        const matchCount = scenario.keywords.filter((keyword) =>
          decodedRef.includes(keyword.toLowerCase())
        ).length;
        
        if (matchCount > bestMatchCount) {
          bestMatchCount = matchCount;
          bestMatch = scenario;
        }
      }

      if (bestMatch) {
        setSelectedScenario(bestMatch);
      }
    }
  }, [searchParams, selectedScenario]);

  const getRecommendedEvidence = () => {
    if (!selectedScenario) return [];
    const query = selectedScenario.keywords.join(" ");
    const ranked = rankEvidence(allEvidence, query, [], []);
    return ranked.filter((item) => item.relevanceScore > 0).slice(0, 6);
  };

  // Auto-scroll to evidence section and highlight cards
  useEffect(() => {
    if (selectedScenario && searchParams.get("resumeRef")) {
      // Scroll to evidence section
      setTimeout(() => {
        if (evidenceSectionRef.current) {
          evidenceSectionRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }

        // Highlight evidence cards
        const recommendedEvidence = getRecommendedEvidence();
        recommendedEvidence.forEach((item) => {
          const cardElement = evidenceRefs.current[item.id];
          if (cardElement) {
            setTimeout(() => {
              cardElement.classList.add("highlight");
              setTimeout(() => {
                cardElement.classList.remove("highlight");
              }, 2000);
            }, 300);
          }
        });
      }, 100);
    }
  }, [selectedScenario, searchParams, allEvidence]);

  const handleScenarioClick = (scenario: Scenario) => {
    setSelectedScenario(scenario);
  };

  const getRecommendedDemos = () => {
    if (!selectedScenario) return [];
    const keywords = selectedScenario.keywords.map((k) => k.toLowerCase());
    const demos: Array<{ label: string; href: string }> = [];

    if (keywords.some((k) => k.includes("reporting"))) {
      demos.push({ label: "Reporting Engine", href: "/demos/reporting-engine" });
    }
    if (keywords.some((k) => k.includes("governance"))) {
      demos.push({ label: "Governance Explorer", href: "/demos/governance-explorer" });
    }
    if (keywords.some((k) => k.includes("automation"))) {
      demos.push({ label: "Automation Flow", href: "/demos/automation" });
      demos.push({ label: "Rule Engine", href: "/demos/rule-engine" });
    }
    if (keywords.some((k) => k.includes("shared"))) {
      demos.push({ label: "Governance Explorer", href: "/demos/governance-explorer" });
    }
    if (keywords.some((k) => k.includes("kpi") || k.includes("dashboard"))) {
      demos.push({ label: "KPI Dashboard", href: "/demos/kpi-dashboard" });
    }

    // Remove duplicates
    return Array.from(
      new Map(demos.map((demo) => [demo.href, demo])).values()
    );
  };

  const recommendedEvidence = getRecommendedEvidence();
  const recommendedDemos = getRecommendedDemos();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Scenarios</h1>
        <p className="subtitle text-gray-600 mb-6 dark:text-gray-400">
          Common leadership questions paired with relevant evidence and demos.
        </p>
      </div>

      {/* Scenarios Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SCENARIOS.map((scenario) => (
          <Card
            key={scenario.id}
            className="flex flex-col hover:shadow-md transition-all"
          >
            <CardHeader>
              <CardTitle className="text-lg mb-2">{scenario.label}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                {scenario.description}
              </p>
              <Button
                onClick={() => handleScenarioClick(scenario)}
                variant={selectedScenario?.id === scenario.id ? "default" : "outline"}
                className="w-full"
              >
                Explore
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Selected Scenario Results */}
      {selectedScenario && (
        <div className="space-y-6">
          {/* Context Summary */}
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg">Context Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                {explain({ scenarioId: selectedScenario.id })}
              </p>
              {searchParams.get("resumeRef") && (
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 pt-2 border-t">
                  {explain({
                    resumeText: decodeURIComponent(searchParams.get("resumeRef") || ""),
                  })}
                </p>
              )}
            </CardContent>
          </Card>

          {/* Recommended Evidence */}
          {recommendedEvidence.length > 0 && (
            <div ref={evidenceSectionRef}>
              <h2 className="text-2xl font-semibold mb-4">Recommended Evidence</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedEvidence.map((item) => (
                  <div
                    key={item.id}
                    ref={(el) => {
                      evidenceRefs.current[item.id] = el;
                    }}
                    className="transition-all"
                  >
                    <Card className="flex flex-col">
                    <CardHeader>
                      <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                      <p className="text-sm text-muted-foreground font-medium">
                        {item.source}
                      </p>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      {/* Resume References */}
                      {item.resumeRefs && item.resumeRefs.length > 0 && (
                        <div className="mb-4">
                          <p className="text-xs text-muted-foreground mb-1 font-medium">
                            Resume Reference:
                          </p>
                          <ul className="text-sm space-y-1">
                            {item.resumeRefs.map((ref, index) => (
                              <li key={index} className="text-muted-foreground">
                                {ref}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Skills */}
                      {item.skills && item.skills.length > 0 && (
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1.5">
                            {item.skills.map((skill, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="mt-auto pt-4 flex flex-col gap-2">
                        {item.links?.demo && (
                          <Button asChild variant="default" size="sm">
                            <Link href={item.links.demo}>View Demo</Link>
                          </Button>
                        )}
                        {item.links?.data && (
                          <Button asChild variant="outline" size="sm">
                            <Link href={item.links.data}>View Data</Link>
                          </Button>
                        )}
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/evidence?ref=${item.id}`}>View in Evidence</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recommended Demos */}
          {recommendedDemos.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Recommended Demos</h2>
              <div className="flex flex-wrap gap-4">
                {recommendedDemos.map((demo) => (
                  <Button key={demo.href} asChild variant="outline" size="lg">
                    <Link href={demo.href}>{demo.label}</Link>
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* No Results Message */}
          {recommendedEvidence.length === 0 && recommendedDemos.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">
                No specific recommendations for this scenario. Try exploring the evidence map or
                demos directly.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function ScenariosPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Scenarios</h1>
            <p className="subtitle text-gray-600 mb-6 dark:text-gray-400">
              Common leadership questions paired with relevant evidence and demos.
            </p>
          </div>
        </div>
      }
    >
      <ScenariosContent />
    </Suspense>
  );
}

