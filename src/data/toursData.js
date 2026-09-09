const toursData = [
  // =====================================================
  // ID 1 - DUBAI
  // =====================================================
  {
    id: 1,
    slug: "dubai",
    title: "Dubai Premium Tour",
    location: "Dubai, UAE",
    image: "/images/Luxury-Dubai-Tour-1.webp",
    video: "/video/dubai.mp4",
    duration: "5 Nights / 6 Days",
    price: "₹1,89,000",
    brochure: "/brochures/dubai.pdf",
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
      "/images/dubai2.webp",
      "/images/dubai3.webp",
      "/images/dubai4.webp",
      "/images/dubai5.webp",
      "/images/dubai6.webp",
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

  // =====================================================
  // ID 2 - BALI
  // =====================================================
  {
    id: 2,
    slug: "bali",
    title: "Bali Luxury Retreat",
    location: "Bali, Indonesia",
    image: "/images/bali-resort.jpg",
    video: "/video/bali.mp4",
    duration: "5 Nights / 6 Days",
    price: "₹1,59,000",
    brochure: "/brochures/bali.pdf",
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
      "/images/bali2.webp",
      "/images/bali3.webp",
      "/images/bali4.webp",
      "/images/bali5.webp",
      "/images/bali6.webp",
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

  // =====================================================
  // ID 3 - MALDIVES
  // =====================================================
  {
    id: 3,
    slug: "maldives",
    title: "Maldives Luxury Escape",
    location: "Maldives",
    image: "/images/maldives.jpg",
    video: "/video/maldives.mp4",
    duration: "6 Nights / 7 Days",
    price: "₹2,09,000",
    brochure: "/brochures/maldives.pdf",
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
      "/images/maldives2.webp",
      "/images/maldives3.webp",
      "/images/maldives4.webp",
      "/images/maldives5.webp",
      "/images/maldives6.webp",
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

  // =====================================================
  // ID 4 - SWITZERLAND
  // =====================================================
  {
    id: 4,
    slug: "switzerland",
    title: "Swiss Alps Experience",
    location: "Switzerland",
    image: "/images/switzerland.jpg",
    video: "/video/switzerland.mp4",
    duration: "8 Nights / 9 Days",
    price: "₹2,89,000",
    brochure: "/brochures/switzerland.pdf",
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
      "/images/switzerland2.webp",
      "/images/switzerland3.webp",
      "/images/switzerland4.webp",
      "/images/switzerland5.webp",
      "/images/switzerland6.webp",
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

  // =====================================================
  // ID 5 - THAILAND
  // =====================================================
  {
    id: 5,
    slug: "thailand",
    title: "Thailand Island Escape",
    location: "Thailand",
    image: "/images/thailand.webp",
    video: "/video/thailand.mp4",
    duration: "5 Nights / 6 Days",
    price: "₹99,000",
    brochure: "/brochures/thailand.pdf",
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
      "/images/thailand.webp",
      "/images/thailand2.webp",
      "/images/thailand3.webp",
      "/images/thailand4.webp",
      "/images/thailand5.webp",
      "/images/thailand6.webp",
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

  // =====================================================
  // ID 6 - SINGAPORE
  // =====================================================
  {
    id: 6,
    slug: "singapore",
    title: "Singapore Family Tour",
    location: "Singapore",
    image: "/images/singapore.webp",
    video: "/video/singapore.mp4",
    duration: "4 Nights / 5 Days",
    price: "₹1,29,000",
    brochure: "/brochures/singapore.pdf",
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
      "/images/singapore.webp",
      "/images/singapore2.webp",
      "/images/singapore3.webp",
      "/images/singapore4.webp",
      "/images/singapore5.webp",
      "/images/singapore6.webp",
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

  // =====================================================
  // ID 7 - JAPAN
  // =====================================================
  {
    id: 7,
    slug: "japan",
    title: "Japan Cultural Escape",
    location: "Japan",
    image: "/images/japan.webp",
    video: "/video/japan.mp4",
    duration: "6 Nights / 7 Days",
    price: "₹2,49,000",
    brochure: "/brochures/japan.pdf",
    rating: 4.9,
    reviews: 142,
    offer: "20% OFF",

    description:
      "Discover Japan's perfect blend of ancient traditions, modern cities, beautiful temples, Mount Fuji and unforgettable cultural experiences.",

    highlights: [
      "Tokyo City Tour",
      "Mount Fuji",
      "Kyoto Temples",
      "Shibuya Crossing",
      "Bullet Train",
      "Osaka Tour",
      "Airport Transfers",
      "Daily Breakfast",
    ],

    gallery: [
      "/images/japan.webp",
      "/images/japan2.webp",
      "/images/japan3.webp",
      "/images/japan4.webp",
      "/images/japan5.webp",
      "/images/japan6.webp",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Tokyo",
        description:
          "Airport pickup and transfer to your hotel. Evening at leisure.",
      },
      {
        day: "Day 2",
        title: "Tokyo City Tour",
        description:
          "Visit Shibuya Crossing, Tokyo Tower, Asakusa and Senso-ji Temple.",
      },
      {
        day: "Day 3",
        title: "Mount Fuji",
        description:
          "Enjoy a scenic day trip to Mount Fuji and surrounding attractions.",
      },
      {
        day: "Day 4",
        title: "Kyoto",
        description:
          "Travel by bullet train and explore Kyoto's famous temples and traditional streets.",
      },
      {
        day: "Day 5",
        title: "Kyoto Cultural Tour",
        description:
          "Visit Fushimi Inari Shrine, Arashiyama Bamboo Forest and local markets.",
      },
      {
        day: "Day 6",
        title: "Osaka",
        description:
          "Explore Osaka Castle, Dotonbori and the vibrant city streets.",
      },
      {
        day: "Day 7",
        title: "Departure",
        description:
          "Hotel checkout and airport transfer for your return flight.",
      },
    ],
  },

  // =====================================================
  // ID 8 - PARIS
  // =====================================================
  {
    id: 8,
    slug: "paris",
    title: "Paris Romantic Getaway",
    location: "Paris, France",
    image: "/images/paris.jpg",
    video: "/video/paris.mp4",
    duration: "5 Nights / 6 Days",
    price: "₹2,19,000",
    brochure: "/brochures/paris.pdf",
    rating: 4.8,
    reviews: 128,
    offer: "15% OFF",

    description:
      "Experience the romance and elegance of Paris with the Eiffel Tower, Louvre Museum, Seine River cruise and charming French streets.",

    highlights: [
      "Eiffel Tower",
      "Louvre Museum",
      "Seine River Cruise",
      "Notre-Dame",
      "Champs-Élysées",
      "Arc de Triomphe",
      "Airport Transfers",
      "Daily Breakfast",
    ],

    gallery: [
      "/images/paris.jpg",
      "/images/paris2.jpg",
      "/images/paris3.jpg",
      "/images/paris4.jpg",
      "/images/paris5.jpg",
      "/images/paris6.jpg",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Paris",
        description:
          "Airport pickup and transfer to your hotel. Enjoy the evening at leisure.",
      },
      {
        day: "Day 2",
        title: "Eiffel Tower & Paris City Tour",
        description:
          "Visit the Eiffel Tower, Champs-Élysées and Arc de Triomphe.",
      },
      {
        day: "Day 3",
        title: "Louvre Museum",
        description:
          "Explore the Louvre Museum and enjoy the beautiful streets of central Paris.",
      },
      {
        day: "Day 4",
        title: "Seine River Cruise",
        description:
          "Enjoy a scenic Seine River cruise and discover Paris from the water.",
      },
      {
        day: "Day 5",
        title: "Montmartre & Shopping",
        description:
          "Explore Montmartre, Sacré-Cœur and enjoy free time for shopping.",
      },
      {
        day: "Day 6",
        title: "Departure",
        description:
          "Hotel checkout and transfer to Paris Airport.",
      },
    ],
  },

  // =====================================================
  // ID 9 - LONDON
  // =====================================================
  {
    id: 9,
    slug: "london",
    title: "London Heritage Tour",
    location: "London, UK",
    image: "/images/london.jpg",
    video: "/video/london.mp4",
    duration: "5 Nights / 6 Days",
    price: "₹2,29,000",
    brochure: "/brochures/london.pdf",
    rating: 4.9,
    reviews: 136,
    offer: "18% OFF",

    description:
      "Explore London's iconic landmarks, royal palaces, historic streets and vibrant culture on an unforgettable European holiday.",

    highlights: [
      "Big Ben",
      "London Eye",
      "Tower Bridge",
      "Buckingham Palace",
      "Tower of London",
      "Westminster Abbey",
      "Airport Transfers",
      "Daily Breakfast",
    ],

    gallery: [
      "/images/london.jpg",
      "/images/london2.jpg",
      "/images/london3.jpg",
      "/images/london4.jpg",
      "/images/london5.jpg",
      "/images/london6.jpg",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in London",
        description:
          "Airport pickup and transfer to your hotel. Evening at leisure.",
      },
      {
        day: "Day 2",
        title: "London City Tour",
        description:
          "Visit Big Ben, Westminster Abbey, London Eye and Buckingham Palace.",
      },
      {
        day: "Day 3",
        title: "Tower Bridge & Tower of London",
        description:
          "Explore Tower Bridge and the historic Tower of London.",
      },
      {
        day: "Day 4",
        title: "Royal London",
        description:
          "Discover Buckingham Palace, St. James's Park and London's royal landmarks.",
      },
      {
        day: "Day 5",
        title: "Shopping & Leisure",
        description:
          "Enjoy shopping at Oxford Street and explore London's famous neighbourhoods.",
      },
      {
        day: "Day 6",
        title: "Departure",
        description:
          "Hotel checkout and transfer to London Airport.",
      },
    ],
  },
];

export default toursData;