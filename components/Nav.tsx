export default function Nav() {
  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-[100] flex items-center justify-between border-b border-border bg-[rgba(11,14,20,0.85)] px-6 py-4 backdrop-blur-[16px] md:px-10 lg:px-20"
    >
      <span className="text-base font-medium text-text-primary">
        Sarun (Joe) Teeravechyan
      </span>
      <div className="hidden gap-8 md:flex">
        <a href="#work" className="text-sm text-text-muted transition-colors hover:text-text-primary">
          Work
        </a>
        <a href="#about" className="text-sm text-text-muted transition-colors hover:text-text-primary">
          About
        </a>
        <a href="#connect" className="text-sm text-text-muted transition-colors hover:text-text-primary">
          Connect
        </a>
      </div>
    </nav>
  );
}
