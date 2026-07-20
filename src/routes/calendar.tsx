import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { PageHeader, Tag } from "@/components/section";
import { events } from "@/data/content";

export const Route = createFileRoute("/calendar")({
  head: () => ({
    meta: [
      { title: "The Calendar — Girl About Austin" },
      {
        name: "description",
        content:
          "Austin's actual social calendar: F1 week, SXSW, ACL, legislative session, galas, and rodeo — with a strategy for each.",
      },
      { property: "og:title", content: "The Calendar — Girl About Austin" },
      { property: "og:description", content: "The Austin social calendar with strategy." },
    ],
  }),
  component: CalendarPage,
});

function CalendarPage() {
  return (
    <div>
      <SiteNav />
      <PageHeader
        eyebrow="The Calendar"
        title="Austin's year, sorted by where you should be."
        lede="Some weeks in Austin, the entire city rearranges itself around one event. Miss those and you might as well have missed the year. Here they are, and what to do about each."
      />
      <section className="container-editorial py-16">
        <ol className="space-y-14">
          {events.map((e, i) => (
            <li key={e.name} className="grid md:grid-cols-12 gap-6 border-b border-border pb-14 last:border-none">
              <div className="md:col-span-1">
                <span className="font-display text-5xl text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="md:col-span-3">
                <Tag>{e.tier}</Tag>
                <div className="eyebrow mt-3">When</div>
                <p className="mt-1 text-sm">{e.when}</p>
                <div className="eyebrow mt-4">Where</div>
                <p className="mt-1 text-sm">{e.where}</p>
              </div>
              <div className="md:col-span-8">
                <h2 className="font-display text-3xl md:text-4xl leading-tight">{e.name}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{e.strategy}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <SiteFooter />
    </div>
  );
}
