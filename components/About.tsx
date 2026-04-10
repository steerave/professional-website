import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className="mx-auto max-w-content px-6 py-20 md:px-10 lg:px-20 lg:py-[120px]"
    >
      <div className="section-glow mb-16" />
      <ScrollReveal>
        <p
          className="font-mono text-accent"
          style={{ fontSize: "10px", letterSpacing: "3px" }}
        >
          ABOUT
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
          About Me
        </h2>
      </ScrollReveal>

      <div style={{ maxWidth: "var(--max-width-about)" }}>
        <ScrollReveal delay={200}>
          <p
            className="mb-8 text-text-primary"
            style={{
              fontFamily: "var(--font-anybody)",
              fontWeight: 400,
              fontSize: "19px",
              lineHeight: 1.8,
            }}
          >
            I&apos;m a digital leader focused on executing complex programs at
            scale.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <p
            className="mb-8 text-text-body"
            style={{
              fontFamily: "var(--font-anybody)",
              fontWeight: 300,
              fontSize: "17px",
              lineHeight: 1.8,
            }}
          >
            I&apos;ve led high-visibility national campaigns across North
            America, working across product, engineering, and operations to
            deliver under real-world constraints.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={400}>
          <p
            className="text-text-body"
            style={{
              fontFamily: "var(--font-anybody)",
              fontWeight: 300,
              fontSize: "17px",
              lineHeight: 1.8,
            }}
          >
            I&apos;m now focused on applying AI to transform how digital systems
            are designed and executed — combining structured delivery with
            emerging technologies to unlock new levels of efficiency and impact.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
