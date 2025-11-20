import resume from "../resume.json";
import skills from "../skills.json";
import evidenceData from "../evidence/evidence.json";

interface ResumeMatch {
  section: string;
  text: string;
}

interface SkillMatch {
  domain: string;
  skill: string;
}

interface EvidenceItem {
  id: string;
  title: string;
  source: string;
  resumeRefs: string[];
  skills: string[];
  links?: {
    demo?: string;
    data?: string;
  };
}

export function searchCareer(query: string) {
  const q = query.toLowerCase();

  const resumeMatches: ResumeMatch[] = [];
  const skillMatches: SkillMatch[] = [];
  const evidenceMatches: EvidenceItem[] = [];

  // Search resume: summary, expertise, experience highlights
  if (resume.executiveSummary.toLowerCase().includes(q)) {
    resumeMatches.push({
      section: "Executive Summary",
      text: resume.executiveSummary
    });
  }

  for (const exp of resume.experience) {
    if (exp.highlights) {
      exp.highlights.forEach(h => {
        if (h.toLowerCase().includes(q)) {
          resumeMatches.push({
            section: exp.company,
            text: h
          });
        }
      });
    }

    // Multi-role companies (IQVIA)
    if (exp.roles) {
      exp.roles.forEach(role => {
        role.highlights.forEach(h => {
          if (h.toLowerCase().includes(q)) {
            resumeMatches.push({
              section: exp.company + " – " + role.title,
              text: h
            });
          }
        });
      });
    }
  }

  // Search skills
  Object.entries(skills.domains).forEach(([domain, items]) => {
    items.forEach(skill => {
      if (skill.toLowerCase().includes(q)) {
        skillMatches.push({
          domain,
          skill
        });
      }
    });
  });

  // Search evidence
  evidenceData.evidence.forEach(ev => {
    if (
      ev.title.toLowerCase().includes(q) ||
      ev.source.toLowerCase().includes(q) ||
      ev.skills.some(s => s.toLowerCase().includes(q)) ||
      ev.resumeRefs.some(r => r.toLowerCase().includes(q))
    ) {
      evidenceMatches.push(ev);
    }
  });

  return {
    resumeMatches,
    skillMatches,
    evidenceMatches
  };
}
