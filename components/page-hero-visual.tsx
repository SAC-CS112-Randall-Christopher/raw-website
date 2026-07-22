type HeroVisualSpec = {
  label: string;
  footer: string;
  nodes: string[];
  kind: "flow" | "boundary" | "grid" | "layers" | "hub" | "compare" | "toolkit" | "steps" | "questions" | "contact" | "policy";
};

const visuals: Record<string, HeroVisualSpec> = {
  services: {
    label: "From problem to working system",
    footer: "Assess · connect · review",
    nodes: ["Workflow", "Right-sized tool", "Measured result"],
    kind: "flow",
  },
  "utilities-and-special-districts": {
    label: "Controlled information path",
    footer: "Reporting remains separate from control",
    nodes: ["Approved export", "Reporting environment", "Qualified review"],
    kind: "boundary",
  },
  "small-businesses": {
    label: "A clearer customer handoff",
    footer: "Fewer loose ends between steps",
    nodes: ["Intake", "Route", "Follow up", "Visibility"],
    kind: "grid",
  },
  "gis-and-field-operations": {
    label: "Field information in context",
    footer: "Asset · location · status · exception",
    nodes: ["Field form", "Mapped asset", "Office report"],
    kind: "layers",
  },
  "responsible-ai-and-security": {
    label: "Bounded AI system",
    footer: "Defined tools, permissions and approval points",
    nodes: ["Knowledge", "AI workflow", "Approved tools", "Human approval"],
    kind: "hub",
  },
  "local-ai-deployments": {
    label: "Client-controlled local AI",
    footer: "Approved sources stay inside the defined boundary",
    nodes: ["Local sources", "Local model", "Human review"],
    kind: "boundary",
  },
  "hosted-ai-deployments": {
    label: "Managed client environment",
    footer: "Secure access · separated workspace · defined support",
    nodes: ["Client login", "Portal", "Local or cloud runtime", "Managed support"],
    kind: "hub",
  },
  "workflow-automation-examples": {
    label: "Remove the avoidable friction",
    footer: "Generalized workflow pattern",
    nodes: ["Manual re-entry", "Focused automation", "Reviewable output"],
    kind: "compare",
  },
  expertise: {
    label: "Integrated technical toolkit",
    footer: "The workflow determines the technology",
    nodes: ["Python", "SQL", "APIs", "GIS", "AI systems"],
    kind: "toolkit",
  },
  "how-engagements-work": {
    label: "Measured engagement path",
    footer: "Expand only when the result justifies it",
    nodes: ["Assess", "Roadmap", "Pilot", "Measure"],
    kind: "steps",
  },
  about: {
    label: "The R.A.W. perspective",
    footer: "Technical depth with operational context",
    nodes: ["Operations", "Systems", "Workflows"],
    kind: "hub",
  },
  "frequently-asked-questions": {
    label: "Start with the practical questions",
    footer: "Scope · security · cost · ownership",
    nodes: ["What is the problem?", "Who reviews it?", "What should it cost?"],
    kind: "questions",
  },
  contact: {
    label: "A useful first conversation",
    footer: "No oversized technology pitch",
    nodes: ["Describe the work", "Discuss the friction", "Choose a next step"],
    kind: "contact",
  },
  privacy: {
    label: "Purposeful information handling",
    footer: "Collect only what the conversation requires",
    nodes: ["Needed information", "Limited access", "Clear purpose"],
    kind: "policy",
  },
  terms: {
    label: "Clear professional boundaries",
    footer: "Defined scope supports accountable work",
    nodes: ["Advisory support", "Client review", "Qualified judgment"],
    kind: "policy",
  },
  insights: {
    label: "Decision-oriented guidance",
    footer: "Practical enough to use before choosing a tool",
    nodes: ["Real question", "Grounded analysis", "Useful decision"],
    kind: "flow",
  },
};

export function PageHeroVisual({ slug }: { slug: string }) {
  const visual = visuals[slug] ?? visuals.services;

  return (
    <div className={`page-hero-visual page-hero-visual-${visual.kind}`} aria-hidden="true">
      <div className="page-hero-visual-head">
        <span>{visual.label}</span>
        <i />
      </div>
      <div className="page-hero-visual-canvas" data-count={visual.nodes.length}>
        <span className="page-hero-route" />
        {visual.nodes.map((node, index) => (
          <div className="page-hero-node" data-node={index + 1} key={node}>
            <small>{String(index + 1).padStart(2, "0")}</small>
            <strong>{node}</strong>
          </div>
        ))}
      </div>
      <p>{visual.footer}</p>
    </div>
  );
}
