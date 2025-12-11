"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, BarChart3, TrendingUp, Target, Zap, AlertTriangle, CheckCircle2, DollarSign, Users, Percent, FileText, ArrowRight, Clock, TrendingDown, Database, Workflow, Sparkles, Sun, Moon, Menu, X, ChevronUp, ChevronDown } from "lucide-react";
import Link from "next/link";
import { PageMeta } from "@/core/metadata/types";
import DataArchitectureDiagram from "@/components/DataArchitectureDiagram";
import ProcessFlowDiagram from "@/components/ProcessFlowDiagram";
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
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const getSlides = (isDarkMode: boolean): Slide[] => [
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
        <section className={`relative overflow-hidden rounded-3xl border p-8 shadow-2xl ${isDarkMode ? "border-neutral-700 bg-neutral-900" : "border-slate-200/60 bg-gradient-to-br from-slate-50 via-white to-slate-100"}`}>
          {/* Background Pattern - Subtle */}
          <div className={`pointer-events-none absolute inset-0 ${isDarkMode ? "opacity-10" : "opacity-20"}`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,70,229,0.08),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.06),transparent_32%)]" />
          </div>

          <div className="relative mx-auto max-w-6xl">
            {/* Split Layout: Before | Arrow | Impact */}
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
              {/* Before Card - Better Contrast */}
              <Card className={`relative overflow-hidden border-2 shadow-lg ${isDarkMode ? "border-red-700/70 bg-red-950/40" : "border-red-300/80 bg-white"}`}>
                <div className={`pointer-events-none absolute inset-0 ${isDarkMode ? "" : "bg-gradient-to-br from-red-50/50 via-transparent to-transparent"}`} />
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className={`rounded-xl px-3 py-2 shadow-sm ${isDarkMode ? "bg-red-900/50" : "bg-red-100"}`}>
                      <AlertTriangle className={`h-5 w-5 ${isDarkMode ? "text-red-400" : "text-red-700"}`} />
                    </div>
                    <div>
                      <CardTitle className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-slate-900"}`}>Before: Manual & Fragmented</CardTitle>
                      <p className={`mt-1 text-sm ${isDarkMode ? "text-gray-300" : "text-slate-600"}`}>Low frequency reporting and disconnected handoffs slow decisions.</p>
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
                      className={`flex items-center justify-between rounded-xl border-2 px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${isDarkMode ? "border-red-700/70 bg-red-950/30" : "border-red-300/90 bg-white"}`}
                    >
                      <div className={`flex items-center gap-2 text-sm font-semibold ${isDarkMode ? "text-red-200" : "text-red-900"}`}>
                        <span className={`h-2 w-2 rounded-full ${isDarkMode ? "bg-red-400" : "bg-red-600"}`} aria-hidden />
                        {item.label}
                      </div>
                      <span className={`rounded-full border-2 px-3 py-1 text-xs font-bold shadow-sm ${isDarkMode ? "border-red-600/70 bg-red-900/50 text-red-200" : "border-red-400/90 bg-red-100 text-red-800"}`}>
                        {item.chip}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Center Arrow - Centered Vertically with Self Alignment */}
              <div className="flex items-center justify-center self-center">
                <ArrowRight className={`h-12 w-12 ${isDarkMode ? "text-gray-400" : "text-slate-500"}`} strokeWidth={2.5} />
              </div>

              {/* Impact Needed Card - Better Contrast */}
              <Card className={`relative overflow-hidden border-2 shadow-lg ${isDarkMode ? "border-blue-700/70 bg-blue-950/40" : "border-blue-300/80 bg-white"}`}>
                <div className={`pointer-events-none absolute inset-0 ${isDarkMode ? "" : "bg-gradient-to-bl from-blue-50/50 via-transparent to-transparent"}`} />
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className={`rounded-xl px-3 py-2 shadow-sm ${isDarkMode ? "bg-blue-900/50" : "bg-blue-100"}`}>
                      <Target className={`h-5 w-5 ${isDarkMode ? "text-blue-400" : "text-blue-700"}`} />
                    </div>
                    <div>
                      <CardTitle className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-slate-900"}`}>Impact Needed</CardTitle>
                      <p className={`mt-1 text-sm ${isDarkMode ? "text-gray-300" : "text-slate-600"}`}>Continuous visibility, faster motions, and confident decision-making.</p>
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
                      className={`flex items-center justify-between rounded-xl border-2 px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${isDarkMode ? "border-blue-700/70 bg-blue-950/30" : "border-blue-300/90 bg-white"}`}
                    >
                      <div className={`flex items-center gap-2 text-sm font-semibold ${isDarkMode ? "text-blue-200" : "text-blue-900"}`}>
                        <span className={`h-2 w-2 rounded-full ${isDarkMode ? "bg-blue-400" : "bg-blue-600"}`} aria-hidden />
                        {item.label}
                      </div>
                      <span className={`rounded-full border-2 px-3 py-1 text-xs font-bold shadow-sm ${isDarkMode ? "border-blue-600/70 bg-blue-900/50 text-blue-200" : "border-blue-400/90 bg-blue-100 text-blue-800"}`}>
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
      title: "Process Mining: Revealing Hidden Patterns",
      type: "visual",
      content: (
        <section className={`relative overflow-hidden rounded-3xl border p-8 shadow-2xl ${isDarkMode ? "border-neutral-700 bg-neutral-900" : "border-slate-200/60 bg-gradient-to-br from-slate-50 via-white to-slate-100"}`}>
          {/* Background Pattern - Subtle */}
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,70,229,0.08),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.06),transparent_32%)]" />
          </div>

          <div className="relative mx-auto max-w-6xl space-y-6">
            <Card className={`border-2 shadow-lg ${isDarkMode ? "border-neutral-700 bg-neutral-800" : "border-gray-200 bg-white"}`}>
              <CardContent className="pt-4 pb-4">
                {/* Vertical Stack: Process Flow Diagram (full width) | KPI Callouts (horizontal row) */}
                <div className="grid grid-cols-1 gap-4">
                  {/* Top: Process Flow Diagram - Full Width */}
                  <div>
                    <h4 className={`text-sm font-semibold mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                      Sales Process Flow
                    </h4>
                    <ProcessFlowDiagram isDarkMode={isDarkMode} />
                  </div>

                  {/* Bottom: KPI Callouts - Horizontal Row */}
                  <div>
                    <h4 className={`text-sm font-semibold mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                      Key Deviations
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                      {/* KPI 1: Skip Qualifying */}
                      <Card className={`border-2 ${isDarkMode ? "border-red-700/70 bg-red-950/30" : "border-red-300 bg-red-50"}`}>
                        <CardContent className="pt-4 pb-3 px-3">
                          <div className="text-center">
                            <div className={`text-3xl font-bold mb-2 ${isDarkMode ? "text-red-400" : "text-red-600"}`}>
                              245
                            </div>
                            <div className={`text-[10px] mb-2 ${isDarkMode ? "text-gray-400" : "text-muted-foreground"}`}>
                              opps
                            </div>
                            <p className={`text-xs font-semibold mb-1 ${isDarkMode ? "text-red-200" : "text-red-900"}`}>
                              Skip "Qualifying" stage
                            </p>
                            <p className={`text-[10px] ${isDarkMode ? "text-gray-400" : "text-muted-foreground"}`}>
                              Move directly to "Proposal Development"
                            </p>
                          </div>
                        </CardContent>
                      </Card>

                      {/* KPI 2: Direct to Proposal Delivery */}
                      <Card className={`border-2 ${isDarkMode ? "border-orange-700/70 bg-orange-950/30" : "border-orange-300 bg-orange-50"}`}>
                        <CardContent className="pt-4 pb-3 px-3">
                          <div className="text-center">
                            <div className={`text-3xl font-bold mb-2 ${isDarkMode ? "text-orange-400" : "text-orange-600"}`}>
                              79
                            </div>
                            <div className={`text-[10px] mb-2 ${isDarkMode ? "text-gray-400" : "text-muted-foreground"}`}>
                              opps
                            </div>
                            <p className={`text-xs font-semibold mb-1 ${isDarkMode ? "text-orange-200" : "text-orange-900"}`}>
                              Direct to "Proposal Delivery"
                            </p>
                            <p className={`text-[10px] ${isDarkMode ? "text-gray-400" : "text-muted-foreground"}`}>
                              Without proper qualification
                            </p>
                          </div>
                        </CardContent>
                      </Card>

                      {/* KPI 3: Lost before proposal */}
                      <Card className={`border-2 ${isDarkMode ? "border-red-700/70 bg-red-950/30" : "border-red-300 bg-red-50"}`}>
                        <CardContent className="pt-4 pb-3 px-3">
                          <div className="text-center">
                            <div className={`text-3xl font-bold mb-2 ${isDarkMode ? "text-red-400" : "text-red-600"}`}>
                              92
                            </div>
                            <div className={`text-[10px] mb-2 ${isDarkMode ? "text-gray-400" : "text-muted-foreground"}`}>
                              lost
                            </div>
                            <p className={`text-xs font-semibold mb-1 ${isDarkMode ? "text-red-200" : "text-red-900"}`}>
                              Lost before proposal
                            </p>
                            <p className={`text-[10px] ${isDarkMode ? "text-gray-400" : "text-muted-foreground"}`}>
                              Prior to development/delivery
                            </p>
                          </div>
                        </CardContent>
                      </Card>

                      {/* KPI 4: Skip Proposal Delivery */}
                      <Card className={`border-2 ${isDarkMode ? "border-yellow-700/70 bg-yellow-950/30" : "border-yellow-300 bg-yellow-50"}`}>
                        <CardContent className="pt-4 pb-3 px-3">
                          <div className="text-center">
                            <div className={`text-3xl font-bold mb-2 ${isDarkMode ? "text-yellow-400" : "text-yellow-600"}`}>
                              59
                            </div>
                            <div className={`text-[10px] mb-2 ${isDarkMode ? "text-gray-400" : "text-muted-foreground"}`}>
                              opps
                            </div>
                            <p className={`text-xs font-semibold mb-1 ${isDarkMode ? "text-yellow-200" : "text-yellow-900"}`}>
                              Skip "Proposal Delivery"
                            </p>
                            <p className={`text-[10px] ${isDarkMode ? "text-gray-400" : "text-muted-foreground"}`}>
                              After reaching "Proposal Development"
                            </p>
                          </div>
                        </CardContent>
                      </Card>

                      {/* KPI 5: Skip final negotiation */}
                      <Card className={`border-2 ${isDarkMode ? "border-purple-700/70 bg-purple-950/30" : "border-purple-300 bg-purple-50"}`}>
                        <CardContent className="pt-4 pb-3 px-3">
                          <div className="text-center">
                            <div className={`text-3xl font-bold mb-2 ${isDarkMode ? "text-purple-400" : "text-purple-600"}`}>
                              264
                            </div>
                            <div className={`text-[10px] mb-2 ${isDarkMode ? "text-gray-400" : "text-muted-foreground"}`}>
                              opps
                            </div>
                            <p className={`text-xs font-semibold mb-1 ${isDarkMode ? "text-purple-200" : "text-purple-900"}`}>
                              Skip final negotiation
                            </p>
                            <p className={`text-[10px] ${isDarkMode ? "text-gray-400" : "text-muted-foreground"}`}>
                              Stage 6 bypassed entirely
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className={`border-2 shadow-lg ${isDarkMode ? "border-blue-700/70 bg-blue-950/30" : "border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50"}`}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${isDarkMode ? "bg-blue-900/50" : "bg-blue-100"}`}>
                    <Sparkles className={`h-6 w-6 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
                  </div>
                  <div>
                    <p className={`font-semibold mb-1 ${isDarkMode ? "text-blue-200" : "text-blue-900"}`}>Key Insight</p>
                    <p className={`text-sm ${isDarkMode ? "text-blue-100" : "text-blue-800"}`}>Process mining revealed significant deviations from standard sales methodology, indicating opportunities for process standardization and training.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      ),
    },
    {
      id: 4,
      title: "Business Scale & Impact",
      type: "data",
      content: (
        <section className={`relative overflow-hidden rounded-3xl border p-8 shadow-2xl ${isDarkMode ? "border-neutral-700 bg-neutral-900" : "border-slate-200/60 bg-gradient-to-br from-slate-50 via-white to-slate-100"}`}>
          {/* Background Pattern - Subtle */}
          <div className={`pointer-events-none absolute inset-0 ${isDarkMode ? "opacity-10" : "opacity-20"}`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,70,229,0.08),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.06),transparent_32%)]" />
          </div>

          <div className="relative mx-auto max-w-6xl">
            {/* 2-Column Grid Layout: Narrower KPI column (35%), Wider content column (65%) */}
            <div className="grid grid-cols-1 md:grid-cols-[35%_65%] gap-6">
              {/* Left Column: Business Scale Metrics - Compact Vertical Stack */}
              <div className="space-y-3">
                <Card className={`border-2 shadow-lg ${isDarkMode ? "border-blue-700/70 bg-blue-950/30" : "border-blue-200 bg-white"}`}>
                  <CardContent className="pt-3 pb-3 px-3">
                    <div className="flex items-center gap-2.5">
                      <div className={`flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-lg ${isDarkMode ? "bg-blue-900/50" : "bg-blue-100"}`}>
                        <DollarSign className={`h-4 w-4 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`text-xl font-bold ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>$93M</div>
                        <div className={`text-xs font-semibold leading-tight ${isDarkMode ? "text-gray-200" : "text-gray-900"}`}>Total Contract Value</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className={`border-2 shadow-lg ${isDarkMode ? "border-green-700/70 bg-green-950/30" : "border-green-200 bg-white"}`}>
                  <CardContent className="pt-3 pb-3 px-3">
                    <div className="flex items-center gap-2.5">
                      <div className={`flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-lg ${isDarkMode ? "bg-green-900/50" : "bg-green-100"}`}>
                        <FileText className={`h-4 w-4 ${isDarkMode ? "text-green-400" : "text-green-600"}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`text-xl font-bold ${isDarkMode ? "text-green-400" : "text-green-600"}`}>672</div>
                        <div className={`text-xs font-semibold leading-tight ${isDarkMode ? "text-gray-200" : "text-gray-900"}`}>Opportunities</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className={`border-2 shadow-lg ${isDarkMode ? "border-purple-700/70 bg-purple-950/30" : "border-purple-200 bg-white"}`}>
                  <CardContent className="pt-3 pb-3 px-3">
                    <div className="flex items-center gap-2.5">
                      <div className={`flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-lg ${isDarkMode ? "bg-purple-900/50" : "bg-purple-100"}`}>
                        <Percent className={`h-4 w-4 ${isDarkMode ? "text-purple-400" : "text-purple-600"}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`text-xl font-bold ${isDarkMode ? "text-purple-400" : "text-purple-600"}`}>56%</div>
                        <div className={`text-xs font-semibold leading-tight ${isDarkMode ? "text-gray-200" : "text-gray-900"}`}>Win Rate</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className={`border-2 shadow-lg ${isDarkMode ? "border-orange-700/70 bg-orange-950/30" : "border-orange-200 bg-white"}`}>
                  <CardContent className="pt-3 pb-3 px-3">
                    <div className="flex items-center gap-2.5">
                      <div className={`flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-lg ${isDarkMode ? "bg-orange-900/50" : "bg-orange-100"}`}>
                        <Users className={`h-4 w-4 ${isDarkMode ? "text-orange-400" : "text-orange-600"}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`text-xl font-bold ${isDarkMode ? "text-orange-400" : "text-orange-600"}`}>~20</div>
                        <div className={`text-xs font-semibold leading-tight ${isDarkMode ? "text-gray-200" : "text-gray-900"}`}>Sales Reps</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column: Two Rows Stacked - Larger Content */}
              <div className="space-y-4">
                {/* Top Row: Process Deviations & Potential Impact - Side by Side */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className={`border-2 shadow-lg ${isDarkMode ? "border-red-700/70 bg-red-950/30" : "border-red-200 bg-white"}`}>
                    <CardContent className="pt-6 pb-6 px-5">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2.5 rounded-lg ${isDarkMode ? "bg-red-900/50" : "bg-red-100"}`}>
                          <AlertTriangle className={`h-6 w-6 ${isDarkMode ? "text-red-400" : "text-red-600"}`} />
                        </div>
                        <h3 className={`text-lg font-bold ${isDarkMode ? "text-red-200" : "text-red-900"}`}>Deviations at Scale</h3>
                      </div>
                      <div className="space-y-3">
                        <div className={`flex items-center justify-between p-3 rounded-lg ${isDarkMode ? "bg-red-950/50" : "bg-red-50"}`}>
                          <span className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>Total Found</span>
                          <span className={`text-2xl font-bold ${isDarkMode ? "text-red-400" : "text-red-600"}`}>739</span>
                        </div>
                        <div className={`flex items-center justify-between p-3 rounded-lg ${isDarkMode ? "bg-red-950/50" : "bg-red-50"}`}>
                          <span className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>% of Opportunities</span>
                          <span className={`text-2xl font-bold ${isDarkMode ? "text-red-400" : "text-red-600"}`}>110%</span>
                        </div>
                        <p className={`text-xs mt-3 leading-relaxed ${isDarkMode ? "text-gray-400" : "text-muted-foreground"}`}>
                          *Some opportunities have multiple deviations, explaining why the percentage exceeds 100%
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className={`border-2 shadow-lg ${isDarkMode ? "border-blue-700/70 bg-blue-950/30" : "border-blue-200 bg-white"}`}>
                    <CardContent className="pt-6 pb-6 px-5">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2.5 rounded-lg ${isDarkMode ? "bg-blue-900/50" : "bg-blue-100"}`}>
                          <Target className={`h-6 w-6 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
                        </div>
                        <h3 className={`text-lg font-bold ${isDarkMode ? "text-blue-200" : "text-blue-900"}`}>Potential Impact</h3>
                      </div>
                      <div className={`p-4 rounded-lg border-2 ${isDarkMode ? "border-blue-700/70 bg-blue-950/30" : "border-blue-200 bg-blue-50"}`}>
                        <p className={`text-sm mb-3 leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                          If we could reduce process deviations by <strong className={isDarkMode ? "text-blue-300" : "text-blue-700"}>25%</strong>:
                        </p>
                        <div className={`text-3xl font-bold mb-2 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
                          +3-5% Win Rate
                        </div>
                        <p className={`text-sm mt-3 leading-relaxed ${isDarkMode ? "text-gray-400" : "text-muted-foreground"}`}>
                          Estimated revenue impact: <strong className={isDarkMode ? "text-blue-300" : "text-blue-700"}>$2.8M - $4.7M</strong>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Bottom Row: Bridge to Predictive Analytics - Full Width */}
                <Card className={`border-2 shadow-lg ${isDarkMode ? "border-purple-700/70 bg-purple-950/30" : "border-purple-200 bg-gradient-to-r from-purple-50 to-indigo-50"}`}>
                  <CardContent className="pt-6 pb-6 px-5">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg flex-shrink-0 ${isDarkMode ? "bg-purple-900/50" : "bg-purple-100"}`}>
                        <TrendingUp className={`h-7 w-7 ${isDarkMode ? "text-purple-400" : "text-purple-600"}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-bold mb-3 ${isDarkMode ? "text-purple-200" : "text-purple-900"}`}>
                          The Next Step: Predictive Analytics
                        </h3>
                        <p className={`text-sm leading-relaxed ${isDarkMode ? "text-purple-100" : "text-purple-800"}`}>
                          With <strong className={isDarkMode ? "text-purple-200" : "text-purple-900"}>739 deviations</strong> across <strong className={isDarkMode ? "text-purple-200" : "text-purple-900"}>672 opportunities</strong>, we need to identify which opportunities are most at risk. 
                          Predictive analytics helps prioritize sales efforts by forecasting win probability and identifying high-value opportunities 
                          that require immediate attention before they deviate from the optimal path.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: 4.5,
      title: "Business Scale & Impact (Alternative Layout)",
      type: "data",
      content: (
        <section className={`relative overflow-hidden rounded-3xl border p-8 shadow-2xl ${isDarkMode ? "border-neutral-700 bg-neutral-900" : "border-slate-200/60 bg-gradient-to-br from-slate-50 via-white to-slate-100"}`}>
          {/* Background Pattern - Subtle */}
          <div className={`pointer-events-none absolute inset-0 ${isDarkMode ? "opacity-10" : "opacity-20"}`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,70,229,0.08),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.06),transparent_32%)]" />
          </div>

          <div className="relative mx-auto max-w-5xl space-y-6">
            {/* Section header */}
            <header className="space-y-1">
              <h2 className={`text-xl font-semibold ${isDarkMode ? "text-slate-50" : "text-slate-900"}`}>
                Business Scale & Impact
              </h2>
              <p className={`text-sm max-w-2xl ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                Understanding the business context, quantifying the impact of process deviations at scale, and setting the stage for predictive intervention.
              </p>
            </header>

            {/* Hero overview card */}
            <div className={`rounded-2xl border p-6 shadow-sm ${isDarkMode ? "border-slate-700/60 bg-slate-900/80" : "border-slate-300 bg-white"}`}>
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <h3 className={`text-xs font-semibold uppercase tracking-[0.16em] ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                  Business overview
                </h3>
                <p className={`text-xs ${isDarkMode ? "text-slate-500" : "text-slate-500"}`}>
                  Snapshot of sales pipeline at the time of analysis.
                </p>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                {/* Total Contract Value */}
                <div className={`flex items-center gap-3 rounded-xl border px-3 py-3.5 ${isDarkMode ? "bg-sky-500/15 text-sky-50 border-sky-500/30" : "bg-sky-50 text-sky-900 border-sky-200"}`}>
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full ${isDarkMode ? "bg-black/40" : "bg-sky-100"}`}>
                    <DollarSign className={`h-4 w-4 ${isDarkMode ? "text-sky-300" : "text-sky-600"}`} />
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-base font-semibold leading-tight ${isDarkMode ? "text-sky-50" : "text-sky-900"}`}>
                      $93M
                    </span>
                    <span className={`text-[11px] font-medium uppercase tracking-[0.16em] ${isDarkMode ? "text-slate-300/80" : "text-slate-600"}`}>
                      Total contract value
                    </span>
                  </div>
                </div>

                {/* Opportunities */}
                <div className={`flex items-center gap-3 rounded-xl border px-3 py-3.5 ${isDarkMode ? "bg-slate-800/80 text-slate-50 border-slate-600/60" : "bg-slate-50 text-slate-900 border-slate-200"}`}>
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full ${isDarkMode ? "bg-black/40" : "bg-slate-100"}`}>
                    <FileText className={`h-4 w-4 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`} />
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-base font-semibold leading-tight ${isDarkMode ? "text-slate-50" : "text-slate-900"}`}>
                      672
                    </span>
                    <span className={`text-[11px] font-medium uppercase tracking-[0.16em] ${isDarkMode ? "text-slate-300/80" : "text-slate-600"}`}>
                      Opportunities
                    </span>
                  </div>
                </div>

                {/* Win Rate */}
                <div className={`flex items-center gap-3 rounded-xl border px-3 py-3.5 ${isDarkMode ? "bg-emerald-500/12 text-emerald-50 border-emerald-500/30" : "bg-emerald-50 text-emerald-900 border-emerald-200"}`}>
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full ${isDarkMode ? "bg-black/40" : "bg-emerald-100"}`}>
                    <Percent className={`h-4 w-4 ${isDarkMode ? "text-emerald-300" : "text-emerald-600"}`} />
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-base font-semibold leading-tight ${isDarkMode ? "text-emerald-50" : "text-emerald-900"}`}>
                      56%
                    </span>
                    <span className={`text-[11px] font-medium uppercase tracking-[0.16em] ${isDarkMode ? "text-slate-300/80" : "text-slate-600"}`}>
                      Win rate
                    </span>
                  </div>
                </div>

                {/* Sales Reps */}
                <div className={`flex items-center gap-3 rounded-xl border px-3 py-3.5 ${isDarkMode ? "bg-amber-500/12 text-amber-50 border-amber-500/30" : "bg-amber-50 text-amber-900 border-amber-200"}`}>
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full ${isDarkMode ? "bg-black/40" : "bg-amber-100"}`}>
                    <Users className={`h-4 w-4 ${isDarkMode ? "text-amber-300" : "text-amber-600"}`} />
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-base font-semibold leading-tight ${isDarkMode ? "text-amber-50" : "text-amber-900"}`}>
                      20
                    </span>
                    <span className={`text-[11px] font-medium uppercase tracking-[0.16em] ${isDarkMode ? "text-slate-300/80" : "text-slate-600"}`}>
                      Sales reps
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem + Impact row */}
            <div className="grid items-stretch gap-6 md:grid-cols-3">
              {/* Deviations at Scale - spans 2 columns on md+ */}
              <div className={`md:col-span-2 rounded-2xl border p-6 shadow-sm ${isDarkMode ? "border-red-500/30 bg-red-950/60" : "border-red-300 bg-red-50"}`}>
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className={`text-xs font-semibold uppercase tracking-[0.16em] ${isDarkMode ? "text-red-100" : "text-red-900"}`}>
                      Deviations at scale
                    </h3>
                    <p className={`mt-1 text-xs ${isDarkMode ? "text-red-100/80" : "text-red-700"}`}>
                      Where process friction appears as volume increases.
                    </p>
                  </div>
                  <p className={`text-[11px] md:max-w-xs ${isDarkMode ? "text-red-100/70" : "text-red-600"}`}>
                    Some opportunities have multiple deviations, which is why the percentage of opportunities can exceed 100 percent.
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className={`text-[11px] uppercase tracking-[0.18em] ${isDarkMode ? "text-red-200/80" : "text-red-700"}`}>
                      Total deviations found
                    </p>
                    <p className={`mt-2 text-4xl font-semibold ${isDarkMode ? "text-red-50" : "text-red-900"}`}>739</p>
                    <p className={`mt-2 text-sm ${isDarkMode ? "text-red-100/85" : "text-red-800"}`}>
                      Across{" "}
                      <span className={`font-medium ${isDarkMode ? "text-red-50" : "text-red-900"}`}>672 opportunities</span>{" "}
                      representing{" "}
                      <span className={`font-medium ${isDarkMode ? "text-red-50" : "text-red-900"}`}>110 percent</span> of
                      opportunities reviewed.
                    </p>
                  </div>

                  {/* Simple "load" indicator */}
                  <div className="w-full max-w-xs">
                    <p className={`text-[11px] font-medium uppercase tracking-[0.16em] ${isDarkMode ? "text-red-200/80" : "text-red-700"}`}>
                      Deviation load
                    </p>
                    <div className={`mt-3 h-2 w-full rounded-full ${isDarkMode ? "bg-red-900/80" : "bg-red-200"}`}>
                      <div className={`h-2 w-[82%] rounded-full ${isDarkMode ? "bg-red-400" : "bg-red-600"}`} />
                    </div>
                    <p className={`mt-2 text-xs ${isDarkMode ? "text-red-100/80" : "text-red-700"}`}>
                      High deviation density, which creates noise for sales teams and obscures true win probability.
                    </p>
                  </div>
                </div>
              </div>

              {/* Potential Impact */}
              <div className={`rounded-2xl border p-6 shadow-sm ${isDarkMode ? "border-sky-500/40 bg-sky-950/70" : "border-sky-300 bg-sky-50"}`}>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className={`text-xs font-semibold uppercase tracking-[0.16em] ${isDarkMode ? "text-sky-100" : "text-sky-900"}`}>
                      Potential impact
                    </h3>
                    <p className={`mt-1 text-xs ${isDarkMode ? "text-sky-100/80" : "text-sky-700"}`}>
                      Scenario: reduce process deviations by 25 percent.
                    </p>
                  </div>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.16em] ${isDarkMode ? "bg-sky-900/60 text-sky-200" : "bg-sky-100 text-sky-700"}`}>
                    Modeled
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  <div>
                    <p className={`text-[11px] uppercase tracking-[0.18em] ${isDarkMode ? "text-sky-200/85" : "text-sky-700"}`}>
                      Win rate uplift
                    </p>
                    <p className={`mt-1 text-3xl font-semibold ${isDarkMode ? "text-sky-50" : "text-sky-900"}`}>
                      +3–5% win rate
                    </p>
                    <p className={`mt-2 text-sm ${isDarkMode ? "text-sky-100/85" : "text-sky-700"}`}>
                      Focused remediation of high impact deviations translates into more consistent conversions on qualified opportunities.
                    </p>
                  </div>

                  <div className={`rounded-xl p-3 ${isDarkMode ? "bg-sky-900/60" : "bg-sky-100"}`}>
                    <p className={`text-[11px] uppercase tracking-[0.16em] ${isDarkMode ? "text-sky-200" : "text-sky-700"}`}>
                      Estimated revenue impact
                    </p>
                    <p className={`mt-1 text-lg font-semibold ${isDarkMode ? "text-sky-50" : "text-sky-900"}`}>
                      +$2.8M - $4.7M
                    </p>
                    <p className={`mt-1 text-xs ${isDarkMode ? "text-sky-100/80" : "text-sky-600"}`}>
                      Based on current contract values, opportunity mix, and average deal size.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative footer card */}
            <div className={`rounded-2xl border p-6 shadow-sm ${isDarkMode ? "border-purple-500/30 bg-purple-950/70" : "border-purple-300 bg-purple-50"}`}>
              <h3 className={`text-sm font-semibold ${isDarkMode ? "text-purple-50" : "text-purple-900"}`}>
                The next step: predictive analytics
              </h3>
              <p className={`mt-2 text-sm max-w-3xl ${isDarkMode ? "text-purple-100/85" : "text-purple-800"}`}>
                With 739 deviations across 672 opportunities, the sales organization needs a way to see which deals are drifting off the optimal path before they are lost. Predictive analytics turns noisy deviation data into a ranked list of opportunities that require attention.
              </p>

              <ul className={`mt-4 grid gap-3 text-sm md:grid-cols-3 ${isDarkMode ? "text-purple-100/90" : "text-purple-800"}`}>
                <li className="flex gap-2">
                  <span className={`mt-[6px] h-1.5 w-1.5 rounded-full ${isDarkMode ? "bg-purple-300" : "bg-purple-600"}`} />
                  <span>
                    Prioritize sales efforts by predicting which opportunities are most at risk and most worth saving.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className={`mt-[6px] h-1.5 w-1.5 rounded-full ${isDarkMode ? "bg-purple-300" : "bg-purple-600"}`} />
                  <span>
                    Surface deviation patterns that consistently precede lost deals, so playbooks can be updated with evidence.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className={`mt-[6px] h-1.5 w-1.5 rounded-full ${isDarkMode ? "bg-purple-300" : "bg-purple-600"}`} />
                  <span>
                    Deliver simple, ranked worklists to reps rather than raw reports, reducing noise and decision fatigue.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: 4.5,
      title: "Business Scale & Impact (Alternative Layout)",
      type: "data",
      content: (
        <section className={`relative overflow-hidden rounded-3xl border p-8 shadow-2xl ${isDarkMode ? "border-neutral-700 bg-neutral-900" : "border-slate-200/60 bg-gradient-to-br from-slate-50 via-white to-slate-100"}`}>
          {/* Background Pattern - Subtle */}
          <div className={`pointer-events-none absolute inset-0 ${isDarkMode ? "opacity-10" : "opacity-20"}`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,70,229,0.08),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.06),transparent_32%)]" />
          </div>

          <div className="relative mx-auto max-w-5xl space-y-6">
            {/* Section header */}
            <header className="space-y-1">
              <h2 className={`text-xl font-semibold ${isDarkMode ? "text-slate-50" : "text-slate-900"}`}>
                Business Scale & Impact
              </h2>
              <p className={`text-sm max-w-2xl ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                Understanding the business context, quantifying the impact of process deviations at scale, and setting the stage for predictive intervention.
              </p>
            </header>

            {/* Hero overview card */}
            <div className={`rounded-2xl border p-6 shadow-sm ${isDarkMode ? "border-slate-700/60 bg-slate-900/80" : "border-slate-300 bg-white"}`}>
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <h3 className={`text-xs font-semibold uppercase tracking-[0.16em] ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                  Business overview
                </h3>
                <p className={`text-xs ${isDarkMode ? "text-slate-500" : "text-slate-500"}`}>
                  Snapshot of sales pipeline at the time of analysis.
                </p>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                {/* Total Contract Value */}
                <div className={`flex items-center gap-3 rounded-xl border px-3 py-3.5 ${isDarkMode ? "bg-sky-500/15 text-sky-50 border-sky-500/30" : "bg-sky-50 text-sky-900 border-sky-200"}`}>
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full ${isDarkMode ? "bg-black/40" : "bg-sky-100"}`}>
                    <DollarSign className={`h-4 w-4 ${isDarkMode ? "text-sky-300" : "text-sky-600"}`} />
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-base font-semibold leading-tight ${isDarkMode ? "text-sky-50" : "text-sky-900"}`}>
                      $93M
                    </span>
                    <span className={`text-[11px] font-medium uppercase tracking-[0.16em] ${isDarkMode ? "text-slate-300/80" : "text-slate-600"}`}>
                      Total contract value
                    </span>
                  </div>
                </div>

                {/* Opportunities */}
                <div className={`flex items-center gap-3 rounded-xl border px-3 py-3.5 ${isDarkMode ? "bg-slate-800/80 text-slate-50 border-slate-600/60" : "bg-slate-50 text-slate-900 border-slate-200"}`}>
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full ${isDarkMode ? "bg-black/40" : "bg-slate-100"}`}>
                    <FileText className={`h-4 w-4 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`} />
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-base font-semibold leading-tight ${isDarkMode ? "text-slate-50" : "text-slate-900"}`}>
                      672
                    </span>
                    <span className={`text-[11px] font-medium uppercase tracking-[0.16em] ${isDarkMode ? "text-slate-300/80" : "text-slate-600"}`}>
                      Opportunities
                    </span>
                  </div>
                </div>

                {/* Win Rate */}
                <div className={`flex items-center gap-3 rounded-xl border px-3 py-3.5 ${isDarkMode ? "bg-emerald-500/12 text-emerald-50 border-emerald-500/30" : "bg-emerald-50 text-emerald-900 border-emerald-200"}`}>
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full ${isDarkMode ? "bg-black/40" : "bg-emerald-100"}`}>
                    <Percent className={`h-4 w-4 ${isDarkMode ? "text-emerald-300" : "text-emerald-600"}`} />
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-base font-semibold leading-tight ${isDarkMode ? "text-emerald-50" : "text-emerald-900"}`}>
                      56%
                    </span>
                    <span className={`text-[11px] font-medium uppercase tracking-[0.16em] ${isDarkMode ? "text-slate-300/80" : "text-slate-600"}`}>
                      Win rate
                    </span>
                  </div>
                </div>

                {/* Sales Reps */}
                <div className={`flex items-center gap-3 rounded-xl border px-3 py-3.5 ${isDarkMode ? "bg-amber-500/12 text-amber-50 border-amber-500/30" : "bg-amber-50 text-amber-900 border-amber-200"}`}>
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full ${isDarkMode ? "bg-black/40" : "bg-amber-100"}`}>
                    <Users className={`h-4 w-4 ${isDarkMode ? "text-amber-300" : "text-amber-600"}`} />
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-base font-semibold leading-tight ${isDarkMode ? "text-amber-50" : "text-amber-900"}`}>
                      20
                    </span>
                    <span className={`text-[11px] font-medium uppercase tracking-[0.16em] ${isDarkMode ? "text-slate-300/80" : "text-slate-600"}`}>
                      Sales reps
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem + Impact row */}
            <div className="grid items-stretch gap-6 md:grid-cols-3">
              {/* Deviations at Scale - spans 2 columns on md+ */}
              <div className={`md:col-span-2 rounded-2xl border p-6 shadow-sm ${isDarkMode ? "border-red-500/30 bg-red-950/60" : "border-red-300 bg-red-50"}`}>
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className={`text-xs font-semibold uppercase tracking-[0.16em] ${isDarkMode ? "text-red-100" : "text-red-900"}`}>
                      Deviations at scale
                    </h3>
                    <p className={`mt-1 text-xs ${isDarkMode ? "text-red-100/80" : "text-red-700"}`}>
                      Where process friction appears as volume increases.
                    </p>
                  </div>
                  <p className={`text-[11px] md:max-w-xs ${isDarkMode ? "text-red-100/70" : "text-red-600"}`}>
                    Some opportunities have multiple deviations, which is why the percentage of opportunities can exceed 100 percent.
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className={`text-[11px] uppercase tracking-[0.18em] ${isDarkMode ? "text-red-200/80" : "text-red-700"}`}>
                      Total deviations found
                    </p>
                    <p className={`mt-2 text-4xl font-semibold ${isDarkMode ? "text-red-50" : "text-red-900"}`}>739</p>
                    <p className={`mt-2 text-sm ${isDarkMode ? "text-red-100/85" : "text-red-800"}`}>
                      Across{" "}
                      <span className={`font-medium ${isDarkMode ? "text-red-50" : "text-red-900"}`}>672 opportunities</span>{" "}
                      representing{" "}
                      <span className={`font-medium ${isDarkMode ? "text-red-50" : "text-red-900"}`}>110 percent</span> of
                      opportunities reviewed.
                    </p>
                  </div>

                  {/* Simple "load" indicator */}
                  <div className="w-full max-w-xs">
                    <p className={`text-[11px] font-medium uppercase tracking-[0.16em] ${isDarkMode ? "text-red-200/80" : "text-red-700"}`}>
                      Deviation load
                    </p>
                    <div className={`mt-3 h-2 w-full rounded-full ${isDarkMode ? "bg-red-900/80" : "bg-red-200"}`}>
                      <div className={`h-2 w-[82%] rounded-full ${isDarkMode ? "bg-red-400" : "bg-red-600"}`} />
                    </div>
                    <p className={`mt-2 text-xs ${isDarkMode ? "text-red-100/80" : "text-red-700"}`}>
                      High deviation density, which creates noise for sales teams and obscures true win probability.
                    </p>
                  </div>
                </div>
              </div>

              {/* Potential Impact */}
              <div className={`rounded-2xl border p-6 shadow-sm ${isDarkMode ? "border-sky-500/40 bg-sky-950/70" : "border-sky-300 bg-sky-50"}`}>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className={`text-xs font-semibold uppercase tracking-[0.16em] ${isDarkMode ? "text-sky-100" : "text-sky-900"}`}>
                      Potential impact
                    </h3>
                    <p className={`mt-1 text-xs ${isDarkMode ? "text-sky-100/80" : "text-sky-700"}`}>
                      Scenario: reduce process deviations by 25 percent.
                    </p>
                  </div>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.16em] ${isDarkMode ? "bg-sky-900/60 text-sky-200" : "bg-sky-100 text-sky-700"}`}>
                    Modeled
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  <div>
                    <p className={`text-[11px] uppercase tracking-[0.18em] ${isDarkMode ? "text-sky-200/85" : "text-sky-700"}`}>
                      Win rate uplift
                    </p>
                    <p className={`mt-1 text-3xl font-semibold ${isDarkMode ? "text-sky-50" : "text-sky-900"}`}>
                      +3–5% win rate
                    </p>
                    <p className={`mt-2 text-sm ${isDarkMode ? "text-sky-100/85" : "text-sky-700"}`}>
                      Focused remediation of high impact deviations translates into more consistent conversions on qualified opportunities.
                    </p>
                  </div>

                  <div className={`rounded-xl p-3 ${isDarkMode ? "bg-sky-900/60" : "bg-sky-100"}`}>
                    <p className={`text-[11px] uppercase tracking-[0.16em] ${isDarkMode ? "text-sky-200" : "text-sky-700"}`}>
                      Estimated revenue impact
                    </p>
                    <p className={`mt-1 text-lg font-semibold ${isDarkMode ? "text-sky-50" : "text-sky-900"}`}>
                      +$2.8M - $4.7M
                    </p>
                    <p className={`mt-1 text-xs ${isDarkMode ? "text-sky-100/80" : "text-sky-600"}`}>
                      Based on current contract values, opportunity mix, and average deal size.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative footer card */}
            <div className={`rounded-2xl border p-6 shadow-sm ${isDarkMode ? "border-purple-500/30 bg-purple-950/70" : "border-purple-300 bg-purple-50"}`}>
              <h3 className={`text-sm font-semibold ${isDarkMode ? "text-purple-50" : "text-purple-900"}`}>
                The next step: predictive analytics
              </h3>
              <p className={`mt-2 text-sm max-w-3xl ${isDarkMode ? "text-purple-100/85" : "text-purple-800"}`}>
                With 739 deviations across 672 opportunities, the sales organization needs a way to see which deals are drifting off the optimal path before they are lost. Predictive analytics turns noisy deviation data into a ranked list of opportunities that require attention.
              </p>

              <ul className={`mt-4 grid gap-3 text-sm md:grid-cols-3 ${isDarkMode ? "text-purple-100/90" : "text-purple-800"}`}>
                <li className="flex gap-2">
                  <span className={`mt-[6px] h-1.5 w-1.5 rounded-full ${isDarkMode ? "bg-purple-300" : "bg-purple-600"}`} />
                  <span>
                    Prioritize sales efforts by predicting which opportunities are most at risk and most worth saving.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className={`mt-[6px] h-1.5 w-1.5 rounded-full ${isDarkMode ? "bg-purple-300" : "bg-purple-600"}`} />
                  <span>
                    Surface deviation patterns that consistently precede lost deals, so playbooks can be updated with evidence.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className={`mt-[6px] h-1.5 w-1.5 rounded-full ${isDarkMode ? "bg-purple-300" : "bg-purple-600"}`} />
                  <span>
                    Deliver simple, ranked worklists to reps rather than raw reports, reducing noise and decision fatigue.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
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
            <CardContent className="pt-6">
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

  const slides = getSlides(isDarkMode);

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
    <div className={`min-h-screen transition-colors ${isDarkMode ? "bg-neutral-950" : "bg-white"}`}>
      <div className="flex w-full">
        {/* Left Sidebar - Slide Navigation */}
        <aside
          className={`fixed left-0 top-0 h-screen z-30 transition-all duration-300 ease-in-out ${
            isSidebarOpen ? "w-72" : "w-16"
          } ${isDarkMode ? "bg-neutral-900 border-r border-neutral-800" : "bg-white border-r border-gray-200"} shadow-lg`}
        >
          <div className="flex flex-col h-full">
            {/* Sidebar Header with Main Title */}
            <div className={`p-4 border-b ${isDarkMode ? "border-neutral-800" : "border-gray-200"}`}>
              <div className="flex items-center justify-between mb-3">
                {isSidebarOpen && (
                  <h2 className={`text-xs font-semibold uppercase tracking-wider ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                    Presentation
                  </h2>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className={isSidebarOpen ? "ml-auto" : ""}
                  aria-label={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
                >
                  {isSidebarOpen ? (
                    <ChevronLeft className="h-4 w-4" />
                  ) : (
                    <Menu className="h-4 w-4" />
                  )}
                </Button>
              </div>
              {isSidebarOpen && (
                <div className="space-y-1">
                  <h1 className={`text-lg font-bold leading-tight ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    <span className={isDarkMode ? "text-blue-400" : "text-blue-600"}>Process Mining</span>
                    <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}> & </span>
                    <span className={isDarkMode ? "text-purple-400" : "text-purple-600"}>Sales Analytics</span>
                  </h1>
                  <p className={`text-xs leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    Using process mining and predictive analytics to optimize sales performance and identify high-probability opportunities
                  </p>
                </div>
              )}
            </div>

            {/* Navigation Controls */}
            {isSidebarOpen && (
              <div className={`p-4 space-y-3 border-b ${isDarkMode ? "border-neutral-800" : "border-gray-200"}`}>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className="flex-1"
                  >
                    <ChevronUp className="h-4 w-4 mr-1" />
                    Prev
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextSlide}
                    disabled={currentSlide === slides.length - 1}
                    className="flex-1"
                  >
                    Next
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-xs ${isDarkMode ? "text-gray-400" : "text-muted-foreground"}`}>
                    {currentSlide + 1} / {slides.length}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    aria-label="Toggle dark mode"
                  >
                    {isDarkMode ? (
                      <Sun className="h-4 w-4" />
                    ) : (
                      <Moon className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            )}

            {/* Slide List */}
            <div className="flex-1 overflow-y-auto">
              <nav className="p-2 space-y-1">
                {slides.map((slide, index) => {
                  const isActive = index === currentSlide;
                  return (
                    <button
                      key={slide.id}
                      onClick={() => goToSlide(index)}
                      className={`w-full text-left rounded-lg px-3 py-2.5 transition-all duration-200 group ${
                        isActive
                          ? isDarkMode
                            ? "bg-blue-600 text-white shadow-md"
                            : "bg-blue-100 text-blue-900 shadow-sm"
                          : isDarkMode
                          ? "text-gray-300 hover:bg-neutral-800 hover:text-white"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        <span
                          className={`text-xs font-bold flex-shrink-0 mt-0.5 ${
                            isActive
                              ? isDarkMode
                                ? "text-blue-100"
                                : "text-blue-600"
                              : isDarkMode
                              ? "text-gray-500"
                              : "text-gray-400"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {isSidebarOpen && (
                          <div className="flex-1 min-w-0">
                            <div className={`text-sm font-medium truncate ${isActive ? "" : "group-hover:font-semibold"}`}>
                              {slide.title}
                            </div>
                            <div
                              className={`text-xs mt-0.5 capitalize ${
                                isActive
                                  ? isDarkMode
                                    ? "text-blue-200"
                                    : "text-blue-700"
                                  : isDarkMode
                                  ? "text-gray-500"
                                  : "text-gray-500"
                              }`}
                            >
                              {slide.type}
                            </div>
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-72" : "ml-16"}`}>
          <div className="flex gap-6 px-6 py-4">
            <div className="flex-1 min-w-0">
            {/* Current Slide - Full width, maximized focus */}
            <Card className={`min-h-[calc(100vh-120px)] shadow-2xl border-2 w-full ${isDarkMode ? "bg-neutral-900 border-neutral-700" : "border-gray-200"}`}>
            {/* Hide CardHeader for slide 0 (title slide) since content has its own title */}
            {currentSlide !== 0 && (
              <CardHeader className={`border-b py-5 ${isDarkMode ? "bg-gradient-to-r from-neutral-800 to-neutral-900 border-neutral-700" : "bg-gradient-to-r from-gray-50 to-gray-100/50"}`}>
                <div className="flex items-start gap-4">
                  {currentSlide === 8 && (
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0 ${isDarkMode ? "bg-blue-900/50" : "bg-blue-100"}`}>
                      <Workflow className={`h-5 w-5 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
                    </div>
                  )}
                  <div className="flex-1">
                    <CardTitle className={`text-2xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>{slides[currentSlide].title}</CardTitle>
                    {currentSlide === 1 && (
                      <p className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                        Understanding the current state: identifying gaps between manual, fragmented processes and the need for data-driven, always-on visibility
                      </p>
                    )}
                    {currentSlide === 2 && (
                      <p className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                        Using process mining to uncover hidden inefficiencies and process deviations that impact sales performance
                      </p>
                    )}
                    {currentSlide === 3 && (
                      <p className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                        Understanding the business context: quantifying the impact of process deviations at scale and setting the stage for predictive intervention
                      </p>
                    )}
                    {currentSlide === 8 && (
                      <p className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                        End-to-end data pipeline from source systems to analytics dashboards
                      </p>
                    )}
                  </div>
                </div>
              </CardHeader>
            )}
            <CardContent className={`${currentSlide === 0 || currentSlide === 1 || currentSlide === 2 ? "p-0 overflow-hidden" : "p-6"} ${isDarkMode ? "bg-neutral-900" : ""}`}>
              <div className={isDarkMode ? "dark-mode-content" : ""}>
                {slides[currentSlide].content}
              </div>
            </CardContent>
          </Card>
            </div>

            {/* Right metadata panel */}
            <aside className="hidden xl:block w-80 flex-shrink-0">
          <div className="sticky top-10">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              {meta.what && (
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                    <p className={`text-[11px] font-semibold uppercase tracking-wider ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
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
                    <p className={`text-[11px] font-semibold uppercase tracking-wider ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
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
                    <p className={`text-[11px] font-semibold uppercase tracking-wider ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                      Related Skills
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {meta.relatedSkills.slice(0, 6).map((skill) => (
                      <span
                        key={skill}
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${isDarkMode ? "bg-neutral-800 text-gray-100" : "bg-gray-200 text-gray-800"}`}
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
                    <p className={`text-[11px] font-semibold uppercase tracking-wider ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
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
        </main>
      </div>
    </div>
  );
}

