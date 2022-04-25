import React from 'react';
import Promotion from '../../../../../assets/images/promotion.svg';
import s from './Promotions.module.scss';
import PM from '../../../../../assets/images/PM.png';
import { IMAGES } from '../../../../../assets/images';

const PromotionsBanner = ({ title }) => (

  title ? <div className={`col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 promotion_banner ${s.promotion_columns}`}>
    <div className={s.promotions__section}>
      <span className={s.default_txt}>Default</span>
      <a href="#" className={s.selected_promotion_img}>
        <img src={PM} alt="" className={s.big_img} />
        <div class={s.banner_description}>
          <span class={s.promotionDescription__title}>promotion title</span>
          <span class={s.promotionDescription}>description description description</span>
        </div>
      </a>
      <span className={s.selected_promotion_link}>
        <a href="#">
          <img className={s.ic_path} src={IMAGES.upPath.src} alt="ic_path" />
          <span className={s.link_path}>.../promotions/cance_bet</span>
        </a>
      </span>
    </div>
  </div> : <div className={`col-12 col-sm-12 col-md-12
col-lg-12 col-xl-4 promotion_banner ${s.promotion_columns}`}>
    <div className={s.promotions__section}>
      <span className={s.default_txt}>Default</span>
      <a href="#" className={s.selected_promotion_img}>
        <img src={PM} alt="" className={s.small_img} />
      </a>
      <span className={s.selected_promotion_link}>
        <a href="#">
          <img className={s.ic_path} src={IMAGES.upPath.src} alt="ic_path" />
          <span className={s.link_path}>.../promotions/cance_bet</span>
        </a>
      </span>
    </div>
  </div>
);

export default PromotionsBanner;
