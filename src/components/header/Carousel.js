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
          {images.map(({imgURL, id, index}) =>
            <Carousel.Item key={index}>
              <div className="home-image">
                <img
                  src={imgURL}
                  alt="First slide"
                />
              </div>
            </Carousel.Item>
          )}
        </Carousel>
      </div>
  );
};
export default Header;
