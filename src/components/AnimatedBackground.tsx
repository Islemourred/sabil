"use client";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-white dark:bg-dark" />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-sabil/[0.02] via-transparent to-sabil/[0.01] dark:from-sabil/[0.03] dark:via-transparent dark:to-sabil/[0.02]" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #00FF95 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Glow circle 1 */}
      <div className="absolute -top-40 -end-40 h-[500px] w-[500px] rounded-full bg-sabil/[0.03] blur-[120px]" />

      {/* Glow circle 2 */}
      <div className="absolute -bottom-40 -start-40 h-[400px] w-[400px] rounded-full bg-sabil/[0.03] blur-[100px]" />
    </div>
  );
}
