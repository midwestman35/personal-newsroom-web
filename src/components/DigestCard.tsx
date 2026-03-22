"use client";

import { Card, CardContent } from "@heroui/react";
import type { DigestEdition } from "@/lib/types";
import { StoryItem } from "./StoryItem";

interface DigestCardProps {
  edition: DigestEdition;
}

export function DigestCard({ edition }: DigestCardProps) {
  const dateLabel = new Date(edition.date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <section className="space-y-4">
      <Card className="bg-warm-card border border-warm-border rounded-2xl">
        <CardContent className="p-6 gap-2">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs text-warm-muted uppercase tracking-wider font-semibold">
              <span>Personal Newsroom</span>
              <span className="text-warm-border">·</span>
              <span>{edition.title}</span>
            </div>
            <h1 className="font-serif text-3xl font-bold text-warm-text tracking-tight">
              {edition.title}
            </h1>
            <p className="text-warm-muted text-sm">
              {dateLabel} · {edition.item_count} items
            </p>
            <div className="flex gap-2 pt-1">
              <span className="warm-chip text-xs">Morning Read</span>
              <span className="warm-chip text-xs">High Signal</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        {edition.items.map((item, i) => (
          <StoryItem key={`${item.url}-${i}`} item={item} rank={i + 1} />
        ))}
      </div>

      <Card className="bg-warm-surface border border-warm-border rounded-2xl">
        <CardContent className="p-4 text-center">
          <p className="text-xs text-warm-muted">
            — {edition.items.length} items — Personal Newsroom
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
