import React from "react";
import { Container } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function PhotoGallery() {
  return (
    <Carousel>
      <div>
        <img src="src/Assets/about.png" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="src/Assets/research1.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="../../Assets/research1.jpg" />
        <p className="legend">Legend 1</p>
      </div>
    </Carousel>
  );
}

export default PhotoGallery;
