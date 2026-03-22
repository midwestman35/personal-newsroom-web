import { NextResponse } from "next/server";

// R2 Integration Note:
// Replace with: const res = await fetch(`${R2_PUBLIC_URL}/editions/index.json`, { next: { revalidate: 3600 } });
// Then map the R2 keys to the EditionIndex shape.

const MOCK_INDEX = {
  last_published: new Date().toISOString(),
  editions: [
    {
      slug: "morning-brief",
      date: new Date().toISOString().split("T")[0],
      title: "Morning Brief",
      item_count: 15,
      archive_path: "digests/morning-brief/2026-03-22.json",
    },
    {
      slug: "morning-brief",
      date: "2026-03-21",
      title: "Morning Brief",
      item_count: 14,
      archive_path: "digests/morning-brief/2026-03-21.json",
    },
    {
      slug: "morning-brief",
      date: "2026-03-20",
      title: "Morning Brief",
      item_count: 12,
      archive_path: "digests/morning-brief/2026-03-20.json",
    },
  ],
};

export async function GET() {
  // R2 integration point:
  // const res = await fetch(`${R2_PUBLIC_URL}/editions/index.json`, {
  //   next: { revalidate: 3600 },
  // });
  // const data = await res.json();
  // return NextResponse.json(data);

  return NextResponse.json(MOCK_INDEX);
}
