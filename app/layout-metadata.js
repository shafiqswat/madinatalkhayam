/** @format */

import { siteMetadata } from "./metadata";

export const metadata = {
  metadataBase: new URL("https://madinatalkhayam.com"),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.siteName}`,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords.split(", "),
  authors: [{ name: siteMetadata.siteName }],
  creator: siteMetadata.siteName,
  publisher: siteMetadata.siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "ar-SA": "https://madinatalkhayam.com",
      ar: "https://madinatalkhayam.com",
      "x-default": "https://madinatalkhayam.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://madinatalkhayam.com",
    siteName: siteMetadata.siteName,
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: "https://madinatalkhayam.com/images/slider1.jpg",
        width: 1200,
        height: 630,
        alt: "مدينة الخيام المظلات",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: ["https://madinatalkhayam.com/images/slider1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here when available
    // google: "your-verification-code",
  },
};
