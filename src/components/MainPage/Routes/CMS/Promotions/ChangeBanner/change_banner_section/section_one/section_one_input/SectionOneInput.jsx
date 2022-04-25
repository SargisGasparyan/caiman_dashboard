import React from 'react';
import st from './sectionOneInp.module.scss';

const SectionOneInput = ({ label }) => (
  <div className={`col-12 col-md-6 ${st.banner_field__col}`}>
    <div className={st.field_name}>
      <span className={st.field_name__txt}>{label}</span>
    </div>
    <input type="text" />
  </div>
);

export default SectionOneInput;
