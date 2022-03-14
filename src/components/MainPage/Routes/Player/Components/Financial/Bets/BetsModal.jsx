import React from 'react';
import moment from 'moment';
import { CustomTable, CustomButton } from '../../../../../../Custom';
import { modalHeaders } from '../helpers/constants';
import s from './Bets.module.scss';

function BetsModal({ onClose, bet }) {
  return (
    <div className={s.bets_modal}>
      <div className={s.bets_table}>
        <CustomTable>
          <CustomTable.Header>
            <CustomTable.Row>
              {Object.values(modalHeaders).map((header, idh) => (
                <CustomTable.HeaderCell key={idh}>
                  {header.name}
                </CustomTable.HeaderCell>
              ))}
            </CustomTable.Row>
          </CustomTable.Header>
          <CustomTable.Body>
            {bet.length && bet.map((row, idr) => (
              <CustomTable.Row
                key={idr}
            >
                {
               Object.values(modalHeaders).map((cell, idc) => (
                 <CustomTable.Cell key={idc}>
                   {row[cell.key]}
                 </CustomTable.Cell>
               ))
             }
              </CustomTable.Row>))}
          </CustomTable.Body>
        </CustomTable>
      </div>
      <div className={s.modal_close_wrapper}>
        <CustomButton onClick={onClose} className={s.modal_close_button}>
          Close
        </CustomButton>
      </div>
    </div>

  );
}

export default BetsModal;
