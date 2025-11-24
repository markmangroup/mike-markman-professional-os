"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Mike Markman</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Finance, analytics, and transformation leader. 20+ years building systems, teams, and intelligence for global organizations.
        </p>
      </div>

      {/* About Me */}
      <div className="max-w-3xl mx-auto space-y-6 py-8">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300">
          I fix complex things with clarity, data, and structure.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          For 20 years across finance, analytics, operations, and product, I've been the person companies rely on when systems get complicated — financial systems, reporting systems, operational workflows, data platforms, or organizational structures. I build order, visibility, and momentum where it didn't exist.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          I've led global teams, built platforms, modernized reporting ecosystems, architected data flows, automated processes, implemented governance, and delivered real systems used by real people. My work spans enterprise-scale environments (IQVIA Shared Services and ED&A), private credit reporting and governance (Metropolitan Partners), joint-venture controller operations (Q² Solutions), and full operational transformation for SMBs (Laurel AG).
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          This site is a curated portfolio of that work — the systems I've built, the problems I've solved, and the way I think. It's part resume, part case library, part professional operating system.
        </p>
      </div>

      {/* Intro Paragraph */}
      <div className="space-y-6">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          This site is a curated portfolio of the real systems, deliverables, and transformation work I've led across IQVIA, Q² Solutions, private equity clients, and Markman Group engagements. It blends structured case studies, real artifacts, and interactive demos into a single professional operating system.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="card cursor-pointer hover:shadow-lg transition-shadow">
          <Link href="/career" className="block h-full">
            <CardHeader>
              <CardTitle className="text-xl">Career Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Explore my professional journey and experience
              </p>
            </CardContent>
          </Link>
        </Card>

        <Card className="card cursor-pointer hover:shadow-lg transition-shadow">
          <Link href="/cases" className="block h-full">
            <CardHeader>
              <CardTitle className="text-xl">Case Studies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Deep dives into real transformation work
              </p>
            </CardContent>
          </Link>
        </Card>

        <Card className="card cursor-pointer hover:shadow-lg transition-shadow">
          <Link href="/home" className="block h-full">
            <CardHeader>
              <CardTitle className="text-xl">Systems I've Built</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Interactive OS dashboard and demos
              </p>
            </CardContent>
          </Link>
        </Card>
      </div>

      {/* Optional Personal Note */}
      <div className="text-center pt-4">
        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
          I've spent my career building clarity in complex environments — this site reflects that work.
        </p>
      </div>
    </div>
  );
}
