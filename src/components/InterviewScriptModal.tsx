"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useInterviewMode } from "@/context/InterviewModeContext";

export default function InterviewScriptModal() {
  const [open, setOpen] = useState(false);
  const { isInterviewMode } = useInterviewMode();

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setOpen(true)}
      >
        Script
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className={isInterviewMode ? "max-w-3xl text-lg" : "max-w-2xl"}
        >
          <DialogHeader>
            <DialogTitle className={isInterviewMode ? "text-2xl" : ""}>
              Interview Script
            </DialogTitle>
            <DialogDescription className={isInterviewMode ? "text-base" : ""}>
              Suggested talking points for introducing the OS
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 mt-4">
            {/* Section A: Opening */}
            <div>
              <h3 className={`font-semibold mb-2 ${isInterviewMode ? "text-base" : "text-sm"}`}>
                A. Opening (20–30 seconds)
              </h3>
              <p className={`leading-relaxed ${isInterviewMode ? "text-base" : "text-sm"}`}>
                Thanks for having me. Instead of walking through a generic resume, I built this OS
                to show you real examples of the systems, reporting engines, automation, and
                governance models I've implemented. We can explore any of these live based on
                what's most relevant to you.
              </p>
            </div>

            {/* Section B: Positioning */}
            <div>
              <h3 className={`font-semibold mb-2 ${isInterviewMode ? "text-base" : "text-sm"}`}>
                B. Positioning
              </h3>
              <p className={`leading-relaxed ${isInterviewMode ? "text-base" : "text-sm"}`}>
                My background spans shared services, enterprise data platforms, reporting
                modernization, process mining, and automation COEs. I've led global finance
                operations, built analytics organizations, and delivered value in private equity and
                CRO environments.
              </p>
            </div>

            {/* Section C: How We'll Use This OS */}
            <div>
              <h3 className={`font-semibold mb-2 ${isInterviewMode ? "text-base" : "text-sm"}`}>
                C. How We'll Use This OS
              </h3>
              <ul
                className={`space-y-2 list-disc list-inside leading-relaxed ${
                  isInterviewMode ? "text-base" : "text-sm"
                }`}
              >
                <li>
                  "If you want to dive into reporting, we'll open the Reporting Engine."
                </li>
                <li>
                  "If governance is the pain point, we'll explore the Governance Explorer."
                </li>
                <li>
                  "If workflows or process automation matter, we'll walk through the Automation
                  Flow."
                </li>
                <li>
                  "And if you want the quick version, Interview Mode simplifies everything for
                  clarity."
                </li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

