"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import resumeData from "@/core/resume.json";
import evidenceData from "@/core/evidence/evidence.json";
import skillsData from "@/core/skills.json";
import { rankEvidence } from "@/lib/relevance";

interface ExperienceEntry {
  company: string;
  location: string;
  title?: string;
  start?: string;
  end?: string;
  highlights?: string[];
  roles?: Array<{
    title: string;
    start: string;
    end: string;
    highlights?: string[];
  }>;
}

interface EvidenceItem {
  id: string;
  title: string;
  source: string;
  resumeRefs: string[];
  skills: string[];
  links?: {
    demo?: string;
    data?: string;
    deck?: string;
  };
}

function findEvidenceIdForHighlight(highlightText: string): string | null {
  const evidence = evidenceData.evidence;
  for (const item of evidence) {
    if (item.resumeRefs.some((ref) => highlightText.includes(ref) || ref.includes(highlightText))) {
      return item.id;
    }
  }
  return null;
}

function getRelevantEvidence(company: string): EvidenceItem[] {
  const allEvidence = evidenceData.evidence as EvidenceItem[];
  const lowerCompany = company.toLowerCase();
  
  // Filter evidence where source or resumeRefs mention the company
  const relevant = allEvidence.filter((item) => {
    const sourceMatch = item.source.toLowerCase().includes(lowerCompany);
    const resumeRefMatch = item.resumeRefs.some((ref) => 
      ref.toLowerCase().includes(lowerCompany)
    );
    return sourceMatch || resumeRefMatch;
  });
  
  // Use relevance scoring to rank and return top 2-3
  const ranked = rankEvidence(relevant, company, [], []);
  return ranked.slice(0, 3).filter((item) => item.relevanceScore > 0);
}

function getRecommendedDemos(company: string): { label: string; href: string }[] {
  const lowerCompany = company.toLowerCase();
  
  if (lowerCompany.includes("iqvia")) {
    return [
      { label: "Governance Explorer", href: "/demos/governance-explorer" },
      { label: "KPI Dashboard", href: "/demos/kpi-dashboard" },
    ];
  }
  if (lowerCompany.includes("gfss") || lowerCompany.includes("shared services")) {
    return [
      { label: "KPI Dashboard", href: "/demos/kpi-dashboard" },
      { label: "Governance Explorer", href: "/demos/governance-explorer" },
    ];
  }
  if (lowerCompany.includes("metropolitan")) {
    return [
      { label: "Reporting Engine", href: "/demos/reporting-engine" },
    ];
  }
  if (lowerCompany.includes("laurel")) {
    return [
      { label: "Automation Flow", href: "/demos/automation" },
      { label: "Rule Engine", href: "/demos/rule-engine" },
    ];
  }
  if (lowerCompany.includes("q2")) {
    return [
      { label: "Reporting Engine", href: "/demos/reporting-engine" },
    ];
  }
  if (lowerCompany.includes("markman group")) {
    return [
      { label: "Automation Flow", href: "/demos/automation" },
      { label: "Reporting Engine", href: "/demos/reporting-engine" },
    ];
  }
  return [];
}

function getAssociatedSkills(company: string, roleTitle?: string): string[] {
  const allSkills: string[] = [];
  Object.values(skillsData.domains).forEach((domainSkills) => {
    allSkills.push(...domainSkills);
  });
  
  const lowerCompany = company.toLowerCase();
  const lowerRole = roleTitle?.toLowerCase() || "";
  const searchTerms = [lowerCompany, lowerRole];
  
  // Extract keywords from company/role
  const keywords: string[] = [];
  if (lowerCompany.includes("iqvia")) {
    keywords.push("analytics", "automation", "shared services", "governance", "reporting");
  }
  if (lowerCompany.includes("metropolitan")) {
    keywords.push("governance", "reporting", "data", "controls");
  }
  if (lowerCompany.includes("laurel")) {
    keywords.push("automation", "workflow", "operations", "process");
  }
  if (lowerCompany.includes("q2")) {
    keywords.push("accounting", "sox", "gaap", "financial reporting", "controls");
  }
  if (lowerRole.includes("analytics") || lowerRole.includes("data")) {
    keywords.push("analytics", "data", "reporting", "kpi");
  }
  if (lowerRole.includes("shared services") || lowerRole.includes("finance")) {
    keywords.push("shared services", "finance", "operations", "process");
  }
  
  // Match skills that contain keywords
  const matched = allSkills.filter((skill) => {
    const lowerSkill = skill.toLowerCase();
    return keywords.some((keyword) => lowerSkill.includes(keyword));
  });
  
  return [...new Set(matched)].slice(0, 8); // Remove duplicates and limit
}

export default function ResumePage() {
  const experience = resumeData.experience as ExperienceEntry[];
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const formatDateRange = (start?: string, end?: string) => {
    if (!start) return "";
    const startDate = start ? new Date(start + "-01").toLocaleDateString("en-US", { year: "numeric", month: "short" }) : "";
    const endDate = end === "Present" ? "Present" : end ? new Date(end + "-01").toLocaleDateString("en-US", { year: "numeric", month: "short" }) : "";
    return `${startDate} - ${endDate}`;
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      {/* Name and Summary */}
      <div>
        <h1 className="text-3xl font-bold mb-2">
          {resumeData.name}
          {resumeData.credentials && resumeData.credentials.length > 0 && (
            <span className="text-2xl font-normal text-muted-foreground ml-2">
              {resumeData.credentials.join(", ")}
            </span>
          )}
        </h1>
        <p className="subtitle text-gray-600 mb-6">{resumeData.executiveSummary}</p>
      </div>

      {/* Core Expertise */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Core Expertise</h2>
        <div className="flex flex-wrap gap-2">
          {resumeData.coreExpertise.map((expertise, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
            >
              {expertise}
            </span>
          ))}
        </div>
      </div>

      {/* Work Experience */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
        <div className="space-y-4">
          {experience.map((job, index) => {
            const isExpanded = expandedIndex === index;
            const relevantEvidence = getRelevantEvidence(job.company);
            const recommendedDemos = getRecommendedDemos(job.company);
            const primaryRole = job.roles?.[0] || { title: job.title || "" };
            const associatedSkills = getAssociatedSkills(job.company, primaryRole.title);
            
            return (
              <div key={index}>
                <Card className="card">
                  <CardHeader 
                    className="cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">{job.company}</CardTitle>
                        <p className="text-sm text-muted-foreground">{job.location}</p>
                      </div>
                      <span className="text-muted-foreground text-sm">
                        {isExpanded ? "▼" : "▶"}
                      </span>
                    </div>
                  </CardHeader>
              <CardContent>
                {job.roles ? (
                  // Handle multiple roles (like IQVIA)
                  <div className="space-y-4">
                    {job.roles.map((role, roleIndex) => (
                      <div key={roleIndex} className={roleIndex > 0 ? "pt-4 border-t" : ""}>
                        <p className="font-semibold mb-1">{role.title}</p>
                        <p className="text-sm text-muted-foreground mb-2">
                          {formatDateRange(role.start, role.end)}
                        </p>
                        {role.highlights && role.highlights.length > 0 && (
                          <ul className="text-sm space-y-1 mt-2">
                            {role.highlights.map((highlight, hIndex) => {
                              const evidenceId = findEvidenceIdForHighlight(highlight);
                              const encodedRef = encodeURIComponent(highlight);
                              return (
                                <li key={hIndex} className="text-muted-foreground">
                                  {evidenceId ? (
                                    <>
                                      <Link
                                        href={`/evidence?ref=${evidenceId}`}
                                        className="hover:text-primary hover:underline cursor-pointer"
                                      >
                                        {highlight}
                                      </Link>
                                      {" • "}
                                      <Link
                                        href={`/scenarios?resumeRef=${encodedRef}`}
                                        className="hover:text-primary hover:underline cursor-pointer text-xs"
                                      >
                                        View Scenario
                                      </Link>
                                    </>
                                  ) : (
                                    <>
                                      {highlight}
                                      {" • "}
                                      <Link
                                        href={`/scenarios?resumeRef=${encodedRef}`}
                                        className="hover:text-primary hover:underline cursor-pointer text-xs"
                                      >
                                        View Scenario
                                      </Link>
                                    </>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  // Handle single title
                  <div>
                    <p className="font-semibold mb-1">{job.title}</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      {formatDateRange(job.start, job.end)}
                    </p>
                    {job.highlights && job.highlights.length > 0 && (
                      <ul className="text-sm space-y-1 mt-2">
                        {job.highlights.map((highlight, hIndex) => {
                          const evidenceId = findEvidenceIdForHighlight(highlight);
                          const encodedRef = encodeURIComponent(highlight);
                          return (
                            <li key={hIndex} className="text-muted-foreground">
                              {evidenceId ? (
                                <>
                                  <Link
                                    href={`/evidence?ref=${evidenceId}`}
                                    className="hover:text-primary hover:underline cursor-pointer"
                                  >
                                    {highlight}
                                  </Link>
                                  {" • "}
                                  <Link
                                    href={`/scenarios?resumeRef=${encodedRef}`}
                                    className="hover:text-primary hover:underline cursor-pointer text-xs"
                                  >
                                    View Scenario
                                  </Link>
                                </>
                              ) : (
                                <>
                                  {highlight}
                                  {" • "}
                                  <Link
                                    href={`/scenarios?resumeRef=${encodedRef}`}
                                    className="hover:text-primary hover:underline cursor-pointer text-xs"
                                  >
                                    View Scenario
                                  </Link>
                                </>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                )}
              </CardContent>
                </Card>
                
                {/* Expanded Panel */}
                {isExpanded && (
                  <Card className="card mt-4 transition-all duration-300 ease-in-out">
                    <CardContent className="pt-6 space-y-6">
                      {/* Relevant Evidence */}
                      {relevantEvidence.length > 0 && (
                        <div>
                          <h3 className="text-lg font-semibold mb-3">Relevant Evidence</h3>
                          <div className="space-y-3">
                            {relevantEvidence.map((item) => (
                              <div key={item.id} className="p-3 border rounded-lg bg-muted/30">
                                <p className="font-medium text-sm mb-2">{item.title}</p>
                                <div className="flex flex-wrap gap-2">
                                  {item.links?.deck && (
                                    <Button asChild variant="outline" size="sm">
                                      <a
                                        href={item.links.deck}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        Open File
                                      </a>
                                    </Button>
                                  )}
                                  <Button asChild variant="default" size="sm">
                                    <Link href={`/evidence?ref=${item.id}`}>
                                      View in Evidence
                                    </Link>
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Recommended Demos */}
                      {recommendedDemos.length > 0 && (
                        <div>
                          <h3 className="text-lg font-semibold mb-3">Recommended Demos</h3>
                          <div className="flex flex-wrap gap-2">
                            {recommendedDemos.map((demo, demoIndex) => (
                              <Button key={demoIndex} asChild variant="outline" size="sm">
                                <Link href={demo.href}>{demo.label}</Link>
                              </Button>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Associated Skills */}
                      {associatedSkills.length > 0 && (
                        <div>
                          <h3 className="text-lg font-semibold mb-3">Associated Skills</h3>
                          <div className="flex flex-wrap gap-2">
                            {associatedSkills.map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
