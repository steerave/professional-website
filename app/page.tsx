import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CredibilityStrip from "@/components/CredibilityStrip";
import WhatIDo from "@/components/WhatIDo";
import CaseStudy, { type CaseStudyData } from "@/components/CaseStudy";
import ScrollReveal from "@/components/ScrollReveal";
import AIProjects from "@/components/AIProjects";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const caseStudies: { data: CaseStudyData; reversed: boolean }[] = [
  {
    data: {
      title:
        "Scaling a National Digital Promotion with First-Time Ticketless Architecture",
      overview:
        "Led digital execution for a high-visibility national promotional campaign for a global quick-service restaurant brand, introducing a first-time ticketless participation system across the U.S.",
      challenge: [
        "Transition from physical to fully digital participation mechanics",
        "Expected engagement at millions of users nationwide",
        "Real-time system reliability under peak load",
        "Coordination across 10+ cross-functional stakeholders",
        "Tight timelines with high executive visibility",
      ],
      whatIDid: [
        "Established a standardized delivery framework across product, engineering, QA, and operations",
        "Led partner and client testing teams through a multi-phased testing approach",
        "Built clear cross-functional communication and escalation pathways",
        "Partnered with engineering to proactively identify and mitigate system risks",
      ],
      impact: [
        "Successfully supported a national-scale launch with millions of user interactions",
        "Maintained high system uptime during peak engagement windows",
        "Reduced delivery ambiguity across teams through structured workflows",
        "Created a repeatable execution model adopted for future programs",
      ],
      insight:
        "Execution at scale is driven not by individual components, but by how effectively the system is coordinated end-to-end.",
      image: "/casestudy-1.webp",
    },
    reversed: false,
  },
  {
    data: {
      title:
        "Transforming Prize Fulfillment from Manual Checks to Real-Time Digital Payouts",
      overview:
        "Led the transition of a national promotional campaign from manual, check-based prize fulfillment to a real-time digital payout system, integrating directly with financial partners through secure APIs.",
      challenge: [
        "Shift from legacy fulfillment (physical checks) to real-time digital prize distribution",
        "Because a partner sandbox was not available, the team had to design a controlled, low-risk approach to validate the integration in a production-like environment",
        "High security, validation, and compliance requirements",
        "New capability for all parties involved, increasing uncertainty and complexity",
      ],
      whatIDid: [
        "Led the agency team through end-to-end implementation, navigating technical and operational risks",
        "Drove alignment across client, engineering, and financial partners to identify and address system vulnerabilities early",
        "Established security guardrails and validation controls before enabling integration",
        "Implemented real-time monitoring and fail-safe mechanisms to detect and respond to issues quickly",
        "Facilitated continuous risk assessment and mitigation throughout development and launch",
      ],
      impact: [
        "Successfully launched a real-time digital payout system at national scale",
        "Replaced manual fulfillment with a faster, more seamless user experience",
        "Achieved a clean launch with minimal issues despite first-time implementation",
        "Built confidence across stakeholders in a new, scalable fulfillment model",
      ],
      insight:
        "Scaling new capabilities requires not just technical execution, but disciplined risk management, visibility, and control.",
      image: "/casestudy-2.webp",
    },
    reversed: true,
  },
  {
    data: {
      title:
        "Scaling a Live Promotion Under Extreme Demand and Fraud Pressure",
      overview:
        "Led execution for a national promotional campaign experiencing significantly higher-than-expected engagement, requiring real-time scaling of code inventory and fraud mitigation while the program was live.",
      challenge: [
        "Original forecasts were exceeded by multiple times during live operations",
        "Risk of code depletion with potential legal and customer experience implications",
        "Need to scale code generation and ingestion in real time without disrupting the live system",
        "Continuous threat of fraud and abuse requiring active monitoring and intervention",
        "Coordination across multiple teams under live production pressure",
      ],
      whatIDid: [
        "Led the cross-functional execution team, coordinating efforts across engineering, operations, and partner teams",
        "Drove real-time decision-making and problem-solving to address emerging risks",
        "Established a scalable ingestion strategy to increase code supply without overloading system infrastructure",
        "Implemented continuous fraud monitoring and response workflows to detect and block bad actors",
        "Maintained stakeholder alignment through clear communication and rapid escalation pathways",
      ],
      impact: [
        "Successfully avoided code depletion and associated legal risk",
        "Scaled system capacity to meet multi-fold demand growth without disruption",
        "Maintained program stability throughout live operations",
        "Minimized fraud impact through active monitoring and intervention",
      ],
      insight:
        "Execution at scale is defined by how effectively teams adapt when real-world demand exceeds expectations.",
      image: "/casestudy-3.webp",
    },
    reversed: false,
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CredibilityStrip />
        <WhatIDo />

        {/* Case Studies overview */}
        <div className="mx-auto max-w-content px-6 pb-16 pt-20 md:px-10 lg:pb-24 lg:px-20 lg:pt-[120px]">
          <ScrollReveal>
            <p
              className="font-mono text-accent"
              style={{ fontSize: "10px", letterSpacing: "3px" }}
            >
              CASE STUDIES
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2
              className="mb-6 mt-4 uppercase leading-none text-text-primary"
              style={{
                fontFamily: "var(--font-anybody)",
                fontWeight: 900,
                fontSize: "clamp(28px, 4.5vw, 48px)",
                letterSpacing: "-1px",
              }}
            >
              Selected Work
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p
              className="max-w-[800px] text-text-body"
              style={{
                fontFamily: "var(--font-anybody)",
                fontWeight: 300,
                fontSize: "17px",
                lineHeight: 1.8,
              }}
            >
              De-identified case studies representing large-scale digital
              execution across national North American programs. These examples highlight
              execution under complexity, transformation through technology, and
              real-time operational leadership.
            </p>
          </ScrollReveal>
        </div>

        {caseStudies.map((cs) => (
          <div key={cs.data.title}>
            <div className="section-glow" />
            <CaseStudy data={cs.data} reversed={cs.reversed} />
          </div>
        ))}

        {/* Narrative Summary */}
        <div className="mx-auto max-w-content px-6 pb-20 md:px-10 lg:px-20 lg:pb-[120px]">
          <div className="section-glow mb-16" />
          <ScrollReveal>
            <div
              className="rounded-r-sm border-l-[3px] border-accent p-8"
              style={{ background: "rgba(255,159,47,0.05)" }}
            >
              <p
                className="mb-4 text-text-primary"
                style={{
                  fontFamily: "var(--font-anybody)",
                  fontWeight: 700,
                  fontSize: "15px",
                }}
              >
                Across these programs, a consistent pattern emerges:
              </p>
              <ul className="space-y-2">
                <li
                  className="relative pl-4 text-text-body"
                  style={{
                    fontFamily: "var(--font-anybody)",
                    fontWeight: 300,
                    fontSize: "14px",
                    lineHeight: 1.75,
                  }}
                >
                  <span className="absolute left-0 text-accent" style={{ fontSize: "12px" }}>›</span>
                  Leading execution under complexity and scale
                </li>
                <li
                  className="relative pl-4 text-text-body"
                  style={{
                    fontFamily: "var(--font-anybody)",
                    fontWeight: 300,
                    fontSize: "14px",
                    lineHeight: 1.75,
                  }}
                >
                  <span className="absolute left-0 text-accent" style={{ fontSize: "12px" }}>›</span>
                  Navigating constraints through structured systems and risk
                  management
                </li>
                <li
                  className="relative pl-4 text-text-body"
                  style={{
                    fontFamily: "var(--font-anybody)",
                    fontWeight: 300,
                    fontSize: "14px",
                    lineHeight: 1.75,
                  }}
                >
                  <span className="absolute left-0 text-accent" style={{ fontSize: "12px" }}>›</span>
                  Applying real-time decision-making to maintain stability and
                  performance
                </li>
              </ul>
              <p
                className="mt-4 text-text-body"
                style={{
                  fontFamily: "var(--font-anybody)",
                  fontWeight: 300,
                  fontSize: "14px",
                  lineHeight: 1.75,
                }}
              >
                These experiences now inform a broader focus on applying AI to
                further enhance execution, automation, and operational
                intelligence.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="section-glow" />
        <AIProjects />
        <div className="section-glow" />
        <About />

        {/* How This Site Was Built — reflective note */}
        <section
          aria-label="How this site was built"
          className="mx-auto max-w-[640px] px-6 py-16 md:px-10 lg:py-20"
        >
          <ScrollReveal>
            <h3
              className="mb-5 text-text-muted"
              style={{
                fontFamily: "var(--font-anybody)",
                fontWeight: 500,
                fontSize: "13px",
                letterSpacing: "0.5px",
              }}
            >
              How This Site Was Built
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p
              className="mb-4 text-text-muted"
              style={{
                fontFamily: "var(--font-anybody)",
                fontWeight: 300,
                fontSize: "14px",
                lineHeight: 1.85,
              }}
            >
              This site was created using AI-assisted workflows across design,
              copy, and development.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p
              className="mb-4 text-text-muted"
              style={{
                fontFamily: "var(--font-anybody)",
                fontWeight: 300,
                fontSize: "14px",
                lineHeight: 1.85,
              }}
            >
              The process involved exploring design directions, refining
              structure and layout, and developing content around a clear
              narrative and positioning — all through iterative collaboration
              with AI systems.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p
              className="text-text-muted"
              style={{
                fontFamily: "var(--font-anybody)",
                fontWeight: 300,
                fontSize: "14px",
                lineHeight: 1.85,
              }}
            >
              This reflects how I approach applying AI in practice: not as a
              shortcut, but as a way to improve clarity, accelerate iteration,
              and enhance execution.
            </p>
          </ScrollReveal>
        </section>
      </main>
      <CTA />
      <Footer />
    </>
  );
}
