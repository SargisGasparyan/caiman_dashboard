import React, { useState } from 'react';
import styles from '../../Segments.module.scss';
import CustomInput from '../../../../../Custom/CustomInput/CustomInput';
import { useTranslation } from '../../../../../../context/LanguageProvider';
import CustomSelect from '../../../../../Custom/CustomSelect/CustomSelect';

const hybridTypes = [
  { label: 'Union', value: 'Union' },
  { label: 'Interstack', value: 'Interstack' },
  { label: 'Difference', value: 'Difference' },
];

function HybridSegment() {
  const { t } = useTranslation();

  return (
    <div className={styles.hybridType__container}>
      <div className={styles.hybridType__choose_container}>
        <CustomInput
          label={'Choose Segment'}
          width={170}
          height={60}
          disabled
      />
        <button className={styles.choose__button}>{t('Choose')}</button>
      </div>
      <label htmlFor='main' className={`${styles.container} ${styles.main__checkbox_container}`}>
        <input type='checkbox' id='main' />
        <span className={styles.checkmark} />
        {t('Main')}
      </label>
      <div className={styles.generate__type}>
        <CustomSelect
          label={'Generate type'}
          options={hybridTypes}
          width={270}
        />
        <button className={`${styles.choose__button} ${styles.generate__button}`}>
          {t('Generate')}
        </button>
      </div>
    </div>
  );
}

export default HybridSegment;
