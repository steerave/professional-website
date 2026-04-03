import ScrollReveal from "@/components/ScrollReveal";

const cards = [
  {
    title: "Execution at Scale",
    body: "I lead complex digital programs across product, engineering, and operations — delivering under real-world constraints.",
  },
  {
    title: "Systems Thinking",
    body: "I design workflows and systems that improve clarity, reduce friction, and scale execution.",
  },
  {
    title: "AI Application",
    body: "I build and experiment with AI tools to enhance decision-making and operational efficiency.",
  },
];

export default function WhatIDo() {
  return (
    <section id="work" aria-label="What I do" className="mx-auto max-w-content px-6 py-20 md:px-10 lg:px-20 lg:py-[120px]">
      <ScrollReveal>
        <p className="text-[13px] font-semibold uppercase tracking-[1.5px] text-accent-light">
          Expertise
        </p>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <h2 className="mb-14 mt-4 text-[44px] font-bold leading-[1.2] text-text-primary">
          What I Do
        </h2>
      </ScrollReveal>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) => (
          <ScrollReveal key={card.title} delay={200 + i * 100}>
            <div className="rounded-lg border border-border bg-[linear-gradient(135deg,rgba(74,111,165,0.04)_0%,transparent_100%)] p-10 transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(74,111,165,0.3)] hover:bg-[linear-gradient(135deg,rgba(74,111,165,0.08)_0%,rgba(74,111,165,0.02)_100%)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
              <h3 className="mb-3 text-[22px] font-semibold text-text-primary">
                {card.title}
              </h3>
              <p className="text-base text-text-body">{card.body}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
