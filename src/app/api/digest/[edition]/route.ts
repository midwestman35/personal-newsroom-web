import { NextResponse } from "next/server";

// R2 Integration Note:
// Replace this stub with actual R2 fetch:
//   const url = `${R2_PUBLIC_URL}/digests/${edition}/latest.json`;
//   const res = await fetch(url, { next: { revalidate: 60 } });
//   return NextResponse.json(await res.json());

const MOCK_EDITION = {
  slug: "morning-brief",
  date: new Date().toISOString().split("T")[0],
  title: "Morning Brief",
  item_count: 5,
  last_published: new Date().toISOString(),
  freshness_seconds: 300,
  items: [
    {
      title: "Swarmer IPO Surge Puts Ukraine-Born Drone AI In Focus",
      summary:
        "Ukraine's war showed that the edge in drone warfare may lie as much in software as hardware. Demand is rising for autonomous systems and the software behind them.",
      url: "https://www.forbes.com/sites/davidkirichenko/2026/03/21/swarmer-ipo-surge-puts-ukraine-born-drone-ai-in-focus/",
      source_name: "Forbes",
      topic: "business_finance",
      scores: { importance: 80, novelty: 75, confidence: 85, user_fit: 85 },
      why_it_matters:
        "Drone warfare is shifting from hardware to software — this IPO signals where investor interest is heading.",
      tags: ["AI", "drones", "defense", "IPO"],
    },
    {
      title: "Super Micro Dives As U.S. Accuses Execs Of Smuggling Nvidia Chips To China",
      summary:
        "The DOJ has charged Supermicro executives with illegally exporting restricted Nvidia AI chips to blacklisted Chinese entities.",
      url: "https://www.investors.com/news/technology/super-micro-stock-dives-us-accuses-execs-smuggling-nvidia-chips-china/",
      source_name: "Investor's Business Daily",
      topic: "business_finance",
      scores: { importance: 72, novelty: 70, confidence: 90, user_fit: 80 },
      why_it_matters:
        "AI chip export controls are being actively enforced — this has implications for the entire supply chain.",
      tags: ["NVIDIA", "AI chips", "China", "export controls"],
    },
    {
      title: "Kevin Durant Passes Michael Jordan for No. 5 on NBA Scoring List",
      summary:
        "Durant scored 27 points in Houston's win over Miami to move past Jordan on the all-time scoring list.",
      url: "https://sports.yahoo.com/articles/kevin-durant-passes-michael-jordan-040105903.html",
      source_name: "Yahoo Sports",
      topic: "sports",
      scores: { importance: 73, novelty: 60, confidence: 85, user_fit: 80 },
      why_it_matters:
        "A historic milestone for one of the game's all-time great scorers — and a reminder of how long KD has been elite.",
      tags: ["NBA", "Kevin Durant", "scoring record"],
    },
    {
      title: "Weekly poll results: the Nothing Phone (4a) Pro is the fan favorite",
      summary:
        "GSMArena's weekly poll shows the Nothing Phone (4a) Pro pulling ahead of the standard (4a) in reader preference.",
      url: "https://www.gsmarena.com/weekly_poll_results_the_nothing_phone_4a_pro_is_the_fan_favorite-while_the_4a_takes_a_step_back-news-72009.php",
      source_name: "GSMArena",
      topic: "technology",
      scores: { importance: 65, novelty: 55, confidence: 85, user_fit: 70 },
      why_it_matters:
        "Nothing is carving out a real niche in the mid-range Android space — worth watching as the brand matures.",
      tags: ["Android", "smartphones", "Nothing"],
    },
    {
      title: "LAFC's Hugo Lloris Posts Record 5th Straight Shutout",
      summary:
        "Hugo Lloris and LAFC opened the season with their fifth consecutive shutout, a new MLS record to start a season.",
      url: "https://sports.yahoo.com/articles/lafcs-hugo-lloris-posts-record-041433914.html",
      source_name: "Yahoo Sports",
      topic: "sports",
      scores: { importance: 60, novelty: 50, confidence: 85, user_fit: 65 },
      why_it_matters:
        "MLS record to start a season — Lloris is showing he's still got it in the final chapter of his career.",
      tags: ["MLS", "LAFC", "Lloris", "soccer"],
    },
  ],
};

export async function GET(
  request: Request,
  { params }: { params: Promise<{ edition: string }> }
) {
  const { edition } = await params;
  void request; // unused for now

  // R2 integration point:
  // const res = await fetch(`${R2_PUBLIC_URL}/digests/${edition}/latest.json`, {
  //   next: { revalidate: 300 },
  // });
  // const data = await res.json();

  return NextResponse.json({ ...MOCK_EDITION, slug: edition });
}
