"use client";

import { motion } from "framer-motion";
import type { DigestItem } from "@/lib/types";
import { NewsletterStory } from "./NewsletterStory";

const TOPIC_EMOJIS: Record<string, string> = {
  technology: "💻",
  markets: "📈",
  finance: "💰",
  sports: "⚽",
  world: "🌍",
  politics: "🏛️",
  science: "🔬",
  health: "❤️",
  entertainment: "🎬",
  business: "💼",
  ai: "🤖",
  crypto: "₿",
};

interface TopicSectionProps {
  topic: string;
  items: DigestItem[];
  sectionIndex: number;
  globalStartIndex: number;
}

export function TopicSection({
  topic,
  items,
  sectionIndex,
  globalStartIndex,
}: TopicSectionProps) {
  const emoji = TOPIC_EMOJIS[topic.toLowerCase()] ?? "📰";
  const label = topic.toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: sectionIndex * 0.1, ease: "easeOut" }}
      className="space-y-5"
    >
      {/* Section Header */}
      <div className="flex items-center gap-3">
        {/* Bouncing emoji */}
        <motion.span
          initial={{ scale: 0, rotate: -15 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            delay: sectionIndex * 0.1 + 0.1,
            type: "spring",
            stiffness: 300,
            damping: 14,
          }}
          className="text-lg select-none"
          aria-hidden="true"
        >
          {emoji}
        </motion.span>

        {/* Topic label */}
        <motion.span
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: sectionIndex * 0.1 + 0.15, duration: 0.35 }}
          className="text-xs font-bold tracking-widest"
          style={{
            color: "var(--color-emerald-accent)",
            fontFamily: "var(--font-mono)",
          }}
        >
          {label}
        </motion.span>

        {/* Growing rule */}
        <div className="flex-1 h-px overflow-hidden">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: sectionIndex * 0.1 + 0.2, duration: 0.5, ease: "easeOut" }}
            style={{
              transformOrigin: "left",
              height: "1px",
              background:
                "linear-gradient(90deg, rgba(16,185,129,0.5) 0%, rgba(16,185,129,0.1) 60%, transparent 100%)",
            }}
          />
        </div>
      </div>

      {/* Stories */}
      <div className="space-y-6 pl-1">
        {items.map((item, i) => (
          <NewsletterStory
            key={`${item.url}-${i}`}
            item={item}
            index={globalStartIndex + i}
          />
        ))}
      </div>
    </motion.div>
  );
}
