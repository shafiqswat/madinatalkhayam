/** @format */

import React from "react";

function Footer() {
  return (
    <div className='footer-wrapper'>
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
      <footer aria-label='Website Footer'>
        <p>مدينة الخيام المظلات © {new Date().getFullYear()}</p>
        <div className='sc-hide mc-hide lc-hide'>
          <span>Powered by: </span>
          <a
            href='https://www.digitallife.ps/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Digital Life CMS'>
            Digital Life CMS - 3.0
          </a>
        </div>
        <a
          href='#'
          className='back-to-top'
          aria-label='Back to top'>
          <span className='typcn typcn-large typcn-arrow-up-thick'></span>
        </a>
      </footer>
    </div>
  );
}

export default Footer;
