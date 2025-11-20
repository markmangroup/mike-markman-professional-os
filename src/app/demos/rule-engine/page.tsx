"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import sampleRules from "@/core/rules/sampleRules.json";

interface Rule {
  id: string;
  pattern: string;
  category: string;
  subcategory: string;
  description: string;
}

interface Transaction {
  id: string;
  description: string;
  amount: number;
}

function findMatchingRule(description: string, rules: Rule[]): Rule | null {
  const lowerDescription = description.toLowerCase();
  for (const rule of rules) {
    const regex = new RegExp(rule.pattern, "i");
    if (regex.test(lowerDescription)) {
      return rule;
    }
  }
  return null;
}

export default function RuleEnginePage() {
  const rules = sampleRules.rules as Rule[];
  const transactions = sampleRules.sampleTransactions as Transaction[];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Rule Engine</h1>
        <p className="subtitle text-gray-600 mb-6">
          Example rule-based categorization logic (v0.1)
        </p>
      </div>

      {/* Section A: List of Rules */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Rules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rules.map((rule) => (
            <Card key={rule.id}>
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{rule.pattern}</CardTitle>
                    <div className="flex gap-2 mb-2">
                      <Badge variant="secondary">{rule.category}</Badge>
                      <Badge variant="outline">{rule.subcategory}</Badge>
                    </div>
                  </div>
                </div>
                <CardDescription>{rule.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Section B: Sample Transactions */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Sample Transactions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {transactions.map((transaction) => {
            const matchedRule = findMatchingRule(transaction.description, rules);
            return (
              <Card key={transaction.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{transaction.description}</CardTitle>
                  <CardDescription>
                    Amount: ${transaction.amount.toFixed(2)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {matchedRule ? (
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Matched Rule:</p>
                        <code className="text-sm bg-muted px-2 py-1 rounded">
                          {matchedRule.pattern}
                        </code>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Result:</p>
                        <div className="flex gap-2">
                          <Badge variant="secondary">{matchedRule.category}</Badge>
                          <Badge variant="outline">{matchedRule.subcategory}</Badge>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-sm text-muted-foreground">
                      No matching rule found
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Experience Mapping Section */}
      <div className="border-t pt-6">
        <h2 className="text-2xl font-semibold mb-6">How this maps to my experience:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Markman Group Reporting Automation</h3>
            <p className="text-sm text-muted-foreground">
              Designed and implemented proposal automation platform integrating CRM data, product catalogs, and customer management with rule-based transformation logic
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">ETL + Rule-Based Transformation Logic</h3>
            <p className="text-sm text-muted-foreground">
              Built enterprise operations data platforms with automated categorization, data cleansing, and classification systems using Alteryx and Python
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Data Quality Verification</h3>
            <p className="text-sm text-muted-foreground">
              Delivered governance frameworks with data validation rules, reconciliation checks, and exception reporting for enterprise data quality
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Repeatable Classification Systems</h3>
            <p className="text-sm text-muted-foreground">
              Established Centers of Excellence for automation tools, reducing manual processing by 10,000+ hours annually through standardized rule-based workflows
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
