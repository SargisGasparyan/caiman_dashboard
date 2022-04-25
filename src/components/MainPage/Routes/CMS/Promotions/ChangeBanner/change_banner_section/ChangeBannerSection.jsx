import React from 'react';
// import SectionOne from './section_one/SectionOne';
import SectionOne from './section_one/SectionOne';
import SectionTwo from './section_two/SectionTwo';
import s from './changeBannerSection.module.scss';

const ChangeBannerSection = () => (
  <div className={`row ${s.change_banner_body}`} >
    <SectionOne />
    <SectionTwo />
  </div>
);

export default ChangeBannerSection;
