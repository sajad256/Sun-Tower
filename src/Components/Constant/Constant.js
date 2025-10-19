import {
  logo,
  feedbackImg,
  icon1,
  icon2,
  icon3,
  icon4,
  firsttown,
  secondtown,
  thirdtown,
  fourthtown,
  fifthtown,
} from "../../assets/Imges";

export const navLinks = [
  { title: "Home" },
  { title: "About" },
  {
    title: "Properties",
    dropdown: [
      { title: "All Properties", icon: icon1 },
      { title: "Trending Listings", icon: icon2 },
      { title: "Exclusive Properties", icon: icon3 },
      { title: "Explore Cities", icon: icon4 },
    ],
  },
  { title: "Contact" },
];

export const navAssets = {
  logo,
  feedbackImg,
};

export const latestProject = [
  {
    img: firsttown,
    town: "Town House",
    properties: "2 Properties",
  },
  {
    img: secondtown,
    town: "Town House",
    properties: "2 Properties",
  },
  {
    img: thirdtown,
    town: "Town House",
    properties: "2 Properties",
  },
  {
    img: fourthtown,
    town: "Town House",
    properties: "2 Properties",
  },
  {
    img: fifthtown,
    town: "Town House",
    properties: "2 Properties",
  },
];
