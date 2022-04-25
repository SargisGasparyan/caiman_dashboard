import React from 'react';
import s from './sectionTwo.module.scss';

const SectionTwoDefaultAdd = () => (
  <>
    <div className={`col-12 ${s.banner_default_col}`}>
      <span className={s.banner_default__txt}>Default</span>
      <span className={s.add_banner_area}>
        <button className={s.add_banner__btn} type="button">+</button>
      </span>
    </div>
    {/* <div className={`col-3  ${s.preview_button}`}>
      <button className={s.preview__btn} type="button">Preview</button>
    </div> */}
  </>
);

export default SectionTwoDefaultAdd;
