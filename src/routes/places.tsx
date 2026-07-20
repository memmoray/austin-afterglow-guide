import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { PageHeader, Card, Tag } from "@/components/section";
import { places } from "@/data/content";

export const Route = createFileRoute("/places")({
  head: () => ({
    meta: [
      { title: "The Places — Girl About Austin" },
      {
        name: "description",
        content:
          "Twenty tables, bars, clubs, and mornings that map the actual social geography of Austin.",
      },
      { property: "og:title", content: "The Places — Girl About Austin" },
      { property: "og:description", content: "Austin's insider directory." },
    ],
  }),
  component: PlacesPage,
});

function PlacesPage() {
  const categories = Array.from(new Set(places.map((p) => p.category)));
  return (
    <div>
      <SiteNav />
      <PageHeader
        eyebrow="The Directory"
        title="The map of Austin, but only the parts that matter."
        lede="Not a best-of list. A field guide. Every entry has the move, the timing, and the reason — because being at Uchi on a Saturday isn't the same as being at Uchi at 5:30 on a Tuesday."
      />
      {categories.map((cat) => {
        const items = places.filter((p) => p.category === cat);
        return (
          <section key={cat} className="container-editorial py-14 border-b border-border">
            <div className="flex items-baseline justify-between mb-8">
              <h2 className="font-display text-4xl">{cat}s</h2>
              <span className="eyebrow">{items.length} entries</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((p) => (
                <Card key={p.name}>
                  <div className="flex items-center justify-between mb-3">
                    <Tag>{p.tier}</Tag>
                    <span className="text-xs text-muted-foreground">{p.neighborhood}</span>
                  </div>
                  <h3 className="font-display text-2xl">{p.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.why}</p>
                  <div className="mt-4 pt-4 border-t border-border space-y-3 text-xs">
                    <div>
                      <span className="eyebrow">The Move</span>
                      <p className="mt-1 text-foreground">{p.the_move}</p>
                    </div>
                    <div>
                      <span className="eyebrow">When</span>
                      <p className="mt-1 text-foreground">{p.when}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        );
      })}
      <SiteFooter />
    </div>
  );
}
