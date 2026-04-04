import Image from "next/image";

export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative min-h-[90vh] overflow-hidden bg-bg"
    >
      {/* Background image */}
      <Image
        src="/hero-bg.webp"
        alt=""
        fill
        priority
        className="pointer-events-none object-cover"
        sizes="100vw"
      />

      {/* Dark overlay for text readability */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,rgba(11,14,20,0.45)_0%,rgba(11,14,20,0.8)_60%,rgba(11,14,20,0.95)_100%)]" />

      {/* Bottom fade to page background */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-[300px] bg-gradient-to-b from-transparent to-bg" />

      {/* Subtle accent glows on top of image */}
      <div className="pointer-events-none absolute left-[10%] top-[20%] z-[1] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(74,111,165,0.12)_0%,transparent_60%)] blur-[80px]" />
      <div className="pointer-events-none absolute bottom-[20%] right-[15%] z-[1] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(90,138,191,0.08)_0%,transparent_60%)] blur-[60px]" />

      {/* Content — single column, centered */}
      <div className="relative z-[2] mx-auto flex min-h-[90vh] max-w-content flex-col items-center justify-center px-6 py-[120px] text-center md:px-10 lg:px-20">
        {/* Name — the hero */}
        <h1 className="hero-animate-1 text-5xl font-bold leading-[1.05] tracking-tight text-text-primary md:text-7xl lg:text-[80px]">
          Sarun (Joe)
          <br />
          Teeravechyan
        </h1>

        {/* Title / subtitle */}
        <p className="hero-animate-2 mt-5 text-lg font-medium tracking-wide text-accent-light md:text-xl lg:text-[22px]">
          Digital Leader &amp; AI Systems Builder
        </p>

        {/* Description */}
        <p className="hero-animate-3 mt-8 max-w-[600px] text-base leading-[1.7] text-text-body md:text-lg">
          Senior digital leader delivering complex, high-visibility programs
          across North America — now focused on applying AI to transform how
          systems are designed, operated, and scaled.
        </p>

        {/* CTAs */}
        <div className="hero-animate-4 mt-10 flex gap-4">
          <a
            href="#work"
            className="inline-block rounded-md bg-accent px-7 py-3.5 text-[15px] text-white shadow-[0_0_20px_rgba(74,111,165,0.2)] transition-all hover:bg-accent-light hover:shadow-[0_0_30px_rgba(74,111,165,0.35)]"
          >
            View Work
          </a>
          <a
            href="#connect"
            className="inline-block rounded-md border border-[rgba(74,111,165,0.4)] bg-transparent px-7 py-3.5 text-[15px] text-accent-light transition-all hover:border-accent-light hover:bg-[rgba(74,111,165,0.1)] hover:text-white"
          >
            Connect
          </a>
        </div>

        {/* Disclaimer */}
        <p className="hero-animate-4 mt-6 text-[13px] text-text-muted">
          De-identified work. Details available upon request.
        </p>
      </div>
    </section>
  );
}
