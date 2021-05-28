import React from "react";

import ImageGrid from "../ImageGrid";
import Carousel from "../Carousel";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="page">
      <div className="homepage-outer-shell">
        <ImageGrid />
        <div className="homepage-deviations-container"></div>
        <div className="topics">Topics</div>
        <div className="new-artists">New Deviants</div>
        <div className="popular-deviations">Popular Deviations</div>
        <Carousel />
      </div>
    </div>
  );
};

export default HomePage;
