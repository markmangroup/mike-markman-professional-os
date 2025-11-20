"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface InterviewModeContextType {
  isInterviewMode: boolean;
  toggleInterviewMode: () => void;
}

const InterviewModeContext = createContext<InterviewModeContextType | undefined>(undefined);

export function InterviewModeProvider({ children }: { children: ReactNode }) {
  const [isInterviewMode, setIsInterviewMode] = useState(false);

  const toggleInterviewMode = () => {
    setIsInterviewMode((prev) => !prev);
  };

  return (
    <InterviewModeContext.Provider value={{ isInterviewMode, toggleInterviewMode }}>
      {children}
    </InterviewModeContext.Provider>
  );
}

export function useInterviewMode() {
  const context = useContext(InterviewModeContext);
  if (context === undefined) {
    throw new Error("useInterviewMode must be used within an InterviewModeProvider");
  }
  return context;
}


