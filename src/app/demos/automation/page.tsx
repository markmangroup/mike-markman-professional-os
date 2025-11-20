import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import automationFlow from "@/core/rules/automationFlow.json";

interface Step {
  id: string;
  title: string;
  description: string;
  outputs: string[];
}

export default function AutomationPage() {
  const steps = automationFlow.steps as Step[];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Automation Flow</h1>
        <p className="subtitle text-gray-600 mb-6">
          Example of a structured operational workflow (v0.1)
        </p>
      </div>

      {/* Steps Flow */}
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={step.id}>
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    {step.id}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="ml-14">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Outputs:</p>
                  <div className="flex flex-wrap gap-2">
                    {step.outputs.map((output, outputIndex) => (
                      <Badge key={outputIndex} variant="outline" className="text-xs">
                        {output}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Connector Arrow (except for last step) */}
            {index < steps.length - 1 && (
              <div className="flex justify-center my-2">
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-6 bg-border"></div>
                  <svg
                    className="w-5 h-5 text-border -my-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <div className="w-0.5 h-6 bg-border"></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Experience Mapping Section */}
      <div className="border-t pt-6">
        <h2 className="text-2xl font-semibold mb-6">How this maps to my experience:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Laurel AG Field Operations Automation</h3>
            <p className="text-sm text-muted-foreground">
              Designed and implemented proposal automation platform for agritech company integrating CRM data, product catalogs, labor tracking, and customer management
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Process Transformation</h3>
            <p className="text-sm text-muted-foreground">
              Led operational reporting modernization reducing manual reporting cycles by 80% through structured workflow automation
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Routing & Assignment Logic</h3>
            <p className="text-sm text-muted-foreground">
              Built enterprise operations data platforms with process mining capabilities improving cycle times in billing, collections, and service delivery
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Workflow Orchestration</h3>
            <p className="text-sm text-muted-foreground">
              Founded Centers of Excellence for automation tools (Celonis, Alteryx, Power Platform) eliminating 10,000+ hours annually
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Integrations with CRM/Product Catalogs</h3>
            <p className="text-sm text-muted-foreground">
              Integrated CRM data, product catalogs, and customer management systems to reduce proposal cycle time from days to hours
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Real-time Reporting from Field Data</h3>
            <p className="text-sm text-muted-foreground">
              Built cloud-based operations dashboards enabling real-time KPI monitoring, cash flow analysis, and variance reporting
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
