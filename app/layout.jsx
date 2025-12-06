/** @format */
"use client";
import React from "react";
import "typicons.font";
import "../src/index.css";
import "../src/App.css";
import "../src/styles/sr-only.css";
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
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=5'
        />
        <meta
          name='description'
          content='الخيام المظلات توفر أجود المظلات والسواتر والخيام الملكي في القصيم بريدة عنيزة الرس. مظلات سيارات، حدائق، مسابح، مداخل، مدارس، أسواق، مساجد. سواتر حديد، قماش، بلاستيك. جلسات وبرجولات. اتصل الآن 0500173090'
        />
        <meta
          name='keywords'
          content='الخيام المظلات, مدينة الخيام المظلات, مظلات, سواتر, خيام, القصيم, بريدة, عنيزة, الرس, مظلات سيارات, مظلات حدائق, مظلات مسابح, سواتر حديد, جلسات, برجولات, خيام ملكي, madinatalkhayam, khayam, tents, qassim, buraydah, unayzah'
        />
        <meta
          name='theme-color'
          content='#8e003b'
        />
        <meta
          name='robots'
          content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        />
        <meta
          name='googlebot'
          content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        />
        <meta
          name='language'
          content='Arabic'
        />
        <meta
          name='geo.region'
          content='SA-05'
        />
        <meta
          name='geo.placename'
          content='القصيم'
        />
        <link
          rel='canonical'
          href='https://madinatalkhayam.com/'
        />
        <link
          rel='alternate'
          hrefLang='ar-SA'
          href='https://madinatalkhayam.com/'
        />
        <link
          rel='alternate'
          hrefLang='ar'
          href='https://madinatalkhayam.com/'
        />
        <link
          rel='alternate'
          hrefLang='x-default'
          href='https://madinatalkhayam.com/'
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
          content='الخيام المظلات | مدينة الخيام المظلات - أفضل المظلات والسواتر في القصيم بريدة عنيزة'
        />
        <meta
          property='og:description'
          content='الخيام المظلات توفر أجود المظلات والسواتر والخيام الملكي في القصيم بريدة عنيزة الرس. مظلات سيارات، حدائق، مسابح، مداخل، مدارس، أسواق، مساجد. سواتر حديد، قماش، بلاستيك. جلسات وبرجولات. اتصل الآن 0500173090'
        />
        <meta
          property='og:image'
          content='https://madinatalkhayam.com/images/slider1.jpg'
        />
        <meta
          property='og:image:width'
          content='1200'
        />
        <meta
          property='og:image:height'
          content='630'
        />
        <meta
          property='og:image:alt'
          content='الخيام المظلات - مدينة الخيام المظلات'
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
          content='الخيام المظلات | مدينة الخيام المظلات - أفضل المظلات والسواتر في القصيم'
        />
        <meta
          name='twitter:description'
          content='الخيام المظلات توفر أجود المظلات والسواتر والخيام الملكي في القصيم بريدة عنيزة الرس. اتصل الآن 0500173090'
        />
        <meta
          name='twitter:image'
          content='https://madinatalkhayam.com/images/slider1.jpg'
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
              "@id": "https://madinatalkhayam.com/#business",
              name: "مدينة الخيام المظلات",
              alternateName: [
                "الخيام المظلات",
                "madinatalkhayam",
                "Madinaat Al Khayam",
                "khayam",
                "tents",
                "مدينة الخيام",
              ],
              description:
                "الخيام المظلات توفر أجود المظلات والسواتر والخيام الملكي في القصيم بريدة عنيزة الرس. مظلات سيارات، حدائق، مسابح، مداخل، مدارس، أسواق، مساجد. سواتر حديد، قماش، بلاستيك. جلسات وبرجولات.",
              image: [
                "https://madinatalkhayam.com/images/slider1.jpg",
                "https://madinatalkhayam.com/images/logo.jpg",
              ],
              url: "https://madinatalkhayam.com/",
              telephone: "+966500173090",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressCountry: "SA",
                addressRegion: "القصيم",
                addressLocality: "بريدة",
              },
              areaServed: [
                {
                  "@type": "AdministrativeArea",
                  name: "القصيم",
                  "@id": "https://www.wikidata.org/wiki/Q1249255",
                },
                { "@type": "City", name: "بريدة" },
                { "@type": "City", name: "عنيزة" },
                { "@type": "City", name: "الرس" },
              ],
              geo: {
                "@type": "GeoCoordinates",
                latitude: 26.32,
                longitude: 43.96,
              },
              openingHours: ["Mo-Su 08:00-22:00"],
              sameAs: [
                "https://madinatalkhayam.com/",
                "https://www.instagram.com/mazlatswater/",
                "https://www.facebook.com/share/E42VrQoFkhzNf7Fx/?mibextid=qi2Omg",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "مظلات وسواتر",
                itemListElement: [
                  {
                    "@type": "OfferCatalog",
                    name: "مظلات",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Product",
                          name: "مظلات سيارات",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Product",
                          name: "مظلات حدائق",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Product",
                          name: "مظلات مسابح",
                        },
                      },
                    ],
                  },
                  {
                    "@type": "OfferCatalog",
                    name: "سواتر",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: { "@type": "Product", name: "سواتر حديد" },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: { "@type": "Product", name: "سواتر قماش" },
                      },
                    ],
                  },
                ],
              },
            }),
          }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://madinatalkhayam.com/#website",
              name: "مدينة الخيام المظلات",
              alternateName: [
                "الخيام المظلات",
                "madinatalkhayam",
                "khayam",
                "tents",
              ],
              url: "https://madinatalkhayam.com/",
              inLanguage: "ar-SA",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://madinatalkhayam.com/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://madinatalkhayam.com/#organization",
              name: "مدينة الخيام المظلات",
              url: "https://madinatalkhayam.com/",
              logo: "https://madinatalkhayam.com/images/logo.jpg",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+966500173090",
                contactType: "customer service",
                areaServed: "SA",
                availableLanguage: "Arabic",
              },
              sameAs: [
                "https://www.instagram.com/mazlatswater/",
                "https://www.facebook.com/share/E42VrQoFkhzNf7Fx/?mibextid=qi2Omg",
              ],
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
