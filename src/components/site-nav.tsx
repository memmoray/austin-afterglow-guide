import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "The Edit" },
  { to: "/places", label: "Places" },
  { to: "/calendar", label: "Calendar" },
  { to: "/the-hunt", label: "The Hunt" },
  { to: "/follow", label: "Follow" },
  { to: "/insider", label: "Insider" },
] as const;

export function SiteNav() {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur sticky top-0 z-40">
      <div className="container-editorial flex items-center justify-between py-5">
        <Link to="/" className="flex flex-col leading-none">
          <span className="eyebrow">Est. About Now</span>
          <span className="font-display text-2xl mt-1">Girl About Austin</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-accent transition-colors"
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <nav className="md:hidden container-editorial flex gap-4 overflow-x-auto pb-3 text-xs">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="whitespace-nowrap"
            activeProps={{ className: "text-accent" }}
            activeOptions={{ exact: l.to === "/" }}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="container-editorial py-14 grid gap-8 md:grid-cols-3">
        <div>
          <div className="eyebrow">Girl About Austin</div>
          <p className="mt-3 font-display text-2xl leading-tight">
            A field guide for the woman who intends to be known in this town.
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          <div className="eyebrow mb-3 text-foreground">The Fine Print</div>
          <p>
            Independent editorial. No affiliations with venues listed. Reservations, dress codes and
            membership policies change — always call ahead.
          </p>
        </div>
        <div className="text-sm">
          <div className="eyebrow mb-3">The Newsletter</div>
          <p className="text-muted-foreground mb-3">
            Weekly dispatch. What's opening, who's in town, where the room will be.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="your@email"
              className="flex-1 border border-border bg-transparent px-3 py-2 text-sm outline-none focus:border-accent"
            />
            <button className="bg-primary text-primary-foreground px-4 py-2 text-xs uppercase tracking-widest">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="container-editorial pb-8 text-xs text-muted-foreground flex justify-between">
        <span>© {new Date().getFullYear()} Girl About Austin</span>
        <span>Made with taste in ATX</span>
      </div>
    </footer>
  );
}
