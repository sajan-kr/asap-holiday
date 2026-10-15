
const defaultGuide = {
  bestTime: "Check local seasonal conditions",
  duration: "3–5 days",
  currency: "Check local currency",
  language: "Local language",
  budget: "Depends on your travel style",

  stays: [
    {
      title: "Boutique Hotels",
      description:
        "Enjoy thoughtful interiors, comfort and a welcoming atmosphere.",
      icon: "hotel",
      tag: "COMFORT",
    },
    {
      title: "Homestays & Cottages",
      description:
        "Experience a destination through local hospitality and character.",
      icon: "home",
      tag: "LOCAL FEEL",
    },
    {
      title: "Budget Stays",
      description:
        "Keep your trip practical with accommodation that fits your budget.",
      icon: "budget",
      tag: "GREAT VALUE",
    },
  ],

  transport: [
    {
      title: "Airport Transfers",
      description:
        "Plan a convenient connection between your arrival point and stay.",
      icon: "plane",
      tag: "ARRIVAL",
    },
    {
      title: "Private Cabs",
      description:
        "Explore at your own pace with planned private transfers.",
      icon: "car",
      tag: "FLEXIBLE",
    },
    {
      title: "Local Transport",
      description:
        "Check available routes to reach attractions and nearby places.",
      icon: "local",
      tag: "EXPLORE",
    },
  ],

  tips: [
    {
      title: "Choose your season",
      description:
        "Check weather and seasonal conditions before confirming your dates.",
    },
    {
      title: "Keep documents ready",
      description:
        "Organise identification, booking confirmations and essential documents.",
    },
    {
      title: "Plan your connections",
      description:
        "Allow enough time for transfers, check-ins and planned activities.",
    },
    {
      title: "Leave room to explore",
      description:
        "Keep some flexibility in your schedule for unexpected discoveries.",
    },
  ],
};

export const destinationGuides = {
  "himachal-pradesh": {
    bestTime: "March–June, September–November",
    duration: "5–7 days",
    currency: "Indian Rupee (INR)",
    language: "Hindi and regional languages",
    budget: "Varies by route, season and accommodation",

    stays: [
      {
        title: "Mountain Resorts",
        description:
          "Relax in scenic surroundings with comfortable amenities and mountain views.",
        icon: "hotel",
        tag: "SCENIC STAYS",
      },
      {
        title: "Cottages & Homestays",
        description:
          "Enjoy a more personal stay and discover the warmth of local hospitality.",
        icon: "home",
        tag: "LOCAL FEEL",
      },
      {
        title: "Budget Hotels",
        description:
          "Find practical accommodation for a comfortable mountain getaway.",
        icon: "budget",
        tag: "GREAT VALUE",
      },
    ],

    transport: [
      {
        title: "Airport Transfers",
        description:
          "Choose an arrival airport and arrange onward travel for your itinerary.",
        icon: "plane",
        tag: "ARRIVAL",
      },
      {
        title: "Private Cabs",
        description:
          "Plan road transfers between hill stations and attractions.",
        icon: "car",
        tag: "FLEXIBLE",
      },
      {
        title: "Local Buses",
        description:
          "Check available services, routes and schedules before travelling.",
        icon: "local",
        tag: "EXPLORE",
      },
    ],

    tips: [
      {
        title: "Check mountain weather",
        description:
          "Conditions can change quickly. Review forecasts before road trips.",
      },
      {
        title: "Pack in layers",
        description:
          "Bring clothing suitable for changing temperatures and altitude.",
      },
      {
        title: "Allow extra road time",
        description:
          "Factor in winding roads and changing road conditions.",
      },
      {
        title: "Book popular dates early",
        description:
          "Reserve accommodation ahead of busy weekends and holiday periods.",
      },
    ],
  },

  goa: {
    bestTime: "November–February",
    duration: "3–5 days",
    currency: "Indian Rupee (INR)",
    language: "Konkani and English",
  },

  kerala: {
    bestTime: "October–March",
    duration: "5–7 days",
    currency: "Indian Rupee (INR)",
    language: "Malayalam and English",
  },
};

const normalizeSlug = (value = "") =>
  String(value)
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, "-");

export function getDestinationGuide(destination = {}) {
  const slug = normalizeSlug(
    destination.slug ||
      destination.destinationSlug ||
      destination.name ||
      destination.title ||
      ""
  );

  const matchedGuide = destinationGuides[slug] || {};

  const suppliedGuide =
    destination.guide ||
    destination.travelGuide ||
    destination.travelInfo ||
    {};

  return {
    ...defaultGuide,
    ...matchedGuide,
    ...suppliedGuide,

    stays:
      suppliedGuide.stays ||
      matchedGuide.stays ||
      defaultGuide.stays,

    transport:
      suppliedGuide.transport ||
      matchedGuide.transport ||
      defaultGuide.transport,

    tips:
      suppliedGuide.tips ||
      matchedGuide.tips ||
      defaultGuide.tips,
  };
}
