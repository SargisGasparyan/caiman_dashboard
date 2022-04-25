import React from 'react';
import s from './sectionOne.module.scss';
import SectionOneDateEnd from './section_one_date/SectionOneDateEnd';
import SectionOneDatePriority from './section_one_date/SectionOneDatePriority';
import SectionOneDateStart from './section_one_date/SectionOneDateStart';
import SectionOneInput from './section_one_input/SectionOneInput';

const SectionOne = () => (
  <div className={`col-12 col-lg-6 ${s.change_banner__section}`}>
    <div className={`row ${s.ch_banner_fields}`}>
      <SectionOneInput label={'Banner name'} classes={'banner_name'} classesInp={'banner_name__place'} />
      <SectionOneInput label={'Link'} classes={'banner_link'} classesInp={'banner_link__place'} />
      <SectionOneDateStart />
      <SectionOneDateEnd />
      <SectionOneDatePriority />
    </div>
  </div>
);

export default SectionOne;
