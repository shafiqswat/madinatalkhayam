/** @format */

import React from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";

function CardComponent({ item, hideImage = false }) {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const textToShare = encodeURIComponent(item.cardTitle);
  const urlToShare = encodeURIComponent(currentUrl);
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${item.id}`);
  };
  const handleShare = (platform) => {
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${urlToShare}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${urlToShare}&text=${textToShare}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${urlToShare}`;
        break;
      case "instagram":
        // Instagram doesn't support direct URL sharing. You can customize the behavior here.
        alert(
          "Instagram does not support direct URL sharing. Please share via the app."
        );
        return;
      default:
        return;
    }

    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <CardContainer onClick={handleClick}>
      <div className='cardContent'>
        {!hideImage && item.cardImage ? (
          <>
            <div className='imageWrapper'>
              <img
                src={item.cardImage}
                alt={item.cardSpan}
                loading='lazy'
              />
            </div>
            <div className='cardTitle'>
              <span>{item.cardSpan}</span>
            </div>
          </>
        ) : null}
        <div className='titleContent'>
          <div className='titleIcon'>
            <div
              className='titleShare typcn typcn-export-outline'
              aria-label='share'></div>
            <div className='dropDownContent'>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleShare("facebook");
                }}
                aria-label='Share on Facebook'>
                <svg
                  className='socialicon'
                  viewBox='0 0 24 24'
                  aria-hidden='true'>
                  <path
                    fill='currentColor'
                    d='M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 5 3.66 9.14 8.44 9.93v-7.02H7.91v-2.91h2.39V9.41c0-2.36 1.4-3.66 3.55-3.66 1.03 0 2.12.18 2.12.18v2.33h-1.2c-1.18 0-1.55.73-1.55 1.48v1.77h2.64l-.42 2.91h-2.22V22c4.78-.79 8.44-4.93 8.44-9.93Z'
                  />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleShare("twitter");
                }}
                aria-label='Share on Twitter'>
                <svg
                  className='socialicon'
                  viewBox='0 0 24 24'
                  aria-hidden='true'>
                  <path
                    fill='currentColor'
                    d='M22.46 6c-.77.35-1.6.58-2.46.69.89-.53 1.57-1.37 1.89-2.37-.83.49-1.75.85-2.72 1.04A4.13 4.13 0 0 0 15.5 4c-2.28 0-4.13 1.89-4.13 4.22 0 .33.03.65.1.96-3.43-.18-6.46-1.88-8.49-4.46-.36.64-.57 1.38-.57 2.17 0 1.5.74 2.83 1.86 3.61-.68-.02-1.32-.22-1.87-.52v.05c0 2.09 1.44 3.83 3.36 4.23-.35.1-.72.15-1.11.15-.27 0-.53-.03-.78-.08.53 1.73 2.09 2.98 3.93 3.01A8.3 8.3 0 0 1 2 19.54 11.72 11.72 0 0 0 8.29 21c7.55 0 11.68-6.43 11.68-12 0-.18 0-.37-.01-.55.8-.6 1.49-1.35 2.05-2.21Z'
                  />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleShare("linkedin");
                }}
                aria-label='Share on LinkedIn'>
                <svg
                  className='socialicon'
                  viewBox='0 0 24 24'
                  aria-hidden='true'>
                  <path
                    fill='currentColor'
                    d='M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V23h-4V8Zm7 0h3.83v2.05h.05c.53-1 1.82-2.05 3.74-2.05 4 0 4.74 2.63 4.74 6.06V23h-4v-7.03c0-1.68-.03-3.84-2.34-3.84-2.34 0-2.7 1.83-2.7 3.72V23h-4V8Z'
                  />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleShare("instagram");
                }}
                aria-label='Share on Instagram'>
                <svg
                  className='socialicon'
                  viewBox='0 0 24 24'
                  aria-hidden='true'>
                  <path
                    fill='currentColor'
                    d='M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.75-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z'
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className='title'>
            <h2>
              <strong>{item.cardTitle}</strong>
            </h2>
          </div>
        </div>
      </div>
    </CardContainer>
  );
}

export default CardComponent;

const CardContainer = styled.div`
  cursor: pointer;
  width: 100%;

  .cardContent {
    max-width: 97%;
    margin: 0 0 3% 0;
    height: fit-content;
    background: #ffffff !important;
    box-shadow: 0px 0px 5px #969696;
    line-height: 1.4;
    transition: box-shadow 0.5s;
  }

  .imageWrapper {
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
      height: 200px;
      vertical-align: bottom;
      transition: transform 0.5s ease, opacity 0.5s ease;
      object-fit: cover;
    }
  }

  .cardTitle {
    padding: 10px 1.5% 10px 1.5%;
    height: 40px;
    z-index: 3;
    position: relative;
    color: #fff;
    margin-top: -40px;
    background: rgba(0, 0, 0, 0.5);

    span {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 80%;
    }
  }

  .titleContent {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;

    .titleIcon {
      font-size: 1.5em;
      position: relative;
      padding: 0 5px;
      opacity: 0.9;
      z-index: 5;
      text-align: center;
      height: 40px;
      margin-top: -60px;

      .titleShare {
        cursor: pointer;
        margin: 0;
        color: #fff;
        text-shadow: 1px 1px #000;
        margin-top: 1em;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.35);
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      &:hover .dropDownContent,
      .dropDownContent:hover {
        visibility: visible;
        opacity: 1;
      }

      .dropDownContent {
        width: 50px;
        visibility: hidden;
        opacity: 0;
        position: absolute;
        top: 60px;
        right: -7px;
        background-color: #f0f0f0;
        border: 1px #969696 solid;
        border-radius: 6px;
        transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out;
        display: flex;
        flex-direction: column;

        button {
          all: unset;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .socialicon {
          height: 24px;
          width: 24px;
          margin: 5px 5px;
          transition: transform 0.6s ease-in-out, color 0.2s ease-in-out;
          display: block;
          color: #333;
        }

        .socialicon:hover {
          transform: rotate(360deg);
          color: #000;
        }
      }
    }

    .title {
      color: #000000;
      padding: 10px;
      height: 60px;
      text-align: justify;

      h2 {
        padding: 0;
        margin: 0;
        font-size: inherit;
        line-height: 1.3;
        max-height: calc(1.3em * 2);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        -webkit-box-orient: vertical;
        word-break: break-word;
      }
    }
  }

  :hover .imageWrapper img {
    transform: scale(1.1);
  }

  @media (min-width: 900px) {
    width: 33.3%;
    display: inline-grid;
  }

  @media (max-width: 900px) and (min-width: 601px) {
    width: 50%;
    display: inline-grid;
  }

  @media (max-width: 600px) {
    .cardContent {
      max-width: 100%;
    }
  }
`;
