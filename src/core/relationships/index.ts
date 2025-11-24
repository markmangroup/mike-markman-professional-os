export interface TaggedItem {
  id: string;
  label: string;
  href: string;
  tags: string[];
}

export interface RelatedItems {
  skills: TaggedItem[];
  systems: TaggedItem[];
  evidence: TaggedItem[];
  demos: TaggedItem[];
  cases: TaggedItem[];
}

import { evidenceItems } from "./evidence";
import { skillsItems } from "./skills";
import { systemsItems } from "./systems";
import { demosItems } from "./demos";
import { casesItems } from "./cases";

export function findRelatedByTags(tags: string[]): RelatedItems {
  const tagSet = new Set(tags.map((tag) => tag.toLowerCase()));

  const match = (item: TaggedItem) =>
    item.tags.some((tag) => tagSet.has(tag.toLowerCase()));

  return {
    skills: skillsItems.filter(match),
    systems: systemsItems.filter(match),
    evidence: evidenceItems.filter(match),
    demos: demosItems.filter(match),
    cases: casesItems.filter(match),
  };
}
