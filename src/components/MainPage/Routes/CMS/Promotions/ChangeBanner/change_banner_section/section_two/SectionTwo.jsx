import React from 'react';
import s from './sectionTwo.module.scss';
import SectionTwoDefaultAdd from './sectionTwoDefaultAdd';

const SectionTwo = () => (
  <div className={`col-12 col-lg-6 ${s.change_banner__section}`}>
    <div className={`row ${s.ch_banner_fields}`}>
      <div className={`col-12 ${s.banner_section_title}`}>
        <span className={s.section_title__txt}>Desktop/Mobile</span>
        <span className={s.banner_size__txt}>(1220 x 307)</span>
      </div>
      <SectionTwoDefaultAdd />
    </div>
  </div>
);

export default SectionTwo;
