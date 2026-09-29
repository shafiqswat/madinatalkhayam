/** @format */
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Carousel } from "antd";
import styled from "styled-components";

const slides = [
  { src: "/images/slider2.jpg", alt: "مظلات وسواتر - مدينة الخيام المظلات" },
  { src: "/images/slider3.jpg", alt: "مظلات سيارات - القصيم" },
  { src: "/images/slider4.jpg", alt: "سواتر حديد وقماش" },
  { src: "/images/slider5.jpg", alt: "جلسات وبرجولات" },
  { src: "/images/slider6.jpg", alt: "خيام ملكي" },
  { src: "/images/slider7.jpg", alt: "مظلات حدائق ومدارس" },
  { src: "/images/slider1.jpg", alt: "مدينة الخيام المظلات" },
];

const Chevron = ({ flip }) => (
  <svg
    viewBox='0 0 24 24'
    width='20'
    height='20'
    aria-hidden='true'
    style={flip ? { transform: "scaleX(-1)" } : undefined}>
    <path
      fill='currentColor'
      d='M9.29 6.71a1 1 0 0 0 0 1.41L13.17 12l-3.88 3.88a1 1 0 1 0 1.41 1.41l4.59-4.59a1 1 0 0 0 0-1.41L10.7 6.7a1 1 0 0 0-1.41.01Z'
    />
  </svg>
);

const Slider = () => {
  const carouselRef = useRef(null);

  return (
    <SliderShell>
      <Carousel
        ref={carouselRef}
        autoplay
        autoplaySpeed={4500}
        dots
        effect='fade'
        pauseOnHover
        swipeToSlide
        draggable
        arrows={false}>
        {slides.map((slide, index) => (
          <div key={slide.src}>
            <ImageWrapper>
              <SlideImg>
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes='(max-width: 768px) 100vw, 1100px'
                  priority={index === 0}
                  quality={85}
                />
              </SlideImg>
              <SlideOverlay />
            </ImageWrapper>
          </div>
        ))}
      </Carousel>

      <NavButton
        type='button'
        className='prev'
        aria-label='الشريحة السابقة'
        onClick={() => carouselRef.current?.prev?.()}>
        <Chevron flip />
      </NavButton>
      <NavButton
        type='button'
        className='next'
        aria-label='الشريحة التالية'
        onClick={() => carouselRef.current?.next?.()}>
        <Chevron />
      </NavButton>
    </SliderShell>
  );
};

export default Slider;

const SliderShell = styled.div`
  position: relative;
  width: 100%;
  margin: 0 0 1.5rem;
  overflow: hidden;
  border-radius: 16px;
  background: #1a1a1a;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.12);

  .slick-dots {
    bottom: 14px !important;
    margin: 0 !important;
    z-index: 3;

    li {
      margin: 0 4px !important;
      width: auto !important;
      height: auto !important;

      button {
        width: 9px !important;
        height: 9px !important;
        border-radius: 999px !important;
        background: rgba(255, 255, 255, 0.55) !important;
        opacity: 1 !important;
      }

      &.slick-active button {
        width: 24px !important;
        background: #8e003b !important;
      }
    }
  }

  @media (max-width: 600px) {
    border-radius: 12px;
    margin-bottom: 1rem;

    .slick-dots {
      bottom: 10px !important;

      li button {
        width: 7px !important;
        height: 7px !important;
      }

      li.slick-active button {
        width: 18px !important;
      }
    }
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: background 0.2s ease, transform 0.2s ease;

  &.prev {
    left: 12px;
    right: auto;
  }

  &.next {
    right: 12px;
    left: auto;
  }

  &:hover {
    background: #8e003b;
    transform: translateY(-50%) scale(1.05);
  }

  @media (max-width: 600px) {
    width: 34px;
    height: 34px;

    &.prev {
      left: 8px;
    }

    &.next {
      right: 8px;
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: clamp(200px, 40vw, 460px);
  background: #111;

  @media (max-width: 600px) {
    height: clamp(170px, 48vw, 260px);
  }
`;

const SlideImg = styled.div`
  position: absolute;
  inset: 0;

  img {
    object-fit: cover;
    object-position: center;
  }
`;

const SlideOverlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.35) 0%,
    transparent 42%
  );
  z-index: 1;
`;
