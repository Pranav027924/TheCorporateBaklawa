/* =========================================================================
   The Corporate Baklawa — Site content & ImageKit slots
   -------------------------------------------------------------------------
   HOW TO ADD IMAGES:
   Every `image`/`logo`/`src` field below is an empty string "". Paste the
   FULL ImageKit URL of the asset into the matching slot, e.g.
       image: "https://ik.imagekit.io/yourId/products/water-bottle.jpg"
   Do NOT add ?tr= params yourself — the <IKImage> component appends the
   right transform (width / f-auto / quality) per device automatically.
   While a slot is empty, a tasteful branded placeholder renders in its place.

   TOTAL IMAGE SLOTS TO FILL:
     • 2  logos          → site.logo (color) + site.logoWhite (dark bg)
     • 1  OG image       → site.ogImage  (1200×630 recommended)
     • 1  hero bg        → hero.backgroundImage
     • 1  "Who We Are"   → whoWeAre.image
     • 42 product photos → collections[].products[].image  (7 tabs × 6 each)
   --------------------------------------------------------------------------
   Why-Choose-Us icons and Customization icons are inline SVGs (no image
   slots needed). Swap them for ImageKit icons later if you prefer.
   ========================================================================= */

/* --- ImageKit transform helper (PRD §5) --------------------------------- */
export const IMAGEKIT = {
  // Optional: set your endpoint if you ever want to build URLs from paths.
  // Not required when you paste full URLs into the slots below.
  endpoint: "", // e.g. "https://ik.imagekit.io/yourId"
};

/**
 * Append an ImageKit transform string to a full image URL.
 * Returns "" for empty input so callers can render a placeholder.
 *   ikUrl("https://ik.imagekit.io/x/a.jpg", "w-800,f-auto,q-80")
 *     → "https://ik.imagekit.io/x/a.jpg?tr=w-800,f-auto,q-80"
 */
export function ikUrl(url: string, transform: string): string {
  if (!url) return "";
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}tr=${transform}`;
}

/* --- Global site config -------------------------------------------------- */
export const site = {
  brand: "The Corporate Baklawa",
  tagline: "Premium corporate gifting that strengthens relationships.",

  // LOGO SLOTS — drop transparent PNGs in /public (see public/README-LOGOS.txt),
  // or replace with full ImageKit URLs. Empty → brand name renders as text.
  logo: "/logo-wordmark.png", // full wordmark, color — light backgrounds
  logoWhite: "/logo-wordmark-ivory.png", // full wordmark, ivory — footer (dark)
  monogram: "/logo-monogram.png", // TCB monogram, color — favicon / light accents
  monogramWhite: "/logo-monogram-ivory.png", // TCB monogram, ivory — navbar (dark)
  ogImage: "", // social share image (PRD §9)

  // CONTACT — replace placeholders (PRD §13 open questions 3 & 4)
  email: "hello@thecorporatebaklawa.com",
  phoneDisplay: "+91 00000 00000",
  phoneHref: "+910000000000",
  // WhatsApp number in international format, digits only (no +, spaces, dashes)
  whatsappNumber: "910000000000",
  location: "Mumbai, India",

  social: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    // WhatsApp link is derived from whatsappNumber via waLink()
  },
};

/** Build a wa.me link, optionally with a prefilled message. */
export function waLink(message?: string): string {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/* --- Navigation (PRD §4.1) ---------------------------------------------- */
export const navLinks = [
  { label: "Collections", href: "#collections" },
  { label: "Customize", href: "#customize" },
  { label: "Industries", href: "#industries" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/* --- Hero (PRD §4.2) ----------------------------------------------------- */
export const hero = {
  label: "Premium Corporate Gifting",
  headline: "Gifts That Strengthen Relationships",
  body: "Curated gifting solutions for every milestone, occasion, and brand moment — delivered across India.",
  primaryCta: { label: "Get a Quote", href: "#contact" },
  secondaryCta: { label: "Browse Collections", href: "#collections" },
  backgroundImage: "", // IMAGE SLOT — full-bleed hero lifestyle shot
  backgroundAlt: "Curated corporate gift boxes elegantly arranged",
};

/* --- Who We Are (PRD §4.4) ---------------------------------------------- */
export const whoWeAre = {
  eyebrow: "Who We Are",
  headline: "We turn gifting into lasting impressions",
  image: "", // IMAGE SLOT — open branded gift box on a clean surface
  imageAlt: "An open branded corporate gift box on a clean surface",
  paragraphs: [
    "The Corporate Baklawa is a premium corporate gifting partner, crafting curated experiences that help businesses celebrate people and milestones. From employee welcome kits and festive hampers to executive gifts and branded merchandise, every detail is considered.",
    "We specialise in thoughtful, fully customised gifting — matched to your brand, your occasion and your budget — and delivered seamlessly across India.",
    "Whether you're onboarding a new hire, thanking a loyal client, or celebrating a festival, we handle everything end to end so your gesture lands exactly as intended.",
  ],
};

/* --- Why Choose Us (PRD §4.5) — 5 features, icons are inline SVG -------- */
export type Feature = { id: string; label: string; subtitle: string };
export const whyChooseUs = {
  eyebrow: "Why Us",
  title: "Why Choose Us?",
  features: [
    {
      id: "premium-quality",
      label: "Premium Quality",
      subtitle: "Thoughtfully sourced products that feel as good as they look.",
    },
    {
      id: "custom-branding",
      label: "Custom Branding",
      subtitle: "Your logo, colours and message, executed with precision.",
    },
    {
      id: "end-to-end",
      label: "End to End Gifting",
      subtitle: "From concept and curation to packing and dispatch.",
    },
    {
      id: "flexible-budget",
      label: "Flexible Budget",
      subtitle: "Curated options to suit every scale and price point.",
    },
    {
      id: "pan-india",
      label: "Pan India Delivery",
      subtitle: "Reliable doorstep delivery to every corner of the country.",
    },
  ] satisfies Feature[],
};

/* --- Gifting Collections (PRD §4.6) — 7 tabs × 6 products = 42 slots ----- */
export type Product = { name: string; image: string };
export type Collection = { id: string; tab: string; products: Product[] };

export const collections: Collection[] = [
  {
    id: "employee-welcome-kits",
    tab: "Employee Welcome Kits",
    products: [
      { name: "Water Bottles", image: "" },
      { name: "Premium Diaries", image: "" },
      { name: "Hoodies & T-Shirts", image: "" },
      { name: "Premium Pens", image: "" },
      { name: "Desk Organizers", image: "" },
      { name: "Laptop Bags", image: "" },
    ],
  },
  {
    id: "executive-gifts",
    tab: "Executive Gifts",
    products: [
      { name: "Premium Drinkware", image: "" },
      { name: "Coffee Gift Set", image: "" },
      { name: "Premium Pens", image: "" },
      { name: "Leather Accessories", image: "" },
      { name: "Wireless Chargers", image: "" },
      { name: "Bluetooth Speakers", image: "" },
    ],
  },
  {
    id: "workstation-essentials",
    tab: "Workstation Essentials",
    products: [
      { name: "Mouse Pads", image: "" },
      { name: "Desk Organizers", image: "" },
      { name: "Charging Hub", image: "" },
      { name: "Digital Clock", image: "" },
      { name: "Desk Lamp", image: "" },
      { name: "Wireless Chargers", image: "" },
    ],
  },
  {
    id: "travel-utility",
    tab: "Travel & Utility",
    products: [
      { name: "Laptop Bags", image: "" },
      { name: "Duffle Bags", image: "" },
      { name: "Travel Organisers", image: "" },
      { name: "Trolleys", image: "" },
      { name: "Lunch Bags", image: "" },
      { name: "Passport Holders", image: "" },
    ],
  },
  {
    id: "drinkware",
    tab: "Drinkware",
    products: [
      { name: "Ceramic Mugs", image: "" },
      { name: "Steel Bottles", image: "" },
      { name: "Copper Bottles", image: "" },
      { name: "Thermal Bottles", image: "" },
      { name: "Travel Tumblers", image: "" },
      { name: "Coffee Mugs", image: "" },
    ],
  },
  {
    id: "festive-hampers",
    tab: "Festive Hampers",
    products: [
      { name: "Dry Fruit Boxes", image: "" },
      { name: "Gourmet Hampers", image: "" },
      { name: "Premium Chocolates", image: "" },
      { name: "Scented Candles", image: "" },
      { name: "Wellness Products", image: "" },
      { name: "Customized Gift Boxes", image: "" },
    ],
  },
  {
    id: "sustainable-gifting",
    tab: "Sustainable Gifting",
    products: [
      { name: "Bamboo Bottles", image: "" },
      { name: "Bamboo Diaries", image: "" },
      { name: "Seed Pens", image: "" },
      { name: "Tote Bags", image: "" },
      { name: "Cork Products", image: "" },
      { name: "Planters", image: "" },
    ],
  },
];

export const collectionsSection = {
  eyebrow: "Our Collections",
  title: "A Gift for Every Occasion",
};

/* --- Customization Options (PRD §4.7) — 8 cards, inline SVG icons -------- */
export type CustomOption = { id: string; title: string; description: string };
export const customization = {
  eyebrow: "Tailored to Your Brand",
  title: "Every Detail, Your Way",
  options: [
    {
      id: "logo-printing",
      title: "Logo Printing",
      description: "Print your logo with precision and clarity.",
    },
    {
      id: "name-personalization",
      title: "Name Personalization",
      description: "Add names to make every gift personal & memorable.",
    },
    {
      id: "custom-packaging",
      title: "Custom Packaging",
      description: "Branded packaging that elevates the unboxing experience.",
    },
    {
      id: "branded-sleeves",
      title: "Branded Sleeves & Inserts",
      description: "Add branded sleeves, inserts & info cards.",
    },
    {
      id: "greeting-cards",
      title: "Greeting Cards",
      description: "Add a personal touch with custom greeting cards.",
    },
    {
      id: "color-themes",
      title: "Company Color Themes",
      description: "Match your brand colors across products and packaging.",
    },
    {
      id: "event-branding",
      title: "Event-Based Branding",
      description: "Customize for events, launches, festivals & celebrations.",
    },
    {
      id: "personalized-messages",
      title: "Personalized Messages",
      description: "Include personalized notes to build stronger connections.",
    },
  ] satisfies CustomOption[],
};

/* --- Industries We Serve (PRD §4.8) — 10 pills -------------------------- */
export const industriesSection = {
  eyebrow: "Industries We Serve",
  headline: "Built for Businesses of Every Kind",
  body: "Whatever your sector, we curate gifting solutions that fit your culture, your calendar and your goals.",
  industries: [
    "IT & SaaS",
    "Startups",
    "Consulting Firms",
    "Manufacturing",
    "BFSI",
    "Healthcare",
    "Education",
    "Real Estate",
    "Hospitality",
    "E-commerce",
  ],
};

/* --- Social Proof / Trust Strip (PRD §4.9) — placeholder stats ---------- */
export type Stat = { value: string; label: string };
export const stats: Stat[] = [
  { value: "500+", label: "Happy Clients" },
  { value: "10,000+", label: "Gifts Delivered" },
  { value: "Pan India", label: "Delivery Network" },
];

/* --- CTA Band (PRD §4.10) ----------------------------------------------- */
export const ctaBand = {
  eyebrow: "Ready to Gift?",
  headline: "Let's Build Your Perfect Gifting Experience",
  subtext:
    "From welcome kits to festive hampers — we handle everything end to end.",
  primaryCta: { label: "Get a Custom Quote", href: "#quote-form" },
  whatsappCta: { label: "Chat on WhatsApp" },
  whatsappMessage:
    "Hi The Corporate Baklawa! I'd like to discuss a corporate gifting requirement.",
};

/* --- Contact / Quote Form (PRD §4.11) ----------------------------------- */
export const formOptions = {
  industries: industriesSection.industries,
  occasions: [
    "Employee Welcome",
    "Festive",
    "Executive",
    "Recognition",
    "Other",
  ],
};

/* --- Footer (PRD §4.12) -------------------------------------------------- */
export const footer = {
  tagline: site.tagline,
  quickLinks: [
    { label: "Home", href: "#hero" },
    { label: "Collections", href: "#collections" },
    { label: "Customize", href: "#customize" },
    { label: "Industries", href: "#industries" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  collectionLinks: [
    { label: "Employee Welcome Kit", href: "#collections" },
    { label: "Executive Gifts", href: "#collections" },
    { label: "Festive Hampers", href: "#collections" },
    { label: "Sustainable Gifting", href: "#collections" },
    { label: "Workstation Essentials", href: "#collections" },
    { label: "Drinkware", href: "#collections" },
  ],
};
