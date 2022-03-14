import React, { useEffect, useState } from 'react';
import { useTranslation } from '../../../../../context/LanguageProvider';
import styles from '../Segments.module.scss';
import CustomSelect from '../../../../Custom/CustomSelect/CustomSelect';
import CustomInput from '../../../../Custom/CustomInput/CustomInput';
import CreateSegmentPopup from './CreateSegmentPopup/CreateSegmentPopup';
import { segmentsFilters, segmentTypesVariables } from '../../../../../helpers/segments';
import { capitalize } from '../../../../../helpers/utils';
import timeIcon from '../../../../../assets/images/Clock.svg';
import DynamicSegment from './DynamicSegment/DynamicSegment';
import HybridSegment from './HybridSegment/HybridSegment';
import StaticSegment from './StaticSegment/StaticSegment';

const { DYNAMIC, HYBRID, STATIC } = segmentTypesVariables;

const segmentTypes = [
  { label: DYNAMIC, value: DYNAMIC },
  { label: HYBRID, value: HYBRID },
  { label: STATIC, value: STATIC },
];

function CreateSegments() {
  const { t } = useTranslation();
  const [ segmentType, selectSegmentType ] = useState(segmentTypes[0]);
  const [ popup, openPopup ] = useState(false);
  const handleSelectChange = (value) => {
    selectSegmentType(value);
  };

  const openCurrentPopup = (value) => {
    openPopup(value);
  };

  return (
    <>
      <div className={styles.segments__header}>
        {t('Create new segment')}
      </div>
      <div className={styles.create__segment_page}>
        <div>
          <div className={styles.create__segment_container}>
            <div className={styles.custom__select}>
              <CustomSelect
                options={segmentTypes}
                value={segmentType}
                label={t('Select Segment Type')}
                width={270}
                onChange={handleSelectChange}
            />
            </div>
            <div className={styles.custom__select}>
              <CustomInput
                label={t('Title')}
                width={270}
                className={styles.title__input}
            />
              <span className={styles.asterisk}>*</span>
            </div>
            <div className={styles.custom__select}>
              <label htmlFor={'textArea'} className={styles.textarea__label}>Description</label>
              <textarea rows={4} id='textArea' />
            </div>
          </div>
          {segmentType.value === DYNAMIC && <DynamicSegment openCurrentPopup={openCurrentPopup} />}
          {segmentType.value === HYBRID && <HybridSegment />}
          {segmentType.value === STATIC && <StaticSegment />}
          <div className={styles.last__update}>
            <img src={timeIcon} alt={'Time icon'} className={styles.clock__icon} />
            <p className={styles.last__update_text}>Last update 12.12.2021</p>
            <button className={`${styles.create__button} ${styles.more__button}`}>{t('More')}</button>
          </div>
        </div>
        {popup && <CreateSegmentPopup currentSection={popup} />}
      </div>
    </>
  );
}

export default CreateSegments;
