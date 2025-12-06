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
        <header
          style={{ textAlign: "center", margin: "2rem 0", padding: "0 1rem" }}>
          <h1
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              margin: "0 0 1rem 0",
              color: "#8e003b",
              fontWeight: "700",
              lineHeight: "1.2",
            }}>
            الخيام المظلات - مدينة الخيام المظلات
          </h1>
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
              color: "#555",
              margin: "0",
              lineHeight: "1.6",
              maxWidth: "800px",
              marginLeft: "auto",
              marginRight: "auto",
            }}>
            أفضل المظلات والسواتر والخيام الملكي في القصيم بريدة عنيزة الرس.
            مظلات سيارات، حدائق، مسابح، مداخل، مدارس، أسواق، مساجد. سواتر حديد،
            قماش، بلاستيك. جلسات وبرجولات بخامات عالية الجودة.
          </p>
        </header>
        <Slider />
        <WhatsappImages>
          <div className='ads-show'>
            <div>
              <a
                href='https://wa.me/966500173090'
                aria-label='اتصل بنا على واتساب'>
                <img
                  src='/images/whatsappImage1.gif'
                  alt='واتساب - الخيام المظلات مدينة الخيام المظلات'
                  loading='lazy'
                />
              </a>
            </div>
          </div>
          <div className='ads-show'>
            <a
              href='https://wa.me/966500173090'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='اتصل بنا على واتساب'>
              <img
                src='/images/whatsappImage2.gif'
                alt='واتساب - الخيام المظلات مدينة الخيام المظلات'
                loading='lazy'
              />
            </a>
          </div>
        </WhatsappImages>
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

const WhatsappImages = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  img {
    cursor: pointer;
  }
  .ads-show {
    padding: 10px;
    margin-bottom: 10px;
    background: #fff;
    box-shadow: 0px 0px 2px #969696;
  }
`;
