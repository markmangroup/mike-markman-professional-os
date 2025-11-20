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

const FORTREA_KEYWORDS = [
  "shared services",
  "operations",
  "cycle time",
  "billing",
  "collections",
  "governance",
  "process mining",
  "automation",
  "reporting",
  "kpi",
  "analytics",
];

export default function FortreaPage() {
  const allEvidence = evidenceData.evidence as EvidenceItem[];
  const recommendedEvidence = rankEvidence(
    allEvidence,
    FORTREA_KEYWORDS.join(" "),
    [],
    FORTREA_KEYWORDS
  ).filter((item) => item.relevanceScore > 0).slice(0, 3);

  // Get recommended demos based on keywords
  const recommendedDemos: Array<{ label: string; href: string }> = [];
  const keywordsLower = FORTREA_KEYWORDS.map((k) => k.toLowerCase());
  
  if (keywordsLower.some((k) => k.includes("reporting"))) {
    recommendedDemos.push({ label: "Reporting Engine", href: "/demos/reporting-engine" });
  }
  if (keywordsLower.some((k) => k.includes("governance"))) {
    recommendedDemos.push({ label: "Governance Explorer", href: "/demos/governance-explorer" });
  }
  if (keywordsLower.some((k) => k.includes("automation"))) {
    recommendedDemos.push({ label: "Automation Flow", href: "/demos/automation" });
    recommendedDemos.push({ label: "Rule Engine", href: "/demos/rule-engine" });
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Fortrea — Role Fit Overview</h1>
        <p className="subtitle text-gray-600 mb-6">
          Tailored summary for senior finance, operations, or analytics leadership roles
        </p>
      </div>

      {/* Context Summary */}
      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle className="text-lg">Context Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {explain({ adapter: "fortrea" })}
          </p>
        </CardContent>
      </Card>

      {/* Recommended Evidence Section */}
      {recommendedEvidence.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Recommended Evidence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {recommendedEvidence.map((item) => (
              <Card
                key={item.id}
                className="border-blue-400 border-2 shadow-blue-300/20 dark:border-blue-500"
              >
                <CardHeader>
                  <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">{item.source}</p>
                </CardHeader>
                <CardContent>
                  {item.skills && item.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                  {item.links?.demo && (
                    <Button asChild variant="default" size="sm" className="w-full mb-2">
                      <Link href={item.links.demo}>View Demo</Link>
                    </Button>
                  )}
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href={`/evidence?ref=${item.id}`}>View in Evidence</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Recommended Demos Section */}
      {recommendedDemos.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Recommended Demos</h2>
          <div className="flex flex-wrap gap-4 mb-6">
            {recommendedDemos.map((demo) => (
              <Button key={demo.href} asChild variant="default" size="lg">
                <Link href={demo.href}>{demo.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Section A: Company Summary */}
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Company Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Fortrea:</strong> Global clinical development and CRO operations
              </li>
              <li>Large operational footprint</li>
              <li>Heavy shared services and financial complexity</li>
              <li>
                Emphasis on cycle times, billing, collections, and operational KPIs
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Section B: Why I'm a Fit */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Why I'm a Fit</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Global Shared Services Leadership</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Led 400+ person global organization</li>
                <li>AP, AR, payroll, T&E, tax, and close operations</li>
                <li>$10M (40%) annualized savings achieved</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Process Mining + Operations Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Built enterprise operations data platform</li>
                <li>Process mining capabilities (Celonis)</li>
                <li>Improved cycle times in billing and collections</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Automation COEs + Workflow Transformation</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Founded Centers of Excellence for automation tools</li>
                <li>Eliminated 10,000+ hours annually</li>
                <li>Celonis, Tableau, Alteryx, Python, Power Platform</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Reporting Modernization and KPI Platforms</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Reduced manual reporting cycles by 80%</li>
                <li>Cloud-based operations dashboards</li>
                <li>Real-time KPI monitoring and variance reporting</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">CRO / Life Sciences Domain Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>IQVIA experience (VP, Enterprise Data & Analytics)</li>
                <li>Global operations in regulated environments</li>
                <li>Service delivery optimization</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">M&A, Controls, SOX, Financial Platforms</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>SOX/GAAP compliance leadership</li>
                <li>M&A due diligence support</li>
                <li>SAP and ERP platform implementation</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>


      {/* Section E: First 90 Days */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">First 90 Days</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">0-30 Days</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Assess reporting stack, map cycle times, analyze billing/collections workflow
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">30-60 Days</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Implement quick-win dashboards & KPIs; reduce reconciliation burden
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">60-90 Days</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Stand up governance + automation ceremonies; enable self-service analytics
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
