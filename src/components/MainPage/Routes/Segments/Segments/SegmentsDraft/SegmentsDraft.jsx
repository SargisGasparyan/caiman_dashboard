import React from 'react';
import { useTranslation } from '../../../../../../context/LanguageProvider';
import styles from '../../Segments.module.scss';

function SegmentsDraft() {
  const { t } = useTranslation();

  return (
    <div className={styles.active__container}>
      {t('Draft')}
    </div>
  );
}
export default SegmentsDraft;
