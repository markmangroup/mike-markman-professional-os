"use client";

import { useEffect } from "react";
import { useInterviewMode } from "@/context/InterviewModeContext";

export function InterviewModeBody({ children }: { children: React.ReactNode }) {
  const { isInterviewMode } = useInterviewMode();

  useEffect(() => {
    document.body.setAttribute("data-interview-mode", isInterviewMode ? "on" : "off");
  }, [isInterviewMode]);

  return <>{children}</>;
}








