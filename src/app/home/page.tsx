"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import GuidedTour from "@/components/GuidedTour";

export default function HomeDashboard() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center py-12 space-y-6">
        <h1 className="text-4xl font-bold">Mike OS</h1>
        <p className="text-gray-600 text-lg subtitle dark:text-gray-400">
          A professional operating system showcasing real work across finance, analytics, automation, and reporting.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <GuidedTour />
          <Button asChild variant="default" className="px-6 py-4 text-lg">
            <Link href="/resume">Open Resume</Link>
          </Button>
        </div>
      </div>

      {/* Career Pillars Section */}
      <div className="max-w-5xl mx-auto px-4 py-10 space-y-4">
        <div>
          <h2 className="text-3xl font-bold mb-2">Career Pillars</h2>
          <p className="subtitle text-gray-600 mb-6 dark:text-gray-400">
            Three real-world systems that anchor this OS.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* IQVIA Card */}
          <Card className="card">
            <CardHeader>
              <CardTitle>IQVIA – Enterprise Automation & Analytics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm">
                Led automation and analytics expansion across GFSS, building automation COE and deploying 400+ workflows. Delivered enterprise dashboards for Financials, OPEX, and Go-To-Market KPIs.
              </p>
              <div className="flex flex-col gap-2">
                <Button asChild variant="default" size="sm">
                  <Link href="/evidence?q=iqvia">Open Evidence</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/demos/governance-explorer">Recommended Demo</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Metropolitan Card */}
          <Card className="card">
            <CardHeader>
              <CardTitle>Metropolitan – Private Credit Reporting & Governance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm">
                Delivered current state assessment and quick wins roadmap for private credit firm. Mapped reporting workflows, data infrastructure, and governance frameworks.
              </p>
              <div className="flex flex-col gap-2">
                <Button asChild variant="default" size="sm">
                  <Link href="/evidence?q=metropolitan">Open Evidence</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/demos/reporting-engine">Recommended Demo</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Laurel AG Card */}
          <Card className="card">
            <CardHeader>
              <CardTitle>Laurel AG – Rental & Proposal Platform</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm">
                Built complete 8-stage rental workflow system and proposal engine. Digitized equipment rental, delivery, return, and inventory management with full web application platform.
              </p>
              <div className="flex flex-col gap-2">
                <Button asChild variant="default" size="sm">
                  <Link href="/evidence?q=laurel">Open Evidence</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/demos/automation">Recommended Demo</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Three Large Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/resume" className="block">
            <Card className="h-full cursor-pointer">
              <CardHeader>
                <CardTitle className="text-2xl">Interactive Resume</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Explore my professional experience and achievements
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/skills" className="block">
            <Card className="h-full cursor-pointer">
              <CardHeader>
                <CardTitle className="text-2xl">Skills Graph</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Visualize my technical and professional capabilities
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/evidence" className="block">
            <Card className="h-full cursor-pointer">
              <CardHeader>
                <CardTitle className="text-2xl">Evidence Map</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Browse documented proof of my work and deliverables
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>

      {/* Live Systems Section */}
      <div>
          <h2 className="text-3xl font-semibold mb-6 text-center">Live Systems</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline" size="lg">
              <Link href="/demos/reporting-engine">Reporting Engine</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/demos/governance-explorer">Governance Explorer</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/demos/rule-engine">Rule Engine</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/demos/automation">Automation Demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/demos/ui-prototypes">UI Prototypes</Link>
            </Button>
          </div>
        </div>

      {/* Quick Launch Section */}
      <div className="mt-10 mb-16 space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Quick Launch</h2>
          <p className="subtitle text-gray-600 mb-4">Open key modules instantly</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button asChild variant="default" className="w-full">
            <Link href="/resume">Resume</Link>
          </Button>
          <Button asChild variant="default" className="w-full">
            <Link href="/skills">Skills</Link>
          </Button>
          <Button asChild variant="default" className="w-full">
            <Link href="/evidence">Evidence</Link>
          </Button>
          <Button asChild variant="default" className="w-full">
            <Link href="/search">Search</Link>
          </Button>
          <Button asChild variant="default" className="w-full">
            <Link href="/demos/reporting-engine">Reporting Engine</Link>
          </Button>
          <Button asChild variant="default" className="w-full">
            <Link href="/demos/governance-explorer">Governance Explorer</Link>
          </Button>
          <Button asChild variant="default" className="w-full">
            <Link href="/demos/automation">Automation Flow</Link>
          </Button>
          <Button asChild variant="default" className="w-full">
            <Link href="/demos/rule-engine">Rule Engine</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}






