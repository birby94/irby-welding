type LogoProps = {
  /** Artwork for dark surfaces (outlined / one-color). Default: black artwork for light surfaces. */
  onDark?: boolean;
  /** Horizontal for headers/wide spaces; stacked for tall spaces. */
  layout?: "horizontal" | "stacked";
  className?: string;
};

/**
 * Official IRBY logo artwork from the brand pack.
 * Do not retype IRBY — CA Negroni Inline is logo-only and lives in these files.
 * No stretch, recolor, glow, or shadow treatments.
 */
export function Logo({ onDark = false, layout = "horizontal", className = "" }: LogoProps) {
  const src =
    layout === "stacked"
      ? onDark
        ? "/logos/stacked-on-dark.png"
        : "/logos/stacked-clr.png"
      : onDark
        ? "/logos/horizontal-on-dark.png"
        : "/logos/horizontal-blk.png";

  return (
    <img
      className={`brand-logo brand-logo--${layout}${className ? ` ${className}` : ""}`}
      src={src}
      alt="IRBY Welding + Construction"
      width={layout === "stacked" ? 900 : 1400}
      height={layout === "stacked" ? 804 : 423}
      decoding="async"
    />
  );
}
