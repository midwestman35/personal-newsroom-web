"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export function EditionNav() {
  const pathname = usePathname();

  return (
    <div className="sticky top-4 z-50 flex justify-center px-4 pt-4 pb-2">
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex items-center gap-1 px-2 py-1.5 rounded-full border border-warm-border/70"
        style={{
          background:
            "linear-gradient(135deg, rgba(36,31,26,0.85) 0%, rgba(26,22,18,0.9) 100%)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow:
            "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1.5 pl-2 pr-3 py-1 rounded-full hover:bg-warm-card/60 transition-colors duration-200 group"
        >
          <motion.span
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-base leading-none"
          >
            📬
          </motion.span>
          <span className="font-serif font-bold text-warm-text text-sm tracking-tight">
            Newsroom
          </span>
        </Link>

        {/* Divider */}
        <div className="w-px h-4 bg-warm-border mx-1" />

        {/* Nav Links */}
        <Link href="/latest">
          <motion.span
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
              pathname === "/latest"
                ? "bg-warm-accent/15 text-warm-accent border border-warm-accent/30"
                : "text-warm-muted hover:text-warm-text hover:bg-warm-card/60"
            }`}
          >
            Latest
          </motion.span>
        </Link>

        <Link href="/archive">
          <motion.span
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
              pathname === "/archive"
                ? "bg-warm-accent/15 text-warm-accent border border-warm-accent/30"
                : "text-warm-muted hover:text-warm-text hover:bg-warm-card/60"
            }`}
          >
            Archive
          </motion.span>
        </Link>
      </motion.nav>
    </div>
  );
}
