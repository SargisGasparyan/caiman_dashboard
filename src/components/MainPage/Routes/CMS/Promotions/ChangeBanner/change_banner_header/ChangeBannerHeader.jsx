import React from 'react';
import s from './changeBannerHeader.module.scss';

const ChangeBannerHeader = () => (
  <div className={`row ${s.change_banner_head}`}>
    <div className={`col-12 col-md-5 ${s.change_banner_title}`}>
      <span className={s.change_banner__txt}>Default Back banner</span>
    </div>
    <div className={`col-12 col-md-7 ${s.change_banner_actions}`}>
      <span className={`${s.action_type} ${s.action_tp__save}`}>Save</span>
      <span className={`${s.action_type} ${s.action_tp__publish}`}>Publish</span>
      <span className={`${s.action_type} ${s.action_tp__cancel}`}>Cancel</span>
    </div>
  </div>
);

export default ChangeBannerHeader;
