import React from 'react';
import moment from 'moment';
import s from '../../PlayerInfo.module.scss';
import editIMG from '../../../../../../../../../assets/images/edit.svg';

function PlayerInfoGridColumn({ data, openModal, player }) {
  return (
    <div className='row' style={{ padding: 15, background: '#fff' }}>
      {Object.values(data).map(col => <div className='col' style={{ padding: 0 }}>
        {col.map(item => <div className='col' style={{ padding: 0 }}>
          <div style={{ marginBottom: 20 }}>
            <div className={s.colKey}>{item.name}</div>
            <div className={s.colItem}>
              <div className={s.colInfo}>{item.key === 'birthday' ? moment(player.created).format('DD-MM-YYYY') : player[item.key] || '-'}</div>
              {item.key !== 'verification_id' && <button className={s.editButton} onClick={() => openModal(item)}>
                <img src={editIMG} alt='edit icon' style={{ cursor: 'pointer' }} />
              </button> }
            </div>
          </div>
        </div>)}
      </div>)}
    </div>
  );
}

export default PlayerInfoGridColumn;
