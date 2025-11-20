"use client";

import { Suspense, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import evidenceData from "@/core/evidence/evidence.json";
import { rankEvidence } from "@/lib/relevance";

interface EvidenceItem {
  id: string;
  title: string;
  source: string;
  resumeRefs: string[];
  skills: string[];
  links?: {
    demo?: string;
    data?: string;
    deck?: string;
  };
}

interface ScoredEvidenceItem extends EvidenceItem {
  relevanceScore: number;
}

function EvidenceContent() {
  const allEvidence = evidenceData.evidence as EvidenceItem[];
  const searchParams = useSearchParams();
  const refId = searchParams.get("ref");
  const query = searchParams.get("q") || "";
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Compute relevance scores if query is present
  const scoredEvidence = query
    ? rankEvidence(allEvidence, query, [], [])
    : allEvidence.map((item) => ({ ...item, relevanceScore: 0 }));

  // Get top 2 recommendations (only if query exists and scores > 0)
  const recommendations =
    query && scoredEvidence[0]?.relevanceScore > 0
      ? scoredEvidence.slice(0, 2).filter((item) => item.relevanceScore > 0)
      : [];

  // Get remaining evidence (excluding recommendations)
  const remainingEvidence: (EvidenceItem | ScoredEvidenceItem)[] = query
    ? scoredEvidence.filter((item) => !recommendations.some((rec) => rec.id === item.id))
    : allEvidence;

  useEffect(() => {
    if (refId) {
      const cardElement = cardRefs.current[refId];
      if (cardElement) {
        setTimeout(() => {
          cardElement.scrollIntoView({ behavior: "smooth", block: "start" });
          cardElement.classList.add("highlight");
          setTimeout(() => {
            cardElement.classList.remove("highlight");
          }, 2000);
        }, 100);
      }
    }
  }, [refId]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Evidence Map</h1>
        <p className="subtitle text-gray-600 mb-6">
          Direct links from my resume to real systems, artifacts, and demos
        </p>
      </div>

      {/* Recommended for You Section */}
      {recommendations.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Recommended for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {recommendations.map((item) => (
              <div
                key={item.id}
                ref={(el) => {
                  cardRefs.current[item.id] = el;
                }}
                className="transition-all"
              >
                <Card className="flex flex-col border-blue-400 border-2">
                  <CardHeader>
                    <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                    <p className="text-sm text-muted-foreground font-medium">{item.source}</p>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    {/* Resume References */}
                    {item.resumeRefs && item.resumeRefs.length > 0 && (
                      <div className="mb-4">
                        <p className="text-xs text-muted-foreground mb-1 font-medium">
                          Resume Reference:
                        </p>
                        <ul className="text-sm space-y-1">
                          {item.resumeRefs.map((ref, index) => (
                            <li key={index} className="text-muted-foreground">
                              {ref}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Skills */}
                    {item.skills && item.skills.length > 0 && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1.5">
                          {item.skills.map((skill, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="mt-auto pt-4 flex flex-col gap-2">
                      {item.links?.demo && (
                        <Button asChild variant="default" size="sm">
                          <Link href={item.links.demo}>View Demo</Link>
                        </Button>
                      )}
                      {item.links?.data && (
                        <Button asChild variant="outline" size="sm">
                          <Link href={item.links.data}>View Data</Link>
                        </Button>
                      )}
                        {item.links?.deck && (
                          <Button asChild variant="outline" size="sm">
                            <Link
                              href={item.links.deck}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Open File
                            </Link>
                          </Button>
                        )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Evidence Grid */}
      <div>
        {recommendations.length > 0 && (
          <h2 className="text-2xl font-semibold mb-4">All Evidence</h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {remainingEvidence.map((item) => (
          <div
            key={item.id}
            ref={(el) => {
              cardRefs.current[item.id] = el;
            }}
            className="transition-all"
          >
            <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
              <p className="text-sm text-muted-foreground font-medium">{item.source}</p>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              {/* Resume References */}
              {item.resumeRefs && item.resumeRefs.length > 0 && (
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground mb-1 font-medium">Resume Reference:</p>
                  <ul className="text-sm space-y-1">
                    {item.resumeRefs.map((ref, index) => (
                      <li key={index} className="text-muted-foreground">
                        {ref}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Skills */}
              {item.skills && item.skills.length > 0 && (
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-auto pt-4 flex flex-col gap-2">
                {item.links?.demo && (
                  <Button asChild variant="default" size="sm">
                    <Link href={item.links.demo}>View Demo</Link>
                  </Button>
                )}
                {item.links?.data && (
                  <Button asChild variant="outline" size="sm">
                    <Link href={item.links.data}>View Data</Link>
                  </Button>
                )}
                        {item.links?.deck && (
                          <Button asChild variant="outline" size="sm">
                            <Link
                              href={item.links.deck}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Open File
                            </Link>
                          </Button>
                        )}
              </div>
            </CardContent>
            </Card>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default function EvidencePage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-2">Evidence Map</h1>
          <p className="text-lg text-muted-foreground">
            Direct links from my resume to real systems, artifacts, and demos
          </p>
        </div>
      </div>
    }>
      <EvidenceContent />
    </Suspense>
  );
}
