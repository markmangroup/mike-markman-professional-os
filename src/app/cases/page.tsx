"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function CasesPage() {
  const [expandedCase, setExpandedCase] = useState<string | null>(null);

  const toggleCase = (caseId: string) => {
    setExpandedCase(expandedCase === caseId ? null : caseId);
  };
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      <div>
        <h1 className="text-3xl font-bold mb-2">Case Studies</h1>
        <p className="subtitle text-gray-600 mb-6 dark:text-gray-400">
          A curated selection of high-impact systems and transformations I've delivered.
        </p>
      </div>

      {/* IQVIA — Enterprise Automation & Analytics */}
      <Card className="card">
        <CardHeader>
          <CardTitle>IQVIA — Enterprise Automation & Analytics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Led enterprise automation, analytics modernization, and data platform development across IQVIA's Shared Services, Controller functions, and ED&A organization. Delivered 400+ workflows, process mining capabilities, reporting modernization, and global data governance.
          </p>

          <div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => toggleCase("iqvia")}
              className="flex items-center gap-2 px-0 hover:bg-transparent"
            >
              <span className="text-sm font-semibold text-muted-foreground">
                View Artifacts (3)
              </span>
              {expandedCase === "iqvia" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>

            {expandedCase === "iqvia" && (
              <div className="flex flex-col gap-2 mt-3">
                <Button asChild variant="outline" size="sm">
                  <Link href="/evidence?ref=iqvia-automation-analytics">IQVIA GFSS Automation & Analytics Expansion</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/evidence?ref=iqvia-eda-program-review">IQVIA Enterprise Data & Analytics Program Review</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/evidence?ref=iqvia-q2-controller">Q² Solutions – Global Controller</Link>
                </Button>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Button asChild variant="default" size="sm">
              <Link href="/demos/governance-explorer">Recommended Demo</Link>
            </Button>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Automation</Badge>
              <Badge variant="outline">Analytics</Badge>
              <Badge variant="outline" className="hidden sm:inline-flex">Shared Services</Badge>
              <Badge variant="secondary" className="text-xs">+2 more</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Metropolitan — Private Credit Reporting & Governance */}
      <Card className="card">
        <CardHeader>
          <CardTitle>Metropolitan — Private Credit Reporting & Governance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Delivered a full current state assessment, reporting modernization plan, data lineage framework, and quick wins roadmap for a private credit firm. Work included system diagrams, reporting definitions, and governance design.
          </p>

          <div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => toggleCase("metropolitan")}
              className="flex items-center gap-2 px-0 hover:bg-transparent"
            >
              <span className="text-sm font-semibold text-muted-foreground">
                View Artifacts (3)
              </span>
              {expandedCase === "metropolitan" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>

            {expandedCase === "metropolitan" && (
              <div className="flex flex-col gap-2 mt-3">
                <Button asChild variant="outline" size="sm">
                  <Link href="/evidence?ref=metropolitan-current-state">Metropolitan Current State Assessment</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/evidence?ref=metropolitan-quick-wins">Metropolitan Quick Wins Proposal</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/evidence?ref=metropolitan-diagram">Metropolitan System & Workflow Diagram</Link>
                </Button>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Button asChild variant="default" size="sm">
              <Link href="/demos/reporting-engine">Recommended Demo</Link>
            </Button>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Reporting</Badge>
              <Badge variant="outline">Governance</Badge>
              <Badge variant="outline" className="hidden sm:inline-flex">Private Credit</Badge>
              <Badge variant="secondary" className="text-xs">+2 more</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Laurel AG — Operational Workflow & Automation Platform */}
      <Card className="card">
        <CardHeader>
          <CardTitle>Laurel AG — Operational Workflow & Automation Platform</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Designed and built a comprehensive proposal platform, rental lifecycle system, and operational workflow engine for Laurel AG. Work includes full product lifecycle management, data modeling, system architecture, and automation of an 8-stage rental workflow.
          </p>

          <div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => toggleCase("laurel")}
              className="flex items-center gap-2 px-0 hover:bg-transparent"
            >
              <span className="text-sm font-semibold text-muted-foreground">
                View Artifacts (4)
              </span>
              {expandedCase === "laurel" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>

            {expandedCase === "laurel" && (
              <div className="flex flex-col gap-2 mt-3">
                <Button asChild variant="outline" size="sm">
                  <Link href="/evidence?ref=laurel-proposal-platform-features">Laurel AG – Proposal Web Platform Features</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/evidence?ref=laurel-rental-tech-spec">Laurel AG – Technical Specification for Rental Process</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/evidence?ref=laurel-rental-business-doc">Laurel AG – Business Documentation for Rental Process</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/evidence?ref=laurel-rental-application-handover">Laurel AG – Rental Application User Manual</Link>
                </Button>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Button asChild variant="default" size="sm">
              <Link href="/demos/automation">Recommended Demo</Link>
            </Button>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Workflow Automation</Badge>
              <Badge variant="outline">Product Development</Badge>
              <Badge variant="outline" className="hidden sm:inline-flex">Logistics</Badge>
              <Badge variant="secondary" className="text-xs">+2 more</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Markman Group — Consulting & Product Delivery */}
      <Card className="card">
        <CardHeader>
          <CardTitle>Markman Group — Consulting & Product Delivery</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Delivered transformation advisory, product development, reporting modernization, and operational design across multiple clients including Metropolitan, Laurel AG, and internal Markman Group initiatives.
          </p>

          <div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => toggleCase("markman")}
              className="flex items-center gap-2 px-0 hover:bg-transparent"
            >
              <span className="text-sm font-semibold text-muted-foreground">
                View Evidence
              </span>
              {expandedCase === "markman" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>

            {expandedCase === "markman" && (
              <div className="flex flex-col gap-2 mt-3">
                <Button asChild variant="outline" size="sm">
                  <Link href="/evidence?q=markman">View Markman Group Evidence</Link>
                </Button>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Button asChild variant="default" size="sm">
              <Link href="/home">Recommended Demo</Link>
            </Button>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Consulting</Badge>
              <Badge variant="outline">Product Design</Badge>
              <Badge variant="outline" className="hidden sm:inline-flex">Transformation</Badge>
              <Badge variant="secondary" className="text-xs">+2 more</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* KKR / Siguler Guff — Institutional Finance & Systems */}
      <Card className="card">
        <CardHeader>
          <CardTitle>KKR / Siguler Guff — Institutional Finance & Systems</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Supported enterprise FP&A, SAP platform buildout, and private equity financial operations across KKR and Siguler Guff. Work included global planning, reporting, and systems design.
          </p>

          <div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => toggleCase("kkr")}
              className="flex items-center gap-2 px-0 hover:bg-transparent"
            >
              <span className="text-sm font-semibold text-muted-foreground">
                View Evidence (2)
              </span>
              {expandedCase === "kkr" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>

            {expandedCase === "kkr" && (
              <div className="flex flex-col gap-2 mt-3">
                <Button asChild variant="outline" size="sm">
                  <Link href="/evidence?q=kkr">View KKR Evidence</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/evidence?q=siguler">View Siguler Guff Evidence</Link>
                </Button>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Button asChild variant="default" size="sm">
              <Link href="/demos/reporting-engine">Recommended Demo</Link>
            </Button>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">FP&A</Badge>
              <Badge variant="outline">Systems Design</Badge>
              <Badge variant="outline" className="hidden sm:inline-flex">Institutional Finance</Badge>
              <Badge variant="secondary" className="text-xs">+1 more</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
