import React from 'react';
import { CustomModal, CustomTable } from '../../../../Custom';
import { fakeFavoriteInfo, modalFavoriteHeaders } from './helpers/constants';
import s from '../Favorite.module.scss';

const FavoriteModal = ({ onClose }) => (
  <div>
    <CustomModal
      onClose={onClose}
      title='Favorite Info'
    >
      <div>
        <CustomTable isEmpty={!fakeFavoriteInfo}>
          <CustomTable.Header>
            <CustomTable.Row>
              {modalFavoriteHeaders.map(item => (
                <CustomTable.HeaderCell
                  key={item.key}>
                  {item.name}
                </CustomTable.HeaderCell>
              ))}
            </CustomTable.Row>
          </CustomTable.Header>
          <CustomTable.Body>
            {fakeFavoriteInfo.map((row, i) => (
              <CustomTable.Row
                key={i}>
                {modalFavoriteHeaders.map((cell) => {
                  if (!row[cell.key]) {
                    return <CustomTable.Cell key={cell.key} >
                      -</CustomTable.Cell>;
                  }
                  return <CustomTable.Cell key={cell.key} >{row[cell.key]}</CustomTable.Cell>;
                })}
              </CustomTable.Row>
            ))}
          </CustomTable.Body>

        </CustomTable>
      </div>
    </CustomModal>
  </div>
);

export default FavoriteModal;
