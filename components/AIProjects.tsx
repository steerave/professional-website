import ScrollReveal from "@/components/ScrollReveal";

const projects = [
  {
    index: "01",
    title: "AI Job Search Pipeline",
    repo: "automated-search-pipeline",
    description:
      "Automated data pipeline — web scraping, LLM-based scoring with feedback loops, Google Sheets integration, and scheduled email digests.",
    tags: ["Python", "LLM", "Automation"],
  },
  {
    index: "02",
    title: "AI-Powered Task Manager",
    repo: "task-manager",
    description:
      "CLI task manager with natural language parsing, Obsidian vault integration, iCloud calendar sync, and two-way checkbox reconciliation.",
    tags: ["TypeScript", "NLP", "CLI"],
  },
  {
    index: "03",
    title: "Rental Tax Pipeline",
    repo: "rental-tax-pipeline",
    description:
      "End-to-end document processing pipeline — PDF ingestion with OCR, vendor classification with cross-year learning, human-in-the-loop review via Google Sheets, and template-driven Excel output.",
    tags: ["Python", "OCR", "Pipeline"],
  },
];

export default function AIProjects() {
  return (
    <section
      aria-label="AI Projects"
      className="mx-auto max-w-content px-6 py-20 md:px-10 lg:px-20 lg:py-[120px]"
    >
      <ScrollReveal>
        <p
          className="font-mono text-accent"
          style={{ fontSize: "10px", letterSpacing: "3px" }}
        >
          PROJECTS
        </p>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <h2
          className="mb-14 mt-4 uppercase leading-none text-text-primary"
          style={{
            fontFamily: "var(--font-anybody)",
            fontWeight: 900,
            fontSize: "clamp(28px, 4.5vw, 48px)",
            letterSpacing: "-1px",
          }}
        >
          AI Projects
        </h2>
      </ScrollReveal>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ScrollReveal key={project.title} delay={200 + i * 100}>
            <div
              className="group flex h-full flex-col rounded-sm border-l-[3px] bg-surface p-8 transition-colors duration-300 hover:bg-elevated"
              style={{ borderLeftColor: "rgba(255,159,47,0.45)" }}
            >
              <p
                className="mb-4 font-mono text-text-muted"
                style={{ fontSize: "10px", letterSpacing: "2px" }}
              >
                {project.index}
              </p>
              <h3
                className="mb-4 text-text-primary"
                style={{
                  fontFamily: "var(--font-anybody)",
                  fontWeight: 700,
                  fontSize: "17px",
                  lineHeight: 1.35,
                }}
              >
                {project.title}
              </h3>
              <p
                className="mb-6 flex-1 text-text-body"
                style={{
                  fontFamily: "var(--font-anybody)",
                  fontWeight: 300,
                  fontSize: "14px",
                  lineHeight: 1.75,
                }}
              >
                {project.description}
              </p>

              {/* Tags */}
              <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-text-muted"
                    style={{
                      fontSize: "9px",
                      letterSpacing: "1px",
                      padding: "3px 8px",
                      border: "1px solid #1e1e1e",
                      borderRadius: "2px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* GitHub link */}
              <a
                href={`https://github.com/steerave/${project.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-accent transition-opacity hover:opacity-60"
                style={{ fontSize: "9px", letterSpacing: "2px" }}
              >
                VIEW ON GITHUB →
              </a>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
