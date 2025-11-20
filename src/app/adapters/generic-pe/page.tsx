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

const PE_KEYWORDS = [
  "cost savings",
  "reporting",
  "governance",
  "automation",
  "platform",
  "kpi",
  "self-service",
  "analytics",
  "transformation",
  "close",
  "controls",
];

export default function GenericPEPage() {
  const allEvidence = evidenceData.evidence as EvidenceItem[];
  const recommendedEvidence = rankEvidence(
    allEvidence,
    PE_KEYWORDS.join(" "),
    [],
    PE_KEYWORDS
  ).filter((item) => item.relevanceScore > 0).slice(0, 3);

  // Get recommended demos based on keywords
  const recommendedDemos: Array<{ label: string; href: string }> = [];
  const keywordsLower = PE_KEYWORDS.map((k) => k.toLowerCase());
  
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
        <h1 className="text-3xl font-bold mb-2">Private Equity — Value Creation Profile</h1>
        <p className="subtitle text-gray-600 mb-6">
          Tailored summary for portfolio company CFO, COO, and transformation roles
        </p>
      </div>

      {/* Context Summary */}
      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle className="text-lg">Context Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {explain({ adapter: "pe" })}
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
                  {item.resumeRefs && item.resumeRefs.length > 0 && (
                    <div className="mb-3">
                      <p className="text-xs text-muted-foreground mb-1 font-medium">Reference:</p>
                      <ul className="text-sm space-y-1">
                        {item.resumeRefs.map((ref, index) => (
                          <li key={index} className="text-muted-foreground">{ref}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {item.skills && item.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                  <div className="flex flex-col gap-2">
                    {item.links?.demo && (
                      <Button asChild variant="default" size="sm" className="w-full">
                        <Link href={item.links.demo}>View Demo</Link>
                      </Button>
                    )}
                    {item.links?.data && (
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <Link href={item.links.data}>View Data</Link>
                      </Button>
                    )}
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href={`/evidence?ref=${item.id}`}>View in Evidence</Link>
                    </Button>
                  </div>
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

      {/* Section A: The PE Environment */}
      <div>
        <Card>
          <CardHeader>
            <CardTitle>The PE Environment</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>Emphasis on value creation, cost visibility, and data accuracy</li>
              <li>Need for fast reporting, KPI clarity, and cash discipline</li>
              <li>Portfolio pressure for quick wins and operational stabilization</li>
              <li>Importance of governance, controls, and scalable systems</li>
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
              <CardTitle className="text-lg">Global Shared Services Value Creation</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Built global shared services that delivered $10M+ annual savings</li>
                <li>40% cost reduction while expanding service scope</li>
                <li>30% headcount reduction through automation</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">PE Portfolio Reporting Modernization</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Modernized reporting for middle-market PE portfolio companies</li>
                <li>Reduced manual reporting cycles by 80%</li>
                <li>Improved decision velocity for C-suite execution</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Process Mining + Automation Programs</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Process mining capabilities that cut cycle times</li>
                <li>Improved billing, collections, and service delivery</li>
                <li>Eliminated 10,000+ hours annually through automation</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Enterprise Governance Frameworks</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Data quality and reporting standards</li>
                <li>Reduced reconciliation time by 50%</li>
                <li>SOX/GAAP compliance leadership</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Analytics Platform Development</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Built analytics platforms to reduce ad hoc reporting by 70%</li>
                <li>Self-service analytics and operational dashboards</li>
                <li>Real-time KPI monitoring and variance reporting</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">PE-Backed Environment Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Operated in high-pressure, PE-backed environments</li>
                <li>Siguler Guff & Co. ($11B AUM) — Corporate Controller</li>
                <li>IQVIA — Global transformation leadership</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>


      {/* Section E: 90-Day Value Creation Plan */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">90-Day Value Creation Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">0–30 Days</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Map data/reporting stack, KPI gap analysis, stabilize close + reconciliation
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">30–60 Days</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Deliver first dashboards, implement rule automation, cut manual reporting by 30–40%
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">60–90 Days</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Build governance model, implement self-service analytics, define operating cadence
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
