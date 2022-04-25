import React from 'react';
import s from './PromotionPage.module.scss';
import Promotions from './Promotions';

const PromotionPage = () => (
  <div className={s.promotions}>
    <div className={`container ${s.promotions_container}`}>
      <Promotions title={'Promotions'} changeText={'ADD PROMOTION'} default_img change_banner />
      <Promotions title={'Promotions background'} changeText={'CHANGE BANNER'} />
    </div>
  </div>
);

export default PromotionPage;
