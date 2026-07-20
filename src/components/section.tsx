import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="container-editorial pt-16 pb-10 border-b border-border">
      <div className="eyebrow">
        <span className="rule" />
        {eyebrow}
        <span className="rule" />
      </div>
      <h1 className="font-display text-5xl md:text-7xl mt-4 max-w-4xl leading-[1.02]">{title}</h1>
      {lede && (
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">{lede}</p>
      )}
    </section>
  );
}

export function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10">
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="font-display text-3xl md:text-5xl mt-2 max-w-3xl leading-tight">{title}</h2>
    </div>
  );
}

export function Card({ children }: { children: ReactNode }) {
  return (
    <article className="border border-border bg-card p-6 hover:border-accent transition-colors">
      {children}
    </article>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="text-[10px] uppercase tracking-[0.24em] text-accent border border-accent/40 px-2 py-1">
      {children}
    </span>
  );
}
