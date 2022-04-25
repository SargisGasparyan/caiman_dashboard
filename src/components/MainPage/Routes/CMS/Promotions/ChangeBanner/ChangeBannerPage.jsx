import React from 'react';
import s from './changeBannerPage.module.scss';
import ChangeBannerHeader from './change_banner_header/ChangeBannerHeader';
import ChangeBannerSection from './change_banner_section/ChangeBannerSection';

const ChangeBannerPage = () => (
  <div className={s.change_banner} >
    <div className={`container ${s.change_banner_container}`}>
      <ChangeBannerHeader />
      <ChangeBannerSection />
    </div>
  </div>

);

export default ChangeBannerPage;
