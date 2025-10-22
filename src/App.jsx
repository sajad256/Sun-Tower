import React from "react";
import {
  Navbar,
  Hero,
  Discoverthelastestproject,
  TrendingListing,
  Exclusiveproperties,
  RecentPrepertiesforSaleAndRent,
  ExploreCities,
  Parking,
  Footer,
  Aboutpage,
} from "./Components/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home page: all sections */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Discoverthelastestproject />
              <TrendingListing />
              <Exclusiveproperties />
              <RecentPrepertiesforSaleAndRent />
              <ExploreCities />
              <Parking />
              <Footer />
            </>
          }
        />

        {/* About page */}
        <Route path="/about" element={<Aboutpage />} />
      </Routes>
    </Router>
  );
}
