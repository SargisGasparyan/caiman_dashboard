import React, { useState } from 'react';
import CustomBootstrapModal from '../../../../../Custom/CustomBootstrapModal/CustomBootstrapModal';
import { fakeData } from '../../constants';
import { CustomSwitcher } from '../../../../../Custom';
import s from './ComponentsList.module.scss';

function ComponentsList({ closeList, visibleWidgets, setVisibleWidgets }) {
  const [ selectedItems, setSelectedItems ] = useState(visibleWidgets);
  const saveHandler = () => {
    setVisibleWidgets(selectedItems);
    closeList();
  };
  return (
    <CustomBootstrapModal onClose={closeList} title={'Widgets List'} onSave={saveHandler}>
      <div className={s.all}>
        <div style={{ marginRight: 5, fontSize: 14 }}>
          All
        </div>
        <CustomSwitcher
          color={'#5b7077'}
          checked={!Object.values(selectedItems).includes(false)}
          onClick={() => setSelectedItems()}
         />
      </div>
      {fakeData.map(item => <div className={s.headerNameWrapper} key={item.index}>
        {item.title}
        <CustomSwitcher
          onClick={() => setSelectedItems({
            ...selectedItems, [item.index]: !selectedItems[item.index],
          })}
          color={'#5b7077'}
          checked={selectedItems[item.index]}
        />
      </div>)}
    </CustomBootstrapModal>
  );
}

export default ComponentsList;
