export const categorySlugs: Record<string, string> = {
  "ESG Strategy & Reporting": "esg-strategy-reporting",
  "Climate & Environment": "climate-environment",
  "Social & Supply Chain": "social-supply-chain",
  "Governance & Sustainable Finance": "governance-sustainable-finance",
  "Technology & Capacity Building": "technology-capacity-building"
};

export const getCategoryFromSlug = (slug: string): string | undefined => {
  return Object.keys(categorySlugs).find(key => categorySlugs[key] === slug);
};
