"use client";

interface GradientDividerProps {
  className?: string;
}

export function GradientDivider({ className = "" }: GradientDividerProps) {
  return (
    <div className={`relative h-px w-full overflow-hidden ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(212,168,75,0.6) 30%, rgba(232,201,122,0.9) 50%, rgba(212,168,75,0.6) 70%, transparent 100%)",
        }}
      />
      {/* subtle glow below */}
      <div
        className="absolute inset-x-0 top-0 h-4 -translate-y-1/2 blur-sm"
        style={{
          background:
            "linear-gradient(90deg, transparent 10%, rgba(212,168,75,0.2) 40%, rgba(212,168,75,0.3) 50%, rgba(212,168,75,0.2) 60%, transparent 90%)",
        }}
      />
    </div>
  );
}
