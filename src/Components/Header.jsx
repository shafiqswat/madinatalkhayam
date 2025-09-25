/** @format */
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchComponent from "./Search";

function Header() {
  const pathname = usePathname();

  // Function to check if a link should be active
  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // Function to get active class name
  const getActiveClass = (href) => {
    return isActive(href) ? "active" : "";
  };

  useEffect(() => {
    function calcWidth() {
      const siteMenuArea = document.querySelector("#site-menu-area");
      const more = document.querySelector("#site-menu-area .more");
      const siteMenu = document.querySelector(".site-menu");

      if (!siteMenuArea || !more || !siteMenu) return;

      let navWidth = 1;
      const moreWidth = more.offsetWidth;
      const menuItems = document.querySelectorAll(
        "#site-menu-area > li:not(.more)"
      );

      menuItems.forEach((item) => {
        navWidth += item.offsetWidth;
      });

      const availableSpace = siteMenu.offsetWidth - moreWidth;

      if (navWidth > availableSpace) {
        const lastItem = menuItems[menuItems.length - 1];
        if (lastItem) {
          lastItem.setAttribute("data-width", lastItem.offsetWidth);
          more.querySelector(".more-ul").prepend(lastItem);
          calcWidth();
        }
      } else {
        const firstMoreElement = more.querySelector("li");
        if (
          firstMoreElement &&
          navWidth + parseInt(firstMoreElement.getAttribute("data-width")) <
            availableSpace
        ) {
          siteMenuArea.insertBefore(firstMoreElement, more);
        }
      }

      more.style.display =
        more.querySelectorAll("li").length > 0 ? "inline-block" : "none";
    }

    function handleResize() {
      calcWidth();
    }

    function handleLinkClick() {
      document.querySelector(".site-menu-float").style.display = "none";
    }

    window.addEventListener("resize", handleResize);
    calcWidth();
    document
      .querySelector(".site-menu")
      .classList.remove("site-menu-prevent-overflow-onload");

    const submenuLinks = document.querySelectorAll(
      ".site-menu ul li:has(ul) > a"
    );
    submenuLinks.forEach((link) => link.classList.add("site-menu-has-sub"));

    const floatMenuLinks = document.querySelectorAll(
      ".site-menu-float ul li a"
    );
    floatMenuLinks.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      floatMenuLinks.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);
  return (
    <header className='header-wrapper'>
      <h1 style={{ display: "none" }}>
        مظلات وسواتر القصيم{" "}
        <strong>
          للحدائق والأسطح والسيارات بخامات عالية جودة وبأفضل الخامات المستوردة
          والمحلية، كما يوجد قماش بي في دي اف بتصاميم وأشكال حديثة وجديدة للأسطح
          والحدائق، عليكم بالتواصل مع شركة حاتم للمقاولات لتركيب وتصميم وتنفيذ
          أفضل وأجمل مظلات وسواتر، مظلات قماش للسيارات بأرقى وأجمل التصاميم
          والأشكال الجذابة والرائعة.
        </strong>
        <strong>
          مدينة الخيام المظلات تفصيل خيام ملكي مظلات سواتر موقف سيارت مظلات
          مدارس القصيم بريده عنيزه
        </strong>
      </h1>
      <div className='header-wrapper-background'>
        <div className='header flex-row-reverse'>
          <div className='header-logo header-logo-lc-mc mc-35 lc-25 sc-hide mc-show lc-show'>
            <Link href='/'>
              <img
                id='image-lc'
                src='/images/logo.jpg'
                alt='logo'
              />
            </Link>
          </div>
          <div className='header-logo sc-120 sc-show mc-hide lc-hide'>
            <Link href='/'>
              <img
                id='image-sc'
                src='/images/logo.jpg'
                alt='القصيم بريده عنيزه  - سواتر الرياض'
              />
            </Link>
          </div>
          <nav
            className='site-menu sc-120 mc-85 lc-95 sc-hide mc-show lc-show site-menu-prevent-overflow-onload'
            role='navigation'>
            <ul id='site-menu-area'>
              <li>
                <Link
                  href='/'
                  className={`nav-home-link ${getActiveClass("/")}`}>
                  <span className='typcn typcn-large typcn-home nav-home-icon'></span>
                </Link>
              </li>
              <li>
                <Link
                  href='/alqasim'
                  className={getActiveClass("/alqasim")}>
                  القصيم بريده عنيزه
                </Link>
                <ul>
                  <li>
                    <Link
                      href='/alqasim/sayaarat'
                      className={getActiveClass("/alqasim/sayaarat")}>
                      مظلات سيارات
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/alqasim/hadayiq'
                      className={getActiveClass("/alqasim/hadayiq")}>
                      مظلات حدائق
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/alqasim/masabih'
                      className={getActiveClass("/alqasim/masabih")}>
                      مظلات مسابح
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/alqasim/madakhil'
                      className={getActiveClass("/alqasim/madakhil")}>
                      مظلات مداخل
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/alqasim/likasan'
                      className={getActiveClass("/alqasim/likasan")}>
                      مظلات لكسان
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/alqasim/madaris'
                      className={getActiveClass("/alqasim/madaris")}>
                      مظلات مدارس
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/alqasim/aswaq'
                      className={getActiveClass("/alqasim/aswaq")}>
                      مظلات اسواق
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/alqasim/masajid'
                      className={getActiveClass("/alqasim/masajid")}>
                      مظلات مساجد
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/alqasim/qumash'
                      className={getActiveClass("/alqasim/qumash")}>
                      مظلات قماش pvc
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/alqasim/shinku'
                      className={getActiveClass("/alqasim/shinku")}>
                      مظلات شينكو
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  href='/sawatiralqasim'
                  className={getActiveClass("/sawatiralqasim")}>
                  القصيم بريده عنيزه
                </Link>
                <ul>
                  <li>
                    <Link
                      href='/sawatiralqasim/hadid'
                      className={getActiveClass("/sawatiralqasim/hadid")}>
                      سواتر حديد
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/sawatiralqasim/qumash1'
                      className={getActiveClass("/sawatiralqasim/qumash1")}>
                      سواتر قماش
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/sawatiralqasim/bilastik'
                      className={getActiveClass("/sawatiralqasim/bilastik")}>
                      سواتر بلاستيك
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/sawatiralqasim/likasan1'
                      className={getActiveClass("/sawatiralqasim/likasan1")}>
                      سواتر لكسان
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/sawatiralqasim/masabih1'
                      className={getActiveClass("/sawatiralqasim/masabih1")}>
                      سواتر مسابح
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  href='/manatiqalsueudia'
                  className={getActiveClass("/manatiqalsueudia")}>
                  مظلات مناطق السعودية
                </Link>
              </li>
              <li>
                <Link
                  href='/hanajiralqasim'
                  className={getActiveClass("/hanajiralqasim")}>
                  هناجر الرياض
                </Link>
              </li>
              <li>
                <Link
                  href='/jalasatwaburjulat'
                  className={getActiveClass("/jalasatwaburjulat")}>
                  مظلات جلسات وبرجولات
                </Link>
              </li>
              <li>
                <Link
                  href='/shubukalqasim'
                  className={getActiveClass("/shubukalqasim")}>
                  شبوك القصيم بريده عنيزه
                </Link>
              </li>
              <li>
                <Link
                  href='/biutshaer'
                  className={getActiveClass("/biutshaer")}>
                  بيوت شعر
                </Link>
              </li>
              <li>
                <Link
                  href='/aitasilbina'
                  className={getActiveClass("/aitasilbina")}>
                  اتصل بنا
                </Link>
              </li>
              <li>
                <Link
                  href='/wasawatirfialqasim'
                  className={getActiveClass("/wasawatirfialqasim")}>
                  مظلات وسواتر في القصيم بريده عنيزه
                </Link>
              </li>
              <li
                className='more hidden'
                data-width='50'>
                <Link
                  href='/almazid'
                  rel='more-button'
                  className={getActiveClass("/almazid")}>
                  المزيد
                </Link>
                <ul className='more-ul'></ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className='toolbar-option-wrapper'>
        <div className='toolbar-option flex-row sc-120 mc-85 lc-95'>
          <div className='sc-120 mc-40 lc-40'>
            <div>
              <SearchComponent />

              <div className='autocomplete-suggestions'></div>
            </div>
          </div>
          <div className='sc-120 sc-show mc-hide lc-hide toolbar-option-separator'></div>
          {/* header mobile menu */}
          <div className='sc-10 sc-show mc-hide lc-hide'>
            <div
              className='site-menu-float-button typcn typcn-large typcn-th-menu'
              onClick={() =>
                (document.querySelector(".site-menu-float").style.display =
                  "block")
              }></div>
          </div>
          <div className='site-menu-float sc-hide mc-hide lc-hide'>
            <span
              className='typcn typcn-large typcn-delete site-menu-float-close-icon'
              onClick={() =>
                (document.querySelector(".site-menu-float").style.display =
                  "none")
              }></span>
            <ul>
              <li>
                <Link
                  href='/'
                  className={`nav-home-link ${getActiveClass("/")}`}>
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  href='/alqasim'
                  className={getActiveClass("/alqasim")}>
                  القصيم بريده عنيزه
                </Link>
                <ul>
                  <li>
                    <Link
                      href='/alqasim/sayaarat'
                      className={getActiveClass("/alqasim/sayaarat")}>
                      مظلات سيارات
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/alqasim/hadayiq'
                      className={getActiveClass("/alqasim/hadayiq")}>
                      مظلات حدائق
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/alqasim/masabih'
                      className={getActiveClass("/alqasim/masabih")}>
                      مظلات مسابح
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/alqasim/madakhil'
                      className={getActiveClass("/alqasim/madakhil")}>
                      مظلات مداخل
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/alqasim/likasan'
                      className={getActiveClass("/alqasim/likasan")}>
                      مظلات لكسان
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/alqasim/madaris'
                      className={getActiveClass("/alqasim/madaris")}>
                      مظلات مدارس
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/alqasim/aswaq'
                      className={getActiveClass("/alqasim/aswaq")}>
                      مظلات اسواق
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/alqasim/masajid'
                      className={getActiveClass("/alqasim/masajid")}>
                      مظلات مساجد
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/alqasim/qumash'
                      className={getActiveClass("/alqasim/qumash")}>
                      مظلات قماش pvc
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/alqasim/shinku'
                      className={getActiveClass("/alqasim/shinku")}>
                      مظلات شينكو
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  href='/sawatiralqasim'
                  className={getActiveClass("/sawatiralqasim")}>
                  القصيم بريده عنيزه
                </Link>
                <ul>
                  <li>
                    <Link
                      href='/sawatiralqasim/hadid'
                      className={getActiveClass("/sawatiralqasim/hadid")}>
                      سواتر حديد
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/sawatiralqasim/qumash1'
                      className={getActiveClass("/sawatiralqasim/qumash1")}>
                      سواتر قماش
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/sawatiralqasim/bilastik'
                      className={getActiveClass("/sawatiralqasim/bilastik")}>
                      سواتر بلاستيك
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/sawatiralqasim/likasan1'
                      className={getActiveClass("/sawatiralqasim/likasan1")}>
                      سواتر لكسان
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/sawatiralqasim/masabih1'
                      className={getActiveClass("/sawatiralqasim/masabih1")}>
                      سواتر مسابح
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  href='/manatiqalsueudia'
                  className={getActiveClass("/manatiqalsueudia")}>
                  مظلات مناطق السعودية
                </Link>
              </li>
              <li>
                <Link
                  href='/hanajiralqasim'
                  className={getActiveClass("/hanajiralqasim")}>
                  هناجر الرياض
                </Link>
              </li>
              <li>
                <Link
                  href='/jalasatwaburjulat'
                  className={getActiveClass("/jalasatwaburjulat")}>
                  مظلات جلسات وبرجولات
                </Link>
              </li>
              <li>
                <Link
                  href='/shubukalqasim'
                  className={getActiveClass("/shubukalqasim")}>
                  شبوك القصيم بريده عنيزه
                </Link>
              </li>
              <li>
                <Link
                  href='/biutshaer'
                  className={getActiveClass("/biutshaer")}>
                  بيوت شعر
                </Link>
              </li>
              <li>
                <Link
                  href='/aitasilbina'
                  className={getActiveClass("/aitasilbina")}>
                  اتصل بنا
                </Link>
              </li>
              <li>
                <Link
                  href='/wasawatirfialqasim'
                  className={getActiveClass("/wasawatirfialqasim")}>
                  مظلات وسواتر في القصيم بريده عنيزه
                </Link>
              </li>
            </ul>
          </div>
          {/* end header mobile menu */}
          <div className='sc-110 mc-80 lc-80 flex-row-reverse'>
            <span className='flex-row-reverse'>
              <a
                href='https://www.instagram.com/mazlatswater/'
                target='blank'>
                <img
                  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAQMAAAC3/F3+AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjwAsAAB4AAdpxxYoAAAAASUVORK5CYII='
                  alt='instagram'
                  className='socialicon socialicon-instagram'
                />
              </a>

              <a
                href='https://www.facebook.com/share/E42VrQoFkhzNf7Fx/?mibextid=qi2Omg'
                target='_blank'>
                <img
                  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAQMAAAC3/F3+AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjwAsAAB4AAdpxxYoAAAAASUVORK5CYII='
                  alt='facebook'
                  className='socialicon socialicon-facebook'
                />
              </a>
              <a
                href='https://x.com/badshazada73090?t=Q5G6bA1rCmNqmWLVfPht8g&s=09'
                target='_blank'>
                <img
                  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAQMAAAC3/F3+AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjwAsAAB4AAdpxxYoAAAAASUVORK5CYII='
                  alt='twitter'
                  className='socialicon socialicon-twitter'
                />
              </a>
              <a
                href='https://wa.me/966500173090'
                target='_blank'>
                <img
                  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAQMAAAC3/F3+AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjwAsAAB4AAdpxxYoAAAAASUVORK5CYII='
                  alt='twitter'
                  className='socialicon socialicon-whatsapp'
                />
              </a>
              <a
                href='https://www.tiktok.com/@sameirbadshakhan35?_t=8ndRCeRzc4z&_r=1'
                target='blank'>
                <img
                  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAQMAAAC3/F3+AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjwAsAAB4AAdpxxYoAAAAASUVORK5CYII='
                  alt='youtube'
                  className='socialicon socialicon-youtube'
                />
              </a>
              <a
                href='https://www.linkedin.com/in/muhammad-shafiq-419a4327b/'
                target='blank'>
                <img
                  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAQMAAAC3/F3+AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjwAsAAB4AAdpxxYoAAAAASUVORK5CYII='
                  alt='linkedin'
                  className='socialicon socialicon-linkedin'
                />
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
