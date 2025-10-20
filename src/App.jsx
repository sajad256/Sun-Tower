import React from "react";
import {
  Navbar,
  Hero,
  Discoverthelastestproject,
  TrendingListing,
  Exclusiveproperties,
  RecentPrepertiesforSaleAndRent,
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
    </>
  );
}
