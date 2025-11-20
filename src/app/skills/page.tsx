import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import skillsData from "@/core/skills.json";

function formatDomainName(key: string): string {
  return key
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function SkillsPage() {
  const domains = skillsData.domains;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Skills Graph</h1>
        <p className="subtitle text-gray-600 mb-6">
          A structured view of my capabilities grouped by domain
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(domains).map(([domainKey, skills]) => (
          <Card
            key={domainKey}
          >
            <CardHeader>
              <CardTitle className="text-xl">{formatDomainName(domainKey)}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Link key={index} href={`/search?q=${encodeURIComponent(skill)}`}>
                    <Badge variant="secondary" className="hover:bg-secondary/80 cursor-pointer transition-colors">
                      {skill}
                    </Badge>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
