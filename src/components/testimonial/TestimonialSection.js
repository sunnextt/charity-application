import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const Testimonial = ({images}) => {


  return (
    <div className="section-testimonial">
      <div className="u-center-text u-margin-bottom-medium ">
        <h2 className="heading-secondary u-margin-top-big">testimonials</h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="testimonials">
            <Slider autoplay={4000}>
              {images.map(({ img, index, content, name }) => (
                <div
                  key={index}
                  style={{
                    background: `url('${""}') no-repeat center center`,
                  }}
                >
                  <div className="center">
                    <div className="slider-content">
                      <img className="image-slide" src={img} alt="First" />
                      <div className="slider-caption">
                        <cite>{name}</cite>
                        <blockquote>{content}</blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="col-1-of-2">
          <div>
            <Slider autoplay={4000}>
              {images.map(({ index, image, content }) => (
                <div
                  key={index}
                  style={{
                    background: `url('${image}') no-repeat center center`,
                  }}
                >
                  <div className="center"></div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
