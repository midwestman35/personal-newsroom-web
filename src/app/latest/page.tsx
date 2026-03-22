"use client";

import Head from "next/head";
import { EditionNav } from "@/components/EditionNav";
import { DigestCard } from "@/components/DigestCard";
import { useLatestEdition } from "@/lib/hooks";
import type { DigestEdition } from "@/lib/types";

export default function LatestPage() {
  const { data, error, isLoading } = useLatestEdition("morning-brief");

  return (
    <>
      <Head>
        <title>Personal Newsroom — Morning Brief</title>
        <meta name="description" content="Latest morning digest from Personal Newsroom" />
      </Head>

      <div className="min-h-screen bg-warm-bg">
        <EditionNav />

        <main className="max-w-2xl mx-auto px-4 py-6 space-y-4">
          {isLoading && (
            <div className="warm-card px-6 py-8 text-center">
              <p className="text-warm-muted text-sm">Fetching latest digest...</p>
            </div>
          )}

          {error && (
            <div className="warm-card px-6 py-8 text-center border-warm-accent/30">
              <p className="text-warm-accent text-sm font-semibold mb-1">
                Unable to load digest
              </p>
              <p className="text-warm-muted text-xs">
                Check back soon or{" "}
                <a href="/archive" className="text-warm-accent hover:underline">
                  browse the archive
                </a>
              </p>
            </div>
          )}

          {data && <DigestCard edition={data as DigestEdition} />}
        </main>

        <footer className="warm-card mx-4 mb-4 px-4 py-3 text-center">
          <p className="text-xs text-warm-muted">
            Personal Newsroom · Morning Brief · Auto-refreshes
          </p>
        </footer>
      </div>
    </>
  );
}
