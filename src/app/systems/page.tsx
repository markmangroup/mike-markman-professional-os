"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function SystemsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      <div>
        <h1 className="text-3xl font-bold mb-2">Systems I've Built</h1>
        <p className="subtitle text-gray-600 mb-6 dark:text-gray-400">
          Interactive examples representing the types of reporting, automation, governance, and product systems I've delivered.
        </p>
      </div>

      {/* Financial & Operational Reporting Playground */}
      <Card className="card">
        <CardHeader>
          <CardTitle>Financial & Operational Reporting Playground</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            A simplified interactive view of how I think about report structures, KPIs, variance views, and analytics flows.
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
      <Card className="card">
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
      <Card className="card">
        <CardHeader>
          <CardTitle>Operations Workflow Engine</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            A simplified version of the field-to-customer operational flow used in Laurel AG's rental lifecycle system.
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
      <Card className="card">
        <CardHeader>
          <CardTitle>Classification & Rule Logic Engine</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            A demonstration of rule-based classification logic used in real reporting and operations automation systems.
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
      <Card className="card">
        <CardHeader>
          <CardTitle>Executive KPI Dashboard</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            A simple executive KPI visualization showing how I approach clarity in reporting at the leadership level.
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
      <Card className="card">
        <CardHeader>
          <CardTitle>Product UI Sketchbook</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            A collection of lightweight UI explorations used to clarify thinking and early product direction.
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
  );
}

