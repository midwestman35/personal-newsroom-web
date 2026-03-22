"use client";

import Link from "next/link";
import { Button } from "@heroui/react";

export function EditionNav() {
  return (
    <nav className="warm-card sticky top-0 z-50 px-4 py-3 flex items-center justify-between border-b border-warm-border">
      <div className="flex items-center gap-1">
        <span className="font-serif text-warm-text font-bold">📬</span>
        <Link href="/" className="font-semibold text-warm-text hover:text-warm-accent transition-colors">
          Personal Newsroom
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <Link href="/archive">
          <Button size="sm" variant="ghost" className="text-warm-muted hover:text-warm-text text-xs">
            Archive
          </Button>
        </Link>
      </div>
    </nav>
  );
}
