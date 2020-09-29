import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Header = ({images}) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {images.map((image, key, content, name) => (
            <Carousel.Item>
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
