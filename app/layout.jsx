/** @format */
"use client";
import React from "react";
import "typicons.font";
import "../src/index.css";
import "../src/App.css";
import Header from "../src/Components/Header";
import Footer from "../src/Components/Footer";
import BreadCrumb from "../src/Components/BreadCrumb";
import Ticker from "../src/Components/Ticker";
import { SearchProvider } from "../src/Components/context/SearchContext";
import styled from "styled-components";
import StyledComponentsRegistry from "./StyledComponentsRegistry";
import dynamic from "next/dynamic";
import { UserProvider } from "../src/Context/userContext";
import { PostProvider } from "../src/Context/postContext";
const MapLeaflet = dynamic(() => import("../src/Components/MapLeaflet"), {
  ssr: false,
});

export default function RootLayout({ children }) {
  return (
    <html
      lang='ar'
      dir='rtl'>
      <head>
        <meta
          name='description'
          content='مظلات وسواتر وجلسات وبرجولات وخيام ملكي في القصيم بريدة عنيزة. تنفيذ وتركيب بجودة عالية وخبرة طويلة. اتصل الآن 0500173090.'
        />
        <meta
          name='keywords'
          content='مدينة الخيام المظلات, madinatalkhayam, khayam, tents, مظلات, سواتر, جلسات, برجولات, خيام, القصيم, بريدة, عنيزة, الرس, تنفيذ, تركيب, madinat al khayam, tents in qassim'
        />
        <meta
          name='theme-color'
          content='#8e003b'
        />
        <link
          rel='canonical'
          href='/'
        />
        <meta
          property='og:locale'
          content='ar_SA'
        />
        <meta
          property='og:type'
          content='website'
        />
        <meta
          property='og:site_name'
          content='مدينة الخيام المظلات | madinatalkhayam'
        />
        <meta
          property='og:title'
          content='مدينة الخيام المظلات | مظلات وسواتر القصيم بريدة عنيزة'
        />
        <meta
          property='og:description'
          content='أفضل حلول المظلات والسواتر والبرجولات والخيام الملكي في منطقة القصيم والمدن المحيطة.'
        />
        <meta
          property='og:image'
          content='/images/slider1.jpg'
        />
        <meta
          property='og:url'
          content='https://madinatalkhayam.com/'
        />
        <meta
          name='twitter:card'
          content='summary_large_image'
        />
        <meta
          name='twitter:title'
          content='مدينة الخيام المظلات | madinatalkhayam | khayam | tents'
        />
        <meta
          name='twitter:description'
          content='حلول مظلات وسواتر في القصيم والمدن المحيطة.'
        />
        <meta
          name='twitter:image'
          content='/images/slider1.jpg'
        />
        <link
          rel='stylesheet'
          href='/font%20icons/typicons.min.css'
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "مدينة الخيام المظلات",
              alternateName: [
                "madinatalkhayam",
                "Madinaat Al Khayam",
                "khayam",
                "tents",
              ],
              image: ["/images/slider1.jpg"],
              url: "https://madinatalkhayam.com/",
              telephone: "+966500173090",
              address: {
                "@type": "PostalAddress",
                addressCountry: "SA",
                addressRegion: "القصيم",
              },
              areaServed: [
                { "@type": "AdministrativeArea", name: "القصيم" },
                { "@type": "City", name: "بريدة" },
                { "@type": "City", name: "عنيزة" },
                { "@type": "City", name: "الرس" },
              ],
              geo: {
                "@type": "GeoCoordinates",
                latitude: 26.32,
                longitude: 43.96,
              },
              openingHours: "Mo-Su 08:00-22:00",
              sameAs: [
                "https://madinatalkhayam.com/",
                "https://www.instagram.com/mazlatswater/",
                "https://www.facebook.com/share/E42VrQoFkhzNf7Fx/?mibextid=qi2Omg",
              ],
            }),
          }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "مدينة الخيام المظلات",
              alternateName: ["madinatalkhayam", "khayam", "tents"],
              url: "https://madinatalkhayam.com/",
              inLanguage: "ar",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://madinatalkhayam.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body>
        <SearchProvider>
          <UserProvider>
            <PostProvider>
              <StyledComponentsRegistry>
                <DashboardContainer role='main'>
                  <Header />
                  <ContentArea id='center'>
                    <BreadCrumb />
                    {children}
                    <FullWidthMap>
                      <MapLeaflet />
                    </FullWidthMap>
                  </ContentArea>
                  <Ticker />
                  <Footer />
                </DashboardContainer>
              </StyledComponentsRegistry>
            </PostProvider>
          </UserProvider>
        </SearchProvider>
      </body>
    </html>
  );
}

const DashboardContainer = styled.div`
  overflow: hidden;
  background-color: #f0f0f0;
`;

const ContentArea = styled.main`
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding-bottom: 56px;
`;

const FullWidthMap = styled.div`
  width: 100%;
  margin-top: 24px;
`;
