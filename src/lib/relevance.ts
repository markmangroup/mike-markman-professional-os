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

/**
 * Computes relevance score for a single evidence item
 */
export function computeRelevance(
  evidenceItem: EvidenceItem,
  query: string = "",
  selectedSkills: string[] = [],
  adapterContext: string[] = []
): number {
  let score = 0;
  const lowerQuery = query.toLowerCase();

  // Rule 1: Query text appears in title, skills, or resumeRefs → +1
  if (lowerQuery) {
    const searchText = [
      evidenceItem.title,
      evidenceItem.source,
      ...evidenceItem.skills,
      ...evidenceItem.resumeRefs,
    ]
      .join(" ")
      .toLowerCase();

    if (searchText.includes(lowerQuery)) {
      score += 1;
    }
  }

  // Rule 2: Selected skills overlap with evidence skills → +1 per match
  if (selectedSkills.length > 0 && evidenceItem.skills.length > 0) {
    const lowerSelectedSkills = selectedSkills.map((s) => s.toLowerCase());
    const lowerEvidenceSkills = evidenceItem.skills.map((s) => s.toLowerCase());

    const matches = lowerSelectedSkills.filter((selected) =>
      lowerEvidenceSkills.some((evidence) =>
        evidence.includes(selected) || selected.includes(evidence)
      )
    );

    score += matches.length;
  }

  // Rule 3: Adapter context includes evidence.id → +2
  if (adapterContext.length > 0 && adapterContext.includes(evidenceItem.id)) {
    score += 2;
  }

  // Rule 4: Evidence is directly referenced in resume highlight (placeholder for future)
  // This would require checking resume data, but for v1.0 we'll skip this

  return score;
}

/**
 * Ranks evidence list by relevance score
 */
export function rankEvidence(
  evidenceList: EvidenceItem[],
  query: string = "",
  selectedSkills: string[] = [],
  adapterContext: string[] = []
): ScoredEvidenceItem[] {
  const scored = evidenceList.map((item) => ({
    ...item,
    relevanceScore: computeRelevance(item, query, selectedSkills, adapterContext),
  }));

  return scored.sort((a, b) => b.relevanceScore - a.relevanceScore);
}

/**
 * Creates adapter context from company keywords
 * This is a helper function for adapter pages to generate context
 */
export function computeAdapterContext(companyKeywords: string[]): string[] {
  // For now, we return the keywords as-is since they're used in the query
  // In the future, this could map keywords to specific evidence IDs
  return companyKeywords;
}

