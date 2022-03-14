import React, { useState } from 'react';
import { CustomTable } from '../../../Custom';
import { fakeFavoritesDate, favoriteHeader } from './FavoriteModal/helpers/constants';
import s from './Favorite.module.scss';
import FavoriteModal from './FavoriteModal/FavoriteModal';
import infoIcon from '../../../../assets/images/icons/infoIcon.svg';
import deleteIcon from '../../../../assets/images/icons/deletee.svg';

const Favorite = () => {
  const [ modalFavoriteInfo, setModalFavoriteInfo ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);

  const onDeleteClick = () => {
    // e.stopPropagation();
    console.log('barev');
  };

  return (
    <div className='whiteBackground'>
      {modalFavoriteInfo
    && <FavoriteModal
      onClose={() => setModalFavoriteInfo(null)}
    /> }

      <div className={s.table} >
        <CustomTable loading={isLoading} isEmpty={!fakeFavoritesDate}>
          <CustomTable.Header>
            <CustomTable.Row>
              {favoriteHeader.map(item => (
                <CustomTable.HeaderCell
                  key={item.key} >
                  {item.name}
                </CustomTable.HeaderCell>
              ))}
            </CustomTable.Row>
          </CustomTable.Header>
          <CustomTable.Body >
            {fakeFavoritesDate.map(row => (
              <CustomTable.Row
                style={{ padding: 0, textAlign: 'center ' }}
                key={row.id} >
                {favoriteHeader.map((cell) => {
                  if (cell.key === 'Delete') {
                    return <CustomTable.Cell
                      style={{ padding: 5, textAlign: 'center ' }}
                      key={cell.key}
                      className={s.deleteTable}><div
                        onClick={onDeleteClick}
                        style={{ cursor: 'pointer' }}
                        ><img src={deleteIcon} /></div></CustomTable.Cell>;
                  }
                  if (cell.key === 'info') {
                    return <CustomTable.Cell
                      style={{ padding: 3, textAlign: 'center ' }}
                      className={s.deleteTable}
                      key={cell.key}><div
                        onClick={() => setModalFavoriteInfo(row)}
                        className={s.infoIcon}>
                        <img alt='infoIcon' src={infoIcon} />
                      </div></CustomTable.Cell>;
                  }
                  if (!row[cell.name]) {
                    return <CustomTable.Cell key={cell.key} style={{ padding: 3, textAlign: 'center ' }}>
                      -</CustomTable.Cell>;
                  }
                  return <CustomTable.Cell
                    key={cell.name}
                    style={{ padding: 10 }}>{row[cell.name]}</CustomTable.Cell>;
                })}
              </CustomTable.Row>
            ))}
          </CustomTable.Body>

        </CustomTable>
      </div>

    </div>
  );
};

export default Favorite;
