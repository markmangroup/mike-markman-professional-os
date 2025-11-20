import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import sampleReports from "@/core/reporting/sampleReports.json";

interface Metric {
  label: string;
  value: string;
  trend: string;
}

interface Report {
  id: string;
  title: string;
  description: string;
  metrics: Metric[];
}

export default function ReportingEnginePage() {
  const reports = sampleReports.reports as Report[];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Reporting Engine</h1>
        <p className="subtitle text-gray-600 mb-6">
          Example reporting definitions, metrics, and structured output
        </p>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report) => (
          <Card key={report.id}>
            <CardHeader>
              <CardTitle className="text-xl">{report.title}</CardTitle>
              <CardDescription>{report.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Metric</TableHead>
                    <TableHead className="text-right">Value</TableHead>
                    <TableHead className="text-right">Trend</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {report.metrics.map((metric, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{metric.label}</TableCell>
                      <TableCell className="text-right">{metric.value}</TableCell>
                      <TableCell className="text-right">
                        <span
                          className={
                            metric.trend.startsWith("+")
                              ? "text-green-600 dark:text-green-400"
                              : metric.trend.startsWith("-")
                              ? "text-red-600 dark:text-red-400"
                              : "text-muted-foreground"
                          }
                        >
                          {metric.trend}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Experience Mapping Section */}
      <div className="border-t pt-6">
        <h2 className="text-2xl font-semibold mb-6">How this maps to my experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Reporting Modernization</h3>
            <p className="text-sm text-muted-foreground">
              Led operational reporting modernization reducing manual cycles by 80%
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Dashboarding</h3>
            <p className="text-sm text-muted-foreground">
              Built cloud-based operations dashboards for real-time KPI monitoring
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">KPI Visibility</h3>
            <p className="text-sm text-muted-foreground">
              Established enterprise data platforms improving cycle times and decision velocity
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Automation</h3>
            <p className="text-sm text-muted-foreground">
              Founded Centers of Excellence for analytics and automation tools
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Variance Reporting</h3>
            <p className="text-sm text-muted-foreground">
              Delivered variance analysis and management reporting for executive stakeholders
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
