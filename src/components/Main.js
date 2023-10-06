import {React, useState, useEffect } from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imageData from "./bgimg";
import { Link } from 'react-router-dom';

const renderSlides = imageData.map(image => (
  <div key={image.alt}>
    <img src={image.url} alt={image.alt}/>
  </div>
));

const MainStyle = styled.div `
  margin: 0;
  #imgslide {
    position: relative;
  }
  #more {
    border: solid 3px white;
    position: absolute;
    bottom: 20px;
    right: 40px;
    z-index: 1;
  }
  .btn{
    margin:10px 30px;
    padding: 25px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    background-color : #c7c2fe; 
    border-radius: 50%;
  }
`;
const Main= () => {

  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }

  return (
    <MainStyle>
    <div className='Mypage'>
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
      <Link to='/Play'>
        <button className='btn' id='more'>
          MORE
        </button>
      </Link>
    </div>
    </MainStyle>
  );
}

export default Main;