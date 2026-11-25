type LogoProps = {
  variant?: "light" | "dark";
  compact?: boolean;
};

/** Text lockup matching brand proportions — no glow, shadow, stretch, or recolor effects. */
export function Logo({ variant = "dark", compact = false }: LogoProps) {
  const color = variant === "light" ? "var(--white)" : "var(--black)";
  const descriptor = variant === "light" ? "var(--cool-gray-soft)" : "var(--slate)";

  return (
    <span className={`logo${compact ? " logo--compact" : ""}`} style={{ color }}>
      <span className="logo__wordmark">IRBY</span>
      <span className="logo__descriptor" style={{ color: descriptor }}>
        Welding + Construction
      </span>
    </span>
  );
}
