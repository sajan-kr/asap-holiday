
/*
  src/data/destinationFAQData.js

  Dynamic FAQ data for ASAP Holidays.

  Priority:
  1. Custom FAQs attached to the destination object
  2. Destination-specific FAQs below
  3. Shared default FAQs

  Required FAQ shape:
  {
    question: "Question?",
    answer: "Answer."
  }
*/

export const DEFAULT_DESTINATION_FAQS = [
    {
        question: "What is included in my holiday package?",
        answer:
            "Package inclusions depend on the itinerary you select. Review the accommodation, transfers, sightseeing, meals and other services listed in your package before confirming your booking.",
    },
    {
        question: "Can I customize my holiday package?",
        answer:
            "Yes, you can discuss your preferred travel dates, trip duration, accommodation, activities and budget with our travel team. Available options depend on the destination and selected package.",
    },
    {
        question: "When is the best time to visit?",
        answer:
            "The best time depends on the destination, seasonal weather and activities you prefer. Check local conditions for your planned travel dates before finalizing your itinerary.",
    },
    {
        question: "How early should I book my trip?",
        answer:
            "Booking in advance gives you more time to compare options and check availability, especially during peak travel seasons. Prices and availability vary by destination and dates.",
    },
    {
        question: "Can I plan a family or group holiday?",
        answer:
            "Yes, you can enquire about family holidays, couple trips and group travel. Share your group size, preferred dates and requirements so our team can help you explore suitable options.",
    },
];

export const DESTINATION_FAQS = {
    "himachal-pradesh": [
        {
            question: "Which places can I visit in Himachal Pradesh?",
            answer:
                "Depending on your itinerary, you could explore Shimla, Manali, Kasol and Dharamshala. The best route depends on your trip duration, season and preferred experiences.",
        },
        {
            question: "What should I pack for Himachal Pradesh?",
            answer:
                "Pack comfortable walking shoes and weather-appropriate layers. Mountain temperatures can change considerably, so check the forecast for your planned destinations.",
        },
        {
            question: "Is Himachal Pradesh suitable for a family holiday?",
            answer:
                "Himachal Pradesh offers nature, sightseeing and leisure experiences. Choose destinations and travel routes that suit your family's needs, preferred pace and travel season.",
        },
    ],

    ladakh: [
        {
            question: "When should I plan a Ladakh trip?",
            answer:
                "Travel conditions depend on the season, road access and altitude. Check current local conditions and transport availability before confirming your itinerary.",
        },
        {
            question: "Should I allow time to acclimatize in Ladakh?",
            answer:
                "Yes. Ladakh's high altitude can affect visitors arriving from lower elevations. Allow time to adjust, follow medical guidance and avoid strenuous activity until acclimatized.",
        },
        {
            question: "What should I pack for Ladakh?",
            answer:
                "Pack warm layers, comfortable walking shoes and sun protection. Check the weather and local travel advice before departing for high-altitude areas.",
        },
    ],

    goa: [
        {
            question: "Which area of Goa is right for my holiday?",
            answer:
                "Choose an area based on your preferences, whether you enjoy lively beaches, nightlife, heritage attractions or quieter coastal stays. Consider travel times when choosing accommodation.",
        },
        {
            question: "How many days should I spend in Goa?",
            answer:
                "A short break can cover selected beaches and attractions, while a longer stay allows more time for local food and relaxed exploration. Choose a duration that suits your pace.",
        },
        {
            question: "Can I plan a family holiday in Goa?",
            answer:
                "Yes. You can build an itinerary around suitable accommodation, sightseeing and relaxed activities, taking your family's preferences and local beach safety guidance into account.",
        },
    ],

    kerala: [
        {
            question: "What experiences can I include in Kerala?",
            answer:
                "You could combine hill stations, backwaters, cultural attractions and coastal destinations, depending on your trip length. Allow enough travel time between stops.",
        },
        {
            question: "Can I include a houseboat stay?",
            answer:
                "Houseboat stays are available in selected backwater areas. Confirm facilities, meal arrangements, transfers and any additional charges before booking.",
        },
        {
            question: "What should I pack for Kerala?",
            answer:
                "Pack lightweight clothing, comfortable footwear and rain protection when appropriate. Your list should reflect the season and activities in your itinerary.",
        },
    ],

    sikkim: [
        {
            question: "What should I know before visiting Sikkim?",
            answer:
                "Mountain weather, road conditions and permits can affect your itinerary. Check current travel advisories and requirements for the specific areas you plan to visit.",
        },
        {
            question: "Can I include Gangtok in my itinerary?",
            answer:
                "Gangtok can be a base for exploring selected attractions in the region. Plan your route around road conditions, available time and the attractions you wish to visit.",
        },
    ],

    nepal: [
        {
            question: "What travel documents do I need for Nepal?",
            answer:
                "Requirements depend on your nationality and circumstances. Check the current official entry and identification requirements applicable to you before departure.",
        },
        {
            question: "Can I combine sightseeing and adventure in Nepal?",
            answer:
                "Depending on your itinerary, you can combine cultural attractions, nature experiences and outdoor activities. Check seasonal conditions and choose activities appropriate to your experience.",
        },
    ],

    bhutan: [
        {
            question: "Are there special requirements for visiting Bhutan?",
            answer:
                "Entry procedures, permits and applicable charges depend on your nationality and itinerary. Confirm the latest official requirements before booking.",
        },
        {
            question: "What can I experience in Bhutan?",
            answer:
                "Depending on your route, you can explore monasteries, cultural landmarks, mountain scenery and local traditions. Allow enough time for road journeys and attraction visits.",
        },
    ],

    kashmir: [
        {
            question: "When is a good time to visit Kashmir?",
            answer:
                "The ideal season depends on whether you prefer spring scenery, summer sightseeing or winter snow. Weather, road access and local conditions can affect your plans.",
        },
        {
            question: "Can I customize a family trip to Kashmir?",
            answer:
                "You can discuss preferred destinations, accommodation and sightseeing with our travel team. Your itinerary can be planned around your family's needs and available options.",
        },
    ],

    andaman: [
        {
            question: "How should I plan island transfers?",
            answer:
                "Island transfers depend on ferry schedules, weather and seat availability. Allow enough time between connections and confirm current schedules before finalizing your itinerary.",
        },
        {
            question: "What should I pack for the Andaman Islands?",
            answer:
                "Bring lightweight clothing, sun protection and comfortable footwear. Follow local guidance on swimming, boating and weather-related restrictions during your stay.",
        },
    ],

    bali: [
        {
            question: "What experiences can I include in Bali?",
            answer:
                "You can explore beaches, cultural attractions, scenic landscapes and local experiences. Choose areas according to your interests and account for traffic when planning daily activities.",
        },
        {
            question: "What should I check before travelling to Bali?",
            answer:
                "Check current entry requirements, travel documents and applicable local visitor regulations. Requirements can depend on your nationality and travel dates.",
        },
    ],

    dubai: [
        {
            question: "Can I combine sightseeing and shopping in Dubai?",
            answer:
                "Yes. You can combine city landmarks, shopping areas and cultural attractions. Group activities by location to make the most of your time.",
        },
        {
            question: "What should I check before visiting Dubai?",
            answer:
                "Check the entry requirements applicable to your nationality, seasonal weather and any reservations required for the activities in your itinerary.",
        },
    ],

    thailand: [
        {
            question: "Which places can I combine on a Thailand trip?",
            answer:
                "Depending on your dates, you can combine city sightseeing, cultural attractions and beach destinations. Check transfer times before planning multiple stops.",
        },
        {
            question: "What should I check before travelling to Thailand?",
            answer:
                "Review the current entry rules and travel-document requirements applicable to your nationality. Confirm any required documentation before departure.",
        },
    ],

    maldives: [
        {
            question: "How do I choose a Maldives resort?",
            answer:
                "Compare the total package cost, room type, meal plan, resort facilities and transfer arrangements. Confirm included services and additional charges before booking.",
        },
        {
            question: "Are resort transfers included?",
            answer:
                "Transfer arrangements vary by resort and package. Confirm whether speedboat, domestic flight or seaplane transfers are included and whether additional charges apply.",
        },
    ],

    singapore: [
        {
            question: "What can I include in a Singapore itinerary?",
            answer:
                "You can combine city landmarks, gardens, cultural neighbourhoods, shopping and selected attractions. Check opening hours and ticket availability when planning your schedule.",
        },
        {
            question: "What should I know before visiting Singapore?",
            answer:
                "Review current entry requirements, local regulations, transport options and weather. Planning attractions by neighbourhood can help make your visit more convenient.",
        },
    ],

    switzerland: [
        {
            question: "When should I visit Switzerland?",
            answer:
                "The best season depends on whether you prefer mountain scenery, hiking, lakeside towns or winter activities. Check seasonal transport schedules and mountain weather before travelling.",
        },
        {
            question: "Can I explore Switzerland by train?",
            answer:
                "Rail services connect many popular destinations. Compare routes, schedules and travel-pass options to determine which arrangements suit your itinerary.",
        },
    ],

    paris: [
        {
            question: "Should I book Paris attractions in advance?",
            answer:
                "Advance reservations can be useful for popular attractions and busy travel periods. Check official ticket availability and entry conditions for your chosen dates.",
        },
        {
            question: "How should I plan my time in Paris?",
            answer:
                "Allow time for landmarks, museums, neighbourhood walks and meals. Group nearby attractions together and check whether advance reservations are needed.",
        },
    ],

    "kailash-mansarovar": [
        {
            question: "What should I prepare for this journey?",
            answer:
                "This journey requires careful planning because of altitude, physical demands and travel permissions. Confirm current eligibility, permits, health guidance and operator arrangements before committing.",
        },
        {
            question: "Is this journey suitable for every traveller?",
            answer:
                "The journey can be physically demanding and involve high-altitude travel. Seek appropriate medical advice and confirm eligibility and current travel conditions before booking.",
        },
    ],
};

/* Normalize destination names and slugs consistently. */
const normalizeSlug = (value) =>
    String(value ?? "")
        .trim()
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

/* Ignore malformed FAQ entries. */
const isValidFaq = (faq) =>
    faq &&
    typeof faq.question === "string" &&
    faq.question.trim().length > 0 &&
    typeof faq.answer === "string" &&
    faq.answer.trim().length > 0;

/*
  Returns up to five unique FAQs.

  Explicit destination FAQs take priority, followed by
  matching built-in FAQs and then shared defaults.
*/
export const getDestinationFAQs = (destination = {}) => {
    const slug = normalizeSlug(
        destination.slug ||
        destination.id ||
        destination.name ||
        destination.title
    );

    const customFaqs = Array.isArray(destination.faqs)
        ? destination.faqs.filter(isValidFaq)
        : [];

    const destinationFaqs = DESTINATION_FAQS[slug] || [];

    const seen = new Set();

    return [
        ...customFaqs,
        ...destinationFaqs,
        ...DEFAULT_DESTINATION_FAQS,
    ]
        .filter(isValidFaq)
        .filter((faq) => {
            const key = faq.question.trim().toLowerCase();

            if (seen.has(key)) return false;

            seen.add(key);
            return true;
        })
        .slice(0, 5);
};

export default DESTINATION_FAQS;
