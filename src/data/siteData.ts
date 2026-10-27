/**
 * CENTRAL CONTENT FILE
 * --------------------
 * Every restaurant detail, image URL, menu item and link on the site lives here.
 *
 * - Values wrapped in [square brackets] are PLACEHOLDERS. The site highlights them with a dashed
 *   gold underline. Replace them with confirmed details (and remove the brackets).
 * - Image `src` values are empty on purpose. Add a licensed photo path (for example
 *   "/images/hero.jpg", with the file placed in /public/images) or a full https URL.
 *   While `src` is empty, a tonal placeholder tile is shown instead.
 * - Menu items and prices are SAMPLE content. None of it is the restaurant's real menu.
 */

export type Tone = "olive" | "charcoal" | "umber" | "gold";

export interface ImageAsset {
  /** Path in /public or full URL. Leave empty to show a placeholder tile. */
  src: string;
  /** Describes the photo. Used as alt text once a real image is added. */
  alt: string;
  /** Colour of the placeholder tile shown while `src` is empty. */
  tone: Tone;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  intro: string;
  image: ImageAsset;
  items: MenuItem[];
}

export interface GalleryItem {
  image: ImageAsset;
  /** Tailwind grid classes controlling the tile's size in the gallery layout. */
  span: string;
}

export interface HoursRow {
  days: string;
  hours: string;
}

/* ------------------------------------------------------------------ */
/* Brand                                                               */
/* ------------------------------------------------------------------ */

export const brand = {
  name: "One8 Commune",
  city: "Hyderabad",
  conceptNotice:
    "Independent design concept. This is not the official One8 Commune website.",
} as const;

export const social = {
  instagramHandle: "@one8.communehyderabad",
  instagramUrl: "https://www.instagram.com/one8.communehyderabad/",
} as const;

/** Anchor ids must match the `id` of each section component. */
export const nav: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "story", label: "Our Story" },
  { id: "menu", label: "Food & Drinks" },
  { id: "gallery", label: "Gallery" },
  { id: "find-us", label: "Find Us" },
];

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const hero = {
  tagline:
    "Contemporary Indian food, considered drinks and long evenings in Hyderabad.",
  image: {
    src: "/images/hero.jpg",
    alt: "One8 Commune Hyderabad interior and illuminated sign",
    tone: "olive",
  } satisfies ImageAsset,
};

/* ------------------------------------------------------------------ */
/* Story                                                               */
/* ------------------------------------------------------------------ */

export const story = {
  headline: "Come hungry. Stay for the evening.",
  paragraphs: [
    "One8 Commune is a place to gather: plates made for sharing, a bar that takes its time, and a room that works for a quiet dinner as well as a loud night.",
    "This section is where the real story belongs: how the Hyderabad restaurant came to be, the people in the kitchen and behind the bar, and what a first visit should feel like.",
  ],
  pillars: [
    { title: "Shared plates", text: "Food built for the middle of the table." },
    { title: "A serious bar", text: "Cocktails with a point of view." },
    { title: "Late evenings", text: "Music and lighting that settle in." },
  ],
  note: "Concept copy. Replace with the restaurant's own words.",
  imageMain: {
    src: "/images/table.jpg",
    alt: "Dining booth and table in the restaurant",
    tone: "charcoal",
  } satisfies ImageAsset,
  imageSecondary: {
    src: "/images/table-3.jpg",
    alt: "Restaurant bar beneath woven pendant lights",
    tone: "umber",
  } satisfies ImageAsset,
};

/* ------------------------------------------------------------------ */
/* Food & drinks (SAMPLE content, not the real menu)                   */
/* ------------------------------------------------------------------ */

export const menu = {
  notice:
    "Sample menu. Dish names, descriptions and prices are placeholders until the team shares the real menu.",
  categories: [
    {
      id: "small-plates",
      label: "Small plates",
      intro: "Start with a few and keep ordering.",
      image: { src: "", alt: "Small plates on the table", tone: "olive" },
      items: [
        {
          name: "Smoked beetroot kebab",
          description: "Hung curd, pickled shallot, mint oil.",
          price: "₹ TBC",
        },
        {
          name: "Charred corn and chilli chaat",
          description: "Tamarind, sev, lime, fresh coriander.",
          price: "₹ TBC",
        },
        {
          name: "Tandoori prawn",
          description: "Curry-leaf butter, green mango relish.",
          price: "₹ TBC",
        },
        {
          name: "Burrata with pickled mango",
          description: "Toasted seeds, warm kulcha.",
          price: "₹ TBC",
        },
      ],
    },
    {
      id: "mains",
      label: "Mains",
      intro: "Slow-cooked, wood-fired and made to be passed around.",
      image: { src: "", alt: "Main course, overhead", tone: "umber" },
      items: [
        {
          name: "Dum biryani",
          description: "Aged basmati, saffron raita, burnt onion.",
          price: "₹ TBC",
        },
        {
          name: "Slow-cooked lamb raan",
          description: "Spiced jus, pickled onions, roomali roti.",
          price: "₹ TBC",
        },
        {
          name: "Wild mushroom khichdi",
          description: "Ghee, truffle, crisp curry leaves.",
          price: "₹ TBC",
        },
        {
          name: "Coconut seafood stew",
          description: "Catch of the day, lemon rice.",
          price: "₹ TBC",
        },
      ],
    },
    {
      id: "cocktails",
      label: "Cocktails",
      intro: "Built around Indian ingredients, stirred and shaken properly.",
      image: { src: "", alt: "Cocktail at the bar", tone: "charcoal" },
      items: [
        {
          name: "Smoked jaggery old fashioned",
          description: "Bourbon, jaggery, orange bitters.",
          price: "₹ TBC",
        },
        {
          name: "Tamarind margarita",
          description: "Tequila, tamarind, chilli salt rim.",
          price: "₹ TBC",
        },
        {
          name: "Curry-leaf gin and tonic",
          description: "Gin, curry leaf, grapefruit, tonic.",
          price: "₹ TBC",
        },
        {
          name: "Rose and cardamom spritz",
          description: "Sparkling wine, rose, cardamom.",
          price: "₹ TBC",
        },
      ],
    },
    {
      id: "desserts",
      label: "Desserts",
      intro: "Something sweet to close the table.",
      image: { src: "", alt: "Dessert plate", tone: "gold" },
      items: [
        {
          name: "Jaggery and sea-salt tart",
          description: "Cultured cream, toasted sesame.",
          price: "₹ TBC",
        },
        {
          name: "Filter coffee tiramisu",
          description: "South Indian coffee, mascarpone, cocoa.",
          price: "₹ TBC",
        },
        {
          name: "Saffron kulfi",
          description: "Pistachio crumb, rose petals.",
          price: "₹ TBC",
        },
      ],
    },
  ] satisfies MenuCategory[],
};

/* ------------------------------------------------------------------ */
/* Gallery                                                             */
/* ------------------------------------------------------------------ */

export const gallery = {
  intro: "A look inside, from the table to the bar.",
  note: "A few views of the Hyderabad dining room.",
  items: [
    {
      span: "col-span-2 row-span-2 md:col-span-7 md:row-span-4",
      image: {
        src: "/images/table-1.jpg",
        alt: "Dining table beneath a woven canopy",
        tone: "charcoal",
      },
    },
    {
      span: "md:col-span-5 md:row-span-2",
      image: {
        src: "/images/table.jpg",
        alt: "Booth seating and a round dining table",
        tone: "olive",
      },
    },
    {
      span: "md:col-span-5 md:row-span-2",
      image: {
        src: "/images/table-3.jpg",
        alt: "Lounge and bar with woven pendant lights",
        tone: "umber",
      },
    },
  ] satisfies GalleryItem[],
};

/* ------------------------------------------------------------------ */
/* Reservations                                                        */
/* ------------------------------------------------------------------ */

export const reservation = {
  label: "Reserve a table",
  /** PLACEHOLDER link. Replace with the restaurant's real booking page, WhatsApp or phone link. */
  url: "https://example.com/replace-with-booking-link",
  isPlaceholder: true,
  headline: "Reserve a table",
  text: "Tell us when you are coming and how many of you there will be. Walk-ins are welcome when there is room.",
  walkInNote: "[Confirm walk-in policy]",
} as const;

/* ------------------------------------------------------------------ */
/* Location & contact                                                  */
/* ------------------------------------------------------------------ */

export const location = {
  addressLines: [
    "[Add venue or building name]",
    "[Add street address]",
    "Hyderabad, Telangana [Add PIN code]",
  ],
  /** Used for the map embed and directions link. Replace with the exact street address once confirmed. */
  mapQuery: "One8 Commune Hyderabad",
  hours: [
    { days: "Monday to Thursday", hours: "[Add hours]" },
    { days: "Friday and Saturday", hours: "[Add hours]" },
    { days: "Sunday", hours: "[Add hours]" },
  ] satisfies HoursRow[],
  phone: "[Add phone number]",
  /** Leave empty until a real number exists; when set (e.g. "tel:+91..."), the phone becomes a link. */
  phoneHref: "",
  email: "[Add email address]",
  /** Leave empty until a real address exists; when set (e.g. "mailto:..."), the email becomes a link. */
  emailHref: "",
  mapNote: "The map searches by restaurant name. Swap in the exact venue pin once confirmed.",
};

/* ------------------------------------------------------------------ */
/* Footer & credit                                                     */
/* ------------------------------------------------------------------ */

export const credit = {
  designer: "[Your name]",
  contact: "[your@email.com]",
  statement:
    "A speculative website concept, designed and built independently. Not affiliated with or endorsed by One8 Commune.",
} as const;
