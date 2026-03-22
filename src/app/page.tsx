"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/latest");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-warm-bg">
      <div className="warm-card px-8 py-6 text-center">
        <p className="font-serif text-2xl mb-2">📬</p>
        <p className="text-warm-muted text-sm">Loading Personal Newsroom...</p>
      </div>
    </div>
  );
}
