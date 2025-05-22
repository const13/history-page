type Breakpoint = "sm" | "md" | "lg";

export const breakpoints: Record<Breakpoint, number> = {
  sm: 480,
  md: 744,
  lg: 1024,
};

export const mediaQueries = {
  isMobile: `@media(max-width: ${breakpoints.sm}px)`, // < 480
  isTablet: `@media(max-width: ${breakpoints.lg}px)`, // < 1024
};