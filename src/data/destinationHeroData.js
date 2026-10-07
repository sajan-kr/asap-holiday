// ============================================================
// destinationHeroData.js
// Helper data + utility functions for DestinationHero
// ============================================================

export const CITY_SUBTITLES = {
  Shimla: "The Queen of Hills",
  Manali: "Adventure Paradise",
  Kasol: "Riverside Escape",
  Dharamshala: "Peace & Spirituality",
  McLeodganj: "Mountain Peace",

  Leh: "Gateway to Ladakh",
  Srinagar: "City of Lakes",
  Gulmarg: "Winter Wonderland",
  Pahalgam: "Valley of Shepherds",
  Sonmarg: "Golden Meadow Escape",

  Gangtok: "Himalayan Escape",
  Darjeeling: "Tea Garden Paradise",
  Pelling: "Mountain Serenity",
  Lachung: "Gateway to the Himalayas",

  Rishikesh: "Yoga & Adventure",

  Jaipur: "The Pink City",
  Udaipur: "City of Lakes",
  Jaisalmer: "Golden City",
  Jodhpur: "Blue City",

  Goa: "Sunshine & Beaches",
  Panaji: "Sunshine & Beaches",
  Panjim: "Sunshine & Beaches",

  Munnar: "Tea Garden Paradise",
  Alleppey: "Backwater Escape",
  Kochi: "Queen of the Arabian Sea",
  Thekkady: "Wildlife & Nature",
  Varkala: "Cliffs, Beaches & Sunsets",

  Agra: "Home of the Taj Mahal",
  Varanasi: "Spiritual India",
  Ayodhya: "Sacred Heritage",

  Mumbai: "The City That Never Sleeps",
  Bengaluru: "Garden City",
  Hyderabad: "Heritage & Flavours",

  Kathmandu: "Gateway to the Himalayas",
  Pokhara: "Lakes & Mountains",
  Lumbini: "Birthplace of Buddha",
  Bhaktapur: "Ancient Heritage",

  Thimphu: "Himalayan Capital",
  Paro: "Valleys & Monasteries",
  Punakha: "Sacred Valleys",

  Dubai: "Luxury & Adventure",
  "Downtown Dubai": "Iconic Dubai",
  Marina: "Skyline & Waterfront",
  "Palm Jumeirah": "Luxury by the Sea",
  "Abu Dhabi": "Culture & Grandeur",

  Male: "Tropical Paradise",
  Maafushi: "Island Escape",
  "Vaadhoo Island": "Sea of Stars",

  Bangkok: "Energy & Culture",
  Phuket: "Island Escape",
  Krabi: "Tropical Adventure",
  Pattaya: "Beachside Energy",

  Singapore: "Modern City Escape",
  "Marina Bay": "Iconic City Views",
  Sentosa: "Island Adventure",

  Paris: "Romance & Culture",
  "Eiffel Tower": "Iconic Paris",
  "Louvre Museum": "Art & History",
  Montmartre: "Artistic Paris",

  London: "History & Modern Life",

  Tokyo: "Tradition Meets Future",
  Kyoto: "Ancient Japan",
  Osaka: "Food & Entertainment",
  "Mount Fuji": "Japan's Iconic Peak",

  Zurich: "Alpine Elegance",
  Geneva: "Lakeside Luxury",

  Istanbul: "East Meets West",
  Cappadocia: "Fairy Chimneys & Hot Air Balloons",
  Antalya: "Turquoise Coast",

  Hanoi: "Heritage & Flavours",
  "Da Nang": "Beach & City Escape",
  "Ho Chi Minh": "Vibrant Vietnam",

  Bali: "Island of the Gods",
  Ubud: "Culture & Nature",
  Kuta: "Beach & Nightlife",
  Seminyak: "Luxury Island Living",
  "Nusa Penida": "Dramatic Island Escape",
};

export const DESTINATION_TAGLINES = {
  "Himachal Pradesh": "Find Peace in the Mountains",
  Ladakh: "Where Mountains Meet the Sky",
  Nepal: "Adventure Beyond Boundaries",
  Sikkim: "Discover the Soul of the Himalayas",
  "Kailash Mansarovar": "A Journey of Spiritual Discovery",
  Bhutan: "Happiness Has an Address",
  Goa: "Escape to Sunshine & Serenity",
  Kerala: "God's Own Tropical Escape",
  Kashmir: "Paradise Beyond Imagination",
  Andaman: "Into the Blue",
  Bali: "Find Your Island Escape",
  Dubai: "Where Dreams Meet Luxury",
  Maldives: "Escape to Blue Horizons",
  Thailand: "A Journey Full of Wonder",
  Switzerland: "Experience the Art of Travel",
  Singapore: "Small Island. Big Experiences.",
  Paris: "Fall in Love With Paris",
  Turkey: "Where East Meets West",
  Vietnam: "Discover a World of Flavours",
  Japan: "Where Tradition Meets Tomorrow",
};

export const CITY_ALIASES = {
  "Nubra Valley": "Nubra",
  Pangong: "Pangong Lake",
  Kargil: "Kargil",

  "North Goa": "Panaji",
  "South Goa": "Margao",
  Panjim: "Panaji",

  "Nusa Penida": "Nusa Penida",

  "Palm Jumeirah": "Dubai",
  "Downtown Dubai": "Dubai",
  Marina: "Dubai Marina",

  "Vaadhoo Island": "Vaadhoo",

  "Mount Fuji": "Fujikawaguchiko",

  "Eiffel Tower": "Paris",
  "Louvre Museum": "Paris",
  Montmartre: "Paris",

  "Marina Bay": "Singapore",
  Sentosa: "Singapore",
  "Orchard Road": "Singapore",
};

// ------------------------------------------------------------
// Country code helper
// ------------------------------------------------------------

export function getCountryCode(country = "") {
  const map = {
    India: "IN",
    Nepal: "NP",
    Bhutan: "BT",
    Tibet: "CN",
    Indonesia: "ID",
    UAE: "AE",
    "United Arab Emirates": "AE",
    Maldives: "MV",
    Thailand: "TH",
    Switzerland: "CH",
    Singapore: "SG",
    France: "FR",
    Turkey: "TR",
    Vietnam: "VN",
    Japan: "JP",
    Malaysia: "MY",
    "United Kingdom": "GB",
    UK: "GB",
  };

  return map[country] || "";
}

// ------------------------------------------------------------
// Slug helper
// ------------------------------------------------------------

export function slugify(value = "") {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// ------------------------------------------------------------
// City name normalizer
// ------------------------------------------------------------

export function normalizeCityName(city = "", destination = null) {
  const value =
    CITY_ALIASES[city] ||
    city ||
    destination?.title ||
    "";

  return String(value)
    .replace(/\s+/g, " ")
    .trim();
}

// ------------------------------------------------------------
// City subtitle
// ------------------------------------------------------------

export function getCitySubtitle(city = "") {
  const key = String(city).trim();

  if (CITY_SUBTITLES[key]) {
    return CITY_SUBTITLES[key];
  }

  const lowerKey = key.toLowerCase();

  const found = Object.entries(CITY_SUBTITLES).find(
    ([name]) => name.toLowerCase() === lowerKey
  );

  return found?.[1] || "A beautiful place to explore";
}

// ------------------------------------------------------------
// Destination tagline
// ------------------------------------------------------------

export function getDestinationTagline(title = "") {
  if (DESTINATION_TAGLINES[title]) {
    return DESTINATION_TAGLINES[title];
  }

  return `Discover ${title}`;
}

// ------------------------------------------------------------
// Weather code
// ------------------------------------------------------------

export const WEATHER_CODE_MAP = {
  0: {
    label: "Clear Sky",
    icon: "sun",
  },

  1: {
    label: "Mainly Clear",
    icon: "sun",
  },

  2: {
    label: "Partly Cloudy",
    icon: "cloud",
  },

  3: {
    label: "Overcast",
    icon: "cloud",
  },

  45: {
    label: "Foggy",
    icon: "cloud",
  },

  48: {
    label: "Rime Fog",
    icon: "cloud",
  },

  51: {
    label: "Light Drizzle",
    icon: "cloud",
  },

  53: {
    label: "Drizzle",
    icon: "cloud",
  },

  55: {
    label: "Heavy Drizzle",
    icon: "cloud",
  },

  61: {
    label: "Light Rain",
    icon: "cloud",
  },

  63: {
    label: "Rain",
    icon: "cloud",
  },

  65: {
    label: "Heavy Rain",
    icon: "cloud",
  },

  71: {
    label: "Light Snow",
    icon: "snow",
  },

  73: {
    label: "Snow",
    icon: "snow",
  },

  75: {
    label: "Heavy Snow",
    icon: "snow",
  },

  80: {
    label: "Light Showers",
    icon: "cloud",
  },

  81: {
    label: "Showers",
    icon: "cloud",
  },

  82: {
    label: "Heavy Showers",
    icon: "cloud",
  },

  85: {
    label: "Snow Showers",
    icon: "snow",
  },

  86: {
    label: "Heavy Snow Showers",
    icon: "snow",
  },

  95: {
    label: "Thunderstorm",
    icon: "storm",
  },

  96: {
    label: "Thunderstorm + Hail",
    icon: "storm",
  },

  99: {
    label: "Heavy Thunderstorm + Hail",
    icon: "storm",
  },
};

// ------------------------------------------------------------
// Season
// ------------------------------------------------------------

export function getSeason(month, country = "") {
  if (
    country === "India" ||
    country === "Nepal" ||
    country === "Bhutan"
  ) {
    if ([12, 1, 2].includes(month)) return "Winter";
    if ([3, 4, 5].includes(month)) return "Spring";
    if ([6, 7, 8, 9].includes(month)) return "Monsoon";

    return "Autumn";
  }

  if ([12, 1, 2].includes(month)) return "Winter";
  if ([3, 4, 5].includes(month)) return "Spring";
  if ([6, 7, 8].includes(month)) return "Summer";

  return "Autumn";
}

// ------------------------------------------------------------
// Local time
// IMPORTANT: Only one copy of this function.
// ------------------------------------------------------------

export function formatLocalTime(localTime, timezone) {
  if (!localTime) {
    return "--:--";
  }

  try {
    const date = new Date(localTime);

    if (Number.isNaN(date.getTime())) {
      return "--:--";
    }

    return new Intl.DateTimeFormat("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: timezone || "UTC",
    }).format(date);
  } catch {
    return "--:--";
  }
}