import ScrollReveal from "@/components/ScrollReveal";

export interface CaseStudyData {
  title: string;
  overview: string;
  challenge: string[];
  whatIDid: string[];
  impact: string[];
  insight: string;
  image?: string;
}

interface CaseStudyProps {
  data: CaseStudyData;
  reversed?: boolean;
}

export default function CaseStudy({ data, reversed = false }: CaseStudyProps) {
  const textAnim = reversed ? "fade-right" : "fade-left";

  return (
    <section
      aria-label={`Case study: ${data.title}`}
      className="border-t border-border"
    >
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 lg:px-20 lg:py-[120px]">
        <ScrollReveal>
          <p
            className="font-mono text-accent"
            style={{ fontSize: "10px", letterSpacing: "3px" }}
          >
            CASE STUDY
          </p>
        </ScrollReveal>

        <div
          className={`mt-8 grid items-start gap-14 lg:gap-20 ${
            reversed
              ? "lg:grid-cols-[1fr_1.3fr]"
              : "lg:grid-cols-[1.3fr_1fr]"
          }`}
        >
          {reversed && <CaseStudyPlaceholder />}

          <div>
            <ScrollReveal animation={textAnim}>
              <h3
                className="leading-tight text-text-primary"
                style={{
                  fontFamily: "var(--font-anybody)",
                  fontWeight: 700,
                  fontSize: "clamp(22px, 3vw, 30px)",
                  letterSpacing: "-0.5px",
                }}
              >
                {data.title}
              </h3>
            </ScrollReveal>

            <ScrollReveal animation={textAnim} delay={100}>
              <p
                className="mb-10 mt-5 text-text-body"
                style={{
                  fontFamily: "var(--font-anybody)",
                  fontWeight: 300,
                  fontSize: "15px",
                  lineHeight: 1.8,
                }}
              >
                {data.overview}
              </p>
            </ScrollReveal>

            <ScrollReveal animation={textAnim} delay={200}>
              <div className="mb-10 grid gap-8 md:grid-cols-2">
                <div>
                  <h4
                    className="mb-4 font-mono text-accent"
                    style={{ fontSize: "10px", letterSpacing: "3px" }}
                  >
                    CHALLENGE
                  </h4>
                  <ul className="space-y-2">
                    {data.challenge.map((item) => (
                      <li
                        key={item}
                        className="relative pl-4 text-text-body"
                        style={{
                          fontFamily: "var(--font-anybody)",
                          fontWeight: 300,
                          fontSize: "14px",
                          lineHeight: 1.75,
                        }}
                      >
                        <span className="absolute left-0 text-accent" style={{ fontSize: "12px" }}>›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4
                    className="mb-4 font-mono text-accent"
                    style={{ fontSize: "10px", letterSpacing: "3px" }}
                  >
                    WHAT I DID
                  </h4>
                  <ul className="space-y-2">
                    {data.whatIDid.map((item) => (
                      <li
                        key={item}
                        className="relative pl-4 text-text-body"
                        style={{
                          fontFamily: "var(--font-anybody)",
                          fontWeight: 300,
                          fontSize: "14px",
                          lineHeight: 1.75,
                        }}
                      >
                        <span className="absolute left-0 text-accent" style={{ fontSize: "12px" }}>›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Impact box */}
            <ScrollReveal animation="slide-left" delay={300}>
              <div
                className="mb-7 rounded-r-sm border-l-[3px] border-accent p-6"
                style={{ background: "rgba(255,159,47,0.05)" }}
              >
                <h4
                  className="mb-4 font-mono text-accent"
                  style={{ fontSize: "10px", letterSpacing: "3px" }}
                >
                  IMPACT
                </h4>
                <ul className="space-y-2">
                  {data.impact.map((item) => (
                    <li
                      key={item}
                      className="relative pl-4 text-text-body"
                      style={{
                        fontFamily: "var(--font-anybody)",
                        fontWeight: 300,
                        fontSize: "14px",
                        lineHeight: 1.75,
                      }}
                    >
                      <span className="absolute left-0 text-accent" style={{ fontSize: "12px" }}>›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Key insight */}
            <ScrollReveal delay={400}>
              <p
                className="mb-4 border-l-[2px] border-accent pl-4 italic text-text-body"
                style={{
                  fontFamily: "var(--font-anybody)",
                  fontWeight: 300,
                  fontSize: "15px",
                  lineHeight: 1.75,
                  borderLeftColor: "rgba(255,159,47,0.5)",
                }}
              >
                {data.insight}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <p
                className="font-mono text-text-muted"
                style={{ fontSize: "10px", letterSpacing: "1.5px" }}
              >
                ADDITIONAL DETAILS AVAILABLE UPON REQUEST
              </p>
            </ScrollReveal>
          </div>

          {!reversed && <CaseStudyPlaceholder />}
        </div>
      </div>
    </section>
  );
}

function CaseStudyPlaceholder() {
  return (
    <ScrollReveal animation="scale-up" delay={100}>
      <div
        className="flex min-h-[300px] items-center justify-center rounded-sm border border-border lg:sticky lg:top-[100px]"
        style={{ background: "rgba(255,159,47,0.025)" }}
      >
        <span
          className="font-mono text-text-muted"
          style={{ fontSize: "9px", letterSpacing: "3px" }}
        >
          CASE STUDY
        </span>
      </div>
    </ScrollReveal>
  );
}
