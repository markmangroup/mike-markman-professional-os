"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CareerPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Career Overview</h1>
        <p className="subtitle text-gray-600 mb-6 dark:text-gray-400">
          A timeline of my professional journey across finance, analytics, and transformation.
        </p>
      </div>

      {/* Timeline */}
      <div className="space-y-8">
        {/* EY */}
        <Card className="card">
          <CardHeader>
            <CardTitle>Ernst & Young LLP</CardTitle>
            <p className="text-sm text-muted-foreground">2005 - 2010</p>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Assurance Advisory Services – Financial Services Office. Led audit and advisory work for major investment banks and PE firms including Apollo, Merrill Lynch, Bear Stearns, UBS, NAB. Supported critical merger and liquidation engagements.
            </p>
          </CardContent>
        </Card>

        {/* KKR */}
        <Card className="card">
          <CardHeader>
            <CardTitle>KKR</CardTitle>
            <p className="text-sm text-muted-foreground">2010 - 2013</p>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Management Company / FP&A. Founding team member establishing the consolidated Firm-wide operating plan. Co-designed SAP financial platform as new global system of record. Overhauled quarterly close process improving efficiency by 30%.
            </p>
          </CardContent>
        </Card>

        {/* Siguler Guff */}
        <Card className="card">
          <CardHeader>
            <CardTitle>Siguler Guff & Co.</CardTitle>
            <p className="text-sm text-muted-foreground">2013 - 2017</p>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Vice President – Corporate Controller. Directed all accounting and financial operations for $11B AUM PE firm. Reduced close cycle from 15 to 5 business days. Managed consolidations, GAAP compliance, SOX audits, and regulatory reporting.
            </p>
          </CardContent>
        </Card>

        {/* IQVIA — Unified Section */}
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">IQVIA — Enterprise Finance, Operations & Data</h2>
            <p className="text-sm text-muted-foreground">2017 - 2024</p>
          </div>

          <div className="space-y-4 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
            {/* Global Controller (Q² Solutions JV) */}
            <Card className="card">
              <CardHeader>
                <CardTitle className="text-lg">Global Controller (Q² Solutions JV)</CardTitle>
                <p className="text-sm text-muted-foreground">2017 - 2018</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  Oversaw all global accounting operations and regulatory compliance for the Q² Solutions joint venture between IQVIA and Quest Diagnostics. Implemented scalable controls supporting rapid business expansion. Managed SOX/GAAP compliance, close operations, consolidation, and controls. Eliminated $10M+ in parent-company debt enabling record partner distributions.
                </p>
                <div className="flex flex-col gap-2">
                  <Button asChild variant="default" size="sm">
                    <Link href="/evidence?q=q2">Relevant Evidence</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/demos/reporting-engine">Recommended Demo</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* VP, Global Financial Shared Services (GFSS) */}
            <Card className="card">
              <CardHeader>
                <CardTitle className="text-lg">VP, Global Financial Shared Services (GFSS)</CardTitle>
                <p className="text-sm text-muted-foreground">2019 - 2022</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  Led 400-person global organization across AP, AR, payroll, T&E, tax, and close operations. Achieved $10M (40%) annualized savings and 30% headcount reduction while expanding service scope. Founded Centers of Excellence for Celonis, Tableau, Alteryx, Python, and Power Platform. Implemented advanced automation eliminating 10,000+ hours annually, deploying 400+ workflows. Served as CAO backup for SOX/GAAP compliance and supported M&A due diligence.
                </p>
                <div className="flex flex-col gap-2">
                  <Button asChild variant="default" size="sm">
                    <Link href="/evidence?q=iqvia">Relevant Evidence</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/demos/kpi-dashboard">Recommended Demo</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* VP, Enterprise Data & Analytics (ED&A) */}
            <Card className="card">
              <CardHeader>
                <CardTitle className="text-lg">VP, Enterprise Data & Analytics (ED&A)</CardTitle>
                <p className="text-sm text-muted-foreground">2022 - 2024</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  Built enterprise operations data platform and process mining capabilities improving cycle times in billing, collections, and service delivery. Embedded automation and analytics into operational planning across global regions. Delivered governance framework for enterprise data quality and reporting standards reducing reconciliation time by 50%. Scaled analytics infrastructure reducing ad-hoc requests by 70%.
                </p>
                <div className="flex flex-col gap-2">
                  <Button asChild variant="default" size="sm">
                    <Link href="/evidence?q=analytics">Relevant Evidence</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/demos/governance-explorer">Recommended Demo</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Markman Group */}
        <Card className="card">
          <CardHeader>
            <CardTitle>Markman Group</CardTitle>
            <p className="text-sm text-muted-foreground">2024 - Present</p>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Partner, Data & Operations Transformation. Designed and implemented proposal automation platform for an agritech company integrating CRM data, product catalogs, labor tracking, and customer management to reduce cycle time from days to hours. Built cloud-based operations dashboards enabling real-time KPI monitoring, cash flow analysis, and variance reporting. Led operational reporting modernization for middle-market PE portfolio company, reducing manual reporting cycles by 80%. Delivered current-state assessment for private credit firm including organizational structure, reporting workflows, cross-functional dependencies, and data infrastructure to inform transformation roadmap.
            </p>
          </CardContent>
        </Card>

        {/* Future: Mike OS */}
        <Card className="card border-dashed">
          <CardHeader>
            <CardTitle className="text-muted-foreground">Mike OS</CardTitle>
            <p className="text-sm text-muted-foreground">Future</p>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm italic">
              A professional operating system showcasing real work across finance, analytics, automation, and reporting.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
