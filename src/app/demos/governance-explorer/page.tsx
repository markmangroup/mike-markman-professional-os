import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import governanceModel from "@/core/governance/model.json";

interface Owner {
  name: string;
  responsibilities: string[];
}

interface System {
  system: string;
  type: string;
  notes: string;
}

interface Lineage {
  from: string;
  to: string;
}

export default function GovernanceExplorerPage() {
  const owners = governanceModel.owners as Owner[];
  const systems = governanceModel.systems as System[];
  const lineage = governanceModel.lineage as Lineage[];
  const controls = governanceModel.controls as string[];
  const standards = governanceModel.standards as string[];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Governance Explorer</h1>
        <p className="subtitle text-gray-600 mb-6">
          Example of data ownership, lineage, controls, and reporting standards
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Data Owners */}
        <Card>
          <CardHeader>
            <CardTitle>Data Owners</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {owners.map((owner, index) => (
                <div key={index} className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2">{owner.name}</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {owner.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>• {resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Systems */}
        <Card>
          <CardHeader>
            <CardTitle>Systems</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>System</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {systems.map((system, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{system.system}</TableCell>
                    <TableCell>{system.type}</TableCell>
                    <TableCell className="text-muted-foreground">{system.notes}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Lineage */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Lineage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {lineage.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-sm">
                  <span className="font-medium">{item.from}</span>
                  <span className="text-muted-foreground">→</span>
                  <span className="font-medium">{item.to}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Controls & Standards */}
        <Card>
          <CardHeader>
            <CardTitle>Controls</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              {controls.map((control, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-muted-foreground">•</span>
                  <span>{control}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Standards</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              {standards.map((standard, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-muted-foreground">•</span>
                  <span>{standard}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Experience Mapping Section */}
      <div className="border-t pt-6">
        <h2 className="text-2xl font-semibold mb-6">How this maps to my experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Data Governance at IQVIA</h3>
            <p className="text-sm text-muted-foreground">
              Delivered governance framework for enterprise data quality and reporting standards, reducing reconciliation time by 50%
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Metropolitan/Private Credit Assessment</h3>
            <p className="text-sm text-muted-foreground">
              Conducted current-state assessment including organizational structure, reporting workflows, and data infrastructure
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Shared Services Controls</h3>
            <p className="text-sm text-muted-foreground">
              Led 400-person global organization with SOX/GAAP compliance and M&A due diligence support
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Reporting Lineage and Certification</h3>
            <p className="text-sm text-muted-foreground">
              Established Centers of Excellence and automation eliminating 10,000+ hours annually with documented workflows
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
