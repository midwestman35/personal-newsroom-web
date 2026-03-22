"use client";

import Link from "next/link";
import { Card, CardContent } from "@heroui/react";
import type { DigestItem } from "@/lib/types";

interface StoryItemProps {
  item: DigestItem;
  rank: number;
}

export function StoryItem({ item, rank }: StoryItemProps) {
  const impactLevel =
    item.scores.importance >= 75
      ? "high"
      : item.scores.importance >= 50
      ? "medium"
      : "low";

  return (
    <Card className="bg-warm-surface border border-warm-border rounded-2xl hover:border-warm-muted transition-colors duration-200">
      <CardContent className="p-5 gap-3">
        <div className="flex items-start justify-between gap-3">
          <span className="warm-chip-accent text-xs font-bold">
            {rank}
          </span>
          <span
            className={`text-xs px-2 py-0.5 rounded-full font-medium border ${
              impactLevel === "high"
                ? "bg-warm-accent/15 border-warm-accent/30 text-warm-accent"
                : impactLevel === "medium"
                ? "bg-warm-muted/10 border-warm-muted/20 text-warm-muted"
                : "bg-warm-border/50 border-warm-border/80 text-warm-muted"
            }`}
          >
            {impactLevel === "high" ? "High Impact" : impactLevel === "medium" ? "Medium" : "Low"}
          </span>
        </div>

        <div className="space-y-1.5">
          <p className="text-xs font-semibold uppercase tracking-wider text-warm-accent">
            {item.topic}
          </p>
          <h3 className="font-serif text-warm-text leading-snug font-semibold">
            {item.title}
          </h3>
          {item.summary && (
            <p className="text-sm text-warm-muted leading-relaxed line-clamp-2">
              {item.summary}
            </p>
          )}
        </div>

        {item.why_it_matters && (
          <div className="border-t border-warm-border/60 pt-3">
            <p className="text-xs font-semibold text-warm-text mb-1">
              Why it matters
            </p>
            <p className="text-sm text-warm-muted italic leading-relaxed">
              {item.why_it_matters}
            </p>
          </div>
        )}

        <div className="flex items-center justify-between pt-1">
          <span className="text-xs text-warm-muted truncate max-w-[60%]">
            {item.source_name}
          </span>
          <Link
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-warm-accent hover:text-warm-highlight transition-colors"
          >
            Read more →
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
