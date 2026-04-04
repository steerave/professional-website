import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CredibilityStrip from "@/components/CredibilityStrip";
import WhatIDo from "@/components/WhatIDo";
import CaseStudy, { type CaseStudyData } from "@/components/CaseStudy";
import AIProjects from "@/components/AIProjects";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const caseStudies: { data: CaseStudyData; reversed: boolean }[] = [
  {
    data: {
      title: "Scaling a National Digital Promotion with First-Time Ticketless Architecture",
      overview: "Led digital execution for a high-visibility national promotional campaign for a global quick-service restaurant brand, introducing a first-time ticketless participation system across the U.S.",
      challenge: [
        "Millions of users nationwide",
        "Real-time system reliability under peak load",
        "10+ cross-functional stakeholders",
        "High visibility and tight timelines",
      ],
      whatIDid: [
        "Established structured delivery framework",
        "Engaged partner and client testing teams to execute a multi-phased testing approach",
        "Built communication and escalation pathways",
        "Partnered with engineering to mitigate risk",
      ],
      impact: [
        "Supported millions of user interactions",
        "Maintained high system uptime",
        "Reduced cross-team ambiguity",
        "Created repeatable execution model",
      ],
      insight: "At scale, execution quality depends on how well the system is coordinated end-to-end.",
    },
    reversed: false,
  },
  {
    data: {
      title: "Delivering a Cashless Reward System with Live Financial Integrations",
      overview: "Led implementation of a cashless reward system for a national campaign, integrating with financial infrastructure partners.",
      challenge: [
        "No sandbox environment (production-based testing)",
        "Integration with external financial systems",
        "Real-time validation and payout flows",
        "High risk of user impact",
      ],
      whatIDid: [
        "Designed controlled production testing strategy",
        "Implemented contingency mechanisms",
        "Coordinated across partners and internal teams",
        "Established real-time monitoring",
      ],
      impact: [
        "Delivered real-time cashless reward system",
        "Enabled high-volume validation and payouts",
        "Maintained strong user experience",
        "Created scalable integration model",
      ],
      insight: "When constraints are high, disciplined execution becomes the advantage.",
    },
    reversed: true,
  },
  {
    data: {
      title: "Building Scalable Delivery Systems Across National Programs",
      overview: "Standardized delivery processes across multiple large-scale digital programs for a global consumer brand.",
      challenge: [
        "Inconsistent workflows",
        "Fragmented communication",
        "Lack of standardized checkpoints",
        "Scaling coordination complexity",
      ],
      whatIDid: [
        "Introduced standardized templates and workflows",
        "Defined delivery phases and checkpoints",
        "Established communication cadence",
        "Aligned teams on operating model",
      ],
      impact: [
        "Improved delivery consistency",
        "Reduced operational friction",
        "Increased cross-team alignment",
        "Built scalable execution framework",
      ],
      insight: "Scalable execution is about system design, not effort.",
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
        {caseStudies.map((cs) => (
          <div key={cs.data.title}>
            <div className="section-glow" />
            <CaseStudy data={cs.data} reversed={cs.reversed} />
          </div>
        ))}
        <div className="section-glow" />
        <AIProjects />
        <div className="section-glow" />
        <About />
      </main>
      <CTA />
      <Footer />
    </>
  );
}
