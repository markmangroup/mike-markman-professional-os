import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import prototypesData from "@/data/braindead/prototypes.json";

interface Prototype {
  id: string;
  title: string;
  description: string;
  elements: string[];
}

function renderMockup(prototype: Prototype) {
  switch (prototype.id) {
    case "ui-1":
      return (
        <div className="p-6 bg-card border rounded-lg">
          <div className="text-5xl font-bold mb-2">$12.4M</div>
          <div className="text-sm text-muted-foreground mb-3">Revenue</div>
          <Badge variant="secondary" className="text-xs">+4.2%</Badge>
        </div>
      );

    case "ui-2":
      return (
        <div className="p-6 bg-black border-2 border-cyan-500/50 rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow">
          <div className="text-cyan-400 font-semibold mb-2">BrainDead Tile</div>
          <div className="text-cyan-300/80 text-sm">Dark mode with neon glow</div>
        </div>
      );

    case "ui-3":
      return (
        <div className="flex border rounded-lg overflow-hidden">
          <div className="flex-1 p-4 bg-muted/30 border-r">
            <div className="text-sm font-semibold mb-2">Panel A</div>
            <div className="text-xs text-muted-foreground">Dataset comparison</div>
          </div>
          <div className="flex-1 p-4 bg-muted/30">
            <div className="text-sm font-semibold mb-2">Panel B</div>
            <div className="text-xs text-muted-foreground">Alternative view</div>
          </div>
        </div>
      );

    case "ui-4":
      return (
        <div className="border rounded-lg p-4">
          <div className="flex gap-2 mb-4 border-b pb-2">
            <Button variant="default" size="sm" className="text-xs">
              Overview
            </Button>
            <Button variant="ghost" size="sm" className="text-xs">
              Details
            </Button>
          </div>
          <div className="text-sm text-muted-foreground">
            Toggle between views (simulated)
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default function UIPrototypesPage() {
  const prototypes = prototypesData.prototypes as Prototype[];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">UI Prototypes</h1>
        <p className="subtitle text-gray-600 mb-6">
          Small examples showing product thinking and rapid UI iteration
        </p>
      </div>

      {/* Prototypes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {prototypes.map((prototype) => (
          <Card key={prototype.id}>
            <CardHeader>
              <CardTitle className="text-xl">{prototype.title}</CardTitle>
              <CardDescription>{prototype.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Elements as badges */}
              <div className="flex flex-wrap gap-2">
                {prototype.elements.map((element, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {element}
                  </Badge>
                ))}
              </div>

              {/* Visual mockup */}
              <div className="mt-4 pt-4 border-t">
                {renderMockup(prototype)}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Experience Mapping Section */}
      <div className="border-t pt-6">
        <h2 className="text-2xl font-semibold mb-6">How this maps to my experience:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">BrainDead Prototype Project</h3>
            <p className="text-sm text-muted-foreground">
              Developed UI prototypes demonstrating product thinking and visual system design for complex operational interfaces
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Product Design Intuition</h3>
            <p className="text-sm text-muted-foreground">
              Built cloud-based operations dashboards and reporting interfaces with focus on clarity, usability, and executive-level presentation
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Visual System Thinking</h3>
            <p className="text-sm text-muted-foreground">
              Established design patterns and component libraries for consistent user experience across enterprise analytics platforms
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Ability to Rapidly Prototype UI for Complex Systems</h3>
            <p className="text-sm text-muted-foreground">
              Rapidly iterated on proposal automation platforms, operations dashboards, and reporting interfaces to validate concepts and gather stakeholder feedback
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
