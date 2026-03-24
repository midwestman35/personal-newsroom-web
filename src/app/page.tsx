"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/latest");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--color-emerald-bg)" }}>
      <div className="emerald-card px-8 py-6 text-center">
        <p className="text-2xl mb-2" style={{ fontFamily: "var(--font-sans)", fontWeight: 700 }}>📬</p>
        <p className="text-sm" style={{ color: "var(--color-emerald-muted)" }}>Loading Personal Newsroom...</p>
      </div>
    </div>
  );
}
