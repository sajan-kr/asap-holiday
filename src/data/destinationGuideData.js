/*
  src/data/destinationGuideData.js

  Destination guide data for the 20 Trending Holiday Destinations
  (Indian + International). Destination-specific values are used when
  available; DEFAULT_GUIDE safely fills any optional fields.
*/

const DEFAULT_GUIDE = {
  bestTime: "Check the season before booking",
  duration: "4–6 days",
  currency: "Check local currency",
  language: "Local language / English",
  budget:
    "Plan daily spending for meals, transport and activities, and keep a small buffer for unexpected discoveries.",
  stays: [
    {
      icon: "hotel",
      tag: "Comfort",
      title: "Hotels & resorts",
      description: "A convenient base with comfort and services close at hand.",
    },
    {
      icon: "home",
      tag: "Local feel",
      title: "Guesthouses & homestays",
      description: "A more personal way to experience local hospitality.",
    },
  ],
  transport: [
    {
      icon: "car",
      tag: "Flexible",
      title: "Private transfers",
      description: "Useful for airport pickups, day trips and journeys with luggage.",
    },
    {
      icon: "local",
      tag: "Explore",
      title: "Local transport",
      description: "Check local taxis, public transport and travel times before setting out.",
    },
  ],
  tips: [
    {
      title: "Check the season",
      description: "Weather can affect road conditions, opening times and the activities available.",
    },
    {
      title: "Book key stays early",
      description: "Reserve important accommodation and transfers ahead during busy travel periods.",
    },
    {
      title: "Leave room to explore",
      description: "Avoid overfilling each day; leave time for spontaneous stops and local discoveries.",
    },
  ],
};

const GUIDE_BY_SLUG = {
  /* INDIAN DESTINATIONS */
  "himachal-pradesh": {
    bestTime: "March–June & September–November",
    duration: "6–7 days",
    currency: "Indian Rupee (INR)",
    language: "Hindi, Pahari & English",
    budget:
      "Mountain weather can change quickly. Keep flexible travel time for road journeys and check local conditions before heading to higher-altitude areas.",
  },
  ladakh: {
    bestTime: "June–September",
    duration: "7–9 days",
    currency: "Indian Rupee (INR)",
    language: "Ladakhi, Hindi & English",
    budget:
      "Allow time to acclimatise to the altitude, stay hydrated and check road and weather updates before long drives.",
  },
  nepal: {
    bestTime: "October–November & March–April",
    duration: "5–8 days",
    currency: "Nepalese Rupee (NPR)",
    language: "Nepali & English",
  },
  sikkim: {
    bestTime: "March–May & October–mid-December",
    duration: "5–7 days",
    currency: "Indian Rupee (INR)",
    language: "Nepali, Sikkimese, Hindi & English",
    budget:
      "Mountain roads can take longer than expected. Check weather and permit requirements for restricted areas before travelling.",
  },
  "kailash-mansarovar": {
    bestTime: "May–September, subject to official access",
    duration: "12–18 days, itinerary dependent",
    currency: "Depends on the approved route",
    language: "Tibetan, Mandarin and languages used by your tour team",
    budget:
      "This is a high-altitude pilgrimage requiring advance planning, official permits, medical fitness checks and an authorised operator. Confirm current route access before making plans.",
  },
  bhutan: {
    bestTime: "March–May & September–November",
    duration: "5–7 days",
    currency: "Bhutanese Ngultrum (BTN)",
    language: "Dzongkha & English",
    budget:
      "Check current entry rules, travel requirements and applicable fees before booking. Use a licensed operator where required.",
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
    bestTime: "March–October; winter for snow experiences",
    duration: "5–7 days",
    currency: "Indian Rupee (INR)",
    language: "Kashmiri, Urdu & Hindi",
    budget:
      "Weather can affect mountain access and transport. Check local advisories and road conditions before travelling to higher-altitude areas.",
  },
  andaman: {
    bestTime: "October–May",
    duration: "5–7 days",
    currency: "Indian Rupee (INR)",
    language: "Hindi, Bengali, Tamil, Telugu & English",
    budget:
      "Plan ferry connections ahead, allow buffer time between islands and check sea conditions for boat transfers and water activities.",
  },

  /* INTERNATIONAL DESTINATIONS */
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
    budget:
      "Confirm whether transfers, meals, taxes and activities are included in your resort quote. Speedboat and seaplane transfers may have separate schedules and costs.",
  },
  thailand: {
    bestTime: "November–February for many popular regions",
    duration: "5–7 days",
    currency: "Thai Baht (THB)",
    language: "Thai & English",
    budget:
      "Seasonal weather differs between Thailand's regions. Check conditions for the specific islands or cities on your itinerary.",
  },
  switzerland: {
    bestTime: "June–September for hiking; December–March for snow",
    duration: "7–10 days",
    currency: "Swiss Franc (CHF)",
    language: "German, French, Italian & Romansh",
    budget:
      "Compare rail passes and point-to-point tickets before travelling, and reserve mountain excursions early during busy periods.",
  },
  singapore: {
    bestTime: "February–April is often popular",
    duration: "3–5 days",
    currency: "Singapore Dollar (SGD)",
    language: "English, Mandarin, Malay & Tamil",
  },
  paris: {
    bestTime: "April–June & September–October",
    duration: "3–5 days",
    currency: "Euro (EUR)",
    language: "French",
    budget:
      "Reserve timed-entry tickets for major attractions when needed and check public transport routes before planning each day.",
  },
  turkey: {
    bestTime: "April–May & September–October",
    duration: "6–9 days",
    currency: "Turkish Lira (TRY)",
    language: "Turkish",
    budget:
      "Turkey has varied climates and long distances between regions. Check local conditions and allow travel time between cities.",
  },
  vietnam: {
    bestTime: "Varies by region; often March–April for a multi-region trip",
    duration: "7–10 days",
    currency: "Vietnamese Dong (VND)",
    language: "Vietnamese",
    budget:
      "Weather differs between northern, central and southern Vietnam. Check the forecast for each region on your route and confirm visa requirements before departure.",
  },
  japan: {
    bestTime: "March–May & September–November",
    duration: "7–10 days",
    currency: "Japanese Yen (JPY)",
    language: "Japanese",
    budget:
      "Reserve popular stays during blossom and autumn-leaf seasons. Check train routes and luggage rules when planning multi-city travel.",
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
  const key = slugify(
    destination.slug || destination.title || destination.name || ""
  );
  const custom = GUIDE_BY_SLUG[key] || {};

  return {
    ...DEFAULT_GUIDE,
    ...custom,
    ...(destination.guide || {}),
    stays: destination.guide?.stays || custom.stays || DEFAULT_GUIDE.stays,
    transport:
      destination.guide?.transport ||
      custom.transport ||
      DEFAULT_GUIDE.transport,
    tips: destination.guide?.tips || custom.tips || DEFAULT_GUIDE.tips,
  };
}

export default getDestinationGuide;
