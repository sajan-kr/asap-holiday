/*
  src/data/destinationGuideData.js

  Keep this helper if your project already imports getDestinationGuide.
  The component can use destination-specific guide entries below, with
  safe defaults for destinations that do not have a custom entry yet.
*/

const DEFAULT_GUIDE = {
  bestTime: "Depends on the season",
  duration: "4–6 days",
  currency: "Check local currency",
  language: "Local language / English",
  budget: "Plan daily spending for meals, transport and activities, and keep a small buffer for unexpected discoveries.",
  stays: [
    { icon: "hotel", tag: "Comfort", title: "Hotels & resorts", description: "A convenient base with comfort and services close at hand." },
    { icon: "home", tag: "Local feel", title: "Guesthouses & homestays", description: "A more personal way to experience local hospitality." },
  ],
  transport: [
    { icon: "car", tag: "Flexible", title: "Private transfers", description: "Useful for airport pickups, day trips and journeys with luggage." },
    { icon: "local", tag: "Explore", title: "Local transport", description: "Check local taxis, public transport and travel times before setting out." },
  ],
  tips: [
    { title: "Check the season", description: "Weather can affect road conditions, opening times and the activities available." },
    { title: "Book key stays early", description: "Reserve important accommodation and transfers ahead during busy travel periods." },
    { title: "Leave room to explore", description: "Avoid overfilling each day; leave time for spontaneous stops and local discoveries." },
  ],
};

const GUIDE_BY_SLUG = {
  "himachal-pradesh": {
    bestTime: "March–June & September–November",
    duration: "6–7 days",
    currency: "Indian Rupee (INR)",
    language: "Hindi, Pahari & English",
    budget: "Mountain weather can change quickly. Keep flexible travel time for road journeys and check local conditions before heading to higher-altitude areas.",
  },
  ladakh: {
    bestTime: "June–September",
    duration: "7–9 days",
    currency: "Indian Rupee (INR)",
    language: "Ladakhi, Hindi & English",
    budget: "Allow time to acclimatise to the altitude, stay hydrated and check road and weather updates before long drives.",
  },
  nepal: {
    bestTime: "October–November & March–April",
    duration: "5–8 days",
    currency: "Nepalese Rupee (NPR)",
    language: "Nepali & English",
  },
  goa: {
    bestTime: "November–February",
    duration: "4–5 days",
    currency: "Indian Rupee (INR)",
    language: "Konkani, Hindi & English",
  },
  kerala: {
    bestTime: "October–March",
    duration: "5–7 days",
    currency: "Indian Rupee (INR)",
    language: "Malayalam & English",
  },
  kashmir: {
    bestTime: "March–October",
    duration: "5–7 days",
    currency: "Indian Rupee (INR)",
    language: "Kashmiri, Urdu & Hindi",
  },
  bali: {
    bestTime: "April–October",
    duration: "5–7 days",
    currency: "Indonesian Rupiah (IDR)",
    language: "Indonesian & Balinese",
  },
  dubai: {
    bestTime: "November–March",
    duration: "4–5 days",
    currency: "UAE Dirham (AED)",
    language: "Arabic & English",
  },
  maldives: {
    bestTime: "November–April",
    duration: "4–6 days",
    currency: "Maldivian Rufiyaa (MVR)",
    language: "Dhivehi & English",
  },
  thailand: {
    bestTime: "November–February",
    duration: "5–7 days",
    currency: "Thai Baht (THB)",
    language: "Thai & English",
  },
  singapore: {
    bestTime: "February–April",
    duration: "3–5 days",
    currency: "Singapore Dollar (SGD)",
    language: "English, Mandarin, Malay & Tamil",
  },
  switzerland: {
    bestTime: "June–September",
    duration: "7–10 days",
    currency: "Swiss Franc (CHF)",
    language: "German, French, Italian & English",
  },
  paris: {
    bestTime: "April–June & September–October",
    duration: "3–5 days",
    currency: "Euro (EUR)",
    language: "French",
  },
};

function slugify(value = "") {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getDestinationGuide(destination = {}) {
  const key = slugify(destination.slug || destination.title || destination.name || "");
  const custom = GUIDE_BY_SLUG[key] || {};

  return {
    ...DEFAULT_GUIDE,
    ...custom,
    ...(destination.guide || {}),
    stays: destination.guide?.stays || custom.stays || DEFAULT_GUIDE.stays,
    transport: destination.guide?.transport || custom.transport || DEFAULT_GUIDE.transport,
    tips: destination.guide?.tips || custom.tips || DEFAULT_GUIDE.tips,
  };
}

export default getDestinationGuide;
