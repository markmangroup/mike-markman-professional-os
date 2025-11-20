"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { searchCareer } from "@/core/search-index/searchIndex";

interface EvidenceItem {
  id: string;
  title: string;
  source: string;
  resumeRefs: string[];
  skills: string[];
  links?: {
    demo?: string;
    data?: string;
  };
}

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const results = query.trim() ? searchCareer(query) : null;

  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery);
    }
  }, [initialQuery]);

  const hasResults =
    results &&
    (results.resumeMatches.length > 0 ||
      results.skillMatches.length > 0 ||
      results.evidenceMatches.length > 0);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Search</h1>
        <p className="subtitle text-gray-600 mb-6">
          Search across resume, skills, and evidence
        </p>
      </div>

      {/* Search Input */}
      <div>
        <Input
          type="text"
          placeholder="Search for skills, experience, projects..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full"
        />
      </div>

      {/* Results */}
      {!query.trim() ? (
        <div className="text-center text-muted-foreground py-12">
          <p>Enter a search query to find matches across your career data.</p>
        </div>
      ) : !hasResults ? (
        <div className="text-center text-muted-foreground py-12">
          <p>No matches found.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Resume Matches */}
          {results.resumeMatches.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Resume Matches</h2>
              <div className="space-y-3">
                {results.resumeMatches.map((match, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4 py-2">
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {match.section}
                    </p>
                    <p className="text-sm">{match.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Matches */}
          {results.skillMatches.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Skills Matches</h2>
              <div className="flex flex-wrap gap-2">
                {results.skillMatches.map((match, index) => (
                  <Badge key={index} variant="secondary">
                    {match.skill}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Evidence Matches */}
          {results.evidenceMatches.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Evidence Matches</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(results.evidenceMatches as EvidenceItem[]).map((item) => (
                  <Link key={item.id} href={`/evidence?ref=${item.id}`}>
                    <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg mb-1">{item.title}</CardTitle>
                      <p className="text-sm text-muted-foreground font-medium">
                        {item.source}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Skills */}
                      {item.skills && item.skills.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {item.skills.map((skill: string, index: number) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex flex-col gap-2 pt-2" onClick={(e) => e.stopPropagation()}>
                        {item.links?.demo && (
                          <Button asChild variant="default" size="sm">
                            <Link href={item.links.demo} onClick={(e) => e.stopPropagation()}>View Demo</Link>
                          </Button>
                        )}
                        {item.links?.data && (
                          <Button asChild variant="outline" size="sm">
                            <Link href={item.links.data} onClick={(e) => e.stopPropagation()}>View Data</Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Search</h1>
          <p className="text-lg text-muted-foreground">
            Search across resume, skills, and evidence
          </p>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}
