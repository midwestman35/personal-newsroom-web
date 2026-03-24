"use client";

import { motion } from "framer-motion";

function SkeletonLine({
  width = "100%",
  height = "0.75rem",
  delay = 0,
}: {
  width?: string;
  height?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay }}
      className="rounded-full"
      style={{
        width,
        height,
        background: "rgba(30,61,46,0.8)",
      }}
    />
  );
}

export function SkeletonCard({ index = 0 }: { index?: number }) {
  const baseDelay = index * 0.1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: baseDelay, ease: "easeOut" }}
      className="emerald-card-elevated p-5 space-y-4"
    >
      {/* Top row: rank badge + impact pill */}
      <div className="flex items-center justify-between">
        <motion.div
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 1.6, repeat: Infinity, delay: baseDelay }}
          className="w-8 h-8 rounded-full"
          style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.2)" }}
        />
        <SkeletonLine width="5rem" height="1.25rem" delay={baseDelay + 0.1} />
      </div>

      {/* Topic tag */}
      <SkeletonLine width="4rem" height="0.6rem" delay={baseDelay + 0.05} />

      {/* Title */}
      <div className="space-y-2">
        <SkeletonLine width="90%" height="0.9rem" delay={baseDelay + 0.1} />
        <SkeletonLine width="70%" height="0.9rem" delay={baseDelay + 0.15} />
      </div>

      {/* Summary */}
      <div className="space-y-1.5">
        <SkeletonLine width="100%" height="0.7rem" delay={baseDelay + 0.2} />
        <SkeletonLine width="85%" height="0.7rem" delay={baseDelay + 0.25} />
      </div>

      {/* Why it matters block */}
      <div
        className="pl-3 space-y-1.5"
        style={{ borderLeft: "2.5px solid rgba(16,185,129,0.25)" }}
      >
        <SkeletonLine width="3rem" height="0.6rem" delay={baseDelay + 0.3} />
        <SkeletonLine width="95%" height="0.65rem" delay={baseDelay + 0.35} />
        <SkeletonLine width="75%" height="0.65rem" delay={baseDelay + 0.4} />
      </div>

      {/* Footer row */}
      <div className="flex items-center justify-between pt-1">
        <SkeletonLine width="6rem" height="0.65rem" delay={baseDelay + 0.45} />
        <SkeletonLine width="4.5rem" height="0.65rem" delay={baseDelay + 0.5} />
      </div>
    </motion.div>
  );
}

export function SkeletonHero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="emerald-card-elevated px-8 py-14 text-center space-y-5"
      style={{
        background:
          "linear-gradient(180deg, rgba(16,185,129,0.06) 0%, rgba(21,42,31,0.9) 60%)",
      }}
    >
      <div className="flex justify-center">
        <SkeletonLine width="5rem" height="1.5rem" />
      </div>
      <div className="flex flex-col items-center gap-3">
        <SkeletonLine width="14rem" height="2rem" />
        <SkeletonLine width="10rem" height="1.2rem" />
      </div>
      <div className="flex justify-center gap-2 pt-2">
        <SkeletonLine width="5rem" height="1.6rem" />
        <SkeletonLine width="5rem" height="1.6rem" />
      </div>
    </motion.div>
  );
}
