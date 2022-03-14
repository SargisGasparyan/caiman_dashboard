import classNames from 'classnames';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  FIRST_PART, RATE_STAR_COLORS, SECOND_PART,
} from '../../../../../../../constants/components/currentPlayer';
import { addPlayerNoteThunk, addPlayerSeverityThunk } from '../../../../../../../redux/thunks/currentPlayerThunk';
import { CustomButton, CustomInput } from '../../../../../../Custom';
import Star from '../../Star/Star';
import s from './PlayerInfo.module.scss';
import { useTranslation } from '../../../../../../../context/LanguageProvider';
import { AXIOS } from '../../../../../../../api/axios';
import userIMG from '../../../../../../../assets/images/user.svg';
import editIMG from '../../../../../../../assets/images/edit.svg';
import eyeIMG from '../../../../../../../assets/images/eye.svg';
import CustomBootstrapModal from '../../../../../../Custom/CustomBootstrapModal/CustomBootstrapModal';
import PlayerInfoGridColumn from './Components/PlayerInfoGridColumn/PlayerInfoGridColumn.module';
import PlayerInfoNotes from './Components/PlayerInfoNotes/PlayerInfoNotes';

function PlayerInfo() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const params = useParams();
  const currentPlayer = useSelector(state => state.currentPlayer);
  const { username } = useSelector(state => state.userInfo);
  const [ note, setNote ] = useState('');
  const [ notes, loadNotes ] = useState(false);
  const [ modal, openModal ] = useState(false);
  const [ betLimit, setBetLimit ] = useState();
  const [ additionalPhone, showAdditionalPhone ] = useState(false);
  const [ updatedData, setUpdatedData ] = useState({});

  useEffect(async () => {
    try {
      const response = await AXIOS.post(`players/update/${params.id}`);
      setBetLimit(response.data.bet_limit);
    } catch (error) {
      console.log(error);
    }
  }, [ params.id ]);

  const onSaveNote = () => {
    if (!note.trim()) return;
    dispatch(addPlayerNoteThunk({
      id: params.id, note, author: username,
    }));
    setNote('');
  };

  const onSaveClick = async () => {
    try {
      await AXIOS.post(`/players/update/${params.id}`, { ...updatedData });
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    } finally {
      openModal(false);
    }
  };

  return (
    <div className={classNames('container-fluid')}>
      <div className={classNames('row')}>
        <div className={classNames('col', s.customCol)}>
          <div className={classNames('container', s.customContainer)}>
            <div className={classNames('row', s.customRow)}>
              <div className={classNames(s.userInfo, 'col')}>
                <div className={s.userIcon}>
                  <img src={userIMG} alt='userimage' />
                </div>
                <div className={s.colItem}>
                  {<div className={s.headerStar} style={{ margin: 5, height: 28 }}> <Star
                    color={RATE_STAR_COLORS[currentPlayer.severity]}
                    width={18} />
                  </div>}
                  <div className={s.colItem}>
                    <div className={s.key}>{t('User ID')}</div>
                    <div style={{ fontSize: 15 }}>{currentPlayer.id}</div>
                  </div>
                </div>
              </div>
              <div className={classNames('col')}>
                <div className={s.colItem}>
                  <div className={s.key}>{t('Registration Date')}</div>
                  <div className={s.info}>{ moment(currentPlayer.created).format('DD-MM-YYYY')}</div>
                </div>
                <div className={s.colItem}>
                  <div className={s.key}>{t('Username')}</div>
                  <div className={s.info}>
                    {currentPlayer.username}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classNames('col', s.customCol)}>
          <div className={classNames('container', s.customContainer)}>
            <div className={classNames('row', s.customRow)}>
              <div className='col'>
                <div className={s.colItem}>
                  <div className={s.key}>{t('Winning amount')}</div>
                  <div className={s.info}>{currentPlayer.winningAmount ? currentPlayer.winningAmount.toFixed(2) : '-'}</div>
                </div>
                <div className={s.colItem}>
                  <div className={s.key}>{t('Bet limit')}</div>
                  <div className={s.info}>{betLimit}</div>
                </div>
              </div>
              <div className='col'>
                <div className={s.colItem}>
                  <div className={s.key}>{t('Balance')}</div>
                  <div className={s.info}>{currentPlayer.balance}</div>
                </div>
                <div className={s.colItem}>
                  <div className={s.key}>{t('Unit')}</div>
                  <div className={s.info}>{currentPlayer.units}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className={classNames('col', s.customCol)} style={{ background: 'none', padding: 0 }}>
          <div className='container'>
            <PlayerInfoGridColumn data={FIRST_PART} openModal={openModal} player={currentPlayer} />
            <div className='row' style={{ marginTop: 2 }}>
              <div className='container'>
                <div className='row' style={{ backgroundColor: '#fff', padding: 15 }}>
                  <div className='col'>
                    <div className={s.key}>{t('Additional phone')}</div>
                    <div style={{ display: 'flex', alignItems: 'baseline' }}>
                      <button
                        className={s.editButton}
                        onClick={() => showAdditionalPhone(!additionalPhone)}>
                        <img src={eyeIMG} alt='eye icon' width={22} style={{ marginRight: 10 }} />
                      </button>
                      {additionalPhone && <div style={{ fontSize: 14 }}>{currentPlayer.additionalPhoneNumber || 'No data to display'}</div>}
                    </div>
                  </div>
                  <div className='col'>
                    <div className={s.key}>{t('Registration type')}</div>
                    <div>{currentPlayer.registrationType || '-'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classNames('col', s.customCol)} style={{ background: 'none', padding: 0 }}>
          <div className='container'>
            <PlayerInfoGridColumn data={SECOND_PART} openModal={openModal} player={currentPlayer} />
            <div className='row' style={{ marginTop: 2 }}>
              <div className='container'>
                <div className='row' style={{ backgroundColor: '#fff', padding: 15 }}>
                  <div className='col'>
                    <div className={s.key}>{t('Live delay')}</div>
                    <div>{currentPlayer.live_delay || '-'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={classNames(s.customCol, 'col')}
          style={{
            padding: 0, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', position: 'relative',
          }}>
          <div className={classNames('row', s.customRow)} style={{ width: '100%' }}>
            <div className={classNames(s.rateBoard)}>
              <div style={{ fontSize: 13 }}>Rate User</div>
              <div className={s.starBoard}>
                {Object.keys(RATE_STAR_COLORS).map((item, i) => (
                  <div
                    key={i}
                    onClick={() => dispatch(addPlayerSeverityThunk(params.id, item))}
                    className={classNames(s.starItem,
                      { [s.activeStar]: currentPlayer.severity === +item })}>
                    <Star color={RATE_STAR_COLORS[item]} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {currentPlayer.notes.count === 0
            ? <div style={{ padding: 10 }}>No any notes yet</div>
            : <div className={s.notes_container}>
              <PlayerInfoNotes player={currentPlayer} slice />
              {currentPlayer.notes.count > 3 && <button
                style={{
                  marginTop: 10,
                  width: 200,
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  textDecoration: 'underline',
                  color: '#5b7077',
                  fontSize: 14,
                }}
                onClick={() => loadNotes(true)}>
                Load more...
              </button>}
              {notes && <CustomBootstrapModal onClose={() => loadNotes(false)} saveBtn={false} title={'Notes'}>
                <PlayerInfoNotes player={currentPlayer} />
              </CustomBootstrapModal>}
            </div>
}
          <div
            className={classNames(s.customRow, 'row')}
            style={{
              backgroundColor: '#fff', margin: 2, padding: 0, position: 'absolute', bottom: 0,
            }}>
            <div className={s.inputAndButtom} style={{ marginBottom: 10 }}>
              <CustomInput
                value={note}
                onChange={e => setNote(e.target.value)}
                style={{ padding: '10px 0' }}
                label={'Note Text'} />
              <CustomButton onClick={onSaveNote} className={s.saveButton}>SAVE</CustomButton>
            </div>
          </div>
        </div>
      </div>
      {modal && <CustomBootstrapModal
        title={modal.name}
        onClose={() => openModal(false)}
        onCancel={() => setUpdatedData({})}
        onSave={() => onSaveClick()}>
        <CustomInput
          width={'80%'}
          style={{ margin: '10px auto' }}
          placeholder={currentPlayer[modal.key] || '-'}
          value={updatedData[modal.key]}
          onChange={e => setUpdatedData({ [modal.key]: e.target.value })}
        />
        </CustomBootstrapModal>}
    </div>
  );
}

export default PlayerInfo;
