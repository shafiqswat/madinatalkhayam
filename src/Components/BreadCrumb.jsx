/** @format */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { usePathname } from "next/navigation";

// Mapping of path segments to Arabic values
const pathToArabicMap = {
  "": "الرئيسية",
  alqasim: "القصيم بريده عنيزه",
  sayaarat: "مظلات سيارات",
  hadayiq: "مظلات حدائق",
  masabih: "مظلات مسابح",
  madakhil: "مظلات مداخل",
  likasan: "مظلات لكسان",
  madaris: "مظلات مدارس",
  aswaq: "مظلات اسواق",
  masajid: "مظلات مساجد",
  qumash: "مظلات قماش pvc",
  shinku: "مظلات شينكو",
  // legacy key kept for safety
  sawatiralriyad: "سواتر القصيم بريده عنيزه",
  // current routes
  sawatiralqasim: "سواتر القصيم بريده عنيزه",
  hadid: "سواتر حديد",
  qumash1: "سواتر قماش",
  bilastik: "سواتر بلاستيك",
  likasan1: "سواتر لكسان",
  masabih1: "سواتر مسابح",
  // legacy key kept for safety
  hanajiralriyad: "هناجر القصيم بريده عنيزه",
  // current route
  hanajiralqasim: "هناجر القصيم بريده عنيزه",
  jalasatwaburjulat: "مظلات جلسات وبرجولات",
  // legacy key kept for safety
  shubukalriyad: "شبوك القصيم بريده عنيزه",
  // current route
  shubukalqasim: "شبوك القصيم بريده عنيزه",
  biutshaer: "بيوت شعر",
  almazid: "المزيد",
  manatiqalsueudia: "مظلات مناطق السعودية",
  aitasilbina: "اتصل بنا",
  wasawatirfialriyad: "مظلات وسواتر في القصيم بريده عنيزه",
  product: "المنتج",
};

function BreadCrumb() {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const paths = (pathname || "/").split("/").filter(Boolean);
    const breadcrumbPaths = paths.map((path, index) => ({
      name: pathToArabicMap[path] || decodeURIComponent(path),
      href: "/" + paths.slice(0, index + 1).join("/"),
    }));
    setBreadcrumbs(breadcrumbPaths);
  }, [pathname]);

  if (!pathname || pathname === "/") {
    return null;
  }

  return (
    <BreadcrumbContainer>
      <nav
        aria-label='Breadcrumb'
        role='navigation'>
        <BreadcrumbItem
          href='/'
          aria-current='page'>
          {pathToArabicMap[""]}
        </BreadcrumbItem>
        {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem
              href={crumb.href}
              className={index === breadcrumbs.length - 1 ? "active" : ""}
              aria-current={
                index === breadcrumbs.length - 1 ? "page" : undefined
              }>
              {crumb.name}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </nav>
    </BreadcrumbContainer>
  );
}

export default BreadCrumb;

const BreadcrumbContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 1em;
  padding: 10px 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow-x: auto;

  @media (max-width: 768px) {
    padding: 5px 10px;
  }
`;

const BreadcrumbItem = styled.a`
  text-decoration: none;
  color: #8e003b;
  font-weight: 700;
  transition: color 0.3s;
  font-family: Arial, Helvetica, sans-serif !important;

  &:hover {
    color: #d03e2f;
  }

  &.active {
    color: #333;
    cursor: default;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const BreadcrumbSeparator = styled.span`
  margin: 0 10px;
  color: #aaa;

  @media (max-width: 768px) {
    margin: 0 5px;
  }
`;
