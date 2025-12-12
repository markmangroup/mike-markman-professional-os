import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const KPIS = [
  { label: "Revenue", value: "$12.4M", trend: "+4.2%" },
  { label: "Gross Margin", value: "38.1%", trend: "+1.8%" },
  { label: "Cash Flow", value: "$1.7M", trend: "+18.2%" },
  { label: "Cycle Time", value: "−12%", trend: "improvement" },
  { label: "Automation Savings", value: "10,000 hrs", trend: "annual" },
];

export default function KPIDashboardPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">KPI Dashboard</h1>
        <p className="subtitle text-gray-600 mb-6">
          Simple executive metrics example
        </p>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {KPIS.map((kpi, index) => (
          <Card
            key={index}
            className="shadow-sm hover:shadow-md transition-all dark:bg-gray-800 dark:border-gray-700"
          >
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {kpi.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-1">{kpi.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {kpi.trend}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Experience Mapping Section */}
      <div className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Experience Mapping</h2>
        <p className="text-sm text-muted-foreground">
          This dashboard demonstrates my experience building executive reporting
          systems, KPI frameworks, and operational metrics. Similar dashboards
          have been deployed in shared services, finance operations, and
          portfolio company environments.
        </p>
      </div>
    </div>
  );
}









