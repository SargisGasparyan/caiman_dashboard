import React, { useState } from 'react';
import { useTranslation } from '../../../../../context/LanguageProvider';
import styles from '../Segments.module.scss';
import SegmentsDraft from './SegmentsDraft/SegmentsDraft';
import SegmentsActive from './SegmentsActive/SegmentsActive';

function SegmentsTab({ openPage }) {
  const { t } = useTranslation();
  const [ activePage, setActivePage ] = useState('active');
  const openActivePage = (page) => {
    setActivePage(page);
  };
  return (
    <>
      <div className={styles.segments__header}>{t('Segments')}</div>
      <div className={styles.active__draft__create}>
        <div className={styles.active__draft_container}>
          <button
            onClick={() => openActivePage('active')}
            className={
              activePage === 'active' ? `${styles.segments__menu_segments} ${styles.active}`
                : styles.segments__menu_segments}>Active</button>
          <button
            onClick={() => openActivePage('draft')}
            className={
              activePage === 'draft' ? `${styles.segments__menu_segments} ${styles.active}`
                : styles.segments__menu_segments}>Draft 3</button>
        </div>
        <button className={styles.create__button} onClick={() => openPage('create')}>{t('Create segment')}</button>
      </div>
      {activePage === 'active' ? <SegmentsActive /> : <SegmentsDraft />}
    </>
  );
}

export default SegmentsTab;
