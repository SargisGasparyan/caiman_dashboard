import React from 'react';
import st from './PromotionTableFilter.module.scss';

const PromotionsFilterInfo = () => (
  <div className={st.promotion_actions}>
    <div className={st.promotion_actions__type}>
      <span className={st.action__type}>Active</span>
      <span className={`${st.action__count} ${st.a1__count}`}>6</span>
    </div>
    <div className={st.promotion_actions__type}>
      <span className={st.action__type}>Expected</span>
      <span className={`${st.action__count} ${st.a2__count}`}>3</span>
    </div>
    <div className={st.promotion_actions__type}>
      <span className={st.action__type}>Saved</span>
      <span className={`${st.action__count} ${st.a3__count}`}>3</span>
    </div>
    <div className={st.promotion_actions__type}>
      <span className={st.action__type}>Archive</span>
      <span className={`${st.action__count} ${st.a4__count}`}>45</span>
    </div>
  </div>
);
export default PromotionsFilterInfo;
