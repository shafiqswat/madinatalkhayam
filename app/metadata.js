/** @format */

// Centralized SEO metadata configuration
export const siteMetadata = {
  title:
    "الخيام المظلات | مدينة الخيام المظلات - أفضل المظلات والسواتر في القصيم بريدة عنيزة",
  description:
    "الخيام المظلات توفر أجود المظلات والسواتر والخيام الملكي في القصيم بريدة عنيزة الرس. مظلات سيارات، حدائق، مسابح، مداخل، مدارس، أسواق، مساجد. سواتر حديد، قماش، بلاستيك. جلسات وبرجولات. اتصل الآن 0500173090",
  keywords:
    "الخيام المظلات, مدينة الخيام المظلات, مظلات, سواتر, خيام, القصيم, بريدة, عنيزة, الرس, مظلات سيارات, مظلات حدائق, مظلات مسابح, سواتر حديد, جلسات, برجولات, خيام ملكي, madinatalkhayam, khayam, tents, qassim, buraydah, unayzah",
  url: "https://madinatalkhayam.com",
  siteName: "مدينة الخيام المظلات",
  locale: "ar_SA",
  phone: "+966500173090",
  address: {
    country: "SA",
    region: "القصيم",
    cities: ["بريدة", "عنيزة", "الرس"],
  },
};

export const generatePageMetadata = (pageTitle, pageDescription, path = "") => {
  const fullTitle = `${pageTitle} | ${siteMetadata.siteName}`;
  const canonicalUrl = `${siteMetadata.url}${path}`;

  return {
    title: fullTitle,
    description: pageDescription,
    keywords: siteMetadata.keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "ar-SA": canonicalUrl,
        ar: canonicalUrl,
        "x-default": canonicalUrl,
      },
    },
    openGraph: {
      title: fullTitle,
      description: pageDescription,
      url: canonicalUrl,
      siteName: siteMetadata.siteName,
      locale: siteMetadata.locale,
      type: "website",
      images: [
        {
          url: `${siteMetadata.url}/images/slider1.jpg`,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: pageDescription,
      images: [`${siteMetadata.url}/images/slider1.jpg`],
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
  };
};
