"use client";

import Head from "next/head";
import Link from "next/link";
import { Card, CardContent } from "@heroui/react";
import { EditionNav } from "@/components/EditionNav";
import { useArchiveIndex } from "@/lib/hooks";

export default function ArchivePage() {
  const { data, error, isLoading } = useArchiveIndex();

  const editionEntries: Array<{
    slug: string;
    title: string;
    date: string;
    item_count: number;
    htmlPath: string;
  }> = [];

  if (data?.editions) {
    for (const [slug, edition] of Object.entries(data.editions)) {
      for (const version of edition.versions ?? []) {
        editionEntries.push({
          slug,
          title: edition.title ?? slug,
          date: version.date,
          item_count: version.item_count,
          htmlPath: version.html_path,
        });
      }
    }
    editionEntries.sort((a, b) => b.date.localeCompare(a.date));
  }

  return (
    <>
      <Head>
        <title>Archive — Personal Newsroom</title>
        <meta name="description" content="Browse all past editions" />
      </Head>

      <div className="min-h-screen bg-warm-bg">
        <EditionNav />

        <main className="max-w-2xl mx-auto px-4 py-6 space-y-4">
          <div className="warm-card-elevated px-6 py-5">
            <h1 className="font-serif text-2xl font-bold text-warm-text mb-1">
              Archive
            </h1>
            <p className="text-warm-muted text-sm">
              Past editions of the Personal Newsroom digest.
            </p>
          </div>

          {isLoading && (
            <div className="warm-card px-6 py-8 text-center">
              <p className="text-warm-muted text-sm">Loading archive...</p>
            </div>
          )}

          {error && (
            <div className="warm-card px-6 py-8 text-center">
              <p className="text-warm-accent text-sm font-semibold mb-1">
                Unable to load archive
              </p>
              <p className="text-warm-muted text-xs">Check back soon.</p>
            </div>
          )}

          {editionEntries.length > 0 && (
            <div className="space-y-2">
              {editionEntries.map((entry) => (
                <Link
                  key={`${entry.slug}-${entry.date}`}
                  href={`/latest`}
                  className="block"
                >
                  <Card className="bg-warm-surface border border-warm-border rounded-xl hover:border-warm-muted transition-colors duration-200">
                    <CardContent className="px-5 py-4 flex flex-row items-center justify-between gap-3">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-xs text-warm-muted uppercase tracking-wider font-semibold">
                          {entry.title}
                        </span>
                        <span className="text-warm-text font-serif font-semibold">
                          {new Date(entry.date).toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex flex-col items-end gap-0.5">
                        <span className="warm-chip text-xs">{entry.item_count} items</span>
                        <span className="text-xs text-warm-muted">→</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          {!isLoading && !error && editionEntries.length === 0 && (
            <div className="warm-card px-6 py-8 text-center">
              <p className="text-warm-muted text-sm">No editions yet.</p>
            </div>
          )}
        </main>

        <footer className="warm-card mx-4 mb-4 px-4 py-3 text-center">
          <p className="text-xs text-warm-muted">Personal Newsroom Archive</p>
        </footer>
      </div>
    </>
  );
}
