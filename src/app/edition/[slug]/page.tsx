"use client";

import Head from "next/head";
import { useParams } from "next/navigation";
import { EditionNav } from "@/components/EditionNav";
import { DigestCard } from "@/components/DigestCard";
import { SITE_BASE } from "@/lib/config";
import useSWR from "swr";
import type { DigestEdition } from "@/lib/types";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function EditionPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const { data, error, isLoading } = useSWR<DigestEdition>(
    slug ? `${SITE_BASE}/digests/${slug}/latest.json` : null,
    fetcher
  );

  return (
    <>
      <Head>
        <title>{data ? `${data.title} — Personal Newsroom` : "Loading..."}</title>
        <meta
          name="description"
          content={data ? `${data.item_count} items from ${data.date}` : "Digest edition"}
        />
      </Head>

      <div className="min-h-screen bg-warm-bg">
        <EditionNav />

        <main className="max-w-2xl mx-auto px-4 py-6 space-y-4">
          {isLoading && (
            <div className="warm-card px-6 py-8 text-center">
              <p className="text-warm-muted text-sm">Loading digest...</p>
            </div>
          )}

          {error && (
            <div className="warm-card px-6 py-8 text-center">
              <p className="text-warm-accent text-sm font-semibold mb-1">
                Edition not found
              </p>
              <p className="text-warm-muted text-xs">
                This edition may not be published yet.
              </p>
            </div>
          )}

          {data && <DigestCard edition={data as DigestEdition} />}
        </main>

        <footer className="warm-card mx-4 mb-4 px-4 py-3 text-center">
          <p className="text-xs text-warm-muted">
            Personal Newsroom · {slug ?? ""}
          </p>
        </footer>
      </div>
    </>
  );
}
