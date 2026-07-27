const toursData = [
  {
    id: 1,
    slug: "dubai",

    title: "Dubai Premium Tour",

    location: "Dubai, UAE",

    image: "/images/Luxury-Dubai-Tour-1.webp",

    duration: "5 Nights / 6 Days",

    price: "₹1,89,000",

    rating: 4.8,

    reviews: 120,

    offer: "30% OFF",

    description:
      "Experience the glamour of Dubai with Burj Khalifa, Desert Safari, Marina Cruise, luxury shopping and premium hotels.",

    highlights: [
      "Burj Khalifa Entry",
      "Desert Safari",
      "Marina Dinner Cruise",
      "Palm Jumeirah",
      "Dubai Mall",
      "Airport Transfers",
      "Daily Breakfast",
      "Professional Guide",
    ],

    gallery: [
      "/images/Luxury-Dubai-Tour-1.webp",
      "/images/dubai2.jpg",
      "/images/dubai3.jpg",
      "/images/dubai4.jpg",
      "/images/dubai5.jpg",
      "/images/dubai6.jpg",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Dubai",
        description:
          "Meet our representative at Dubai Airport and transfer to your hotel. Check-in and enjoy the evening at leisure.",
      },
      {
        day: "Day 2",
        title: "Dubai City Tour",
        description:
          "Visit Burj Khalifa, Dubai Mall, Dubai Frame and Jumeirah Beach.",
      },
      {
        day: "Day 3",
        title: "Desert Safari",
        description:
          "Experience dune bashing, camel ride, BBQ dinner and cultural performances.",
      },
      {
        day: "Day 4",
        title: "Marina Cruise",
        description:
          "Enjoy shopping during the day and Marina Dinner Cruise in the evening.",
      },
      {
        day: "Day 5",
        title: "Leisure Day",
        description:
          "Relax at your hotel or enjoy optional sightseeing and shopping.",
      },
      {
        day: "Day 6",
        title: "Departure",
        description:
          "Check out and transfer to Dubai International Airport.",
      },
    ],
  },

  {
    id: 2,
    slug: "bali",

    title: "Bali Luxury Retreat",

    location: "Bali, Indonesia",

    image: "/images/bali-resort.jpg",

    duration: "5 Nights / 6 Days",

    price: "₹1,59,000",

    rating: 4.9,

    reviews: 165,

    offer: "25% OFF",

    description:
      "Discover Bali's beautiful beaches, waterfalls, temples, rice terraces and luxury resorts with unforgettable island experiences.",

    highlights: [
      "Ubud Tour",
      "Tanah Lot Temple",
      "Rice Terraces",
      "Waterfalls",
      "Luxury Resort",
      "Airport Transfers",
      "Daily Breakfast",
      "Private Cab",
    ],

    gallery: [
      "/images/bali-resort.jpg",
      "/images/bali2.jpg",
      "/images/bali3.jpg",
      "/images/bali4.jpg",
      "/images/bali5.jpg",
      "/images/bali6.jpg",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Bali",
        description:
          "Airport pickup and hotel check-in followed by leisure time.",
      },
      {
        day: "Day 2",
        title: "Ubud Tour",
        description:
          "Visit Monkey Forest, Rice Terraces and local markets.",
      },
      {
        day: "Day 3",
        title: "Temple Tour",
        description:
          "Explore Tanah Lot Temple and Uluwatu Temple.",
      },
      {
        day: "Day 4",
        title: "Beach Activities",
        description:
          "Enjoy beaches, water sports and sunset views.",
      },
      {
        day: "Day 5",
        title: "Free Day",
        description:
          "Relax at the resort or explore nearby attractions.",
      },
      {
        day: "Day 6",
        title: "Departure",
        description:
          "Transfer to Bali Airport for your return flight.",
      },
    ],
  },

  // Continue in Part 2...

    {
    id: 3,
    slug: "maldives",

    title: "Maldives Luxury Escape",

    location: "Maldives",

    image: "/images/maldives.jpg",

    duration: "6 Nights / 7 Days",

    price: "₹2,09,000",

    rating: 5.0,

    reviews: 210,

    offer: "35% OFF",

    description:
      "Stay in luxurious overwater villas surrounded by crystal-clear lagoons, white sandy beaches and world-class hospitality.",

    highlights: [
      "Overwater Villa",
      "Private Beach",
      "Snorkelling",
      "Sunset Cruise",
      "Spa Experience",
      "Island Hopping",
      "Airport Transfers",
      "All Meals Included",
    ],

    gallery: [
      "/images/maldives.jpg",
      "/images/maldives2.jpg",
      "/images/maldives3.jpg",
      "/images/maldives4.jpg",
      "/images/maldives5.jpg",
      "/images/maldives6.jpg",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Maldives",
        description:
          "Meet our representative and transfer to your luxury island resort.",
      },
      {
        day: "Day 2",
        title: "Water Sports",
        description:
          "Enjoy snorkelling, kayaking and crystal-clear lagoons.",
      },
      {
        day: "Day 3",
        title: "Island Exploration",
        description:
          "Explore nearby islands and experience local culture.",
      },
      {
        day: "Day 4",
        title: "Spa & Relaxation",
        description:
          "Relax with a luxury spa treatment and beach leisure.",
      },
      {
        day: "Day 5",
        title: "Sunset Cruise",
        description:
          "Enjoy a romantic sunset cruise with refreshments.",
      },
      {
        day: "Day 6",
        title: "Leisure Day",
        description:
          "Spend the day enjoying your resort facilities.",
      },
      {
        day: "Day 7",
        title: "Departure",
        description:
          "Transfer to the airport for your return journey.",
      },
    ],
  },

  {
    id: 4,
    slug: "switzerland",

    title: "Swiss Alps Experience",

    location: "Switzerland",

    image: "/images/switzerland.jpg",

    duration: "8 Nights / 9 Days",

    price: "₹2,89,000",

    rating: 4.9,

    reviews: 98,

    offer: "20% OFF",

    description:
      "Explore the breathtaking Swiss Alps with scenic train journeys, mountain adventures and charming alpine villages.",

    highlights: [
      "Mount Titlis",
      "Jungfraujoch",
      "Lucerne Tour",
      "Interlaken",
      "Swiss Rail Pass",
      "Lake Cruise",
      "Airport Transfers",
      "Breakfast Included",
    ],

    gallery: [
      "/images/switzerland.jpg",
      "/images/switzerland2.jpg",
      "/images/switzerland3.jpg",
      "/images/switzerland4.jpg",
      "/images/switzerland5.jpg",
      "/images/switzerland6.jpg",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Zurich",
        description:
          "Airport pickup and hotel check-in.",
      },
      {
        day: "Day 2",
        title: "Lucerne City Tour",
        description:
          "Visit Chapel Bridge, Lion Monument and Old Town.",
      },
      {
        day: "Day 3",
        title: "Mount Titlis",
        description:
          "Enjoy cable cars, snow activities and panoramic views.",
      },
      {
        day: "Day 4",
        title: "Interlaken",
        description:
          "Explore Interlaken and nearby alpine villages.",
      },
      {
        day: "Day 5",
        title: "Jungfraujoch",
        description:
          "Visit the Top of Europe by scenic railway.",
      },
      {
        day: "Day 6",
        title: "Lake Cruise",
        description:
          "Relax with a scenic cruise on Lake Lucerne.",
      },
      {
        day: "Day 7",
        title: "Leisure Day",
        description:
          "Free day for shopping or optional sightseeing.",
      },
      {
        day: "Day 8",
        title: "Zurich Exploration",
        description:
          "Visit Zurich's famous attractions and markets.",
      },
      {
        day: "Day 9",
        title: "Departure",
        description:
          "Transfer to Zurich Airport for your flight home.",
      },
    ],
  },
  {
    id: 5,
    slug: "thailand",

    title: "Thailand Island Escape",

    location: "Thailand",

    image: "/images/thailand.jpg",

    duration: "5 Nights / 6 Days",

    price: "₹99,000",

    rating: 4.8,

    reviews: 145,

    offer: "18% OFF",

    description:
      "Explore the beautiful beaches of Phuket, vibrant Bangkok, stunning islands and exciting nightlife.",

    highlights: [
      "Phi Phi Island",
      "James Bond Island",
      "Bangkok City Tour",
      "Temple Visit",
      "Beach Activities",
      "Airport Transfers",
      "Daily Breakfast",
      "Private Transfers",
    ],

    gallery: [
      "/images/thailand.jpg",
      "/images/thailand2.jpg",
      "/images/thailand3.jpg",
      "/images/thailand4.jpg",
      "/images/thailand5.jpg",
      "/images/thailand6.jpg",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Phuket",
        description:
          "Airport pickup and hotel check-in.",
      },
      {
        day: "Day 2",
        title: "Phi Phi Island Tour",
        description:
          "Full-day island tour with lunch and snorkeling.",
      },
      {
        day: "Day 3",
        title: "Bangkok City Tour",
        description:
          "Visit temples, shopping streets and local markets.",
      },
      {
        day: "Day 4",
        title: "Beach Activities",
        description:
          "Enjoy water sports and leisure time.",
      },
      {
        day: "Day 5",
        title: "Shopping",
        description:
          "Explore malls and floating markets.",
      },
      {
        day: "Day 6",
        title: "Departure",
        description:
          "Airport transfer for your return journey.",
      },
    ],
  },

  {
    id: 6,
    slug: "singapore",

    title: "Singapore Family Tour",

    location: "Singapore",

    image: "/images/singapore.jpg",

    duration: "4 Nights / 5 Days",

    price: "₹1,29,000",

    rating: 4.9,

    reviews: 170,

    offer: "15% OFF",

    description:
      "Visit Marina Bay Sands, Gardens by the Bay, Sentosa Island and Universal Studios with your family.",

    highlights: [
      "Universal Studios",
      "Sentosa Island",
      "Gardens by the Bay",
      "Marina Bay Sands",
      "Merlion Park",
      "Airport Transfers",
      "Daily Breakfast",
      "City Tour",
    ],

    gallery: [
      "/images/singapore.jpg",
      "/images/singapore2.jpg",
      "/images/singapore3.jpg",
      "/images/singapore4.jpg",
      "/images/singapore5.jpg",
      "/images/singapore6.jpg",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Singapore",
        description:
          "Airport pickup and hotel check-in.",
      },
      {
        day: "Day 2",
        title: "City Tour",
        description:
          "Visit Merlion Park, Marina Bay Sands and Gardens by the Bay.",
      },
      {
        day: "Day 3",
        title: "Universal Studios",
        description:
          "Enjoy thrilling rides and family entertainment.",
      },
      {
        day: "Day 4",
        title: "Sentosa Island",
        description:
          "Cable Car, Wings of Time and beach leisure.",
      },
      {
        day: "Day 5",
        title: "Departure",
        description:
          "Airport transfer for your return flight.",
      },
    ],
  },
];

export default toursData;