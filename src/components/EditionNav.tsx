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
        className="flex items-center gap-1 px-2 py-1.5 rounded-full border"
        style={{
          background:
            "linear-gradient(135deg, rgba(15,34,25,0.85) 0%, rgba(10,26,18,0.9) 100%)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderColor: "rgba(30,61,46,0.7)",
          boxShadow:
            "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1.5 pl-2 pr-3 py-1 rounded-full transition-colors duration-200 group"
          style={{}}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "rgba(30,61,46,0.5)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
          }}
        >
          <motion.span
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-base leading-none"
          >
            📬
          </motion.span>
          <span
            className="font-bold text-sm tracking-tight"
            style={{
              color: "var(--color-emerald-text)",
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
            }}
          >
            Newsroom
          </span>
        </Link>

        {/* Divider */}
        <div
          className="w-px h-4 mx-1"
          style={{ background: "var(--color-emerald-border)" }}
        />

        {/* Nav Links */}
        <Link href="/latest">
          <motion.span
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200`}
            style={{
              fontFamily: "var(--font-mono)",
              cursor: "pointer",
              ...(pathname === "/latest"
                ? {
                    background: "rgba(16,185,129,0.15)",
                    color: "var(--color-emerald-accent)",
                    border: "1px solid rgba(16,185,129,0.3)",
                  }
                : {
                    color: "var(--color-emerald-muted)",
                  }),
            }}
            onMouseEnter={(e) => {
              if (pathname !== "/latest") {
                (e.currentTarget as HTMLSpanElement).style.background = "rgba(30,61,46,0.5)";
                (e.currentTarget as HTMLSpanElement).style.color = "var(--color-emerald-text)";
              }
            }}
            onMouseLeave={(e) => {
              if (pathname !== "/latest") {
                (e.currentTarget as HTMLSpanElement).style.background = "transparent";
                (e.currentTarget as HTMLSpanElement).style.color = "var(--color-emerald-muted)";
              }
            }}
          >
            Latest
          </motion.span>
        </Link>

        <Link href="/archive">
          <motion.span
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200`}
            style={{
              fontFamily: "var(--font-mono)",
              cursor: "pointer",
              ...(pathname === "/archive"
                ? {
                    background: "rgba(16,185,129,0.15)",
                    color: "var(--color-emerald-accent)",
                    border: "1px solid rgba(16,185,129,0.3)",
                  }
                : {
                    color: "var(--color-emerald-muted)",
                  }),
            }}
            onMouseEnter={(e) => {
              if (pathname !== "/archive") {
                (e.currentTarget as HTMLSpanElement).style.background = "rgba(30,61,46,0.5)";
                (e.currentTarget as HTMLSpanElement).style.color = "var(--color-emerald-text)";
              }
            }}
            onMouseLeave={(e) => {
              if (pathname !== "/archive") {
                (e.currentTarget as HTMLSpanElement).style.background = "transparent";
                (e.currentTarget as HTMLSpanElement).style.color = "var(--color-emerald-muted)";
              }
            }}
          >
            Archive
          </motion.span>
        </Link>
      </motion.nav>
    </div>
  );
}
