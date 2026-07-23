import React from "react";

import { BrowserRouter, Routes, Route, } from "react-router-dom";

/* LAYOUT */

import Layout from "./components/Layout";

/* HOME COMPONENTS */

import Hero from "./components/Hero";
import Partners from "./components/Partners";
import TrendingDestinations from "./components/TrendingDestinations";
import RecentlyBooked from "./components/RecentlyBooked";
import TrendingPackages from "./components/TrendingPackages";
import Destinations from "./components/Destinations";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";

/* PAGES */

import PackageDetails from "./pages/PackageDetails";
import Tours from "./pages/Tours";
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

      <Testimonials />

    </>

  );

}

/* =========================  APP ========================= */

function App() {

  return (

    <BrowserRouter>

      <Layout>

        <Routes>

          {/* HOME */}

          <Route path="/" element={<HomePage />} />

          {/* PACKAGE DETAILS */}

          <Route path="/package/:slug" element={<PackageDetails />} />

          {/* TOURS */}

          <Route path="/tours/:country" element={<Tours />} />

          {/* DESTINATION DETAILS */}

          <Route path="/destination/:slug" element={<DestinationDetails />} />

        </Routes>

      </Layout>

    </BrowserRouter>

  );

}

export default App;