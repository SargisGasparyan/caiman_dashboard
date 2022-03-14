import React, { useState } from 'react';
import styles from '../../Segments.module.scss';
import { segmentsFilters } from '../../../../../../helpers/segments';
import { capitalize } from '../../../../../../helpers/utils';
import { useTranslation } from '../../../../../../context/LanguageProvider';

const initialState = {
  currentPage: false,
};
function DynamicSegment({ openCurrentPopup }) {
  const { t } = useTranslation();
  const [ state, setState ] = useState(initialState);
  openCurrentPopup(state.currentPage);
  const openCurrentSegmentPopup = (id) => {
    setState(prev => ({
      ...prev,
      currentPage: id === state.currentPage ? false : id,
    }));
  };

  return (
    <>
      <div className={styles.segments__list_container}>
        <p className={styles.segments__title}>{t('List of segments filters')}</p>
        <ul className={styles.segments__list}>
          {Object.keys(segmentsFilters).map(item => <li
            onClick={() => openCurrentSegmentPopup(item)}
            className={styles.segments__list_item}>
            <div className={styles.check__container}>
              {/* <Checkbox */}
              {/*  checked={state.currentPage === item} */}
              {/*  onClick={() => openCurrentSegmentPopup(item)} /> */}
              <label className={styles.container}>
                {capitalize(t(`${item}`))}
              </label>
            </div>
            <div className={styles.create__arrow_right} />
          </li>)}
        </ul>
      </div>
    </>
  );
}

export default React.memo(DynamicSegment);
