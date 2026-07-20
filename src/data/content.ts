// Curated Austin insider intel. Independent editorial — verify hours/membership before you go.

export type Place = {
  name: string;
  neighborhood: string;
  category: "Restaurant" | "Bar" | "Club" | "Rooftop" | "Cafe" | "Fitness" | "Boutique" | "Hotel";
  the_move: string;
  when: string;
  why: string;
  tier: "Public" | "Reservation" | "Members" | "Insider";
};

export const places: Place[] = [
  {
    name: "Jeffrey's",
    neighborhood: "Clarksville",
    category: "Restaurant",
    the_move: "Bar seat, tableside martini cart, order the beef tartare",
    when: "Tuesday & Wednesday, 7:30 PM",
    why: "Austin's original power table since 1975. Real estate developers and old-money families close deals over dry-aged steak. If you sit at the bar alone with a book, you will not be alone for long.",
    tier: "Reservation",
  },
  {
    name: "VanHorn's",
    neighborhood: "Downtown / 2nd Street",
    category: "Restaurant",
    the_move: "Late seating (9:15+), stay for the cover band",
    when: "Thursday nights",
    why: "The buzzy new steakhouse where downtown tech money actually shows up on a weeknight. Loud, glamorous, unusually good live music for a chophouse.",
    tier: "Reservation",
  },
  {
    name: "Aris",
    neighborhood: "Clarksville / West 6th",
    category: "Restaurant",
    the_move: "Bar. Sit at the bar.",
    when: "Wednesday–Friday, 6:30 PM",
    why: "Mediterranean steakhouse that reads as European enough that men in the private-jet-charter business feel at home. The corporate card crowd, but younger.",
    tier: "Reservation",
  },
  {
    name: "Here Nor There",
    neighborhood: "Downtown (unmarked door, Colorado St.)",
    category: "Bar",
    the_move: "Text for reservation — no walk-ins. Ask the bartender to build off gin.",
    when: "Late Wednesday, 10 PM",
    why: "Reservation-only speakeasy. If you can't find the door, you're not supposed to be there. That's the point.",
    tier: "Insider",
  },
  {
    name: "The Kimberly",
    neighborhood: "Downtown",
    category: "Restaurant",
    the_move: "Ask for a corner two-top; order the seasonal tasting",
    when: "Friday, first seating",
    why: "Chef John Carver's fine-dining room. Small, hushed, expense-account energy. The move if he suggests dinner and you want to see how he treats staff.",
    tier: "Reservation",
  },
  {
    name: "Uchi",
    neighborhood: "South Lamar",
    category: "Restaurant",
    the_move: "Omakase, 5:30 happy-hour bar seats if you must be flexible",
    when: "Any night; Sunday for the regulars",
    why: "The classic. You will run into Austin FC ownership, F1 teams during race week, and every founder who's had a liquidity event.",
    tier: "Reservation",
  },
  {
    name: "Perla's",
    neighborhood: "South Congress",
    category: "Restaurant",
    the_move: "Patio brunch, Bloody Mary, sunglasses on",
    when: "Saturday & Sunday, 11 AM",
    why: "See-and-be-seen brunch that has never lost its grip. The SoCo walk-in traffic is who is visiting Austin with money.",
    tier: "Public",
  },
  {
    name: "June's All Day",
    neighborhood: "South Congress",
    category: "Cafe",
    the_move: "Solo lunch at the bar with a glass of natural wine",
    when: "Weekday 1 PM",
    why: "The unofficial daytime clubhouse for stylists, gallerists, and founders who work from restaurants.",
    tier: "Public",
  },
  {
    name: "Soho House Austin",
    neighborhood: "Downtown / 5th",
    category: "Club",
    the_move: "Rooftop pool at magic hour; Cecconi's downstairs for dinner",
    when: "Sunday afternoon at the pool; Tuesday for quieter dinners",
    why: "Members only. If you don't have a member friend, the path in is the House Membership committee — you'll need two proposers who are already members and a portfolio of what you actually contribute to a room.",
    tier: "Members",
  },
  {
    name: "Headliners Club",
    neighborhood: "Downtown / Chase Tower",
    category: "Club",
    the_move: "Lunch as a guest; join a member's table",
    when: "Weekday lunch, 12:30 PM",
    why: "The 'third space' of Austin's political and legal old guard, freshly renovated on the 21st floor. Different room than Soho — older, richer, quieter money.",
    tier: "Members",
  },
  {
    name: "Twelve Thirty Club",
    neighborhood: "Downtown",
    category: "Restaurant",
    the_move: "Dinner + upstairs supper club with live music",
    when: "Thursday & Friday",
    why: "The Nashville import taking over the old post office. Justin Timberlake is a partner. Expect finance, F1, and celebrity drop-ins its first year open.",
    tier: "Reservation",
  },
  {
    name: "Neighborhood Services",
    neighborhood: "Rainey / Downtown",
    category: "Bar",
    the_move: "Late night, the back corner",
    method: undefined,
    when: "Wednesday 11 PM",
    why: "Where the industry drinks after their shifts — including staff from every restaurant on this list. If you want to be known by the people who quietly run this town, this is the room.",
    tier: "Insider",
  } as Place,
  {
    name: "The Driskill Bar",
    neighborhood: "Downtown",
    category: "Bar",
    the_move: "A Manhattan, alone, at the leather banquette",
    when: "Legislative session, weeknight 6 PM",
    why: "During Texas legislative session (Jan–May of odd-numbered years) this is where lobbyists and legislators land. The most underrated single opportunity on this list.",
    tier: "Public",
  },
  {
    name: "Austin Country Club",
    neighborhood: "Davenport Ranch",
    category: "Club",
    the_move: "Be invited to a member's guest lunch on the terrace",
    when: "Saturday after 11 AM",
    why: "Old Austin. The membership list is essentially a who's-who of the families who built this city. Nearly impossible to join cold; entirely possible to be a regular guest.",
    tier: "Members",
  },
  {
    name: "Barton Springs (Members' side / Sunrise)",
    neighborhood: "Zilker",
    category: "Fitness",
    the_move: "Sunrise swim, no phone, walk laps of the lawn after",
    when: "6:30–7:30 AM, weekdays",
    why: "Every serious runner, founder, and yoga teacher in central Austin does mornings here. The 'in-the-know' hour is before 8. Nobody who matters shows up at 2 PM on a Saturday.",
    tier: "Public",
  },
  {
    name: "Lady Bird Lake (Ann & Roy Butler trail)",
    neighborhood: "Downtown / South",
    category: "Fitness",
    the_move: "6 AM loop, then coffee at Bouldin Acres or Cosmic",
    when: "Weekday 6 AM",
    why: "The 10-mile loop is Austin's real networking event. Pace matters — a 9-minute mile on the pedestrian bridge is dating-app-worthy.",
    tier: "Public",
  },
  {
    name: "Barry's / Class Studio / Ballet Austin",
    neighborhood: "Multiple",
    category: "Fitness",
    the_move: "Barry's 6 AM Red Room; Class Studio Reformer 12 PM",
    when: "Consistency > timing",
    why: "Reformer Pilates midday classes are the boardroom in leggings. Regulars know each other by name after two weeks.",
    tier: "Public",
  },
  {
    name: "ByGeorge",
    neighborhood: "South Congress",
    category: "Boutique",
    the_move: "Weekday afternoon, chat with the buyers",
    method: undefined,
    when: "Thursday 3 PM",
    why: "The boutique that dresses Austin's actual moneyed women. The staff can tell you every event worth showing up to, and they will.",
    tier: "Public",
  } as Place,
  {
    name: "Hotel Saint Cecilia",
    neighborhood: "South Congress",
    category: "Hotel",
    the_move: "Poolside drinks — you don't need to be a guest but you need to look like you might be",
    when: "Friday 5 PM",
    why: "SXSW week and F1 week: musicians, actors, F1 team principals. The bar is small — arrive early or don't bother.",
    tier: "Insider",
  },
  {
    name: "Commodore Perry Estate",
    neighborhood: "North Loop",
    category: "Hotel",
    the_move: "Sunday afternoon on the estate lawn — order tea service",
    when: "Sunday 3 PM",
    why: "Auberge property on a walled 10-acre estate. Weddings here are the actual wedding market signal for Austin.",
    tier: "Reservation",
  },
];

export type Event = {
  name: string;
  when: string;
  where: string;
  strategy: string;
  tier: "Marquee" | "Insider" | "Regular";
};

export const events: Event[] = [
  {
    name: "Formula 1 US Grand Prix Weekend",
    when: "Late October — annual",
    where: "COTA + every rooftop in town",
    strategy:
      "The single most valuable weekend in Austin. Team-principal dinners are at Uchi, Jeffrey's, Aris. Paddock Club passes are the target — a friend in F1 hospitality > a $6,000 ticket. Hotel Saint Cecilia and Commodore Perry are the after-parties.",
    tier: "Marquee",
  },
  {
    name: "SXSW",
    when: "Second week of March",
    where: "Downtown + East side",
    strategy:
      "The unofficial parties matter more than badges. Look for invite-only VC dinners at Aris, Perla's, and private mansions in Tarrytown. The rule: skip anything advertised on Eventbrite; go where the door has no line and no sign.",
    tier: "Marquee",
  },
  {
    name: "ACL Weekend One (VIP)",
    when: "Early October — Weekend 1 only",
    where: "Zilker Park",
    strategy:
      "Weekend One is the industry weekend; Weekend Two is tourists. VIP or Platinum only — the pit is not the play. The real event is Foundation Communities' pre-fest party and the Sunday brunches at Perla's and June's.",
    tier: "Marquee",
  },
  {
    name: "Texas Legislative Session",
    when: "January–May, odd-numbered years",
    where: "Capitol area + Driskill + Headliners Club",
    strategy:
      "For five months every two years, half the state's money and power sleeps within six blocks of the Capitol. Cocktail hour Mon–Thu at the Driskill Bar. Underrated: the lobbyist dinners at Sullivan's and Fleming's.",
    tier: "Insider",
  },
  {
    name: "Austin FC home games",
    when: "MLS season, Saturdays",
    where: "Q2 Stadium / North Austin",
    strategy:
      "Field-side or the Q2 East supporters' section — but the actual room is the ownership suites. If you know one owner, you know all of them; the club is small.",
    tier: "Regular",
  },
  {
    name: "Rodeo Austin",
    when: "March, 2 weeks",
    where: "Travis County Expo Center",
    strategy:
      "Old Austin turns up. Buy tickets to the Cattle Baron's Ball or the wine auction — the arena itself is a warm-up. Boots are non-negotiable and must be broken in.",
    tier: "Insider",
  },
  {
    name: "Blanton Museum Gala / Contemporary Austin Art Ball",
    when: "Spring (Blanton) / Fall (Contemporary)",
    where: "UT campus / Laguna Gloria",
    strategy:
      "Two of the four black-tie nights that matter in Austin. Buy a young-patron table if you can't buy a full one. The pre-parties in the West Austin hills are more important than the gala itself.",
    tier: "Insider",
  },
  {
    name: "Ballet Austin Fete + Long Center benefits",
    when: "Spring",
    where: "Long Center / private homes",
    strategy:
      "How families with generational Austin money spend money. Volunteer on a young-professionals board first; a table follows.",
    tier: "Insider",
  },
  {
    name: "Fashion X Austin",
    when: "September",
    where: "Rotating venues",
    strategy:
      "Front row is politics. Get there through ByGeorge or the local designer showrooms — never through the ticket page.",
    tier: "Regular",
  },
  {
    name: "F1 Amber Lounge / MotoGP weekend",
    when: "October (F1) / April (MotoGP)",
    where: "COTA + downtown",
    strategy:
      "MotoGP is the insider version of F1: smaller, richer per capita, less crowded, same paddock energy.",
    tier: "Insider",
  },
];

export type Handle = {
  handle: string;
  what: string;
  why: string;
  platform: "Instagram" | "TikTok" | "Substack" | "X";
};

export const handles: Handle[] = [
  { handle: "@tribeza", what: "Austin's monthly society magazine", why: "Their party photo gallery is the receipts — memorize the recurring faces.", platform: "Instagram" },
  { handle: "@austinmonthly", what: "The other society mag", why: "'Best of' issues are literally a shortlist of every venue on this site.", platform: "Instagram" },
  { handle: "@do512", what: "The event firehose", why: "The daily calendar. Filter aggressively; 90% is not for you.", platform: "Instagram" },
  { handle: "@austintexas", what: "Official CVB", why: "Which conferences are in town = which men are in town that week.", platform: "Instagram" },
  { handle: "@theinfatuation", what: "Restaurant reviews", why: "Trust their Austin critic — they call the actual scene, not the marketing.", platform: "Instagram" },
  { handle: "@austin.food", what: "Local food industry gossip", why: "You'll know who's opening what six months before the article.", platform: "Instagram" },
  { handle: "@atxmodels & @atxsocialite", what: "Party-scene aggregators", why: "Follow to see who is photographed where. Then work backwards.", platform: "Instagram" },
  { handle: "@austin.confidential", what: "Society-adjacent gossip", why: "Chatter. Grain of salt. Occasionally correct.", platform: "TikTok" },
  { handle: "@matthewodam", what: "Statesman restaurant critic", why: "His top-10 list dictates the reservation-difficulty curve for six months.", platform: "X" },
  { handle: "Austin Business Journal newsletter", what: "M&A + funding news", why: "New money moves here every quarter. This is the list.", platform: "Substack" },
];

export type Tip = { title: string; body: string; category: string };

export const insiderTips: Tip[] = [
  {
    category: "Getting In",
    title: "Reserve at Jeffrey's on a Tuesday, not a Saturday",
    body: "Saturdays are tourists and anniversary dinners. Tuesday–Wednesday is where you find the regulars — the same eight men eat there twice a week.",
  },
  {
    category: "Getting In",
    title: "Resy at 12:01 AM, exactly 30 days out",
    body: "Every serious room releases its book 30 days ahead. Set an alarm. Have your credit card auto-filled in the app before the clock rolls.",
  },
  {
    category: "Getting In",
    title: "Sit at the bar. Always the bar.",
    body: "Bar tops are the single greatest tool a woman under 40 has in this town. You are visible, approachable, and you can leave when you want. A booked table is a fortress.",
  },
  {
    category: "The Look",
    title: "Boots, not heels. Almost always.",
    body: "Real Austin women wear worn Luccheses or Tecovas with a slip dress. Stilettos read as visiting from Dallas or Miami — which reads as trying too hard.",
  },
  {
    category: "The Look",
    title: "Sunglasses are outerwear",
    body: "The sun is real. Oversized frames — Celine, Jacques Marie Mage, or the vintage ones from Feathers on South Congress — are the tell that you actually live here.",
  },
  {
    category: "The Look",
    title: "Cowboy hat rules",
    body: "Straw May–September, felt October–April. Never both in the same season, never in a bar unless you rode there.",
  },
  {
    category: "Insider Rooms",
    title: "The Driskill lobby during legislative session",
    body: "January through May in odd years. Sit in the lobby with a book at 6 PM on a Tuesday. You will be spoken to. This is the most under-priced networking hour in Texas.",
  },
  {
    category: "Insider Rooms",
    title: "Uchi bar seat + omakase, alone, 5:30 PM",
    body: "Show up right when it opens. The regulars come in for an early first-seat drink before their tables. You will be seated next to founders decompressing solo.",
  },
  {
    category: "Insider Rooms",
    title: "The 'other' Soho House hour",
    body: "The rooftop pool between 3 and 5 on a weekday is quiet, empty, and full of exactly one type of person: the member who works for himself. Bring a book.",
  },
  {
    category: "Insider Rooms",
    title: "Austin Country Club as a guest",
    body: "You cannot buy your way in cold — waitlist is closed. You can, however, become a regular guest at the Sunday member lunches. Two consistent invitations from the same family is a soft sponsorship.",
  },
  {
    category: "Fitness = Networking",
    title: "The Barry's Red Room, 6 AM Tuesday & Thursday",
    body: "The founder shift. Same 40 people every week. Introduce yourself to the front desk by name in your first week — Vanessa knows every regular's story.",
  },
  {
    category: "Fitness = Networking",
    title: "Reformer at Class Studio, 12 PM",
    body: "Lunchtime Reformer is a private club with mats. The women there run PR, real estate portfolios, and family offices. Sign up two weeks out.",
  },
  {
    category: "Fitness = Networking",
    title: "The Town Lake trail at 6:15 AM",
    body: "Loop the bridges clockwise. Nobody talks on the trail — but the coffee at Bouldin Acres or Cosmic afterward is where the trail conversations continue.",
  },
  {
    category: "Timing",
    title: "F1 week trumps everything",
    body: "Book flights, dresses, and hair appointments in June. Every hotel and blowout bar sells out in July. The women who show up unstyled that weekend do not come back.",
  },
  {
    category: "Timing",
    title: "SXSW: skip badges, work private dinners",
    body: "A badge gets you into everything you don't want to be at. Private invite-only VC dinners are the actual conference. Get on one guest list and you'll be on five by Tuesday.",
  },
  {
    category: "Timing",
    title: "Avoid Sixth Street after 9 PM",
    body: "It is not for you. Dirty Sixth is a bachelorette holding pen. Rainey Street is 60% better, but the actual play is East 6th or downtown proper.",
  },
  {
    category: "Positioning",
    title: "Have a real answer to 'what do you do?'",
    body: "Austin men — especially the ones with money — are allergic to vagueness. 'I work in real estate' is not an answer; 'I sell $2M+ new construction in Tarrytown' is. Specificity is the tell.",
  },
  {
    category: "Positioning",
    title: "Be interesting on paper",
    body: "Every serious man in this town will Google you inside 24 hours. LinkedIn tidy, Instagram grid deliberate, one visible passion outside your job. If you don't exist online, you don't exist.",
  },
  {
    category: "Positioning",
    title: "The one board seat trick",
    body: "Volunteer for the young-professionals or associates' board of one arts non-profit — Contemporary Austin, Ballet Austin, KMFA. It is the single fastest way from 'new in town' to 'invited to the gala'.",
  },
  {
    category: "Positioning",
    title: "Never brag about who you know",
    body: "Old Austin is small. The moment you drop a name to impress, three people at that table already know the person better than you do. Names go down, never up.",
  },
];

export type HuntSpot = {
  where: string;
  when: string;
  who: string;
  approach: string;
};

export const huntSpots: HuntSpot[] = [
  {
    where: "Jeffrey's bar",
    when: "Tue/Wed 7–8 PM",
    who: "Real estate developers, energy, private wealth",
    approach: "Read a real book. When the martini cart arrives at the couple next to you, ask the bartender what's in it. Conversation starts itself.",
  },
  {
    where: "Uchi omakase counter",
    when: "First seating, 5:30 PM",
    who: "Solo tech founders decompressing before dinner",
    approach: "Book the two-top counter for one. Ask the chef what he's most excited about tonight — the man to your right will lean in to hear the answer.",
  },
  {
    where: "Soho House rooftop pool",
    when: "Weekday 3–5 PM",
    who: "Members who work for themselves — the real target",
    approach: "You need to be a member or a member's guest. Ask twice before asking a third time; a member sponsors you or they don't.",
  },
  {
    where: "F1 Paddock Club, USGP weekend",
    when: "Friday practice sessions",
    who: "Team principals, sponsors, private-jet-set",
    approach: "Fri > Sun. Sunday is race day chaos; Friday is a networking event with cars in the background. Wear a team color, not a team shirt.",
  },
  {
    where: "Barry's 6 AM Red Room",
    when: "Tuesday & Thursday",
    who: "Founders who moved here in the last five years",
    approach: "Same class three weeks in a row and you are a regular. The lobby chat post-class is the entire point of being there.",
  },
  {
    where: "The Driskill Bar, legislative session",
    when: "Jan–May odd years, 6 PM weeknights",
    who: "Lobbyists, senior legislators, energy attorneys",
    approach: "Sit at the bar. Order a Manhattan. Do not open your phone. Someone will speak to you inside twenty minutes.",
  },
  {
    where: "Ballet Austin / Contemporary Austin galas",
    when: "Spring & fall black-tie",
    who: "Multi-generational Austin families",
    approach: "Buy or join a young-patron table. Sit next to the older members — that's the point. Send a handwritten thank-you card to the chair on Monday.",
  },
  {
    where: "Austin FC ownership suites",
    when: "Home games, MLS season",
    who: "Local ownership class + visiting founders",
    approach: "You need a suite invite. The path is a friend on a corporate suite → introduction to ownership over 12 months, not one Saturday.",
  },
  {
    where: "Hotel Saint Cecilia pool bar",
    when: "F1 & SXSW week, Friday 5 PM",
    who: "Musicians, film, F1 hospitality — international money",
    approach: "Small pool. Arrive at 4:45. Order one drink; nurse it. Don't take out your phone.",
  },
  {
    where: "Commodore Perry lawn, Sunday tea",
    when: "Sundays, 3 PM",
    who: "Old Austin, engaged and married old Austin — but their brothers are single",
    approach: "Come with a woman you like, order the tea service, dress like it's Charleston. Old-school wins here.",
  },
];
