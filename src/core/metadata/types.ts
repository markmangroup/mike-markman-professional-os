export interface PageMeta {
  what: string;
  why: string;
  relatedSkills: string[];
  relatedSystems: { label: string; href: string }[];
  relatedEvidence: { label: string; href: string }[];
  tags?: string[];
}
