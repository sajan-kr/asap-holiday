
/*
  ASAP HOLIDAYS - PACKAGE DATA

  Reviews in this file are DEMO content only.
  Replace with genuine customer reviews before publishing.
*/

const sampleReviews = (destination, entries) =>
  entries.map((entry, index) => ({
    id: `${destination}-${index + 1}`,
    name: `Sample Traveller ${index + 1}`,
    location: "Demo profile",
    date: "Sample review",
    rating: entry.rating,
    title: entry.title,
    review: entry.text,
    verified: false,
    isDemo: true,
  }));

const packagesData = {
  "maldives-luxury": {
    title: "Maldives Luxury Escape",
    location: "Maldives",
    price: "₹2,45,000",
    duration: "5 Nights / 6 Days",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1600&auto=format&fit=crop",

    gallery: [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1200&auto=format&fit=crop",
    ],

    description: "Luxury Maldives water villa experience.",

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Resort Check-In",
        text: "Airport pickup and luxury resort stay.",
      },
      {
        day: "Day 2",
        title: "Water Sports Activities",
        text: "Scuba diving and snorkeling experience.",
      },
      {
        day: "Day 3",
        title: "Island Exploration",
        text: "Private island dinner and beach walk.",
      },
    ],

    reviews: sampleReviews("maldives", [
      {
        rating: 5,
        title: "Beautiful overwater villa experience",
        text: "Sample feedback: The turquoise ocean, peaceful beaches and overwater villas created an unforgettable holiday atmosphere.",
      },
      {
        rating: 5,
        title: "Wonderful tropical getaway",
        text: "Sample feedback: The island scenery, beautiful sunsets and relaxing resort surroundings were truly memorable.",
      },
      {
        rating: 4,
        title: "A memorable island holiday",
        text: "Sample feedback: Snorkeling, beach walks and tropical landscapes made this destination an excellent choice for a relaxing escape.",
      },
      {
        rating: 5,
        title: "An unforgettable escape",
        text: "Sample feedback: The beautiful ocean views and peaceful island environment made this holiday feel special.",
      },
      {
        rating: 5,
        title: "A dream destination",
        text: "Sample feedback: Stunning beaches, warm tropical weather and incredible island views made the trip memorable.",
      },
    ]),
  },

  "swiss-alps": {
    title: "Swiss Alps Adventure",
    location: "Switzerland",
    price: "₹1,89,000",
    duration: "7 Nights / 8 Days",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",

    gallery: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
    ],

    description: "Swiss mountains and adventure trip.",

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Zurich",
        text: "Airport pickup and luxury hotel stay.",
      },
      {
        day: "Day 2",
        title: "Mountain Adventure",
        text: "Explore snow mountains and train journey.",
      },
      {
        day: "Day 3",
        title: "City Exploration",
        text: "Visit cafes and Swiss villages.",
      },
    ],

    reviews: sampleReviews("swiss", [
      {
        rating: 5,
        title: "Breathtaking mountain views",
        text: "Sample feedback: The snow-covered mountains and spectacular alpine scenery made this journey unforgettable.",
      },
      {
        rating: 5,
        title: "Wonderful Swiss adventure",
        text: "Sample feedback: Scenic train journeys, charming villages and beautiful landscapes made the holiday special.",
      },
      {
        rating: 4,
        title: "A memorable mountain getaway",
        text: "Sample feedback: Exploring the Swiss villages and enjoying the mountain views was a refreshing experience.",
      },
      {
        rating: 5,
        title: "Beautiful landscapes everywhere",
        text: "Sample feedback: The combination of mountain scenery, lakes and traditional villages created wonderful memories.",
      },
      {
        rating: 5,
        title: "Amazing alpine experience",
        text: "Sample feedback: The peaceful surroundings and incredible mountain scenery were highlights of this destination.",
      },
    ]),
  },

  "bali-retreat": {
    title: "Romantic Bali Retreat",
    location: "Bali",
    price: "₹1,15,000",
    duration: "6 Nights / 7 Days",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop",

    gallery: [
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1200&auto=format&fit=crop",
    ],

    description:
      "Romantic honeymoon getaway with beaches, resorts and luxury villas in Bali.",

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Bali",
        text: "Airport pickup and luxury villa check-in.",
      },
      {
        day: "Day 2",
        title: "Temple & Beach Tour",
        text: "Explore temples and famous beaches.",
      },
      {
        day: "Day 3",
        title: "Couple Spa & Dinner",
        text: "Relaxing spa and candlelight dinner.",
      },
    ],

    reviews: sampleReviews("bali", [
      {
        rating: 5,
        title: "Beautiful romantic getaway",
        text: "Sample feedback: The tropical villas, peaceful atmosphere and beautiful scenery created a lovely holiday.",
      },
      {
        rating: 5,
        title: "Wonderful Bali experience",
        text: "Sample feedback: The beaches, temples and lush green landscapes made this destination unforgettable.",
      },
      {
        rating: 4,
        title: "Relaxing and memorable",
        text: "Sample feedback: The resort atmosphere, spa experience and scenic surroundings were wonderful.",
      },
      {
        rating: 5,
        title: "Perfect tropical escape",
        text: "Sample feedback: The peaceful beaches and romantic island atmosphere made the holiday memorable.",
      },
    ]),
  },

  "dubai-premium": {
    title: "Dubai Premium Experience",
    location: "Dubai",
    price: "₹1,55,000",
    duration: "4 Nights / 5 Days",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",

    gallery: [
      "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?q=80&w=1200&auto=format&fit=crop",
    ],

    description:
      "Luxury shopping, desert safari and premium skyline experiences in Dubai.",

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Marina Cruise",
        text: "Luxury dinner cruise at Dubai Marina.",
      },
      {
        day: "Day 2",
        title: "Dubai City Tour",
        text: "Visit Burj Khalifa and Dubai Mall.",
      },
      {
        day: "Day 3",
        title: "Desert Safari",
        text: "Dune bashing and Arabian dinner experience.",
      },
    ],

    reviews: sampleReviews("dubai", [
      {
        rating: 5,
        title: "Amazing Dubai experience",
        text: "Sample feedback: The modern skyline, marina views and impressive attractions made this destination exciting.",
      },
      {
        rating: 5,
        title: "Fantastic desert adventure",
        text: "Sample feedback: The desert safari and Arabian evening atmosphere were unforgettable highlights.",
      },
      {
        rating: 4,
        title: "Wonderful city holiday",
        text: "Sample feedback: Exploring the city's landmarks and beautiful architecture was a memorable experience.",
      },
      {
        rating: 5,
        title: "Luxury and adventure together",
        text: "Sample feedback: The combination of shopping, sightseeing and desert activities made the holiday enjoyable.",
      },
    ]),
  },

  "thailand-beach": {
    title: "Thailand Beach Escape",
    location: "Thailand",
    price: "₹95,000",
    duration: "5 Nights / 6 Days",
    rating: "4.6",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",

    gallery: [
      "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=1200&auto=format&fit=crop",
    ],

    description:
      "Beautiful beaches, nightlife and tropical island adventures in Thailand.",

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Phuket",
        text: "Airport transfer and beach resort stay.",
      },
      {
        day: "Day 2",
        title: "Island Hopping",
        text: "Visit Phi Phi islands and enjoy water sports.",
      },
      {
        day: "Day 3",
        title: "Beach Party",
        text: "Enjoy nightlife and beachside entertainment.",
      },
    ],

    reviews: sampleReviews("thailand", [
      {
        rating: 5,
        title: "Beautiful tropical beaches",
        text: "Sample feedback: The clear blue water, sandy beaches and island views created a wonderful tropical atmosphere.",
      },
      {
        rating: 4,
        title: "Exciting island adventure",
        text: "Sample feedback: Exploring different islands and enjoying the coastal scenery was an exciting experience.",
      },
      {
        rating: 5,
        title: "Memorable beach holiday",
        text: "Sample feedback: The beaches, island excursions and lively atmosphere made the trip enjoyable.",
      },
      {
        rating: 4,
        title: "Wonderful Thailand getaway",
        text: "Sample feedback: The tropical surroundings and beautiful destinations made this a refreshing escape.",
      },
    ]),
  },
};

export default packagesData;
