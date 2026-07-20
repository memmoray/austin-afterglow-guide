import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { PageHeader, Card, Tag } from "@/components/section";
import { huntSpots } from "@/data/content";

export const Route = createFileRoute("/the-hunt")({
  head: () => ({
    meta: [
      { title: "The Hunt — Girl About Austin" },
      {
        name: "description",
        content:
          "Where — and when, and how — to meet Austin's investors, founders, and old-money families. A candid strategy guide.",
      },
      { property: "og:title", content: "The Hunt — Girl About Austin" },
      { property: "og:description", content: "The Austin strategy guide for meeting serious men." },
    ],
  }),
  component: HuntPage,
});

function HuntPage() {
  return (
    <div>
      <SiteNav />
      <PageHeader
        eyebrow="The Hunt · A candid guide"
        title="Where the men worth meeting actually are."
        lede="Austin is thick with founders, funds, energy money, and the fourth generation of families who own the ranches you drive past. They are not on the apps. They are in the ten rooms below, on a rotation you can memorize."
      />

      <section className="container-editorial py-14 border-b border-border">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="eyebrow">Preface</div>
          </div>
          <div className="md:col-span-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              A candid word before we start. The women who marry well in Austin do not, as a rule,
              look like they are trying to. They are visible in the same three rooms every week,
              they are known by name to the staff, they have a real job or a real project, and they
              have exactly one story that ends with an interesting man — never a series.
            </p>
            <p>
              The playbook below is about geography and timing. It cannot substitute for being an
              interesting person who reads the news and can handle a wine list. It also cannot
              substitute for patience. Nobody serious moves fast in this town.
            </p>
          </div>
        </div>
      </section>

      <section className="container-editorial py-14">
        <div className="grid md:grid-cols-2 gap-6">
          {huntSpots.map((s, i) => (
            <Card key={s.where}>
              <div className="flex items-center justify-between mb-3">
                <span className="font-display text-3xl text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Tag>{s.when}</Tag>
              </div>
              <h3 className="font-display text-2xl">{s.where}</h3>
              <div className="mt-4 text-xs">
                <span className="eyebrow">Who's in the room</span>
                <p className="text-sm mt-1 text-foreground">{s.who}</p>
              </div>
              <div className="mt-4 text-xs">
                <span className="eyebrow">The Approach</span>
                <p className="text-sm mt-1 text-muted-foreground leading-relaxed">{s.approach}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="container-editorial py-14 border-t border-border">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="eyebrow">The Long Game</div>
            <h2 className="font-display text-4xl mt-3">Twelve to eighteen months.</h2>
          </div>
          <div className="md:col-span-8 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              A realistic timeline from moving to Austin to being at a table with the person you
              want to sit across from is a year to eighteen months. The first six are volume and
              visibility — same gym, same bar seats, same three galas. The next six are editing —
              you know which rooms are yours, and you stop attending the others.
            </p>
            <p>
              A woman who shows up everywhere reads as unemployed. A woman who is the regular at
              four specific places reads as a name. That transition is the entire project.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
