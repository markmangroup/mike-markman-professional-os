"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PageLayout, { PageMeta } from "@/components/PageLayout";

const meta: PageMeta = {
  what: "Interactive examples representing the types of reporting, automation, governance, and product systems I've delivered across my career.",
  why: "These systems demonstrate my approach to building scalable, user-friendly solutions. Each represents real patterns and architectures I've used in production environments.",
  relatedSkills: ["System Architecture", "Data Modeling", "UI/UX Design", "Process Automation", "Governance"],
  relatedSystems: [
    { label: "Reporting Engine", href: "/demos/reporting-engine" },
    { label: "Governance Explorer", href: "/demos/governance-explorer" },
    { label: "Rule Engine", href: "/demos/rule-engine" },
    { label: "Automation Flow", href: "/demos/automation" },
  ],
  relatedEvidence: [
    { label: "Reporting Case Studies", href: "/cases?q=reporting" },
    { label: "Governance Case Studies", href: "/cases?q=governance" },
    { label: "Product Case Studies", href: "/cases?q=product" },
  ],
};

export default function SystemsPage() {
  return (
    <PageLayout
      title="Systems"
      subtitle="Interactive examples representing the types of reporting, automation, governance, and product systems I've delivered."
      meta={meta}
    >
      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-muted-foreground mb-4">
          I build systems that solve real problems. These interactive demos represent 
          the types of solutions I've delivered across finance, operations, analytics, 
          and product domains. Each system demonstrates specific patterns, architectures, 
          and user experiences I've implemented in production environments.
        </p>
        <p className="text-muted-foreground">
          The systems range from financial reporting platforms and KPI dashboards to 
          workflow automation engines and data governance frameworks. They share common 
          principles: clarity, scalability, automation, and user-centric design.
        </p>
      </section>

      {/* How I work in this area */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">How I work in this area</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Start with user needs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                I design systems around how people actually work, not how I think they 
                should work. This means spending time understanding workflows, pain points, 
                and decision-making patterns before building anything.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Build for scale and maintainability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                I architect systems that can grow. This means clean data models, modular 
                components, clear separation of concerns, and documentation. I've learned 
                that the best system is one that can evolve without breaking.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Embed analytics and visibility</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Every system I build includes built-in reporting, dashboards, and KPIs. 
                I believe systems should make it easy to understand what's happening, 
                not just execute transactions. This enables data-driven decision making 
                and continuous improvement.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Automate the routine</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                I identify repetitive tasks and automate them. This frees people to focus 
                on judgment, analysis, and exceptions. At IQVIA, I deployed 400+ workflows 
                that eliminated 10,000+ hours of manual work annually.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Real-world examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Real-world examples</h2>
        <div className="space-y-6">
          {/* Financial & Operational Reporting Playground */}
          <Card>
            <CardHeader>
              <CardTitle>Financial & Operational Reporting Playground</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                A simplified interactive view of how I think about report structures, KPIs, 
                variance views, and analytics flows.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <Button asChild variant="default" size="sm">
                  <Link href="/demos/reporting-engine">Open System</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/cases?q=reporting">Related Case Studies</Link>
                </Button>
              </div>

              <div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Reporting</Badge>
                  <Badge variant="outline">KPI Design</Badge>
                  <Badge variant="outline">Data Modeling</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Governance Explorer */}
          <Card>
            <CardHeader>
              <CardTitle>Data Governance Explorer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                A clean model representing data ownership, lineage, quality, and reporting standards.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <Button asChild variant="default" size="sm">
                  <Link href="/demos/governance-explorer">Open System</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/cases?q=governance">Related Case Studies</Link>
                </Button>
              </div>

              <div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Governance</Badge>
                  <Badge variant="outline">Data Quality</Badge>
                  <Badge variant="outline">Controls</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Operations Workflow Engine */}
          <Card>
            <CardHeader>
              <CardTitle>Operations Workflow Engine</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                A simplified version of the field-to-customer operational flow used in 
                Laurel AG's rental lifecycle system.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <Button asChild variant="default" size="sm">
                  <Link href="/demos/automation">Open System</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/cases?q=laurel">Related Case Studies</Link>
                </Button>
              </div>

              <div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Workflow Automation</Badge>
                  <Badge variant="outline">Operations</Badge>
                  <Badge variant="outline">Logistics</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Classification & Rule Logic Engine */}
          <Card>
            <CardHeader>
              <CardTitle>Classification & Rule Logic Engine</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                A demonstration of rule-based classification logic used in real reporting 
                and operations automation systems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <Button asChild variant="default" size="sm">
                  <Link href="/demos/rule-engine">Open System</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/cases?q=classification">Related Case Studies</Link>
                </Button>
              </div>

              <div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Rules</Badge>
                  <Badge variant="outline">Mapping</Badge>
                  <Badge variant="outline">Reconciliation</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Executive KPI Dashboard */}
          <Card>
            <CardHeader>
              <CardTitle>Executive KPI Dashboard</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                A simple executive KPI visualization showing how I approach clarity in 
                reporting at the leadership level.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <Button asChild variant="default" size="sm">
                  <Link href="/demos/kpi-dashboard">Open System</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/cases?q=kpi">Related Case Studies</Link>
                </Button>
              </div>

              <div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Analytics</Badge>
                  <Badge variant="outline">KPIs</Badge>
                  <Badge variant="outline">Performance</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Product UI Sketchbook */}
          <Card>
            <CardHeader>
              <CardTitle>Product UI Sketchbook</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                A collection of lightweight UI explorations used to clarify thinking and 
                early product direction.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <Button asChild variant="default" size="sm">
                  <Link href="/demos/ui-prototypes">Open System</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/cases?q=product">Related Case Studies</Link>
                </Button>
              </div>

              <div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Product Design</Badge>
                  <Badge variant="outline">UX Thinking</Badge>
                  <Badge variant="outline">Prototyping</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
}
