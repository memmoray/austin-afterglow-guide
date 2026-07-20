import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { PageHeader } from "@/components/section";
import { insiderTips } from "@/data/content";

export const Route = createFileRoute("/insider")({
  head: () => ({
    meta: [
      { title: "The Insider Playbook — Girl About Austin" },
      {
        name: "description",
        content:
          "Twenty lesser-known Austin rules on timing, dress, positioning, and getting into rooms that don't advertise.",
      },
      { property: "og:title", content: "The Insider Playbook — Girl About Austin" },
      { property: "og:description", content: "Twenty rules for being known in Austin." },
    ],
  }),
  component: InsiderPage,
});

function InsiderPage() {
  const categories = Array.from(new Set(insiderTips.map((t) => t.category)));
  return (
    <div>
      <SiteNav />
      <PageHeader
        eyebrow="The Playbook"
        title="Twenty rules the guidebooks won't tell you."
        lede="Some of these are obvious once you've lived here a year. All twenty together are the year."
      />
      {categories.map((cat) => {
        const items = insiderTips.filter((t) => t.category === cat);
        return (
          <section key={cat} className="container-editorial py-12 border-b border-border">
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <div className="eyebrow">Chapter</div>
                <h2 className="font-display text-4xl mt-2">{cat}</h2>
              </div>
              <div className="md:col-span-9 space-y-8">
                {items.map((t, i) => (
                  <div key={t.title} className="flex gap-6">
                    <span className="font-display text-4xl text-accent leading-none shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl leading-snug">{t.title}</h3>
                      <p className="mt-3 text-muted-foreground leading-relaxed">{t.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}
      <SiteFooter />
    </div>
  );
}
