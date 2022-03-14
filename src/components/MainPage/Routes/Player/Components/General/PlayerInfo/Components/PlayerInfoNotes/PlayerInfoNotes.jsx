import React from 'react';
import moment from 'moment';
import s from '../../PlayerInfo.module.scss';

function PlayerInfoNotes({ player, slice }) {
  return (
    <div className={s.notesContainer}>
      <div className={s.notesBody}>
        {!slice ? player.notes.docs.map((key, i) => <div key={i} className={s.notesBlock}>
          <div className={s.notesBorder}>
            <div className={s.notes}>{key.note}</div>
            <div className={s.noteOwnerInfo}>
              <div className={s.notesDate}>{moment(key.dt).format('ll')}</div>
              <div className={s.notesUser}>{key.author}</div>
            </div>
          </div>
        </div>) : player.notes.docs.map((key, i) => <div key={i} className={s.notesBlock}>
          <div className={s.notesBorder}>
            <div className={s.notes}>{key.note}</div>
            <div className={s.noteOwnerInfo}>
              <div className={s.notesDate}>{moment(key.dt).format('ll')}</div>
              <div className={s.notesUser}>{key.author}</div>
            </div>
          </div>
        </div>).slice(0, 3)}
      </div>
    </div>
  );
}

export default PlayerInfoNotes;
