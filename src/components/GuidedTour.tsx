"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useInterviewMode } from "@/context/InterviewModeContext";

interface TourStep {
  title: string;
  description: string;
}

const tourSteps: TourStep[] = [
  {
    title: "Welcome to Mike OS",
    description:
      "This is a live operating system showing real examples of my work across reporting, automation, governance and analytics.",
  },
  {
    title: "Resume, Skills & Evidence",
    description:
      "These pages contain my structured resume, capabilities, and direct links to real examples of my work.",
  },
  {
    title: "Search Engine",
    description:
      "Ask any question about my career—this searches my resume, skills, and evidence intelligently.",
  },
  {
    title: "Live Demos",
    description:
      "These modules show example reporting engines, automation flows, governance models, and rule engines.",
  },
  {
    title: "Company Adapters",
    description:
      "These pages tailor my background to specific companies or roles, such as Fortrea or private equity.",
  },
  {
    title: "Interview Mode",
    description:
      "This toggle simplifies the UI and enlarges content for live presentation.",
  },
];

export default function GuidedTour() {
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const { isInterviewMode } = useInterviewMode();

  const handleNext = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setOpen(false);
      setCurrentStep(0);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentStep(0);
  };

  const currentStepData = tourSteps[currentStep];
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === tourSteps.length - 1;

  const handleOpenTour = () => {
    setOpen(true);
  };

  return (
    <>
      <Button
        variant="default"
        className="px-6 py-4 text-lg"
        onClick={handleOpenTour}
      >
        Start Guided Tour
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className={`${
            isInterviewMode ? "max-w-3xl p-6" : "max-w-2xl p-8"
          } bg-background/95 backdrop-blur`}
          showCloseButton={false}
        >
          <DialogHeader>
            <DialogTitle
              className={isInterviewMode ? "text-2xl mb-2" : "text-xl mb-1"}
            >
              {currentStepData.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <p
              className={`leading-relaxed ${
                isInterviewMode ? "text-base" : "text-sm"
              }`}
            >
              {currentStepData.description}
            </p>

            {/* Progress indicator */}
            <div className="flex gap-2 justify-center">
              {tourSteps.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    index === currentStep
                      ? "bg-primary w-8"
                      : index < currentStep
                      ? "bg-primary/50 w-2"
                      : "bg-muted w-2"
                  }`}
                />
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between items-center">
              <Button
                variant="ghost"
                onClick={handleBack}
                disabled={isFirstStep}
              >
                Back
              </Button>
              <div className="text-sm text-muted-foreground">
                {currentStep + 1} of {tourSteps.length}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={handleClose}>
                  Close
                </Button>
                <Button onClick={handleNext}>
                  {isLastStep ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

