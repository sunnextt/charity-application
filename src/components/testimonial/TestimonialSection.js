import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Testimonial = ({images}) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="section-testimonial">
      <div className="u-center-text u-margin-bottom-medium ">
        <h2 className="heading-secondary-3 u-margin-top-big">testimonials</h2>
      </div>
        <div className="row">
          <div className="col-1-of-2">
              <div className="testy-people u-margin-bottom-medium">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              {images.map(({img, key, id, content, name}) => (
                <Carousel.Item className="testy-center" key={id}>
                  <div className="slider-content" >
                    <img
                      className="image-slide"
                      src={img}
                      alt="First"
                    />
                    <div className="slider-caption">
                      <cite>{name}</cite>
                      <blockquote>
                        {content}
                      </blockquote>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          </div>
          <div className="col-1-of-2">
            <h1>grid2</h1>
          </div>
      </div>
    </div>
  );
};
export default Testimonial;
