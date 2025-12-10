import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">About This OS</h1>
        <p className="subtitle text-gray-600 mb-6">
          A live, interactive system showing real examples of my work.
        </p>
      </div>

      {/* Section A: What This Is */}
      <Card>
        <CardHeader>
          <CardTitle>What This Is</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            This OS is a personal professional operating system designed to demonstrate real
            deliverables across multiple domains:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Reporting</li>
            <li>Automation</li>
            <li>Governance</li>
            <li>Analytics</li>
            <li>Shared Services</li>
            <li>Product/UI Thinking</li>
          </ul>
          <p className="mt-4 text-sm">
            Built for live interview use with Interview Mode, which optimizes the layout for
            presentation and discussion.
          </p>
        </CardContent>
      </Card>

      {/* Section B: What You Can Explore */}
      <Card>
        <CardHeader>
          <CardTitle>What You Can Explore</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div>
              <strong>Resume Engine</strong> → Structured experience with clickable highlights
              linking to evidence
            </div>
            <div>
              <strong>Skills Graph</strong> → Domain mapping of capabilities grouped by expertise
              area
            </div>
            <div>
              <strong>Evidence Map</strong> → Proof of work with direct links to demos and data
            </div>
            <div>
              <strong>Search</strong> → Ask my career questions and find matches across resume,
              skills, and evidence
            </div>
            <div>
              <strong>Reporting Engine</strong> → Example dashboards and reporting definitions
            </div>
            <div>
              <strong>Governance Explorer</strong> → Example governance model showing data
              ownership, lineage, and controls
            </div>
            <div>
              <strong>Automation Flow</strong> → Workflow transformation examples
            </div>
            <div>
              <strong>Rule Engine</strong> → Classification logic and pattern matching
            </div>
            <div>
              <strong>UI Prototypes</strong> → Product/UX thinking and rapid iteration examples
            </div>
            <div>
              <strong>Company Adapters</strong> → Role-specific overlays (Fortrea, Generic PE)
              tailored to specific opportunities
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section C: How To Use This In An Interview */}
      <Card>
        <CardHeader>
          <CardTitle>How To Use This In An Interview</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Turn on Interview Mode (top right toggle) for optimized presentation layout</li>
            <li>Click an adapter if relevant to see role-specific fit and evidence</li>
            <li>Ask about any module and we explore it live together</li>
            <li>Use Quick Launch on the homepage for instant access to key modules</li>
            <li>Click Evidence to see proof for any resume line item</li>
          </ul>
        </CardContent>
      </Card>

      {/* Section D: Why I Built This */}
      <Card>
        <CardHeader>
          <CardTitle>Why I Built This</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Show systems thinking and architectural approach</li>
            <li>Demonstrate execution beyond slides and presentations</li>
            <li>Provide transparency into my real work and deliverables</li>
            <li>Avoid generic portfolio sites that don't reflect actual capabilities</li>
            <li>Show how I think, build, and deliver in practice</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}







