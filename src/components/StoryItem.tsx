"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { DigestItem } from "@/lib/types";

interface StoryItemProps {
  item: DigestItem;
  rank: number;
  index?: number;
}

export function StoryItem({ item, rank, index = 0 }: StoryItemProps) {
  const impactLevel =
    item.scores.importance >= 75
      ? "high"
      : item.scores.importance >= 50
      ? "medium"
      : "low";

  const impactStyles = {
    high: {
      className: "bg-warm-accent/12 border border-warm-accent/35 text-warm-accent",
      label: "High Impact",
      glow: "0 0 12px rgba(212,168,75,0.2)",
    },
    medium: {
      className: "bg-warm-muted/10 border border-warm-muted/20 text-warm-muted",
      label: "Medium",
      glow: "none",
    },
    low: {
      className: "bg-warm-border/40 border border-warm-border/60 text-warm-muted/70",
      label: "Low",
      glow: "none",
    },
  };

  const impact = impactStyles[impactLevel];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="group"
    >
      <div
        className="warm-card-elevated p-5 space-y-3.5 transition-all duration-300"
        style={{
          borderColor: "var(--color-warm-border)",
          transitionProperty: "box-shadow, border-color, transform",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor =
            "rgba(212,168,75,0.3)";
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0 8px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(212,168,75,0.08)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor =
            "var(--color-warm-border)";
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0 8px 32px rgba(0,0,0,0.35)";
        }}
      >
        {/* Top row: rank badge + impact pill */}
        <div className="flex items-center justify-between">
          {/* Glowing rank badge */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-warm-accent flex-shrink-0"
            style={{
              background:
                "radial-gradient(circle, rgba(212,168,75,0.2) 0%, rgba(212,168,75,0.06) 100%)",
              border: "1.5px solid rgba(212,168,75,0.4)",
              boxShadow: "0 0 14px rgba(212,168,75,0.2)",
            }}
          >
            {rank}
          </motion.div>

          {/* Impact pill */}
          <span
            className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${impact.className}`}
            style={{ boxShadow: impact.glow }}
          >
            {impact.label}
          </span>
        </div>

        {/* Topic + Title */}
        <div className="space-y-1.5">
          <p className="text-xs font-bold uppercase tracking-widest text-warm-accent/80">
            {item.topic}
          </p>
          <h3 className="font-serif text-warm-text leading-snug font-semibold text-[0.975rem]">
            {item.title}
          </h3>
          {item.summary && (
            <p className="text-sm text-warm-muted leading-relaxed">
              {item.summary}
            </p>
          )}
        </div>

        {/* Why it matters */}
        {item.why_it_matters && (
          <div
            className="pl-3.5 py-1 space-y-0.5"
            style={{
              borderLeft: "2.5px solid rgba(212,168,75,0.55)",
            }}
          >
            <p className="text-[0.65rem] font-bold uppercase tracking-widest text-warm-accent/70">
              Why it matters
            </p>
            <p className="text-sm text-warm-muted leading-relaxed">
              {item.why_it_matters}
            </p>
          </div>
        )}

        {/* Footer row: source pill + read more */}
        <div className="flex items-center justify-between pt-0.5">
          <span className="warm-chip truncate max-w-[55%]">
            {item.source_name}
          </span>
          <Link
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-warm-accent hover:text-warm-highlight transition-colors duration-200 flex items-center gap-1"
          >
            Read more
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              →
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
