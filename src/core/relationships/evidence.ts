import evidenceData from "@/core/evidence/evidence.json";
import { TaggedItem } from "./index";

export const evidenceItems: TaggedItem[] = evidenceData.evidence.map((item) => ({
  id: item.id,
  label: item.title,
  href: `/evidence#${item.id}`,
  tags: item.tags || item.skills || [],
}));
