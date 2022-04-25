import React from 'react';
import s from './Promotions.module.scss';
import st from './promotionTableFilter/PromotionTableFilter.module.scss';

import PromotionsFilter from './promotionTableFilter/PromotionsFilter';
import PromotionsFilterInfo from './promotionTableFilter/PromotionsFilterInfo';
import Promotion from '../../../../../assets/images/promotion.svg';

import PromotionTable from './promotionTableFilter/PromotionTable';
import PromotionsBanner from './PromotionsBanner';

const Promotions = ({
  title, changeText, default_img, change_banner,
}) => (
  <>
    <div className={s.promotions_title}>
      <span className={s.promotions_icon}>
        <img src={Promotion} alt="promotions" />
      </span>
      <span className={s.promotions_title__txt}>{title}</span>
    </div>
    <div className={`row ${s.promotions_row} `}>
      <div className={`col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 ${st.promotions_unit} ${st.promotion_columns}`}>
        <div className={` ${s.promotions__section}`}>
          <PromotionsFilter changeText={changeText} change_banner={change_banner} />
          <div id="playersId" className={st.promotions_section__list}>
            <PromotionTable tableData={[ 1, 2, 3, 6 ]} headers={[ 2, 3, 6, 9, 6, 3, 5, 9 ]} />
          </div>
          <div />
          <PromotionsFilterInfo />
        </div>
      </div>
      <PromotionsBanner title={default_img} />
    </div>
  </>
);

export default Promotions;
