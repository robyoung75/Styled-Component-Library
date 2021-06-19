import React from "react";

// define breakpoints, I used Google Chrome Dev Tool Sizes
const size = {
  mobileS: "320px",
  mobileM: "37ppx",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1140px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobilel})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
};

function MediaQuery() {
  return <div></div>;
}

export default MediaQuery;
