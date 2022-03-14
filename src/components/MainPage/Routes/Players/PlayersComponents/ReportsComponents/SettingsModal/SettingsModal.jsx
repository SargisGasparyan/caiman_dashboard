import React, { useState } from 'react';
import { CustomSwitcher } from '../../../../../../Custom';
import CustomBootstrapModal from '../../../../../../Custom/CustomBootstrapModal/CustomBootstrapModal';
import { headers } from '../../../helpers/constant';
import s from '../../PlayersReport.module.scss';

function SettingsModal({ closePopup, activeHeaders, setActiveHeaders }) {
  const [ localActiveHeaders, setLocalActiveHeaders ] = useState(activeHeaders);

  const nullified = Object.keys(localActiveHeaders).reduce((acc, current) => {
    acc[current] = null;
    return acc;
  }, {});

  const onSwitchClick = (key) => {
    if (localActiveHeaders[key]) {
      return setLocalActiveHeaders(prev => ({ ...prev, [key]: null }));
    }
    return setLocalActiveHeaders(prev => ({ ...prev, [key]: headers[key] }));
  };

  const onSaveClick = () => {
    setActiveHeaders(localActiveHeaders);
    closePopup();
  };

  const onSwitchAllClick = () => {
    for (const key in localActiveHeaders) {
      if (localActiveHeaders[key] === null) {
        return setLocalActiveHeaders(headers);
      }
    }

    return setLocalActiveHeaders(nullified);
  };
  return (
    <CustomBootstrapModal title={'Filter'} onClose={closePopup} onSave={onSaveClick}>
      <div className={s.switchAll}>
        <div className={s.allText} >
          All
        </div>
        <CustomSwitcher
          color={'#5b7077'}
          checked={localActiveHeaders === headers}
          onClick={onSwitchAllClick}
         />
      </div>
      {
           Object.values(headers).map(header => (
             <div className={s.headerNameWrapper} key={header.key}>
               {header.name}
               <CustomSwitcher
                 color={'#5b7077'}
                 checked={localActiveHeaders[header.key] !== null}
                 onClick={() => onSwitchClick(header.key)} />
             </div>
           ))
       }
    </CustomBootstrapModal>
  );
}

export default SettingsModal;
