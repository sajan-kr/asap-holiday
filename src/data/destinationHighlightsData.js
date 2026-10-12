// Example data only. Prefer adding the attractions array to your existing destination data.
const destinationHighlightsData = [
  {
    id: "himachal-pradesh",
    slug: "himachal-pradesh",
    name: "Himachal Pradesh",
    // Change this to the real booking route in your app.
    bookingUrl: "/tours/himachal-pradesh",
    attractions: [
      {
        id: "shimla",
        name: "Shimla",
        category: "Hill Stations",
        location: "Himachal Pradesh, India",
        description: "Explore the historic hill town, scenic views, and lively Mall Road.",
        image: "/images/shimla.jpg",
        duration: "1–2 days",
        url: "",
      },
      {
        id: "manali",
        name: "Manali",
        category: "Adventure",
        location: "Himachal Pradesh, India",
        description: "Discover mountain scenery, cafés, and outdoor adventures.",
        image: "/images/manali.jpg",
        duration: "2–3 days",
        url: "",
      },
      {
        id: "dharamshala",
        name: "Dharamshala",
        category: "Culture",
        location: "Himachal Pradesh, India",
        description: "Enjoy mountain landscapes and Tibetan cultural experiences.",
        image: "/images/dharamshala.jpg",
        duration: "1–2 days",
        url: "",
      },
      {
        id: "spiti-valley",
        name: "Spiti Valley",
        category: "Nature",
        location: "Himachal Pradesh, India",
        description: "Experience dramatic high-altitude landscapes and remote villages.",
        image: "/images/spiti-valley.jpg",
        duration: "4–6 days",
        url: "",
      },
    ],
  },
];

export default destinationHighlightsData;
