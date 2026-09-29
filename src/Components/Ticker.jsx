/** @format */
"use client";

import React from "react";
import styled, { keyframes } from "styled-components";

function Ticker() {
  const messages = [
    { text: "0590667013", href: "tel:0590667013" },
    {
      text: "مدينة الخيام المظلات - تفصيل خيام ملكي ومظلات وسواتر وموقف سيارات ومظلات مدارس القصيم بريده عنيزه 0500173090",
      href: "tel:0500173090",
    },
  ];

  const track = (
    <div className='trackGroup'>
      {messages.map((message, index) => (
        <div
          key={index}
          className='textChild'>
          <a href={message.href}>{message.text}</a>
          <span
            className='typcn typcn-medium typcn-link-outline'
            aria-hidden='true'
          />
        </div>
      ))}
    </div>
  );

  return (
    <TickerContainer>
      <nav
        className='ticker'
        aria-label='تحديثات'>
        <div
          className='tickerTitle'
          aria-hidden='true'>
          <span className='typcn typcn-large typcn-arrow-sync'></span>
        </div>
        <div className='ticker-text'>
          <div className='marquee'>
            {track}
            {track}
          </div>
        </div>
      </nav>
    </TickerContainer>
  );
}

export default Ticker;

const scroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

const TickerContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #000000;
  z-index: 10000;
  padding: 6px;

  .ticker {
    background-color: #f0f0f0;
    max-width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .tickerTitle {
      background-color: #8e003b;
      color: #ffffff;
      padding: 4px 25px;
      cursor: pointer;
      flex-shrink: 0;

      span {
        transition: transform 0.6s ease-in-out;
        display: inline-block;
      }

      .typcn-large {
        font-size: 24px !important;
      }

      &:hover span {
        transform: rotate(360deg);
      }
    }

    .ticker-text {
      background-color: #fafafa;
      color: #8e003b;
      flex-grow: 1;
      overflow: hidden;
      min-width: 0;

      .marquee {
        display: flex;
        width: max-content;
        animation: ${scroll} 35s linear infinite;
        padding: 7px 0;

        &:hover {
          animation-play-state: paused;
        }
      }

      .trackGroup {
        display: flex;
        flex-shrink: 0;
      }

      .textChild {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        white-space: nowrap;
        padding-inline: 2rem;
        direction: rtl;

        a {
          color: #8e003b;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }

        .typcn-medium {
          font-size: 18px !important;
        }
      }
    }
  }

  @media (max-width: 600px) {
    .ticker {
      max-width: 97%;
    }

    .ticker .tickerTitle {
      padding: 4px 14px;
    }

    .ticker .ticker-text .marquee {
      animation-duration: 28s;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .ticker .ticker-text .marquee {
      animation: none;
    }
  }
`;
