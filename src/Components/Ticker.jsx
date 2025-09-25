/** @format */

import React from "react";
import styled from "styled-components";
import Marquee from "react-marquee-slider";

function Ticker() {
  const messages = [
    { text: "0590667013", link: "#" },
    {
      text: "مدينة الخيام المظلات - تفصيل خيام ملكي ومظلات وسواتر وموقف سيارات ومظلات مدارس القصيم بريده عنيزه 0500173090",
      link: "#",
    },
  ];

  return (
    <TickerContainer>
      <nav
        className='ticker flex-row text-justify'
        aria-label='تحديثات'>
        <h1 style={{ display: "none" }}>
          مظلات وسواتر القصيم{" "}
          <strong>
            للحدائق والأسطح والسيارات بخامات عالية جودة وبأفضل الخامات المستوردة
            والمحلية، كما يوجد قماش بي في دي اف بتصاميم وأشكال حديثة وجديدة
            للأسطح والحدائق، عليكم بالتواصل مع شركة حاتم للمقاولات لتركيب وتصميم
            وتنفيذ أفضل وأجمل مظلات وسواتر، مظلات قماش للسيارات بأرقى وأجمل
            التصاميم والأشكال الجذابة والرائعة.
          </strong>
          <strong>
            مدينة الخيام المظلات تفصيل خيام ملكي مظلات سواتر موقف سيارت مظلات
            مدارس القصيم بريده عنيزه
          </strong>
        </h1>
        <div
          className='tickerTitle'
          aria-hidden='true'>
          <span className='typcn typcn-large typcn-arrow-sync'></span>
        </div>
        <div className='ticker-text lc-112'>
          <div className='marquee-inner-container'>
            <Marquee
              velocity={20}
              minScale={0.7}
              resetAfterTries={200}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  className='textChild'>
                  <div className='textDirection'>
                    <a
                      href={message.link}
                      aria-label={message.text}>
                      {message.text}
                    </a>
                    <span className='typcn typcn-medium typcn-link-outline'></span>
                    &nbsp;&nbsp;
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </nav>
    </TickerContainer>
  );
}

export default Ticker;

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

      span {
        transition: transform 0.6s ease-in-out;
        display: inline-block;
      }

      .typcn-large {
        font-size: 24px !important;
      }

      .typcn::before {
        font-family: "typicons";
        font-style: normal;
        font-weight: normal;
        speak: none;
        display: inline-block;
        text-decoration: inherit;
        width: 1em;
        height: 1em;
        font-size: 1em;
        text-align: center;
        -webkit-font-smoothing: antialiased;
        font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
      }

      &:hover {
        span {
          transform: rotate(360deg);
        }
      }
    }

    .ticker-text {
      background-color: #fafafa;
      direction: ltr;
      color: #8e003b;
      flex-grow: 1;
      overflow: hidden;
      display: flex;
      align-items: center;

      .marquee-inner-container {
        padding: 7px 5px 0 5px;
        max-height: 30px;
        overflow: hidden;
        white-space: nowrap;

        .textChild {
          display: inline-block;
          white-space: nowrap;
          padding-right: 50px;

          .textDirection {
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
    }
  }

  .text-justify {
    text-align: justify;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  @media (max-width: 600px) {
    .ticker {
      max-width: 97%;
    }
  }
`;
