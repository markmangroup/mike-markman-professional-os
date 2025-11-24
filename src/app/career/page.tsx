"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageLayout, { PageMeta } from "@/components/PageLayout";

const meta: PageMeta = {
  what: "A comprehensive timeline of my professional journey spanning 20+ years across finance, analytics, operations, and transformation roles.",
  why: "Understanding career progression provides context for how I approach problems, build systems, and lead teams. Each role built on previous experience, creating a unique blend of technical depth and operational leadership.",
  relatedSkills: ["Financial Operations", "Team Leadership", "Process Automation", "Data Analytics", "SOX Compliance"],
  relatedSystems: [
    { label: "Reporting Engine", href: "/demos/reporting-engine" },
    { label: "KPI Dashboard", href: "/demos/kpi-dashboard" },
    { label: "Governance Explorer", href: "/demos/governance-explorer" },
  ],
  relatedEvidence: [
    { label: "IQVIA Evidence", href: "/evidence?q=iqvia" },
    { label: "Q² Solutions Evidence", href: "/evidence?q=q2" },
    { label: "Analytics Evidence", href: "/evidence?q=analytics" },
  ],
};

export default function CareerPage() {
  return (
    <PageLayout
      title="Career"
      subtitle="A timeline of my professional journey across finance, analytics, and transformation."
      meta={meta}
    >
      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-muted-foreground mb-4">
          Over 20 years building systems, teams, and intelligence for global organizations. 
          My career spans from Big 4 audit and advisory work, through private equity finance 
          and operations, to enterprise-scale transformation leadership at IQVIA, and now 
          independent consulting through Markman Group.
        </p>
        <p className="text-muted-foreground">
          Each role has focused on bringing clarity, structure, and automation to complex 
          operational and financial challenges. I've consistently delivered measurable 
          improvements in efficiency, accuracy, and visibility while building scalable 
          systems and high-performing teams.
        </p>
      </section>

      {/* How I work in this area */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">How I work in this area</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Systems-first thinking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                I design solutions that scale. Whether it's a financial platform, reporting 
                infrastructure, or operational workflow, I build with maintainability, 
                automation, and extensibility in mind. This means investing in the right 
                architecture upfront and creating reusable patterns.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Data-driven decision making</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                I embed analytics and visibility into every process. This means building 
                dashboards, KPIs, and reporting that enable real-time decision making 
                rather than post-mortem analysis. I've consistently reduced cycle times 
                and improved accuracy by making data accessible and actionable.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Operational excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                I focus on the fundamentals: clear processes, strong controls, efficient 
                workflows, and continuous improvement. This has enabled me to reduce close 
                cycles, eliminate manual work, and scale operations while maintaining 
                quality and compliance.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Team building and capability development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                I build Centers of Excellence and invest in team capabilities. At IQVIA, 
                I founded COEs for automation tools (Celonis, Power Platform), analytics 
                (Tableau, Alteryx, Python), and data governance. I believe in enabling 
                teams with the right tools and training to solve problems independently.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Real-world examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Real-world examples</h2>
        <div className="space-y-6">
          {/* EY */}
          <Card>
            <CardHeader>
              <CardTitle>Ernst & Young LLP</CardTitle>
              <p className="text-sm text-muted-foreground">2005 - 2010</p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Assurance Advisory Services – Financial Services Office. Led audit and 
                advisory work for major investment banks and PE firms including Apollo, 
                Merrill Lynch, Bear Stearns, UBS, NAB. Supported critical merger and 
                liquidation engagements.
              </p>
            </CardContent>
          </Card>

          {/* KKR */}
          <Card>
            <CardHeader>
              <CardTitle>KKR</CardTitle>
              <p className="text-sm text-muted-foreground">2010 - 2013</p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Management Company / FP&A. Founding team member establishing the consolidated 
                Firm-wide operating plan. Co-designed SAP financial platform as new global 
                system of record. Overhauled quarterly close process improving efficiency by 30%.
              </p>
            </CardContent>
          </Card>

          {/* Siguler Guff */}
          <Card>
            <CardHeader>
              <CardTitle>Siguler Guff & Co.</CardTitle>
              <p className="text-sm text-muted-foreground">2013 - 2017</p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Vice President – Corporate Controller. Directed all accounting and financial 
                operations for $11B AUM PE firm. Reduced close cycle from 15 to 5 business 
                days. Managed consolidations, GAAP compliance, SOX audits, and regulatory reporting.
              </p>
            </CardContent>
          </Card>

          {/* IQVIA — Unified Section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold mb-2">IQVIA — Enterprise Finance, Operations & Data</h3>
              <p className="text-sm text-muted-foreground">2017 - 2024</p>
            </div>

            <div className="space-y-4 pl-4 border-l-2 border-border">
              {/* Global Controller (Q² Solutions JV) */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Global Controller (Q² Solutions JV)</CardTitle>
                  <p className="text-sm text-muted-foreground">2017 - 2018</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Oversaw all global accounting operations and regulatory compliance for the 
                    Q² Solutions joint venture between IQVIA and Quest Diagnostics. Implemented 
                    scalable controls supporting rapid business expansion. Managed SOX/GAAP 
                    compliance, close operations, consolidation, and controls. Eliminated $10M+ 
                    in parent-company debt enabling record partner distributions.
                  </p>
                </CardContent>
              </Card>

              {/* VP, Global Financial Shared Services (GFSS) */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">VP, Global Financial Shared Services (GFSS)</CardTitle>
                  <p className="text-sm text-muted-foreground">2019 - 2022</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Led 400-person global organization across AP, AR, payroll, T&E, tax, and 
                    close operations. Achieved $10M (40%) annualized savings and 30% headcount 
                    reduction while expanding service scope. Founded Centers of Excellence for 
                    Celonis, Tableau, Alteryx, Python, and Power Platform. Implemented advanced 
                    automation eliminating 10,000+ hours annually, deploying 400+ workflows. 
                    Served as CAO backup for SOX/GAAP compliance and supported M&A due diligence.
                  </p>
                </CardContent>
              </Card>

              {/* VP, Enterprise Data & Analytics (ED&A) */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">VP, Enterprise Data & Analytics (ED&A)</CardTitle>
                  <p className="text-sm text-muted-foreground">2022 - 2024</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Built enterprise operations data platform and process mining capabilities 
                    improving cycle times in billing, collections, and service delivery. Embedded 
                    automation and analytics into operational planning across global regions. 
                    Delivered governance framework for enterprise data quality and reporting 
                    standards reducing reconciliation time by 50%. Scaled analytics infrastructure 
                    reducing ad-hoc requests by 70%.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Markman Group */}
          <Card>
            <CardHeader>
              <CardTitle>Markman Group</CardTitle>
              <p className="text-sm text-muted-foreground">2024 - Present</p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Partner, Data & Operations Transformation. Designed and implemented proposal 
                automation platform for an agritech company integrating CRM data, product 
                catalogs, labor tracking, and customer management to reduce cycle time from 
                days to hours. Built cloud-based operations dashboards enabling real-time KPI 
                monitoring, cash flow analysis, and variance reporting. Led operational reporting 
                modernization for middle-market PE portfolio company, reducing manual reporting 
                cycles by 80%. Delivered current-state assessment for private credit firm 
                including organizational structure, reporting workflows, cross-functional 
                dependencies, and data infrastructure to inform transformation roadmap.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
}
