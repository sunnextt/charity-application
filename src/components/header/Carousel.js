import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Header = ({images}) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="header-carousel">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {images.map((image, id, key) => (
            <Carousel.Item key={image.id}>
              <div className="home-image">
                <img
                  src={image.imgURL}
                  alt="First slide"
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
  );
};
export default Header;
