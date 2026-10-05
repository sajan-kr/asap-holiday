import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

/* LAYOUT */

import Layout from "./components/Layout";

/* GLOBAL WHATSAPP EXPERT */

import WhatsAppExpert from "./components/WhatsAppExpert";

/* HOME COMPONENTS */

import Hero from "./components/Hero";
import Partners from "./components/Partners";
import TrendingDestinations from "./components/TrendingDestinations";
import RecentlyBooked from "./components/RecentlyBooked";
import TrendingPackages from "./components/TrendingPackages";
import Destinations from "./components/Destinations";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";

/* NEW */

import HolidayMemories from "./components/HolidayMemories";

/* PAGES */

import PackageDetails from "./pages/PackageDetails";
import Tours from "./pages/Tours";
import TourDetails from "./pages/TourDetails";
import DestinationDetails from "./pages/DestinationDetails";

import "./App.css";


/* =========================
   HOME PAGE
========================= */

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

      {/* HOLIDAY MEMORIES */}
      <HolidayMemories />

      <Testimonials />
    </>
  );
}


/* =========================
   APP
========================= */

function App() {
  return (
    <BrowserRouter>

      {/* =================================
          MAIN WEBSITE LAYOUT
      ================================= */}

      <Layout>

        <Routes>

          {/* =========================
              HOME
          ========================= */}

          <Route
            path="/"
            element={<HomePage />}
          />


          {/* =========================
              PACKAGE DETAILS
          ========================= */}

          <Route
            path="/package/:slug"
            element={<PackageDetails />}
          />


          {/* =========================
              TOURS
          ========================= */}

          <Route
            path="/tours"
            element={<Tours />}
          />

          <Route
            path="/tours/:country"
            element={<Tours />}
          />

          <Route
            path="/tour/:slug"
            element={<TourDetails />}
          />


          {/* =========================
              DESTINATION DETAILS
          ========================= */}

          <Route
            path="/destination/:slug"
            element={<DestinationDetails />}
          />

        </Routes>

      </Layout>


      {/* =================================
          GLOBAL WHATSAPP TRAVEL EXPERT
          Shows on ALL PAGES
      ================================= */}

      <WhatsAppExpert />

    </BrowserRouter>
  );
}

export default App;