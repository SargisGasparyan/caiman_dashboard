import React, { useState } from 'react';
import { useTranslation } from '../../../../context/LanguageProvider';
import styles from './Segments.module.scss';
import SegmentsTab from './Segments/Segments';
import CreateSegments from './CreateSegment/CreateSegment';

function Segments() {
  const { t } = useTranslation();
  const [ openedPage, setOpenedPage ] = useState('segments');

  const openPage = (page) => {
    setOpenedPage(page);
  };
  return (
    <>
      <div className={styles.segments__menu}>
        <button
          onClick={() => openPage('segments')}
          className={
            openedPage === 'segments' ? `${styles.segments__menu_segments} ${styles.active}`
              : styles.segments__menu_segments}>
          {t('Segments')}
        </button>
        <button
          onClick={() => openPage('create')}
          className={openedPage === 'create' ? `${styles.segments__menu_create} ${styles.active}`
            : styles.segments__menu_create}>
          {t('Create new segment')}
        </button>
      </div>
      {openedPage === 'segments' ? <SegmentsTab openPage={openPage} /> : <CreateSegments />}
    </>
  );
}

export default Segments;
