"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useInterviewMode } from "@/context/InterviewModeContext";
import InterviewScriptModal from "@/components/InterviewScriptModal";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function NavBar() {
  const { isInterviewMode, toggleInterviewMode } = useInterviewMode();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Left side - Logo/Brand */}
          <Link href="/" className="font-semibold text-lg hover:text-primary transition-colors">
            Mike Markman OS
          </Link>

          {/* Right side - Navigation Links */}
          <div className="flex items-center gap-2">
            {/* Dark Mode Toggle */}
            {mounted && (
              <div className="flex items-center gap-2 px-2">
                <label htmlFor="dark-mode" className="text-sm font-medium cursor-pointer">
                  Dark Mode
                </label>
                <Switch
                  id="dark-mode"
                  checked={theme === "dark"}
                  onCheckedChange={toggleDarkMode}
                />
              </div>
            )}

            {/* Interview Mode Toggle */}
            <div className="flex items-center gap-2 px-2">
              <label htmlFor="interview-mode" className="text-sm font-medium cursor-pointer">
                Interview Mode
              </label>
              <Switch
                id="interview-mode"
                checked={isInterviewMode}
                onCheckedChange={toggleInterviewMode}
              />
            </div>

            {/* Script Button */}
            <InterviewScriptModal />

            {/* Main Links */}
            <div className="hidden md:flex items-center gap-2">
              <Button asChild variant="ghost" size="sm">
                <Link href="/resume">Resume</Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link href="/search">Search</Link>
              </Button>

              {/* Unified Explore Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    Explore
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                    Content
                  </div>
                  <DropdownMenuItem asChild>
                    <Link href="/skills">Skills</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/evidence">Evidence</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/scenarios">Scenarios</Link>
                  </DropdownMenuItem>

                  <div className="my-1 h-px bg-border" />

                  <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                    Demos
                  </div>
                  <DropdownMenuItem asChild>
                    <Link href="/demos/reporting-engine">Reporting Engine</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/demos/governance-explorer">Governance Explorer</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/demos/automation">Automation Flow</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/demos/kpi-dashboard">KPI Dashboard</Link>
                  </DropdownMenuItem>

                  <div className="my-1 h-px bg-border" />

                  <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                    Adapters
                  </div>
                  <DropdownMenuItem asChild>
                    <Link href="/adapters/fortrea">Fortrea</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/adapters/generic-pe">Generic PE</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Script Button - Mobile */}
            <div className="md:hidden">
              <InterviewScriptModal />
            </div>

            {/* Mobile Menu - Dropdown with all items */}
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    Menu
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem asChild>
                    <Link href="/resume">Resume</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/search">Search</Link>
                  </DropdownMenuItem>

                  <div className="my-1 h-px bg-border" />

                  <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                    Content
                  </div>
                  <DropdownMenuItem asChild>
                    <Link href="/skills">Skills</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/evidence">Evidence</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/scenarios">Scenarios</Link>
                  </DropdownMenuItem>

                  <div className="my-1 h-px bg-border" />

                  <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                    Demos
                  </div>
                  <DropdownMenuItem asChild>
                    <Link href="/demos/reporting-engine">Reporting Engine</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/demos/governance-explorer">Governance Explorer</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/demos/automation">Automation Flow</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/demos/kpi-dashboard">KPI Dashboard</Link>
                  </DropdownMenuItem>

                  <div className="my-1 h-px bg-border" />

                  <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                    Adapters
                  </div>
                  <DropdownMenuItem asChild>
                    <Link href="/adapters/fortrea">Fortrea</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/adapters/generic-pe">Generic PE</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

