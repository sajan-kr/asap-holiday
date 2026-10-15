
const defaultGuide = {
    bestTime: "Check the local travel season",
    duration: "3–5 days",
    currency: "Check local currency",
    language: "Local language",
    budget: "Depends on your travel style",

    stays: [
        {
            title: "Luxury Escapes",
            description:
                "Enjoy premium comfort, thoughtful service and memorable stays.",
            icon: "luxury",
            tag: "COMFORT",
        },
        {
            title: "Boutique & Homestays",
            description:
                "Discover welcoming stays with a more personal local experience.",
            icon: "home",
            tag: "LOCAL FEEL",
        },
        {
            title: "Budget-Friendly Stays",
            description:
                "Find comfortable accommodation while keeping your trip affordable.",
            icon: "budget",
            tag: "VALUE",
        },
    ],

    transport: [
        {
            title: "Airport Transfers",
            description:
                "Plan your journey between the airport and your accommodation.",
            icon: "plane",
            tag: "ARRIVAL",
        },
        {
            title: "Private Cabs",
            description:
                "Explore at your own pace with convenient private transfers.",
            icon: "car",
            tag: "FLEXIBLE",
        },
        {
            title: "Local Transport",
            description:
                "Check local transport routes for exploring nearby attractions.",
            icon: "local",
            tag: "EXPLORE",
        },
    ],

    tips: [
        {
            title: "Choose the right season",
            description:
                "Check local weather and seasonal conditions before booking.",
        },
        {
            title: "Keep documents handy",
            description:
                "Keep identification, reservations and essential documents accessible.",
        },
        {
            title: "Plan your transfers",
            description:
                "Allow enough time between transport connections and activities.",
        },
        {
            title: "Leave room to explore",
            description:
                "Keep some free time for spontaneous discoveries along the way.",
        },
    ],
};

export const destinationGuides = {
    "himachal-pradesh": {
        bestTime: "March–June, September–November",
        duration: "5–7 days",
        currency: "Indian Rupee (INR)",
        language: "Hindi and regional languages",
        budget: "Varies by route and accommodation",

        stays: [
            {
                title: "Mountain Resorts",
                description:
                    "Relax in scenic settings with comfortable facilities and mountain views.",
                icon: "luxury",
                tag: "SCENIC",
            },
            {
                title: "Cottages & Homestays",
                description:
                    "Experience welcoming local hospitality in peaceful surroundings.",
                icon: "home",
                tag: "LOCAL FEEL",
            },
            {
                title: "Budget Hotels",
                description:
                    "Choose practical accommodation for an affordable mountain holiday.",
                icon: "budget",
                tag: "VALUE",
            },
        ],

        transport: [
            {
                title: "Airport Transfers",
                description:
                    "Plan onward transfers from the airport that suits your itinerary.",
                icon: "plane",
                tag: "ARRIVAL",
            },
            {
                title: "Private Cabs",
                description:
                    "Arrange road transfers between hill stations and attractions.",
                icon: "car",
                tag: "FLEXIBLE",
            },
            {
                title: "Local Buses",
                description:
                    "Check available routes and schedules before travelling.",
                icon: "local",
                tag: "EXPLORE",
            },
        ],

        tips: [
            {
                title: "Check mountain weather",
                description:
                    "Weather can change quickly, so review forecasts before road trips.",
            },
            {
                title: "Pack in layers",
                description:
                    "Bring clothing suited to changing temperatures and your planned altitude.",
            },
            {
                title: "Allow extra road time",
                description:
                    "Plan for winding mountain roads and changing road conditions.",
            },
            {
                title: "Book busy dates early",
                description:
                    "Reserve accommodation ahead of popular weekends and holiday periods.",
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

function normalizeSlug(value = "") {
    return String(value)
        .trim()
        .toLowerCase()
        .replace(/[\s_]+/g, "-");
}

export function getDestinationGuide(destination = {}) {
    const slug = normalizeSlug(
        destination.slug ||
        destination.destinationSlug ||
        destination.name ||
        destination.title ||
        ""
    );

    // Support travel-guide information already present in destination data.
    const suppliedGuide =
        destination.guide ||
        destination.travelGuide ||
        destination.travelInfo ||
        {};

    const destinationGuide = destinationGuides[slug] || {};

    return {
        ...defaultGuide,
        ...destinationGuide,
        ...suppliedGuide,

        stays:
            suppliedGuide.stays ||
            destinationGuide.stays ||
            defaultGuide.stays,

        transport:
            suppliedGuide.transport ||
            destinationGuide.transport ||
            defaultGuide.transport,

        tips:
            suppliedGuide.tips ||
            destinationGuide.tips ||
            defaultGuide.tips,
    };
}
