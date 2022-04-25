import React from 'react';
import st from './sectionOneDate.module.scss';

const SectionOneDateStart = () => (
  <div className={`col-12 col-md-6 ${st.banner_field__col} ${st.banner_start}`}>
    <div className={st.field_name}>
      <span className={st.field_name__txt}>Start Date</span>
    </div>
    <div className={`${st.date_field} ${st.start_date}`}>
      <div className={`${st.banner_change_date} ${st.change_date}`}>
        <span className={st.date} />
        <span className={st.date_icon}>
          <img src="../../../assets/images/ic_event_24px.svg" alt="date_ic" />
        </span>
      </div>
      <div className={`${st.banner_change_date} ${st.change_time}`}>
        <span className={st.time} />
        <span className={st.time_icon}>
          <img src="../../../assets/images/ic-open-clock.svg" alt="time_ic" />
        </span>
      </div>
    </div>
  </div>
);

export default SectionOneDateStart;
