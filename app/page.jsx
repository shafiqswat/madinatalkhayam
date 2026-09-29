/** @format */
"use client";

import React from "react";
import styled from "styled-components";
import Slider from "../src/Components/layout/slider";
import CardComponent from "../src/Components/layout/Card";
import CardSkeleton from "../src/Components/layout/CardSkeleton";
import { usePosts } from "../src/Context/postContext";

export default function Page() {
  const { posts, loading } = usePosts();
  const [mounted, setMounted] = React.useState(false);

  // Prevent hydration mismatch by only rendering client-side content after mount
  React.useEffect(() => {
    setMounted(true);
    // Update title and meta only on client
    if (typeof window !== "undefined") {
      document.title =
        "الخيام المظلات | مدينة الخيام المظلات - أفضل المظلات والسواتر في القصيم بريدة عنيزة";
      // Check if meta description already exists to avoid duplicates
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.name = "description";
        document.head.appendChild(metaDescription);
      }
      metaDescription.content =
        "الخيام المظلات توفر أجود المظلات والسواتر والخيام الملكي في القصيم بريدة عنيزة الرس. مظلات سيارات، حدائق، مسابح، مداخل، مدارس، أسواق، مساجد. سواتر حديد، قماش، بلاستيك. جلسات وبرجولات. اتصل الآن 0500173090";
    }
  }, []);

  return (
    <main role='main'>
      <article>
        <HeroHeader>
          <span className='eyebrow'>مدينة الخيام المظلات</span>
          <h1>الخيام المظلات في القصيم</h1>
          <p>
            أفضل المظلات والسواتر والخيام الملكي في القصيم بريدة عنيزة الرس.
            مظلات سيارات، حدائق، مسابح، مداخل، مدارس، أسواق، مساجد. سواتر حديد،
            قماش، بلاستيك. جلسات وبرجولات بخامات عالية الجودة.
          </p>
        </HeroHeader>
        <Slider />
        <WhatsappSection>
          <WhatsappButton
            href='https://wa.me/966500173090'
            target='_blank'
            rel='noopener noreferrer'>
            <span className='icon' aria-hidden='true'>
              <svg
                viewBox='0 0 24 24'
                width='22'
                height='22'>
                <path
                  fill='currentColor'
                  d='M17.47 14.38c-.28-.14-1.65-.81-1.9-.9-.26-.1-.44-.14-.63.14-.18.27-.72.9-.88 1.08-.16.18-.33.2-.6.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.38-1.64-1.54-1.91-.16-.27-.02-.42.12-.55.13-.13.28-.33.42-.5.14-.16.18-.28.28-.46.09-.19.05-.35-.02-.49-.07-.14-.63-1.51-.86-2.07-.23-.55-.46-.47-.63-.48h-.54c-.19 0-.49.07-.75.35-.26.27-1 1-1 2.43s1.02 2.82 1.16 3.01c.14.19 2.01 3.07 4.87 4.31.68.29 1.21.47 1.62.6.68.21 1.3.18 1.79.11.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.11-.25-.18-.53-.32ZM12.05 21.8h-.01a9.78 9.78 0 0 1-4.98-1.36l-.36-.21-3.7.97 1-3.61-.24-.37a9.78 9.78 0 0 1-1.5-5.22 9.82 9.82 0 0 1 9.8-9.8c2.62.01 5.08 1.02 6.93 2.87a9.74 9.74 0 0 1 2.87 6.93 9.82 9.82 0 0 1-9.8 9.8Zm8.3-18.1A11.7 11.7 0 0 0 12.04 0C5.45.02.13 5.34.16 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.27-1.64a11.9 11.9 0 0 0 5.76 1.47h.01c6.59 0 11.93-5.35 11.95-11.94a11.86 11.86 0 0 0-3.64-8.49Z'
                />
              </svg>
            </span>
            <span className='label'>تواصل عبر واتساب</span>
          </WhatsappButton>

          <CallButton href='tel:0500173090'>
            <span className='icon' aria-hidden='true'>
              <svg
                viewBox='0 0 24 24'
                width='20'
                height='20'>
                <path
                  fill='currentColor'
                  d='M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.4 21 3 13.6 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.02l-2.2 2.19Z'
                />
              </svg>
            </span>
            <span className='label'>اتصل: 0500173090</span>
          </CallButton>
        </WhatsappSection>
        <section aria-label='منتجاتنا'>
          {!mounted || loading ? (
            <>
              {Array.from({ length: 6 }).map((_, index) => (
                <CardSkeleton key={index} />
              ))}
            </>
          ) : (
            posts.map((item, index) => (
              <CardComponent
                key={item.id || index}
                item={{
                  id: item.id,
                  cardImage: item.imageUrl,
                  cardTitle: item.title,
                  cardSpan: item.span,
                }}
              />
            ))
          )}
        </section>
      </article>
    </main>
  );
}

const HeroHeader = styled.header`
  text-align: center;
  margin: 0 0 1.25rem;
  padding: 1.25rem 1rem 1.35rem;
  border-radius: 16px;
  background:
    radial-gradient(circle at top, rgba(142, 0, 59, 0.1), transparent 55%),
    linear-gradient(180deg, #fff 0%, #faf7f8 100%);
  border: 1px solid rgba(142, 0, 59, 0.08);

  .eyebrow {
    display: inline-block;
    margin-bottom: 0.55rem;
    padding: 0.28rem 0.8rem;
    border-radius: 999px;
    background: rgba(142, 0, 59, 0.08);
    color: #8e003b;
    font-size: 0.85rem;
    font-weight: 800;
  }

  h1 {
    font-size: clamp(1.45rem, 3.6vw, 2.2rem);
    margin: 0 0 0.7rem;
    color: #8e003b;
    font-weight: 800;
    line-height: 1.25;
  }

  p {
    font-size: clamp(0.95rem, 2.2vw, 1.08rem);
    color: #555;
    margin: 0 auto;
    line-height: 1.7;
    max-width: 760px;
    font-weight: 600;
  }

  @media (max-width: 600px) {
    margin-bottom: 1rem;
    padding: 1rem 0.85rem;
    border-radius: 12px;
  }
`;

const WhatsappSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin: 0 0 1.75rem;
`;

const WhatsappButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 48px;
  padding: 0.75rem 1.35rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 800;
  font-size: 1rem;
  color: #fff;
  background: #25d366;
  box-shadow: 0 8px 18px rgba(37, 211, 102, 0.28);
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;

  .icon {
    display: inline-flex;
  }

  &:hover {
    background: #1ebe57;
    transform: translateY(-2px);
    box-shadow: 0 10px 22px rgba(37, 211, 102, 0.35);
    color: #fff;
  }
`;

const CallButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 48px;
  padding: 0.75rem 1.35rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 800;
  font-size: 1rem;
  color: #fff;
  background: #8e003b;
  box-shadow: 0 8px 18px rgba(142, 0, 59, 0.25);
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;

  .icon {
    display: inline-flex;
  }

  &:hover {
    background: #6e002e;
    transform: translateY(-2px);
    box-shadow: 0 10px 22px rgba(142, 0, 59, 0.32);
    color: #fff;
  }
`;
