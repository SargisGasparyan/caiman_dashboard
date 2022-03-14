import React, { useState } from 'react';
import { useTranslation } from '../../../../../../context/LanguageProvider';
import styles from '../../Segments.module.scss';
import { capitalize } from '../../../../../../helpers/utils';
import { segmentsFilters } from '../../../../../../helpers/segments';
import CreateSegmentThirdPopup from './CreateSegmentThirdPopup/CreateSegmentThirdPopup';

const initialState = {
  selectedSection: null,
  thirdAdditionalPopup: null,
};
function CreateSegmentPopup({ currentSection }) {
  const { t } = useTranslation();
  const [ state, setState ] = useState(initialState);
  const sectionObject = segmentsFilters[currentSection];

  const openSelectedSection = (section) => {
    setState(prev => ({
      ...prev,
      selectedSection: section === state.selectedSection ? false : section,
    }));
  };

  const openThirdAdditionalPopup = (popup) => {
    setState(prev => ({
      ...prev,
      thirdAdditionalPopup: popup === state.thirdAdditionalPopup ? false : popup,
    }));
  };

  return (
    <>
      <div className={`${styles.segments__list_container} ${styles.popup}`}>
        <p className={styles.segments__title}>{t(`${capitalize(currentSection)}`)}</p>
        <ul className={styles.segments__list}>
          {Object.keys(sectionObject).map(item => <>
            <li
              onClick={() => openSelectedSection(item)}
              className={styles.segments__list_item}>
              <div className={styles.check__container}>
                {/* <Checkbox checked={state.selectedSection === item} /> */}
                <label className={styles.container}>
                  {t(`${item}`)}
                </label>
              </div>
              <div className={styles.create__arrow_right} />
            </li>
            {sectionObject[item].includesList && state.selectedSection === item
              && Object.keys(sectionObject[item].properties)
                .map(item1 => <li
                  className={styles.segments__list_item_child}
                  onClick={() => openThirdAdditionalPopup(item1)}
                >
                  <div className={styles.check__container}>
                    {/* <Checkbox checked={state.thirdAdditionalPopup === item1} /> */}
                    <label className={styles.container}>
                      {t(`${item1}`)}
                    </label>
                  </div>
                  <div className={styles.create__arrow_right} />
                </li>)}
          </>)}
        </ul>
      </div>
      {state.thirdAdditionalPopup
      && <CreateSegmentThirdPopup selectedSection={state.selectedSection} />}
    </>
  );
}

export default CreateSegmentPopup;
