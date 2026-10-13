export const destinationsData = [
  // ================= INDIA & AROUND =================


  {
    id: 1,
    slug: "himachal-pradesh",
    title: "Himachal Pradesh",
    country: "India",
    type: "India & Around",
    location: "North India",
    price: "₹64,000",
    duration: "6 Nights / 7 Days",
    rating: "4.8",
    video: "/video/shimla.mp4",
    description: "Snow mountains, adventure valleys, cafes and scenic beauty.",
    cities: ["Shimla", "Manali", "Kasol", "Dharamshala"],

    highlights: [
      "Snow Mountains",
      "Adventure Activities",
      "Nature Views",
      "Camping",
    ],

    // NEW: Destination gallery images
    images: [
      "https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1600&auto=format&fit=crop",
    ],

    attractions: [
      {
        id: "shimla",
        name: "Shimla",
        category: "Hill Stations",
        location: "Shimla, Himachal Pradesh",
        description: "Explore Mall Road and scenic mountain views.",
        image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=900",
      },
      {
        id: "manali",
        name: "Manali",
        category: "Adventure",
        location: "Manali, Himachal Pradesh",
        description: "Enjoy mountain scenery and outdoor adventures.",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=900",
      },
      {
        id: "kasol",
        name: "Kasol",
        category: "Nature",
        location: "Kasol, Himachal Pradesh",
        description: "Discover riverside walks and peaceful surroundings.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900",
      },
      {
        id: "dharamshala",
        name: "Dharamshala",
        category: "Culture",
        location: "Dharamshala, Himachal Pradesh",
        description: "Explore monasteries and mountain views.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=900",
      },
    ],

    bookingUrl: "#destination-cta",
  },



  {
    id: 2,
    slug: "ladakh",
    title: "Ladakh",
    country: "India",
    type: "India & Around",
    location: "North India",
    price: "₹72,000",
    duration: "7 Nights / 8 Days",
    rating: "4.9",

    image:
      "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1600&auto=format&fit=crop",

    description:
      "High mountains, monasteries and thrilling road trips.",

    cities: [
      "Leh",
      "Nubra Valley",
      "Pangong",
      "Kargil",
    ],

    highlights: [
      "Bike Trips",
      "Lakes",
      "Monasteries",
      "Mountain Passes",
    ],

    // NEW: Destination gallery images
    images: [
      "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1600&auto=format&fit=crop",
    ],

    attractions: [
      {
        id: "leh",
        name: "Leh",
        category: "Culture",
        location: "Leh, Ladakh",
        description:
          "Explore historic monasteries, local markets and beautiful Himalayan scenery.",
        image:
          "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=900",
      },
      {
        id: "nubra-valley",
        name: "Nubra Valley",
        category: "Adventure",
        location: "Nubra Valley, Ladakh",
        description:
          "Discover dramatic mountains, scenic valleys and unique desert landscapes.",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900",
      },
      {
        id: "pangong",
        name: "Pangong Lake",
        category: "Nature",
        location: "Pangong Lake, Ladakh",
        description:
          "Enjoy breathtaking high-altitude lake views surrounded by mountains.",
        image:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=900",
      },
      {
        id: "kargil",
        name: "Kargil",
        category: "Culture",
        location: "Kargil, Ladakh",
        description:
          "Explore mountain landscapes, local culture and historical landmarks.",
        image:
          "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=900",
      },
    ],

    bookingUrl: "#destination-cta",
  },


  {
    id: 3,
    slug: "nepal",
    title: "Nepal",
    country: "Nepal",
    type: "India & Around",
    location: "Asia",
    price: "₹58,000",
    duration: "5 Nights / 6 Days",
    rating: "4.7",

    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop",

    description:
      "Beautiful Himalayan country with temples and adventure.",

    cities: [
      "Kathmandu",
      "Pokhara",
      "Lumbini",
      "Bhaktapur",
    ],

    highlights: [
      "Himalayas",
      "Temples",
      "Adventure",
      "Nature",
    ],

    // NEW: Destination gallery images
    images: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1600&auto=format&fit=crop",
    ],

    attractions: [
      {
        id: "kathmandu",
        name: "Kathmandu",
        category: "Culture",
        location: "Kathmandu, Nepal",
        description:
          "Discover historic temples, vibrant markets and Nepalese heritage.",
        image:
          "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=900",
      },
      {
        id: "pokhara",
        name: "Pokhara",
        category: "Nature",
        location: "Pokhara, Nepal",
        description:
          "Enjoy peaceful lakes, mountain views and beautiful Himalayan scenery.",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900",
      },
      {
        id: "lumbini",
        name: "Lumbini",
        category: "Culture",
        location: "Lumbini, Nepal",
        description:
          "Visit sacred Buddhist sites and explore peaceful monastery gardens.",
        image:
          "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=900",
      },
      {
        id: "bhaktapur",
        name: "Bhaktapur",
        category: "Culture",
        location: "Bhaktapur, Nepal",
        description:
          "Explore traditional architecture, historic squares and local craftsmanship.",
        image:
          "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&w=900",
      },
    ],

    bookingUrl: "#destination-cta",
  },



  {
    id: 4,
    slug: "sikkim",
    title: "Sikkim",
    country: "India",
    type: "India & Around",
    location: "North East India",
    price: "₹55,000",
    duration: "5 Nights / 6 Days",
    rating: "4.8",

    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1600&auto=format&fit=crop",

    description:
      "Green mountains, monasteries and peaceful landscapes.",

    cities: [
      "Gangtok",
      "Pelling",
      "Lachung",
      "Namchi",
    ],

    highlights: [
      "Snow Peaks",
      "Monasteries",
      "Waterfalls",
      "Nature",
    ],

    // NEW: Destination gallery images
    images: [
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",
    ],

    attractions: [
      {
        id: "gangtok",
        name: "Gangtok",
        category: "Culture",
        location: "Gangtok, Sikkim",
        description:
          "Explore lively markets, peaceful monasteries and beautiful mountain views.",
        image:
          "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=900",
      },
      {
        id: "pelling",
        name: "Pelling",
        category: "Nature",
        location: "Pelling, Sikkim",
        description:
          "Enjoy panoramic Himalayan views, green valleys and peaceful surroundings.",
        image:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=900",
      },
      {
        id: "lachung",
        name: "Lachung",
        category: "Adventure",
        location: "Lachung, North Sikkim",
        description:
          "Discover mountain villages, alpine scenery and spectacular valleys.",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900",
      },
      {
        id: "namchi",
        name: "Namchi",
        category: "Culture",
        location: "Namchi, Sikkim",
        description:
          "Visit spiritual landmarks and admire the peaceful landscapes of South Sikkim.",
        image:
          "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=900",
      },
    ],

    bookingUrl: "#destination-cta",
  },



  {
    id: 5,
    slug: "kailash-mansarovar",
    title: "Kailash Mansarovar",
    country: "Tibet",
    type: "India & Around",
    location: "Tibet",
    price: "₹1,85,000",
    duration: "12 Nights / 13 Days",
    rating: "4.9",

    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",

    description:
      "Sacred spiritual pilgrimage destination near Mount Kailash.",

    cities: [
      "Mount Kailash",
      "Mansarovar Lake",
    ],

    highlights: [
      "Spiritual Journey",
      "Pilgrimage",
      "Mountain Views",
      "Lake",
    ],

    // NEW: Destination gallery images
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1600&auto=format&fit=crop",
    ],

    attractions: [
      {
        id: "mount-kailash",
        name: "Mount Kailash",
        category: "Nature",
        location: "Mount Kailash, Tibet",
        description:
          "Experience the sacred mountain revered by multiple religious traditions and pilgrims.",
        image:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=900",
      },
      {
        id: "mansarovar-lake",
        name: "Mansarovar Lake",
        category: "Nature",
        location: "Lake Mansarovar, Tibet",
        description:
          "Discover a revered high-altitude lake surrounded by the vast Himalayan landscape.",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900",
      },
    ],

    bookingUrl: "#destination-cta",
  },



  {
    id: 5,
    slug: "kailash-mansarovar",
    title: "Kailash Mansarovar",
    country: "Tibet",
    type: "India & Around",
    location: "Tibet",
    price: "₹1,85,000",
    duration: "12 Nights / 13 Days",
    rating: "4.9",

    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",

    description:
      "Sacred spiritual pilgrimage destination near Mount Kailash.",

    cities: [
      "Mount Kailash",
      "Mansarovar Lake",
    ],

    highlights: [
      "Spiritual Journey",
      "Pilgrimage",
      "Mountain Views",
      "Lake",
    ],

    // NEW: Gallery images
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1600&auto=format&fit=crop",
    ],

    attractions: [
      {
        id: "mount-kailash",
        name: "Mount Kailash",
        category: "Nature",
        location: "Mount Kailash, Tibet",
        description:
          "Experience the sacred mountain revered by multiple religious traditions and pilgrims.",
        image:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=900",
      },
      {
        id: "mansarovar-lake",
        name: "Mansarovar Lake",
        category: "Nature",
        location: "Lake Mansarovar, Tibet",
        description:
          "Discover a revered high-altitude lake surrounded by the vast Himalayan landscape.",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900",
      },
    ],

    bookingUrl: "#destination-cta",
  },

  {
    id: 6,
    slug: "bhutan",
    title: "Bhutan",
    country: "Bhutan",
    type: "India & Around",
    location: "Asia",
    price: "₹68,000",
    duration: "6 Nights / 7 Days",
    rating: "4.8",

    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop",

    description:
      "Peaceful Himalayan kingdom with monasteries and valleys.",

    cities: [
      "Thimphu",
      "Paro",
      "Punakha",
    ],

    highlights: [
      "Tiger Nest",
      "Culture",
      "Mountains",
      "Peaceful Views",
    ],

    // NEW: Destination gallery images
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",
    ],

    attractions: [
      {
        id: "thimphu",
        name: "Thimphu",
        category: "Culture",
        location: "Thimphu, Bhutan",
        description:
          "Explore Bhutanese traditions, local markets and impressive cultural landmarks.",
        image:
          "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=900",
      },
      {
        id: "paro",
        name: "Paro",
        category: "Nature",
        location: "Paro, Bhutan",
        description:
          "Discover scenic valleys, traditional architecture and the famous Tiger's Nest area.",
        image:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=900",
      },
      {
        id: "punakha",
        name: "Punakha",
        category: "Culture",
        location: "Punakha, Bhutan",
        description:
          "Visit beautiful monasteries and enjoy peaceful riverside and mountain scenery.",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900",
      },
    ],

    bookingUrl: "#destination-cta",
  },



  {
    id: 7,
    slug: "goa",
    title: "Goa",
    country: "India",
    type: "India & Around",
    location: "West India",
    price: "₹38,000",
    duration: "4 Nights / 5 Days",
    rating: "4.7",

    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1600&auto=format&fit=crop",

    description:
      "Beach destination with nightlife, resorts and water sports.",

    cities: [
      "North Goa",
      "South Goa",
      "Panjim",
    ],

    highlights: [
      "Beaches",
      "Nightlife",
      "Water Sports",
      "Resorts",
    ],

    // NEW: Destination gallery images
    images: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1600&auto=format&fit=crop",
    ],

    attractions: [
      {
        id: "baga-beach",
        name: "Baga Beach",
        category: "Beaches",
        location: "Baga, North Goa",
        description:
          "Enjoy sandy shores, lively beach shacks and exciting water sports.",
        image:
          "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=900",
      },
      {
        id: "palolem-beach",
        name: "Palolem Beach",
        category: "Nature",
        location: "Palolem, South Goa",
        description:
          "Relax on a scenic beach surrounded by palm trees and calm coastal views.",
        image:
          "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=900",
      },
      {
        id: "old-goa",
        name: "Old Goa",
        category: "Culture",
        location: "Old Goa, Goa",
        description:
          "Explore historic churches, heritage architecture and Portuguese-era landmarks.",
        image:
          "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=900",
      },
      {
        id: "panjim",
        name: "Panjim",
        category: "Culture",
        location: "Panaji, Goa",
        description:
          "Discover colorful streets, riverside views and the charm of Goa's capital.",
        image:
          "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=900",
      },
    ],

    bookingUrl: "#destination-cta",
  },



  {
    id: 8,
    slug: "kerala",
    title: "Kerala",
    country: "India",
    type: "India & Around",
    location: "South India",
    price: "₹48,000",
    duration: "5 Nights / 6 Days",
    rating: "4.8",

    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1600&auto=format&fit=crop",

    description:
      "Backwaters, tea plantations and tropical beaches.",

    cities: [
      "Munnar",
      "Alleppey",
      "Kochi",
      "Thekkady",
    ],

    highlights: [
      "Backwaters",
      "Tea Gardens",
      "Houseboats",
      "Nature",
    ],

    // NEW: Destination gallery images
    images: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1600&auto=format&fit=crop",
    ],

    attractions: [
      {
        id: "munnar",
        name: "Munnar",
        category: "Nature",
        location: "Munnar, Kerala",
        description:
          "Explore rolling tea plantations, misty hills and refreshing mountain scenery.",
        image:
          "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=900",
      },
      {
        id: "alleppey",
        name: "Alleppey",
        category: "Backwaters",
        location: "Alappuzha, Kerala",
        description:
          "Enjoy tranquil backwaters, traditional houseboats and scenic village waterways.",
        image:
          "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=900",
      },
      {
        id: "kochi",
        name: "Kochi",
        category: "Culture",
        location: "Kochi, Kerala",
        description:
          "Discover historic streets, waterfront views and the cultural charm of Fort Kochi.",
        image:
          "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=900",
      },
      {
        id: "thekkady",
        name: "Thekkady",
        category: "Wildlife",
        location: "Thekkady, Kerala",
        description:
          "Experience lush forests, spice plantations and nature around Periyar.",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900",
      },
    ],

    bookingUrl: "#destination-cta",
  },



  {
    id: 9,
    slug: "kashmir",
    title: "Kashmir",
    country: "India",
    type: "India & Around",
    location: "North India",
    price: "₹62,000",
    duration: "6 Nights / 7 Days",
    rating: "4.9",

    image:
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1600&auto=format&fit=crop",

    description:
      "Paradise on earth with lakes, valleys and snow mountains.",

    cities: [
      "Srinagar",
      "Gulmarg",
      "Pahalgam",
      "Sonmarg",
    ],

    highlights: [
      "Houseboats",
      "Snow",
      "Valleys",
      "Shikara Ride",
    ],

    // NEW: Destination gallery images
    images: [
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1600&auto=format&fit=crop",
    ],

    attractions: [
      {
        id: "srinagar",
        name: "Srinagar",
        category: "Nature",
        location: "Srinagar, Jammu and Kashmir",
        description:
          "Enjoy Dal Lake, traditional houseboats, Mughal gardens and peaceful Shikara rides.",
        image:
          "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=900",
      },
      {
        id: "gulmarg",
        name: "Gulmarg",
        category: "Adventure",
        location: "Gulmarg, Jammu and Kashmir",
        description:
          "Experience mountain scenery, snowy landscapes and the famous Gulmarg Gondola.",
        image:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=900",
      },
      {
        id: "pahalgam",
        name: "Pahalgam",
        category: "Nature",
        location: "Pahalgam, Jammu and Kashmir",
        description:
          "Discover pine forests, riverside views and beautiful green mountain valleys.",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900",
      },
      {
        id: "sonmarg",
        name: "Sonmarg",
        category: "Mountains",
        location: "Sonmarg, Jammu and Kashmir",
        description:
          "Explore alpine meadows, snow-covered peaks and spectacular Himalayan scenery.",
        image:
          "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=900",
      },
    ],

    bookingUrl: "#destination-cta",
  },


  {
    id: 10,
    slug: "andaman",
    title: "Andaman",
    country: "India",
    type: "India & Around",
    location: "Island",
    price: "₹70,000",
    duration: "5 Nights / 6 Days",
    rating: "4.8",

    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",

    description:
      "Crystal clear beaches and island adventure destination.",

    cities: [
      "Port Blair",
      "Havelock",
      "Neil Island",
    ],

    highlights: [
      "Scuba Diving",
      "Island Tours",
      "Beaches",
      "Water Sports",
    ],

    // NEW: Destination gallery images
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1600&auto=format&fit=crop",
    ],

    attractions: [
      {
        id: "port-blair",
        name: "Port Blair",
        category: "Culture",
        location: "Port Blair, Andaman and Nicobar Islands",
        description:
          "Discover island heritage, coastal scenery and the historic Cellular Jail.",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=900",
      },
      {
        id: "havelock",
        name: "Havelock Island",
        category: "Beaches",
        location: "Swaraj Dweep, Andaman and Nicobar Islands",
        description:
          "Relax on beautiful beaches and explore exciting snorkeling and scuba diving experiences.",
        image:
          "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=900",
      },
      {
        id: "neil-island",
        name: "Neil Island",
        category: "Nature",
        location: "Shaheed Dweep, Andaman and Nicobar Islands",
        description:
          "Enjoy quiet beaches, clear waters and scenic island landscapes.",
        image:
          "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=900",
      },
    ],

    bookingUrl: "#destination-cta",
  },

  // ================= INTERNATIONAL =================

  {
    id: 11,
    slug: "bali",
    title: "Bali",
    country: "Indonesia",
    type: "International",
    location: "Asia",
    price: "₹82,000",
    duration: "5 Nights / 6 Days",
    rating: "4.9",

    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop",

    // Destination Gallery images
    images: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop",

      // Tropical beach
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",

      // Waterfall and rainforest
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=1600&auto=format&fit=crop",

      // Sunset by the ocean
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1600&auto=format&fit=crop",

      // Green tropical landscape
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1600&auto=format&fit=crop",

      // Turquoise sea
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=1600&auto=format&fit=crop",

      // Tropical island scenery
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1600&auto=format&fit=crop",

      // Scenic tropical coast
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=1600&auto=format&fit=crop",
    ],

    description:
      "Luxury beaches, waterfalls and tropical resorts.",

    cities: [
      "Ubud",
      "Kuta",
      "Seminyak",
      "Nusa Penida",
    ],

    highlights: [
      "Luxury Villas",
      "Beach Clubs",
      "Waterfalls",
      "Temples",
    ],

    attractions: [
      {
        id: "ubud",
        name: "Ubud",
        category: "Nature",
        location: "Ubud, Bali, Indonesia",
        description:
          "Explore lush rice terraces, tropical forests and traditional Balinese culture.",
        image:
          "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=900",
      },
      {
        id: "kuta",
        name: "Kuta Beach",
        category: "Beaches",
        location: "Kuta, Bali, Indonesia",
        description:
          "Enjoy sandy beaches, spectacular sunsets and lively coastal experiences.",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=900",
      },
      {
        id: "nusa-penida",
        name: "Nusa Penida",
        category: "Adventure",
        location: "Nusa Penida, Bali, Indonesia",
        description:
          "Discover dramatic coastal cliffs, turquoise waters and scenic island viewpoints.",
        image:
          "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=900",
      },
    ],

    bookingUrl: "#destination-cta",
  },


  {
    id: 12,
    slug: "dubai",
    title: "Dubai",
    country: "UAE",
    type: "International",
    location: "Middle East",
    price: "₹95,000",
    duration: "4 Nights / 5 Days",
    rating: "4.8",

    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",

    description:
      "Luxury city with skyscrapers, shopping and desert safari.",

    cities: ["Downtown Dubai", "Marina", "Palm Jumeirah"],

    highlights: [
      "Burj Khalifa",
      "Desert Safari",
      "Luxury Shopping",
      "Skyline",
    ],

    // NEW: Destination gallery images
    images: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=1600&auto=format&fit=crop",
    ],

    attractions: [
      {
        id: "burj-khalifa",
        name: "Burj Khalifa",
        category: "Landmarks",
        location: "Downtown Dubai, UAE",
        description:
          "Admire the world's iconic skyscraper and panoramic city views.",
        image:
          "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=900",
      },
      {
        id: "dubai-marina",
        name: "Dubai Marina",
        category: "City",
        location: "Dubai Marina, UAE",
        description:
          "Explore waterfront promenades, modern architecture and vibrant dining spots.",
        image:
          "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=900",
      },
      {
        id: "palm-jumeirah",
        name: "Palm Jumeirah",
        category: "Luxury",
        location: "Palm Jumeirah, Dubai, UAE",
        description:
          "Discover luxury resorts, beautiful beaches and impressive coastal views.",
        image:
          "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=900",
      },
    ],

    bookingUrl: "#destination-cta",
  },


  {
    id: 13,
    slug: "maldives",
    title: "Maldives",
    country: "Maldives",
    type: "International",
    location: "Indian Ocean",
    price: "₹1,25,000",
    duration: "4 Nights / 5 Days",
    rating: "5.0",

    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1600&auto=format&fit=crop",

    description:
      "Private island paradise with water villas and beaches.",

    cities: ["Male", "Maafushi", "Vaadhoo Island"],

    highlights: [
      "Water Villas",
      "Luxury Resorts",
      "Romantic Stay",
      "Blue Ocean",
    ],

    // NEW: Destination gallery images
    images: [
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1600&auto=format&fit=crop",
    ],

    attractions: [
      {
        id: "male",
        name: "Malé",
        category: "Culture",
        location: "Malé, Maldives",
        description:
          "Discover the capital's local markets, waterfront and island culture.",
        image:
          "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=900",
      },
      {
        id: "maafushi",
        name: "Maafushi Island",
        category: "Beaches",
        location: "Maafushi, Maldives",
        description:
          "Enjoy tropical beaches, clear waters and exciting marine activities.",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=900",
      },
      {
        id: "vaadhoo",
        name: "Vaadhoo Island",
        category: "Nature",
        location: "Vaadhoo Island, Maldives",
        description:
          "Experience peaceful island scenery and the region's celebrated coastal beauty.",
        image:
          "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=900",
      },
    ],

    bookingUrl: "#destination-cta",
  },



  {
    id: 14,
    slug: "thailand",
    title: "Thailand",
    country: "Thailand",
    type: "International",
    location: "Asia",
    price: "₹78,000",
    duration: "5 Nights / 6 Days",
    rating: "4.8",

    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1600&auto=format&fit=crop",

    description:
      "Beautiful beaches, nightlife and island adventures.",

    cities: ["Bangkok", "Phuket", "Krabi", "Pattaya"],

    highlights: [
      "Island Tours",
      "Nightlife",
      "Beaches",
      "Street Food",
    ],

    // NEW: Destination gallery images
    images: [
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=1600&auto=format&fit=crop",
    ],

    attractions: [
      {
        id: "bangkok",
        name: "Bangkok",
        category: "City",
        location: "Bangkok, Thailand",
        description:
          "Explore vibrant markets, ornate temples and exciting street-food culture.",
        image:
          "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=900",
      },
      {
        id: "phuket",
        name: "Phuket",
        category: "Beaches",
        location: "Phuket, Thailand",
        description:
          "Relax on tropical beaches and discover island excursions and coastal viewpoints.",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=900",
      },
      {
        id: "krabi",
        name: "Krabi",
        category: "Adventure",
        location: "Krabi, Thailand",
        description:
          "Admire limestone cliffs, turquoise waters and beautiful island scenery.",
        image:
          "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=900",
      },
    ],

    bookingUrl: "#destination-cta",
  },


  {
    id: 15,
    slug: "switzerland",
    title: "Switzerland",
    country: "Switzerland",
    type: "International",
    location: "Europe",
    price: "₹2,10,000",
    duration: "7 Nights / 8 Days",
    rating: "4.9",

    image:
      "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=1600&auto=format&fit=crop",

    description:
      "Snow mountains, scenic trains and luxury experiences.",

    cities: ["Zurich", "Lucerne", "Interlaken", "Geneva"],

    highlights: [
      "Swiss Alps",
      "Luxury Trains",
      "Snow Activities",
      "Lakes",
    ],

    // NEW: Destination gallery images
    images: [
      "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    ],

    attractions: [
      {
        id: "zurich",
        name: "Zurich",
        category: "City",
        location: "Zurich, Switzerland",
        description:
          "Discover a charming old town, lakeside scenery and elegant Swiss city life.",
        image:
          "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=900",
      },
      {
        id: "lucerne",
        name: "Lucerne",
        category: "Culture",
        location: "Lucerne, Switzerland",
        description:
          "Explore historic bridges, a beautiful lake and mountain panoramas.",
        image:
          "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=900",
      },
      {
        id: "interlaken",
        name: "Interlaken",
        category: "Adventure",
        location: "Interlaken, Switzerland",
        description:
          "Enjoy Alpine views, outdoor activities and spectacular mountain scenery.",
        image:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=900",
      },
    ],

    bookingUrl: "#destination-cta",
  },


  {
    id: 16,
    slug: "singapore",
    title: "Singapore",
    country: "Singapore",
    type: "International",
    location: "Asia",
    price: "₹95,000",
    duration: "4 Nights / 5 Days",
    rating: "4.8",

    image:
      "https://images.unsplash.com/photo-1496939376851-89342e90adcd?q=80&w=1600&auto=format&fit=crop",

    description:
      "Modern city with skyline, shopping and attractions.",

    cities: ["Marina Bay", "Sentosa", "Orchard Road"],

    highlights: [
      "Marina Bay Sands",
      "Universal Studios",
      "Gardens By The Bay",
      "Luxury Shopping",
    ],

    // NEW: Destination gallery images
    images: [
      "https://images.unsplash.com/photo-1496939376851-89342e90adcd?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",
    ],

    attractions: [
      {
        id: "marina-bay",
        name: "Marina Bay",
        category: "Landmarks",
        location: "Marina Bay, Singapore",
        description:
          "Experience the iconic skyline, waterfront promenade and spectacular city views.",
        image:
          "https://images.unsplash.com/photo-1496939376851-89342e90adcd?q=80&w=900",
      },
      {
        id: "sentosa",
        name: "Sentosa Island",
        category: "Adventure",
        location: "Sentosa, Singapore",
        description:
          "Enjoy island attractions, sandy beaches and exciting family activities.",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=900",
      },
      {
        id: "gardens-by-the-bay",
        name: "Gardens by the Bay",
        category: "Nature",
        location: "Marina Bay, Singapore",
        description:
          "Explore futuristic gardens, lush greenery and striking architectural displays.",
        image:
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=900",
      },
    ],

    bookingUrl: "#destination-cta",
  },


  {
    id: 17,
    slug: "paris",
    title: "Paris",
    country: "France",
    type: "International",
    location: "Europe",
    price: "₹1,85,000",
    duration: "6 Nights / 7 Days",
    rating: "4.9",

    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1600&auto=format&fit=crop",

    description:
      "Romantic city with Eiffel Tower and luxury fashion.",

    cities: ["Eiffel Tower", "Louvre Museum", "Montmartre"],

    highlights: [
      "Eiffel Tower",
      "Luxury Fashion",
      "French Cafes",
      "Museums",
    ],

    // NEW: Destination gallery images
    images: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566139884669-3f9b1f3a3a34?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",
    ],

    attractions: [
      {
        id: "eiffel-tower",
        name: "Eiffel Tower",
        category: "Landmarks",
        location: "Paris, France",
        description:
          "Admire Paris's famous landmark and sweeping views across the city.",
        image:
          "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=900",
      },
      {
        id: "louvre",
        name: "Louvre Museum",
        category: "Culture",
        location: "Paris, France",
        description:
          "Discover celebrated art collections and the museum's iconic glass pyramid.",
        image:
          "https://images.unsplash.com/photo-1566139884669-3f9b1f3a3a34?q=80&w=900",
      },
      {
        id: "montmartre",
        name: "Montmartre",
        category: "Culture",
        location: "Montmartre, Paris, France",
        description:
          "Explore artistic streets, charming cafes and historic Parisian architecture.",
        image:
          "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=900",
      },
    ],

    bookingUrl: "#destination-cta",
  },


  {
    id: 18,
    slug: "turkey",
    title: "Turkey",
    country: "Turkey",
    type: "International",
    location: "Europe & Asia",
    price: "₹1,10,000",
    duration: "6 Nights / 7 Days",
    rating: "4.8",

    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1600&auto=format&fit=crop",

    description:
      "Historic architecture, hot air balloons and culture.",

    cities: ["Istanbul", "Cappadocia", "Antalya"],

    highlights: [
      "Hot Air Balloons",
      "Mosques",
      "Turkish Food",
      "Historic Culture",
    ],

    // NEW: Destination gallery images
    images: [
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop",
    ],

    attractions: [
      {
        id: "istanbul",
        name: "Istanbul",
        category: "Culture",
        location: "Istanbul, Turkey",
        description:
          "Discover historic mosques, bustling bazaars and landmarks spanning two continents.",
        image:
          "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=900",
      },
      {
        id: "cappadocia",
        name: "Cappadocia",
        category: "Adventure",
        location: "Cappadocia, Turkey",
        description:
          "Experience unusual rock formations, cave dwellings and famous balloon-filled skies.",
        image:
          "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?q=80&w=900",
      },
      {
        id: "antalya",
        name: "Antalya",
        category: "Beaches",
        location: "Antalya, Turkey",
        description:
          "Enjoy Mediterranean coastlines, historic streets and beautiful seaside scenery.",
        image:
          "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=900",
      },
    ],

    bookingUrl: "#destination-cta",
  },


  {
    id: 19,
    slug: "vietnam",
    title: "Vietnam",
    country: "Vietnam",
    type: "International",
    location: "Asia",
    price: "₹82,000",
    duration: "5 Nights / 6 Days",
    rating: "4.7",

    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1600&auto=format&fit=crop",

    description:
      "Natural beauty, islands and vibrant street culture.",

    cities: ["Hanoi", "Da Nang", "Ho Chi Minh"],

    highlights: [
      "Cruise Tours",
      "Street Food",
      "Beaches",
      "Culture",
    ],

    // NEW: Destination gallery images
    images: [
      "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531737212413-667205e1cda7?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=1600&auto=format&fit=crop",
    ],

    attractions: [
      {
        id: "hanoi",
        name: "Hanoi",
        category: "Culture",
        location: "Hanoi, Vietnam",
        description:
          "Explore historic streets, traditional architecture and lively Vietnamese food markets.",
        image:
          "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=900",
      },
      {
        id: "da-nang",
        name: "Da Nang",
        category: "Beaches",
        location: "Da Nang, Vietnam",
        description:
          "Discover sandy beaches, coastal scenery and nearby mountain attractions.",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=900",
      },
      {
        id: "ho-chi-minh",
        name: "Ho Chi Minh City",
        category: "City",
        location: "Ho Chi Minh City, Vietnam",
        description:
          "Experience bustling markets, fascinating history and vibrant city life.",
        image:
          "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=900",
      },
    ],

    bookingUrl: "#destination-cta",
  },


  {
    id: 20,
    slug: "japan",
    title: "Japan",
    video: "/video/japan.mp4",
    country: "Japan",
    type: "International",
    location: "Asia",
    price: "₹2,40,000",
    duration: "7 Nights / 8 Days",
    rating: "5.0",

    // NEW: Main destination image
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1600&auto=format&fit=crop",

    description: "Technology, cherry blossoms and traditional culture.",

    cities: ["Tokyo", "Kyoto", "Osaka", "Mount Fuji"],

    highlights: [
      "Cherry Blossoms",
      "Anime Culture",
      "Bullet Train",
      "Traditional Temples",
    ],

    // NEW: Destination gallery images
    images: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1600&auto=format&fit=crop",
    ],

    attractions: [
      {
        id: "tokyo",
        name: "Tokyo",
        category: "City",
        location: "Tokyo, Japan",
        description: "Explore futuristic districts and Japanese city life.",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=900",
      },
    ],

    bookingUrl: "#destination-cta",
  },

];