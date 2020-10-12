import React from 'react';
import Slider from 'react-animated-slider';
import content from "../home/HeaderContent"
// import 'react-animated-slider/build/horizontal.css';


function Autoplay() {
	return (
		<div>
        <Slider classNames="slider" autoplay={3000}>
  				{content.map((item, index) => (
  					<div className="slid"
  						key={index}

  						style={{ background: `url('${item.image}') no-repeat center center` }}
  					>
  						<div className="center">
  							{/* <h1>{item.title}</h1> */}
  							{/* <p>{item.description}</p> */}
  							{/* <button>{item.button}</button> */}
  						</div>
  					</div>
  				))}
      </Slider>
    </div>
    	);
    }

  export default Autoplay;













// import React, { useState } from "react";
// import Carousel from "react-bootstrap/Carousel";
//
// const Header = ({images}) => {
//   const [index, setIndex] = useState(0);
//
//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };
//
//   return (
//     <div className="header-carousel">
//         <Carousel activeIndex={index} onSelect={handleSelect}>
//           {images.map(({imgURL, id, index}) =>
//             <Carousel.Item key={index}>
//               <div className="home-image">
//                 <img
//                   src={imgURL}
//                   alt="First slide"
//                 />
//               </div>
//             </Carousel.Item>
//           )}
//         </Carousel>
//       </div>
//   );
// };
// export default Header;
