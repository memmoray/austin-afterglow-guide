import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-austin.jpg";
import clubImg from "@/assets/club-interior.jpg";
import cafeImg from "@/assets/cafe-scene.jpg";
import poloImg from "@/assets/polo.jpg";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { SectionTitle, Card, Tag } from "@/components/section";
import { places, events, insiderTips } from "@/data/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Girl About Austin — The Field Guide to Being Known in ATX" },
      {
        name: "description",
        content:
          "An editorial city guide for the woman who intends to be a name in Austin. Where to go, when to go, who to follow, and how to meet the people who run this town.",
      },
      { property: "og:title", content: "Girl About Austin" },
      { property: "og:description", content: "The insider guide to Austin's rooms that matter." },
    ],
  }),
  component: Home,
});

function Home() {
  const featuredPlaces = places.slice(0, 3);
  const marquee = events.filter((e) => e.tier === "Marquee");

  return (
    <div>
      <SiteNav />

      {/* HERO */}
      <section className="relative">
        <img
          src={heroImg}
          alt="Woman in a slip dress on an Austin rooftop at golden hour"
          className="w-full h-[85vh] object-cover"
          width={1920}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/10" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-editorial pb-16 md:pb-24">
            <div className="eyebrow text-accent">
              <span className="rule bg-accent" />
              Volume I · The Austin Edit
            </div>
            <h1 className="font-display text-5xl md:text-8xl leading-[0.95] mt-4 max-w-4xl text-cream">
              Be a name in a town that thinks it doesn't have any.
            </h1>
            <p className="mt-6 max-w-xl text-cream/90 text-lg leading-relaxed">
              A field guide to the rooms, tables, trails and galas where Austin actually happens.
              For the woman who plans on being invited back.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/places"
                className="bg-white text-ink px-6 py-3 text-xs uppercase tracking-[0.24em]"
              >
                The Places
              </Link>
              <Link
                to="/the-hunt"
                className="border border-white/70 text-white px-6 py-3 text-xs uppercase tracking-[0.24em]"
              >
                The Hunt
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="container-editorial py-20 md:py-28 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="eyebrow">Editor's Note</div>
        </div>
        <div className="md:col-span-8">
          <p className="font-display text-3xl md:text-5xl leading-[1.1]">
            Austin looks casual. It isn't. It's a small town wearing a big city's clothes — which
            means everyone knows everyone, and the rooms that matter are quieter than they look.
          </p>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            This is a guide for the woman who wants to be photographed at the Contemporary Austin
            gala inside eighteen months, on a first-name basis with the maître d' at Jeffrey's
            inside three, and known to the ownership suite at Austin FC before the season's out.
            Not through luck. Through strategy.
          </p>
        </div>
      </section>

      {/* FEATURED PLACES */}
      <section className="container-editorial py-16 border-t border-border">
        <SectionTitle eyebrow="This Week's Reservations" title="Three tables. Book them tonight." />
        <div className="grid md:grid-cols-3 gap-6">
          {featuredPlaces.map((p) => (
            <Card key={p.name}>
              <div className="flex items-center justify-between mb-3">
                <Tag>{p.tier}</Tag>
                <span className="text-xs text-muted-foreground">{p.neighborhood}</span>
              </div>
              <h3 className="font-display text-2xl">{p.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.why}</p>
              <div className="mt-4 pt-4 border-t border-border text-xs">
                <div>
                  <span className="eyebrow">The Move</span>
                  <p className="mt-1 text-foreground">{p.the_move}</p>
                </div>
                <div className="mt-3">
                  <span className="eyebrow">When</span>
                  <p className="mt-1 text-foreground">{p.when}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/places" className="eyebrow link-underline">
            The Full Directory →
          </Link>
        </div>
      </section>

      {/* SPLIT — CLUB */}
      <section className="grid md:grid-cols-2 mt-20 border-y border-border">
        <img src={clubImg} alt="Private club interior" className="w-full h-full object-cover" loading="lazy" width={1400} height={1000} />
        <div className="p-10 md:p-16 flex flex-col justify-center">
          <div className="eyebrow">The Members' Rooms</div>
          <h2 className="font-display text-4xl md:text-5xl mt-3 leading-[1.05]">
            Four doors that don't open cold.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Soho House. Headliners Club. Austin Country Club. The Mackenzie (2026). Each one has a
            different key — and the key is never money alone.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="eyebrow">Soho House</div>
              <p className="mt-1 text-muted-foreground">Two proposers, a portfolio, a committee.</p>
            </div>
            <div>
              <div className="eyebrow">Headliners</div>
              <p className="mt-1 text-muted-foreground">Legal & political old guard. Guest first.</p>
            </div>
            <div>
              <div className="eyebrow">Austin C.C.</div>
              <p className="mt-1 text-muted-foreground">Closed list. Become a permanent guest.</p>
            </div>
            <div>
              <div className="eyebrow">Mackenzie</div>
              <p className="mt-1 text-muted-foreground">Indoor golf. Founding rounds open now.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE EVENTS */}
      <section className="container-editorial py-20">
        <SectionTitle eyebrow="The Calendar" title="Three weekends that decide the year." />
        <div className="grid md:grid-cols-3 gap-8">
          {marquee.map((e) => (
            <div key={e.name} className="border-l-2 border-accent pl-5">
              <div className="eyebrow">{e.when}</div>
              <h3 className="font-display text-3xl mt-1">{e.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{e.strategy}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/calendar" className="eyebrow link-underline">
            The Full Calendar →
          </Link>
        </div>
      </section>

      {/* SPLIT — CAFE */}
      <section className="grid md:grid-cols-2 border-y border-border">
        <div className="p-10 md:p-16 flex flex-col justify-center order-2 md:order-1">
          <div className="eyebrow">The Daytime Play</div>
          <h2 className="font-display text-4xl md:text-5xl mt-3 leading-[1.05]">
            Regulars aren't made at night. They're made at 6 AM.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            The trail. Barry's. Reformer at Class Studio. Weekday coffee at June's. The men worth
            meeting have their evenings booked — but their mornings are on autopilot, and their
            autopilot has a pattern.
          </p>
          <Link to="/insider" className="eyebrow link-underline mt-6 inline-block w-fit">
            Read the Insider Playbook →
          </Link>
        </div>
        <img src={cafeImg} alt="Woman at an Austin cafe" className="w-full h-full object-cover order-1 md:order-2" loading="lazy" width={1200} height={1500} />
      </section>

      {/* TIP TICKER */}
      <section className="container-editorial py-20">
        <SectionTitle eyebrow="Insider Notes" title="Six rules for your first ninety days." />
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          {insiderTips.slice(0, 6).map((t, i) => (
            <div key={t.title} className="flex gap-6 py-4 border-b border-border">
              <span className="font-display text-4xl text-accent leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="eyebrow">{t.category}</div>
                <h4 className="font-display text-xl mt-1">{t.title}</h4>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{t.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/insider" className="eyebrow link-underline">
            All Twenty Rules →
          </Link>
        </div>
      </section>

      {/* POLO CTA */}
      <section className="relative mt-10">
        <img src={poloImg} alt="Polo match afternoon" className="w-full h-[60vh] object-cover" loading="lazy" width={1200} height={900} />
        <div className="absolute inset-0 bg-black/25 flex items-center">
          <div className="container-editorial text-white max-w-2xl">
            <div className="eyebrow text-accent">The Directory</div>
            <h2 className="font-display text-4xl md:text-6xl mt-3 leading-[1]">
              Everything you need. None of what you don't.
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/places" className="bg-white text-ink px-6 py-3 text-xs uppercase tracking-[0.24em]">Places</Link>
              <Link to="/the-hunt" className="border border-white text-white px-6 py-3 text-xs uppercase tracking-[0.24em]">The Hunt</Link>
              <Link to="/follow" className="border border-white text-white px-6 py-3 text-xs uppercase tracking-[0.24em]">Who to Follow</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
