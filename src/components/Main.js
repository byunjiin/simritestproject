import {React, useState, useEffect } from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imageData from "./bgimg";

const renderSlides = imageData.map(image => (
  <div key={image.alt}>
    <img src={image.url} alt={image.alt} />
  </div>
));

const MainStyle = styled.div `
  margin: 0;
`;
const Main= () => {

  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }

  return (
    <MainStyle>
    <div id='imgslide'>
      <div className="flex justify-center items-center py-5 px-3"> 
          <Carousel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showIndicators = {true}
            showStatus = {false}
            selectedItem={imageData[currentIndex]}
            onChange={handleChange}
          >
            {renderSlides}
          </Carousel>
      </div>
    </div>
    </MainStyle>
  );
}

export default Main;