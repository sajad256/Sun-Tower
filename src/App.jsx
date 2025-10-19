import React from "react";
import {
  Navbar,
  Hero,
  Discoverthelastestproject,
  TrendingListing,
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
    </>
  );
}
