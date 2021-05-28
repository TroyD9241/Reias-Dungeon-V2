import React from "react";

import ImageGrid from "../ImageGrid";
// import Carousel from "../Carousel";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="page">
      <div className="homepage-outer-shell">
        <h1>Deviations</h1>
        <ImageGrid />
        <div className="homepage-deviations-container"></div>
      </div>
    </div>
  );
};

export default HomePage;
