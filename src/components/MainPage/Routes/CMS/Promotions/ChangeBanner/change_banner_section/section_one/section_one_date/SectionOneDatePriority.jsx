import React from 'react';
import st from './sectionOneDate.module.scss';

const SectionOneDatePriority = () => (
  <div className={`col-12 col-md-6 ${st.banner_field__col} ${st.banner_priority}`}>
    <div className={st.field_name}>
      <span className={st.field_name__txt}>Priority</span>
    </div>
    <span className={st.priority_count}>1</span>
  </div>
);

export default SectionOneDatePriority;
