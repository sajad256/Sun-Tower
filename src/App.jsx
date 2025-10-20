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
} from "./Components/index";

export default function App() {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div>
        <Discoverthelastestproject />
      </div>
      <div>
        <TrendingListing />
      </div>
      <div>
        <Exclusiveproperties />
      </div>
      <div>
        <RecentPrepertiesforSaleAndRent />
      </div>
      <div>
        <ExploreCities />
      </div>
      <div>
        <Parking />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
