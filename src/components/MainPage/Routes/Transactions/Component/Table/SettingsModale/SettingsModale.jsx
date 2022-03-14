import React, { useState } from 'react';
import { CustomSwitcher, CustomModal, CustomButton } from '../../../../../../Custom';
import s from './SettingsModal.module.scss';

function SettingsModal({
  closePopup, activeHeaders, setActiveHeaders, balanceHeaders,
}) {
  const [ localActiveHeaders, setLocalActiveHeaders ] = useState(activeHeaders);

  const nullified = Object.keys(localActiveHeaders).reduce((acc, current) => {
    acc[current] = null;
    return acc;
  }, {});

  const onSwitchClick = (key) => {
    if (localActiveHeaders[key]) {
      return setLocalActiveHeaders(prev => ({ ...prev, [key]: null }));
    }
    return setLocalActiveHeaders(prev => ({ ...prev, [key]: balanceHeaders[key] }));
  };

  const onSaveClick = () => {
    setActiveHeaders(localActiveHeaders);
    closePopup();
  };

  const onSwitchAllClick = () => {
    for (const key in localActiveHeaders) {
      if (localActiveHeaders[key] === null) {
        return setLocalActiveHeaders(balanceHeaders);
      }
    }

    return setLocalActiveHeaders(nullified);
  };
  return (
    <CustomModal onClose={closePopup}>
      <div className={s.switchAll}>
        <div className={s.allText} >
          All
        </div>
        <CustomSwitcher
          color={'#5b7077'}
          checked={localActiveHeaders === balanceHeaders}
          onClick={onSwitchAllClick}
         />
      </div>

      <div className={s.modalBlock}>
        {
           Object.values(balanceHeaders).map(header => (
             <div className={s.headerNameWrapper} key={header.key}>
               {header.name}
               <CustomSwitcher
                 color={'#5b7077'}
                 checked={localActiveHeaders[header.key] !== null}
                 onClick={() => onSwitchClick(header.key)} />
             </div>
           ))
       }

      </div>
      <div className={s.onSaveWrapper}>
        <CustomButton onClick={onSaveClick} className={s.button__save}>Save</CustomButton>
      </div>
    </CustomModal>
  );
}

export default SettingsModal;
