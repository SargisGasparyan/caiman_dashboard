import React, { useState } from 'react';
import { useTranslation } from '../../../../../../../context/LanguageProvider';
import styles from '../../../Segments.module.scss';
import CustomSingleDatepicker from '../../../../../../Custom/CustomDatepicker/CustomDoubleDatepicker';
import { segmentsFilters } from '../../../../../../../helpers/segments';
import CustomInput from '../../../../../../Custom/CustomInput/CustomInput';
import CustomSelect from '../../../../../../Custom/CustomSelect/CustomSelect';
import { capitalize } from '../../../../../../../helpers/utils';

// import { capitalize } from '../../../../../../helpers/utils';

function CreateSegmentThirdPopup({ id, currentSection, thirdPopup }) {
  const { t } = useTranslation();
  // const label = segmentsFilters[id][currentSection][thirdPopup]
  // && segmentsFilters[id][currentSection][thirdPopup].label
  //   ? segmentsFilters[id][currentSection][thirdPopup].label
  //   : segmentsFilters[id][currentSection][thirdPopup];

  const dataPickerArray = [
    'registrationDate', 'loginDate', 'lastLoginDate',
    'dailyLogin', 'depositDate', 'lastDepositDate',
    'withdrawDate', 'lastWithdrawalDate', 'requestDate',
    'betDate', 'lastBetDay', 'birthDay',
    'sportsbookBetDate', 'totalOdds', 'casinoBetDate',
  ];
  const selectionsArray = [
    'registrationOrigin', 'requestType', 'betActivity',
    'currency', 'paymentSystem', 'gender', 'providers',
    'phoneOperator', 'locked', 'competitions',
    'sport', 'liveBet', 'games', 'products',
  ];
  const textArray = [
    'keno', 'wof', 'turboKeno', 'turboWof', 'crazyRocket', 'averageDepositInterval',
  ];
  const singleInput = [
    'depositCount', 'withdrawCount', 'paymentCount', 'sportsbookBetCount', 'betSelectionCount',
  ];
  return (
    <>
      <div className={`${styles.segments__list_container} ${styles.popup}`}>
        {/* {dataPickerArray.includes(currentSection) */}
        {/* && <CustomSingleDatepicker */}
        {/*   label={label} */}
        {/*   className={styles.thirdPopupDataPicker} */}
        {/* />} */}
        {/* {selectionsArray.includes(currentSection) */}
        {/*  && <CustomSelect */}
        {/*    options={segmentsFilters[id][currentSection].options} */}
        {/*    label={label} */}
        {/* />} */}
        {/* {textArray.includes(currentSection) */}
        {/* && <> */}
        {/*   <h3>{capitalize(currentSection)}</h3> */}
        {/*   <h1>We don't know</h1> */}
        {/* </>} */}
        {/* {singleInput.includes(thirdPopup) */}
        {/*  && <CustomInput */}
        {/*    label={label} */}
        {/* /> */}
        {/* } */}
        Hi
      </div>
    </>
  );
}

export default CreateSegmentThirdPopup;
