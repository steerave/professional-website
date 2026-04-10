import ScrollReveal from "@/components/ScrollReveal";

const cards = [
  {
    index: "01",
    title: "Execution at Scale",
    body: "I lead complex digital programs across product, engineering, and operations — delivering under real-world constraints.",
  },
  {
    index: "02",
    title: "Systems Thinking",
    body: "I design workflows and systems that improve clarity, reduce friction, and scale execution.",
  },
  {
    index: "03",
    title: "AI Application",
    body: "I build and experiment with AI tools to enhance decision-making and operational efficiency.",
  },
];

export default function WhatIDo() {
  return (
    <section
      id="work"
      aria-label="What I do"
      className="mx-auto max-w-content px-6 py-20 md:px-10 lg:px-20 lg:py-[120px]"
    >
      <ScrollReveal>
        <p
          className="font-mono text-accent"
          style={{ fontSize: "10px", letterSpacing: "3px" }}
        >
          EXPERTISE
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
          What I Do
        </h2>
      </ScrollReveal>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) => (
          <ScrollReveal key={card.title} delay={200 + i * 100}>
            <div
              className="group relative rounded-sm border-l-[3px] bg-surface p-8 transition-all duration-300 hover:bg-elevated"
              style={{ borderLeftColor: "rgba(255,159,47,0.35)" }}
            >
              {/* Subtle amber tint on hover */}
              <div
                className="pointer-events-none absolute inset-0 rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: "rgba(255,159,47,0.03)" }}
              />
              <p
                className="relative mb-5 font-mono text-text-muted"
                style={{ fontSize: "10px", letterSpacing: "2px" }}
              >
                {card.index}
              </p>
              <h3
                className="relative mb-3 text-text-primary"
                style={{
                  fontFamily: "var(--font-anybody)",
                  fontWeight: 700,
                  fontSize: "18px",
                  lineHeight: 1.3,
                }}
              >
                {card.title}
              </h3>
              <p
                className="relative text-text-body"
                style={{
                  fontFamily: "var(--font-anybody)",
                  fontWeight: 300,
                  fontSize: "14px",
                  lineHeight: 1.75,
                }}
              >
                {card.body}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
