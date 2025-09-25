/** @format */

import React from "react";
import { Carousel } from "antd";
import styled from "styled-components";

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 505px; // Set your desired height here
  background: #000; // Add background to handle transparency or loading
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Slider = () => (
  <Carousel autoplay>
    <div>
      <ImageWrapper>
        <Image
          src='/images/slider2.jpg'
          alt='sliderImage'
        />
      </ImageWrapper>
    </div>
    <div>
      <ImageWrapper>
        <Image
          src='/images/slider3.jpg'
          alt='sliderImage'
        />
      </ImageWrapper>
    </div>
    <div>
      <ImageWrapper>
        <Image
          src='/images/slider4.jpg'
          alt='sliderImage'
        />
      </ImageWrapper>
    </div>
    <div>
      <ImageWrapper>
        <Image
          src='/images/slider5.jpg'
          alt='sliderImage'
        />
      </ImageWrapper>
    </div>
    <div>
      <ImageWrapper>
        <Image
          src='/images/slider6.jpg'
          alt='sliderImage'
        />
      </ImageWrapper>
    </div>
    <div>
      <ImageWrapper>
        <Image
          src='/images/slider7.jpg'
          alt='sliderImage'
        />
      </ImageWrapper>
    </div>
    <div>
      <ImageWrapper>
        <Image
          src='/images/slider1.jpg'
          alt='sliderImage'
        />
      </ImageWrapper>
    </div>
  </Carousel>
);

export default Slider;
