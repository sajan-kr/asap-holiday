
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./components/Layout";
import WhatsAppExpert from "./components/WhatsAppExpert";

import Hero from "./components/Hero";
import Partners from "./components/Partners";
import TrendingDestinations from "./components/TrendingDestinations";
import RecentlyBooked from "./components/RecentlyBooked";
import TrendingPackages from "./components/TrendingPackages";
import Destinations from "./components/Destinations";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import HolidayMemories from "./components/HolidayMemories";

import PackageDetails from "./pages/PackageDetails";
import Tours from "./pages/Tours";
import TourDetails from "./pages/TourDetails";
import DestinationDetails from "./pages/DestinationDetails";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/ServicePage";

import "./App.css";

function HomePage() {
  return (
    <>
      <Hero />
      <Partners />
      <TrendingDestinations />
      <RecentlyBooked />
      <TrendingPackages />
      <Destinations />
      <WhyChooseUs />
      <HolidayMemories />
      <Testimonials />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={<HomePage />}
          />

          {/* Package pages */}
          <Route
            path="/package/:slug"
            element={<PackageDetails />}
          />

          {/* Tour listing pages */}
          <Route
            path="/tours"
            element={<Tours />}
          />

          <Route
            path="/tours/:country"
            element={<Tours />}
          />

          {/* Individual tour details */}
          <Route
            path="/tour/:slug"
            element={<TourDetails />}
          />

          {/* Destination details */}
          <Route
            path="/destination/:slug"
            element={<DestinationDetails />}
          />

          <Route path="/flights" element={<ServicePage />} />
          <Route path="/cruise" element={<ServicePage />} />
          <Route path="/visa" element={<ServicePage />} />
          <Route path="/hotels" element={<ServicePage />} />
          <Route path="/travel-insurance" element={<ServicePage />} />
          <Route path="/contact" element={<ServicePage />} />
          <Route path="/offers" element={<ServicePage />} />
          <Route path="/track-booking" element={<ServicePage />} />
          <Route path="/support" element={<ServicePage />} />

          {/* Unknown URLs */}
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </Layout>

      <WhatsAppExpert />
    </BrowserRouter>
  );
}

export default App;