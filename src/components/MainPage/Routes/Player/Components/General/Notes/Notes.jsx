import React from 'react';
import ss from '../../../Player.module.scss';
import s from './Notes.module.scss';
import CustomSingleDatepicker from '../../../../../../Custom/CustomDatepicker/CustomSingleDatepicker';
import CustomButton from '../../../../../../Custom/CustomButton/CustomButton';
import CustomTable from '../../../../../../Custom/CustomTable/CustomTable';

export const headers = [
  { name: 'Registration Source', key: 'regResources' },
  { name: 'Currency', key: 'currency' },
  // 'First deposit date': 'firstDeposit',
  { name: 'Is Test', key: 'isTest' },
  { name: 'Phone', key: 'phoneNumber' },
];
function Notes() {
  return (
    <>
      <div className={ss.content_container}>
        <p>Filter</p>
        <div className={ss.input_block}>
          <CustomSingleDatepicker
            label={'Datepicker'}
        />
        </div>
        <div className={ss.btn_block}>
          <CustomButton
          // onClick={onApply}
            style={{ width: 110, marginRight: '2%' }}

               >
            Apply
          </CustomButton>
          <CustomButton
            style={{ width: 110, background: '#e0e1e2', color: 'rgba(0, 0, 0, 0.6)' }}
          // onClick={onReset}
              >
            Reset
          </CustomButton>
        </div>
      </div>
      <div className={ss.content_container}>
        <p>Notes</p>
        <div className={s.add_notes}>
          <CustomButton
          // onClick={onApply}
            style={{ width: 110, marginRight: '2%' }}

               >
            Apply
          </CustomButton>
        </div>
        <div className={s.notes_table}>
          <CustomTable >
            <CustomTable.Header>
              <CustomTable.Row >
                {headers.map((item) => {
                  if (item.sort) {
                    return (
                      <CustomTable.HeaderCell
                        // onClick={() => onSortClick(item.name)}
                        // sort={sortData}
                        key={item.key}>
                        {item.name}
                      </CustomTable.HeaderCell>
                    );
                  }
                  return (
                    <CustomTable.HeaderCell
                      key={item.key}>
                      {item.name}
                    </CustomTable.HeaderCell>
                  );
                })}
              </CustomTable.Row>
            </CustomTable.Header>
            <CustomTable.Body />
          </CustomTable>
        </div>
      </div>
    </>
  );
}

export default Notes;
