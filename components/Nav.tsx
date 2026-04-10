export default function Nav() {
  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-[100] flex items-center justify-between border-b border-border bg-[rgba(8,8,8,0.88)] px-6 py-[18px] backdrop-blur-[20px] md:px-10 lg:px-20"
    >
      <a
        href="#hero"
        className="font-mono font-medium text-accent transition-opacity hover:opacity-70"
        style={{ fontSize: "12px", letterSpacing: "3px" }}
        aria-label="Back to top"
      >
        SJT
      </a>
      <div className="hidden gap-8 md:flex">
        {[
          { href: "#work", label: "Work" },
          { href: "#about", label: "About" },
          { href: "#connect", label: "Connect" },
        ].map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="font-mono text-text-muted transition-colors duration-200 hover:text-accent"
            style={{ fontSize: "11px", letterSpacing: "2px" }}
          >
            {label.toUpperCase()}
          </a>
        ))}
      </div>
    </nav>
  );
}
