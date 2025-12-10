"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, BarChart3, TrendingUp, Target, Zap, AlertTriangle, CheckCircle2, DollarSign, Users, Percent, FileText, ArrowRight, Clock, TrendingDown, Database, Workflow, Sparkles } from "lucide-react";
import Link from "next/link";
import { PageMeta } from "@/core/metadata/types";
import DataArchitectureDiagram from "@/components/DataArchitectureDiagram";
import Image from "next/image";

const meta: PageMeta = {
  what: "Process mining and predictive analytics solution for sales operations optimization",
  why: "Transform sales operations from reactive reporting to proactive, data-driven decision making through process mining insights and sales likelihood prediction models",
  relatedSkills: [
    "Process Mining",
    "Predictive Analytics",
    "Sales Analytics",
    "Data Quality",
    "Machine Learning",
    "Celonis",
    "Python",
    "Power BI"
  ],
  relatedSystems: [
    { label: "Reporting Engine", href: "/demos/reporting-engine" },
    { label: "Governance Explorer", href: "/demos/governance-explorer" }
  ],
  relatedEvidence: [],
  tags: ["Process Mining", "Analytics", "Sales Operations", "Predictive Modeling", "Data Quality"],
};

interface Slide {
  id: number;
  title: string;
  type: "title" | "content" | "visual" | "data" | "insight";
  content: React.ReactNode;
}

export default function ProcessMiningSalesAnalyticsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: "Process Mining & Sales Analytics",
      type: "title",
      content: (
        <div className="relative flex flex-col items-center justify-center min-h-[500px] overflow-hidden">
          {/* Hero Background Image - Full Card */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/images/process_mining_hero_1.png"
              alt="Sales Pipeline Process Mining"
              fill
              className="object-cover"
              priority
            />
            {/* Lighter overlay - less dark for better image visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/55"></div>
            {/* Subtle blue/purple gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-purple-600/10 to-blue-600/15"></div>
          </div>
          
          {/* Content - positioned above background */}
          <div className="relative z-10 flex flex-col items-center justify-center space-y-10 text-center px-8 py-20">
            <div className="text-center space-y-7 max-w-4xl">
              {/* Main Title - Balanced color distribution, single line */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight whitespace-nowrap drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                <span className="text-blue-300 drop-shadow-[0_2px_8px_rgba(59,130,246,0.5)]">Process Mining</span>
                <span className="text-white mx-2">&</span>
                <span className="text-purple-300 drop-shadow-[0_2px_8px_rgba(168,85,247,0.5)]">Sales Analytics</span>
              </h1>
              {/* Subtitle - Strong white text with better spacing */}
              <p className="text-lg md:text-xl lg:text-2xl font-light text-white/95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] leading-relaxed">
                Transforming Sales Operations Through{" "}
                <span className="font-semibold text-blue-200 drop-shadow-[0_2px_6px_rgba(59,130,246,0.4)]">
                  Data-Driven Insights
                </span>
              </p>
            </div>
            {/* Enhanced Badges - Zander UI principles: visual anchoring, better contrast, interactivity */}
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <Badge className="group text-base px-8 py-3.5 border-2 border-blue-400/80 bg-blue-500/50 backdrop-blur-lg text-white hover:bg-blue-500/70 hover:border-blue-300 hover:scale-110 hover:shadow-2xl transition-all duration-300 shadow-xl shadow-blue-500/50 font-semibold cursor-pointer">
                <BarChart3 className="h-5 w-5 mr-2.5 text-blue-100 group-hover:rotate-12 group-hover:scale-125 transition-all duration-300" />
                Process Mining
              </Badge>
              <Badge className="group text-base px-8 py-3.5 border-2 border-purple-400/80 bg-purple-500/50 backdrop-blur-lg text-white hover:bg-purple-500/70 hover:border-purple-300 hover:scale-110 hover:shadow-2xl transition-all duration-300 shadow-xl shadow-purple-500/50 font-semibold cursor-pointer">
                <TrendingUp className="h-5 w-5 mr-2.5 text-purple-100 group-hover:rotate-12 group-hover:scale-125 transition-all duration-300" />
                Predictive Analytics
              </Badge>
              <Badge className="group text-base px-8 py-3.5 border-2 border-blue-400/80 bg-blue-500/50 backdrop-blur-lg text-white hover:bg-blue-500/70 hover:border-blue-300 hover:scale-110 hover:shadow-2xl transition-all duration-300 shadow-xl shadow-blue-500/50 font-semibold cursor-pointer">
                <Target className="h-5 w-5 mr-2.5 text-blue-100 group-hover:rotate-12 group-hover:scale-125 transition-all duration-300" />
                Sales Optimization
              </Badge>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "The Challenge",
      type: "content",
      content: (
        <section className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-8 text-slate-900 shadow-2xl">
          {/* Background Pattern - Subtle */}
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,70,229,0.08),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.06),transparent_32%)]" />
          </div>

          <div className="relative mx-auto max-w-6xl">
            {/* Split Layout: Before | Arrow | Impact */}
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
              {/* Before Card - Better Contrast */}
              <Card className="relative overflow-hidden border-2 border-red-300/80 bg-white shadow-lg">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-50/50 via-transparent to-transparent" />
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-red-100 px-3 py-2 text-red-700 shadow-sm">
                      <AlertTriangle className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold text-slate-900">Before: Manual & Fragmented</CardTitle>
                      <p className="mt-1 text-sm text-slate-600">Low frequency reporting and disconnected handoffs slow decisions.</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { label: "Ad-hoc reporting", chip: "2x/year" },
                    { label: "No real-time visibility", chip: "Lagging" },
                    { label: "Manual tracking", chip: "High effort" },
                    { label: "No predictive signals", chip: "Reactive" },
                    { label: "Hidden leakage", chip: "Unseen" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-xl border-2 border-red-300/90 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div className="flex items-center gap-2 text-sm font-semibold text-red-900">
                        <span className="h-2 w-2 rounded-full bg-red-600" aria-hidden />
                        {item.label}
                      </div>
                      <span className="rounded-full border-2 border-red-400/90 bg-red-100 px-3 py-1 text-xs font-bold text-red-800 shadow-sm">
                        {item.chip}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Center Arrow - Centered Vertically with Self Alignment */}
              <div className="flex items-center justify-center self-center">
                <ArrowRight className="h-12 w-12 text-slate-500" strokeWidth={2.5} />
              </div>

              {/* Impact Needed Card - Better Contrast */}
              <Card className="relative overflow-hidden border-2 border-blue-300/80 bg-white shadow-lg">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-bl from-blue-50/50 via-transparent to-transparent" />
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-blue-100 px-3 py-2 text-blue-700 shadow-sm">
                      <Target className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold text-slate-900">Impact Needed</CardTitle>
                      <p className="mt-1 text-sm text-slate-600">Continuous visibility, faster motions, and confident decision-making.</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { label: "Always-on visibility", chip: "Live dashboards" },
                    { label: "Faster approvals", chip: "-20% cycle" },
                    { label: "Optimized GTM", chip: "+Win rate" },
                    { label: "Data-driven incentives", chip: "Trustable" },
                    { label: "Leakage detection", chip: "Recovered" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-xl border-2 border-blue-300/90 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div className="flex items-center gap-2 text-sm font-semibold text-blue-900">
                        <span className="h-2 w-2 rounded-full bg-blue-600" aria-hidden />
                        {item.label}
                      </div>
                      <span className="rounded-full border-2 border-blue-400/90 bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800 shadow-sm">
                        {item.chip}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: 3,
      title: "Business Scale",
      type: "data",
      content: (
        <div className="space-y-8 py-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-2">Project Scope & Scale</h2>
            <p className="text-muted-foreground">Key metrics demonstrating the impact and reach of the initiative</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="border-2 border-blue-200">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100">
                  <DollarSign className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-5xl font-bold text-blue-600">$93M</div>
                <div className="text-sm font-semibold text-gray-900">Total Contract Value</div>
                <div className="text-xs text-muted-foreground">Year 2022</div>
              </CardContent>
            </Card>
            <Card className="border-2 border-green-200">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
                  <FileText className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-5xl font-bold text-green-600">672</div>
                <div className="text-sm font-semibold text-gray-900">Opportunities</div>
                <div className="text-xs text-muted-foreground">Year 2022</div>
              </CardContent>
            </Card>
            <Card className="border-2 border-purple-200">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100">
                  <Percent className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-5xl font-bold text-purple-600">56%</div>
                <div className="text-sm font-semibold text-gray-900">Win Rate</div>
                <div className="text-xs text-muted-foreground">Year 2022</div>
              </CardContent>
            </Card>
            <Card className="border-2 border-orange-200">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-5xl font-bold text-orange-600">~20</div>
                <div className="text-sm font-semibold text-gray-900">Sales Reps</div>
                <div className="text-xs text-muted-foreground">Individualized Reporting</div>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Process Mining: Revealing Hidden Patterns",
      type: "visual",
      content: (
        <div className="space-y-8 py-4">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
              <BarChart3 className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="border-2 border-gray-200">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100/50">
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100">
                    <Workflow className="h-5 w-5 text-blue-600" />
                  </div>
                  <span>Key Process Deviations Discovered</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-red-50">
                      <div className="flex-shrink-0 w-16 text-center">
                        <div className="text-2xl font-bold text-red-600">245</div>
                        <div className="text-xs text-muted-foreground mt-1">opps</div>
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-sm font-medium">Skip "Qualifying" stage</p>
                        <p className="text-xs text-muted-foreground mt-1">Move directly to "Proposal Development"</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-orange-50">
                      <div className="flex-shrink-0 w-16 text-center">
                        <div className="text-2xl font-bold text-orange-600">79</div>
                        <div className="text-xs text-muted-foreground mt-1">opps</div>
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-sm font-medium">Direct to "Proposal Delivery"</p>
                        <p className="text-xs text-muted-foreground mt-1">Without proper qualification</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-red-50">
                      <div className="flex-shrink-0 w-16 text-center">
                        <div className="text-2xl font-bold text-red-600">92</div>
                        <div className="text-xs text-muted-foreground mt-1">lost</div>
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-sm font-medium">Lost before proposal</p>
                        <p className="text-xs text-muted-foreground mt-1">Prior to development/delivery</p>
                      </div>
                      <TrendingDown className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-yellow-50">
                      <div className="flex-shrink-0 w-16 text-center">
                        <div className="text-2xl font-bold text-yellow-600">59</div>
                        <div className="text-xs text-muted-foreground mt-1">opps</div>
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-sm font-medium">Skip "Proposal Delivery"</p>
                        <p className="text-xs text-muted-foreground mt-1">After reaching "Proposal Development"</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-purple-50">
                      <div className="flex-shrink-0 w-16 text-center">
                        <div className="text-2xl font-bold text-purple-600">264</div>
                        <div className="text-xs text-muted-foreground mt-1">opps</div>
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-sm font-medium">Skip final negotiation</p>
                        <p className="text-xs text-muted-foreground mt-1">Stage 6 bypassed entirely</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-blue-200">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Sparkles className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-blue-900">Key Insight</p>
                    <p className="text-sm text-blue-800">Process mining revealed significant deviations from standard sales methodology, indicating opportunities for process standardization and training.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: "Predictive Analytics: Sales Likelihood Model",
      type: "insight",
      content: (
        <div className="space-y-8 py-4">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="border-2 border-red-200">
              <CardContent className="pt-8 pb-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100">
                    <Clock className="h-10 w-10 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Critical Discovery: Time Decay Factor</h3>
                  <div className="text-5xl font-bold text-red-600">1% drop</div>
                  <div className="text-lg text-muted-foreground mb-2">every 2 days</div>
                  <p className="text-sm text-gray-700">In the first 30 days, the probability of winning an opportunity drops approximately <strong>1% every 2 days</strong></p>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2 border-blue-200">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100/50">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Database className="h-5 w-5 text-blue-600" />
                    Key Variables
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="text-sm">Days elapsed since creation</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="text-sm">Total number of products</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="text-sm">Opportunity amount (TCV)</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="text-sm">Previous wins for account</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="text-sm">Main country</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="text-sm">MC products count</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="text-sm">Zero-value products</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-green-200">
                <CardHeader className="bg-gradient-to-r from-green-50 to-green-100/50">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Target className="h-5 w-5 text-green-600" />
                    Model Performance
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-green-50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Segment 1</span>
                        <Badge className="bg-green-600 text-white">91.49%</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">High-Probability Segment</p>
                    </div>
                    <div className="p-4 rounded-lg bg-green-50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Segment 2</span>
                        <Badge className="bg-green-600 text-white">88.79%</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">High-Probability Segment</p>
                    </div>
                    <div className="p-4 rounded-lg bg-green-50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Segment 3</span>
                        <Badge className="bg-green-600 text-white">88.89%</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">High-Probability Segment</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      title: "High-Probability Opportunity Segments",
      type: "data",
      content: (
        <div className="space-y-8 py-4">
          
          <div className="space-y-6">
            <Card className="border-2 border-green-200">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-green-100">
                      <Zap className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold">Segment 1: Fast-Track Opportunities</h3>
                      <Badge className="bg-green-600 text-white text-base px-3 py-1">91.49% Win Rate</Badge>
                    </div>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-green-600">517</span>
                      <span className="text-sm text-muted-foreground ml-2">opportunities</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-green-600" />
                        <span>≤30 days old</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-green-600" />
                        <span>$1,500 - $70,150</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-green-600" />
                        <span>3-84 products</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span>Previous wins</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-blue-200">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-blue-100">
                      <TrendingUp className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold">Segment 2: High-Value Established</h3>
                      <Badge className="bg-blue-600 text-white text-base px-3 py-1">88.79% Win Rate</Badge>
                    </div>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-blue-600">116</span>
                      <span className="text-sm text-muted-foreground ml-2">opportunities</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-blue-600" />
                        <span>83-343 days old</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-blue-600" />
                        <span>TCV ≥ $51,000</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-blue-600" />
                        <span>≥2 products</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-blue-600" />
                        <span>≥1 previous win</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-purple-200">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-purple-100">
                      <Sparkles className="h-8 w-8 text-purple-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold">Segment 3: Premium Fast-Track</h3>
                      <Badge className="bg-purple-600 text-white text-base px-3 py-1">88.89% Win Rate</Badge>
                    </div>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-purple-600">72</span>
                      <span className="text-sm text-muted-foreground ml-2">opportunities</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-purple-600" />
                        <span>9-30 days old</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-purple-600" />
                        <span>TCV ≥ $91,000</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-purple-600" />
                        <span>≥2 products</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: 7,
      title: "Example: High-Value Opportunity Analysis",
      type: "visual",
      content: (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Real Opportunity Example</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-blue-50">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold">Amgen - Amgevita Early Look Study</h4>
                    <Badge className="bg-green-600 text-white">Highly Likely to Win</Badge>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Age</div>
                      <div className="font-semibold">189 days</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">TCV</div>
                      <div className="font-semibold">$425,170</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Products</div>
                      <div className="font-semibold">5 MC / 5 Total</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Previous Wins</div>
                      <div className="font-semibold">164</div>
                    </div>
                  </div>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm"><strong>Analysis:</strong> Strong account relationship (164 previous wins), appropriate age, high value, and complete product portfolio indicate high probability of success. This opportunity should be prioritized for sales team focus.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 8,
      title: "Data Quality Framework",
      type: "content",
      content: (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Data Quality Issues Identified & Resolved
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-red-600">Issues Found:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5" />
                      <span>Duplicate opportunity records</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5" />
                      <span>Date inconsistencies (deadline &lt; start date)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5" />
                      <span>Missing critical fields (COE, Loss Reason)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5" />
                      <span>Outlier TCV values ($72M vs $360K avg)</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-green-600">Solutions Implemented:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Automated duplicate detection</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Data validation rules</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Outlier identification & flagging</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Missing data alerts</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 9,
      title: "Solution Architecture",
      type: "visual",
      content: (
        <div className="space-y-4 py-2">
          {/* Visual Architecture Diagram */}
          <DataArchitectureDiagram />

          {/* Complementary Information - Compact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
            <Card className="border-2 border-blue-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2 text-gray-900">
                  <Zap className="h-3 w-3 text-blue-600" />
                  Data Integration
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs space-y-1 text-gray-700">
                <div>• API connections to CRM</div>
                <div>• Automated data extraction</div>
                <div>• Central SQL database hub</div>
                <div>• Real-time synchronization</div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2 text-gray-900">
                  <Workflow className="h-3 w-3 text-orange-600" />
                  Process Mining
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs space-y-1 text-gray-700">
                <div>• Celonis process discovery</div>
                <div>• Process deviation analysis</div>
                <div>• Predictive analytics models</div>
                <div>• Data quality validation</div>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2 text-gray-900">
                  <BarChart3 className="h-3 w-3 text-yellow-600" />
                  Delivery & Access
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs space-y-1 text-gray-700">
                <div>• Weekly leadership dashboards</div>
                <div>• Bi-weekly individual reports</div>
                <div>• 40+ dashboards per month</div>
                <div>• Real-time Power BI access</div>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: 10,
      title: "Business Impact & Outcomes",
      type: "insight",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <CheckCircle2 className="h-5 w-5" />
                  Operational Transformation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-2xl font-bold text-green-700">26X Improvement</div>
                <p className="text-sm">Reporting frequency: 2X/year → Weekly</p>
                <div className="text-2xl font-bold text-green-700">40+ Dashboards</div>
                <p className="text-sm">Individualized reports per month</p>
                <div className="text-2xl font-bold text-green-700">Real-Time</div>
                <p className="text-sm">Visibility into sales performance</p>
              </CardContent>
            </Card>
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700">
                  <Target className="h-5 w-5" />
                  Strategic Value
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5" />
                    <span>Improved sales win rate through data-driven insights</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5" />
                    <span>Enabled go-to-market strategy optimization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5" />
                    <span>Supported accurate incentive calculations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5" />
                    <span>Identified process optimization opportunities</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5" />
                    <span>Foundation for AI/ML automation</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: 11,
      title: "Future Applications: AI & ML Potential",
      type: "insight",
      content: (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Advanced Analytics Roadmap
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Real-Time Opportunity Risk Assessment</h4>
                  <p className="text-sm text-muted-foreground">Assess condition of open opportunities with data-infused risk framework at a glance</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Automated Action Plans</h4>
                  <p className="text-sm text-muted-foreground">Identify and build "automated optimal action plan" after each sales stage</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Dynamic Updates</h4>
                  <p className="text-sm text-muted-foreground">Update opportunity condition based on new data as soon as available in CRM</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Pattern Recognition</h4>
                  <p className="text-sm text-muted-foreground">Use advanced statistical models to identify high-value, high-probability wins based on historical patterns</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 12,
      title: "Key Takeaways",
      type: "content",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Process Mining</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Revealed 700+ process deviations, enabling targeted training and standardization</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Predictive Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">88-91% win rate prediction accuracy for high-probability segments</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Data Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Automated framework ensuring reliable, actionable insights</p>
              </CardContent>
            </Card>
          </div>
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="pt-6">
              <p className="text-center text-lg font-semibold">
                Process mining and predictive analytics transformed sales operations from reactive reporting to proactive, data-driven decision making
              </p>
            </CardContent>
          </Card>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto flex w-full max-w-[1800px] gap-6 px-4 py-6">
        {/* Left sidebar - minimal spacer */}
        <div className="hidden lg:block w-32" />
        
        {/* Main content area - much wider and left-aligned */}
        <main className="min-w-0 flex-1 max-w-none space-y-4">
          {/* Page Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                Process Mining & Sales Analytics
              </h1>
              <p className="mt-2 text-base leading-relaxed text-gray-600">
                Using process mining and predictive analytics to optimize sales performance and identify high-probability opportunities
              </p>
            </div>
          </div>

          {/* Slide Navigation */}
          <div className="flex items-center justify-between bg-muted p-4 rounded-lg sticky top-0 z-10">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Slide {currentSlide + 1} of {slides.length}
              </span>
              <div className="flex gap-1">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      index === currentSlide
                        ? "bg-primary"
                        : "bg-muted-foreground/30"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
            >
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          {/* Current Slide - Much wider and left-aligned */}
          <Card className="min-h-[500px] shadow-xl border-2 w-full max-w-[1400px]">
            <CardHeader className="border-b py-4 bg-gradient-to-r from-gray-50 to-gray-100/50">
              <div className="flex items-start gap-4">
                {currentSlide === 8 && (
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 flex-shrink-0">
                    <Workflow className="h-5 w-5 text-blue-600" />
                  </div>
                )}
                {currentSlide === 1 && (
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-100 flex-shrink-0">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  </div>
                )}
                <div className="flex-1">
                  <CardTitle className="text-2xl">{slides[currentSlide].title}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className={currentSlide === 0 || currentSlide === 1 ? "p-0 overflow-hidden" : "p-6"}>{slides[currentSlide].content}</CardContent>
          </Card>

          {/* Slide Thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 max-w-[1400px]">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`p-2 rounded-lg border-2 transition-all text-left ${
                  index === currentSlide
                    ? "border-primary bg-primary/5"
                    : "border-muted hover:border-primary/50"
                }`}
              >
                <div className="text-xs font-semibold mb-1 truncate">{slide.title}</div>
                <div className="text-xs text-muted-foreground capitalize">{slide.type}</div>
              </button>
            ))}
          </div>
        </main>

        {/* Right metadata panel */}
        <aside className="hidden xl:block w-80 flex-shrink-0">
          <div className="sticky top-10">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              {meta.what && (
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                      What this is
                    </p>
                  </div>
                  <p className="text-sm text-gray-700">
                    {meta.what}
                  </p>
                </div>
              )}
              {meta.why && (
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                      Why it matters
                    </p>
                  </div>
                  <p className="text-sm text-gray-700">
                    {meta.why}
                  </p>
                </div>
              )}
              {meta.relatedSkills.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                      Related Skills
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {meta.relatedSkills.slice(0, 6).map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-800"
                      >
                        {skill}
                      </span>
                    ))}
                    {meta.relatedSkills.length > 6 && (
                      <span className="inline-flex items-center text-xs text-blue-600 hover:text-blue-700">
                        + {meta.relatedSkills.length - 6} more skills
                      </span>
                    )}
                  </div>
                </div>
              )}
              {meta.relatedSystems.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                      Related Systems
                    </p>
                  </div>
                  <ul className="space-y-2 mt-3">
                    {meta.relatedSystems.map((system) => (
                      <li key={system.href}>
                        <Link
                          href={system.href}
                          className="text-sm text-blue-600 hover:text-blue-700"
                        >
                          {system.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

