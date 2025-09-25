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
        <link
          rel='stylesheet'
          href='/font%20icons/typicons.min.css'
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
