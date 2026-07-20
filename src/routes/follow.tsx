import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { PageHeader, Tag } from "@/components/section";
import { handles } from "@/data/content";

export const Route = createFileRoute("/follow")({
  head: () => ({
    meta: [
      { title: "Who to Follow — Girl About Austin" },
      {
        name: "description",
        content:
          "The Austin social feeds worth turning notifications on for: magazines, event aggregators, critics, and the two gossip accounts that occasionally know.",
      },
      { property: "og:title", content: "Who to Follow — Girl About Austin" },
      { property: "og:description", content: "Austin's essential follow list." },
    ],
  }),
  component: FollowPage,
});

function FollowPage() {
  return (
    <div>
      <SiteNav />
      <PageHeader
        eyebrow="The Feed"
        title="Ten accounts. Turn notifications on for four."
        lede="Austin's social scene runs on Instagram grids and one Statesman critic. If you follow these ten and read their captions, you'll know which rooms are opening — and which faces are worth memorizing — before your first party invite lands."
      />
      <section className="container-editorial py-14">
        <div className="grid gap-4">
          {handles.map((h, i) => (
            <div
              key={h.handle}
              className="border border-border p-6 md:p-8 grid md:grid-cols-12 gap-4 items-center hover:border-accent transition-colors"
            >
              <div className="md:col-span-1 font-display text-3xl text-accent">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="md:col-span-3">
                <div className="font-display text-2xl">{h.handle}</div>
                <div className="text-xs mt-1"><Tag>{h.platform}</Tag></div>
              </div>
              <div className="md:col-span-3 text-sm">
                <div className="eyebrow">What</div>
                <p className="mt-1">{h.what}</p>
              </div>
              <div className="md:col-span-5 text-sm text-muted-foreground">
                <div className="eyebrow text-foreground">Why</div>
                <p className="mt-1 leading-relaxed">{h.why}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-editorial py-14 border-t border-border">
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-4">
            <div className="eyebrow">A note</div>
          </div>
          <div className="md:col-span-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              Do not comment on strangers' posts to be seen. Do like them, quietly, from a
              well-tended grid of your own. In a city this small, your feed is your first
              impression — the second is at the bar at Jeffrey's.
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
