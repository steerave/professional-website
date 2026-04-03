import ScrollReveal from "@/components/ScrollReveal";

export interface CaseStudyData {
  title: string;
  overview: string;
  challenge: string[];
  whatIDid: string[];
  impact: string[];
  insight: string;
}

interface CaseStudyProps {
  data: CaseStudyData;
  reversed?: boolean;
}

export default function CaseStudy({ data, reversed = false }: CaseStudyProps) {
  const textAnim = reversed ? "fade-right" : "fade-left";

  return (
    <section aria-label={`Case study: ${data.title}`} className="border-t border-border">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 lg:px-20 lg:py-[120px]">
        <ScrollReveal>
          <p className="text-[13px] font-semibold uppercase tracking-[1.5px] text-accent-light">
            Case Study
          </p>
        </ScrollReveal>

        <div className={`mt-6 grid items-start gap-16 lg:gap-16 ${
          reversed
            ? "lg:grid-cols-[1fr_1.3fr]"
            : "lg:grid-cols-[1.3fr_1fr]"
        }`}>
          {/* Image placeholder — renders first in DOM for reversed layout */}
          {reversed && <ImagePlaceholder animation="scale-up" />}

          {/* Text content */}
          <div>
            <ScrollReveal animation={textAnim}>
              <h3 className="text-[32px] font-bold leading-[1.2] text-text-primary">
                {data.title}
              </h3>
            </ScrollReveal>

            <ScrollReveal animation={textAnim} delay={100}>
              <p className="mb-10 mt-4 text-text-body">{data.overview}</p>
            </ScrollReveal>

            <ScrollReveal animation={textAnim} delay={200}>
              <div className="mb-10 grid gap-12 md:grid-cols-2">
                <div>
                  <h4 className="mb-3 text-lg font-semibold text-text-primary">Challenge</h4>
                  <ul className="space-y-1.5">
                    {data.challenge.map((item) => (
                      <li key={item} className="relative pl-4 text-[15px] text-text-body">
                        <span className="absolute left-0 text-accent-light">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 text-lg font-semibold text-text-primary">What I Did</h4>
                  <ul className="space-y-1.5">
                    {data.whatIDid.map((item) => (
                      <li key={item} className="relative pl-4 text-[15px] text-text-body">
                        <span className="absolute left-0 text-accent-light">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-left" delay={300}>
              <div className="mb-6 rounded-r-lg border-l-[3px] border-accent bg-[linear-gradient(90deg,rgba(74,111,165,0.1)_0%,#1a1f2b_100%)] p-8">
                <h4 className="mb-3 text-lg font-semibold text-text-primary">Impact</h4>
                <ul className="space-y-1">
                  {data.impact.map((item) => (
                    <li key={item} className="relative pl-4 text-[15px] text-text-body">
                      <span className="absolute left-0 text-accent-light">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="mb-3 border-l-[3px] border-accent pl-4 text-lg font-semibold italic text-text-primary">
                {data.insight}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <p className="text-[13px] text-text-muted">
                Additional details available upon request.
              </p>
            </ScrollReveal>
          </div>

          {/* Image placeholder — renders second for non-reversed layout */}
          {!reversed && <ImagePlaceholder animation="scale-up" />}
        </div>
      </div>
    </section>
  );
}

function ImagePlaceholder({ animation }: { animation: "scale-up" }) {
  return (
    <ScrollReveal animation={animation} delay={100}>
      <div className="flex min-h-[320px] items-center justify-center rounded-lg border border-border bg-[linear-gradient(135deg,#0f1520_0%,#1a2a3a_40%,#0f1520_100%)] shadow-[0_8px_40px_rgba(0,0,0,0.3),0_0_40px_rgba(74,111,165,0.04)] lg:sticky lg:top-[100px]">
        <span className="text-xs uppercase tracking-[2px] text-accent-light/50">
          Case Study Image
        </span>
      </div>
    </ScrollReveal>
  );
}
