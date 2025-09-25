/** @format */

import React from "react";
import Image from "next/image";
import { Carousel } from "antd";
import styled from "styled-components";

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 505px; // Set your desired height here
  background: #000; // Add background to handle transparency or loading
`;

const SlideImg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  img {
    object-fit: cover;
  }
`;

const Slider = () => (
  <Carousel autoplay>
    <div>
      <ImageWrapper>
        <SlideImg>
          <Image
            src='/images/slider2.jpg'
            alt='sliderImage'
            fill
            priority
          />
        </SlideImg>
      </ImageWrapper>
    </div>
    <div>
      <ImageWrapper>
        <SlideImg>
          <Image
            src='/images/slider3.jpg'
            alt='sliderImage'
            fill
          />
        </SlideImg>
      </ImageWrapper>
    </div>
    <div>
      <ImageWrapper>
        <SlideImg>
          <Image
            src='/images/slider4.jpg'
            alt='sliderImage'
            fill
          />
        </SlideImg>
      </ImageWrapper>
    </div>
    <div>
      <ImageWrapper>
        <SlideImg>
          <Image
            src='/images/slider5.jpg'
            alt='sliderImage'
            fill
          />
        </SlideImg>
      </ImageWrapper>
    </div>
    <div>
      <ImageWrapper>
        <SlideImg>
          <Image
            src='/images/slider6.jpg'
            alt='sliderImage'
            fill
          />
        </SlideImg>
      </ImageWrapper>
    </div>
    <div>
      <ImageWrapper>
        <SlideImg>
          <Image
            src='/images/slider7.jpg'
            alt='sliderImage'
            fill
          />
        </SlideImg>
      </ImageWrapper>
    </div>
    <div>
      <ImageWrapper>
        <SlideImg>
          <Image
            src='/images/slider1.jpg'
            alt='sliderImage'
            fill
          />
        </SlideImg>
      </ImageWrapper>
    </div>
  </Carousel>
);

export default Slider;
