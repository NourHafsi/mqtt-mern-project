import React from "react";
import { Carousel } from "react-bootstrap";
import BgSmart1 from "../../../assets/images/bg-smart5.png";
import BgSmart2 from "../../../assets/images/bg-smart7.jpg";
import BgSmart3 from "../../../assets/images/bg-smart9.jpg";

const CarouselComponent = () => {
  return (
    <div className="my-2">
      <Carousel className="carousel-card rounded">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={BgSmart1}
            alt="First slide"
            style={{ width: "800px", height: "360px" }}
          />
          <Carousel.Caption className="text-white">
            <h3 className="text-white">Start your project</h3>
            <p>Your first step in the project.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={BgSmart2}
            alt="Second slide"
            style={{ width: "800px", height: "360px" }}
          />

          <Carousel.Caption>
            <h3 className="text-white">Controle your project</h3>
            <p>Your second step in the project.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={BgSmart3}
            alt="Third slide"
            style={{ width: "800px", height: "360px" }}
          />

          <Carousel.Caption>
            <h3 className="text-white">Gain from your project</h3>
            <p>Your last step in the project.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
