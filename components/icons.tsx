/* Inline SVG icons — currentColor driven so they inherit the gold/ivory
   colour from their container (PRD §4.5, §4.7). 24×24 viewBox, 1.5 stroke. */

type IconProps = { className?: string };

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/* --- Why Choose Us (5) --- */
export function IconPremiumQuality(p: IconProps) {
  return (
    <svg {...base} className={p.className}>
      <path d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 8.7l5.4-.8L12 3z" />
    </svg>
  );
}

export function IconCustomBranding(p: IconProps) {
  return (
    <svg {...base} className={p.className}>
      <path d="M3 21l3-1 11-11a2.1 2.1 0 0 0-3-3L3 17l-1 4z" />
      <path d="M14 6l3 3" />
    </svg>
  );
}

export function IconEndToEnd(p: IconProps) {
  return (
    <svg {...base} className={p.className}>
      <path d="M3 8l9-5 9 5-9 5-9-5z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M12 13v8" />
    </svg>
  );
}

export function IconFlexibleBudget(p: IconProps) {
  return (
    <svg {...base} className={p.className}>
      <path d="M12 3v18" />
      <path d="M16 7.5c0-1.4-1.8-2.5-4-2.5s-4 1.1-4 2.5 1.8 2.5 4 2.5 4 1.1 4 2.5-1.8 2.5-4 2.5-4-1.1-4-2.5" />
    </svg>
  );
}

export function IconPanIndia(p: IconProps) {
  return (
    <svg {...base} className={p.className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z" />
    </svg>
  );
}

/* --- Customization (8) --- */
export function IconLogoPrinting(p: IconProps) {
  return (
    <svg {...base} className={p.className}>
      <path d="M6 9V3h12v6" />
      <rect x="3" y="9" width="18" height="7" rx="1" />
      <path d="M6 14h12v7H6z" />
    </svg>
  );
}

export function IconNameTag(p: IconProps) {
  return (
    <svg {...base} className={p.className}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <circle cx="9" cy="12" r="2" />
      <path d="M14 10h4M14 14h4" />
    </svg>
  );
}

export function IconPackaging(p: IconProps) {
  return (
    <svg {...base} className={p.className}>
      <path d="M3 8l9-5 9 5v8l-9 5-9-5V8z" />
      <path d="M3 8l9 5 9-5M12 13v8" />
    </svg>
  );
}

export function IconSleeve(p: IconProps) {
  return (
    <svg {...base} className={p.className}>
      <rect x="4" y="4" width="16" height="16" rx="1.5" />
      <path d="M9 4v16" />
    </svg>
  );
}

export function IconGreetingCard(p: IconProps) {
  return (
    <svg {...base} className={p.className}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M12 9.5l1.2-1.2a1.8 1.8 0 1 1 0 2.6L12 14l-1.2-1.2a1.8 1.8 0 1 1 0-2.6L12 9.5z" />
    </svg>
  );
}

export function IconColorTheme(p: IconProps) {
  return (
    <svg {...base} className={p.className}>
      <path d="M12 3a9 9 0 1 0 0 18c1 0 1.5-.8 1.5-1.5 0-1 .8-1.5 1.5-1.5h1A3 3 0 0 0 21 15c0-6-4-12-9-12z" />
      <circle cx="7.5" cy="12" r="1" />
      <circle cx="10" cy="7.5" r="1" />
      <circle cx="14.5" cy="7.5" r="1" />
    </svg>
  );
}

export function IconEvent(p: IconProps) {
  return (
    <svg {...base} className={p.className}>
      <rect x="3" y="5" width="18" height="16" rx="1.5" />
      <path d="M3 9h18M8 3v4M16 3v4" />
    </svg>
  );
}

export function IconMessage(p: IconProps) {
  return (
    <svg {...base} className={p.className}>
      <path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5.5A8 8 0 1 1 21 12z" />
    </svg>
  );
}

/* --- Social / WhatsApp --- */
export function IconInstagram(p: IconProps) {
  return (
    <svg {...base} className={p.className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

export function IconLinkedIn(p: IconProps) {
  return (
    <svg {...base} className={p.className}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v7" />
    </svg>
  );
}

export function IconWhatsApp(p: IconProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={p.className}
    >
      <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37s-1.04 1.01-1.04 2.48 1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.16l-.3-.18-3 .78.8-2.9-.2-.31A8.2 8.2 0 1 1 12 20.2z" />
    </svg>
  );
}

/* Lookup maps so data-driven sections can pick an icon by id. */
import type { JSX } from "react";

export const whyChooseUsIcons: Record<string, (p: IconProps) => JSX.Element> = {
  "premium-quality": IconPremiumQuality,
  "custom-branding": IconCustomBranding,
  "end-to-end": IconEndToEnd,
  "flexible-budget": IconFlexibleBudget,
  "pan-india": IconPanIndia,
};

export const customizationIcons: Record<
  string,
  (p: IconProps) => JSX.Element
> = {
  "logo-printing": IconLogoPrinting,
  "name-personalization": IconNameTag,
  "custom-packaging": IconPackaging,
  "branded-sleeves": IconSleeve,
  "greeting-cards": IconGreetingCard,
  "color-themes": IconColorTheme,
  "event-branding": IconEvent,
  "personalized-messages": IconMessage,
};
