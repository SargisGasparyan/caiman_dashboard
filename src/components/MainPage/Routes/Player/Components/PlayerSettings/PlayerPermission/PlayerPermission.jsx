import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import s from './PlayerPermission.module.scss';
import { useTranslation } from '../../../../../../../context/LanguageProvider';
import {
  CustomButton, CustomCheckbox, CustomInput, CustomSwitcher,
} from '../../../../../../Custom';
import { AXIOS } from '../../../../../../../api/axios/index';

const initialState = {
  betting_allowed: null,
  autoApprove: null,
  active: null,
  monitored: null,
  bet_limit: null,
  password: null,
};

function PlayerPermission() {
  const params = useParams();
  const [ state, setState ] = useState(initialState);
  const { t } = useTranslation();
  useEffect(async () => {
    try {
      const response = await AXIOS.post(`players/update/${params.id}`);
      setState(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [ params.id ]);

  const onSave = async (id) => {
    try {
      await AXIOS.post(`/players/update/${id}`, { ...state });
      alert('Saved!');
    } catch (error) {
      console.log(error);
    }
  };

  const restoreHistory = async (id) => {
    try {
      await AXIOS.get(`stakes/restoreHistory/${id}`);
      alert('Restored!');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={s.background}>
      <p className={s.title}>{t('Client capabilities')}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: 0 }} className='container-fluid'>
        <div className='row'>
          <div className={classNames(s.checkboxes_container, 'col-auto')}>
            <CustomCheckbox
              header={t('Betting allowed')}
              checked={state.betting_allowed || null}
              fromLeft
              onCheckboxClick={() => setState({
                ...state, betting_allowed: !state.betting_allowed,
              })}
          />
            <CustomCheckbox
              header={t('Disable transactions auto approve')}
              checked={state.autoApprove}
              fromLeft
              onCheckboxClick={() => setState({
                ...state, autoApprove: !state.autoApprove,
              })}
          />
          </div>
          <div className={classNames(s.switchers_container, 'col-auto')}>
            <div className={s.switcher_item}>
              <p className={s.switcher_leftpart}>{t('Inactive')}</p>
              <CustomSwitcher
                checked={state.active || null}
                onClick={() => setState({ ...state, active: !state.active })}
            />
              <p className={s.switcher_rightpart}>{t('Active')}</p>
            </div>
            <div className={s.switcher_item}>
              <p className={s.switcher_leftpart}>{t('Basic')}</p>
              <CustomSwitcher
                checked={state.monitored || null}
                onClick={() => setState({ ...state, monitored: !state.monitored })}
            />
              <p className={s.switcher_rightpart}>{t('Monitored')}</p>
            </div>
          </div>
          <div className={classNames(s.bet_password_container, 'col-auto')}>
            <div className={s.change_password}>
              <p className={s.text}>{t('Change password')}</p>
              <CustomInput
                width={250}
                onChange={e => setState({ ...state, password: e.target.value })}
            />
            </div>
          </div>
        </div>
      </div>
      <div className={s.button__container}>
        <CustomButton
          style={{ width: '100px', marginLeft: '20px' }}
          onClick={() => onSave(params.id)}>
          {t('Save')}
        </CustomButton>
        <CustomButton
          style={{ width: '100px' }}
          onClick={() => restoreHistory(params.id)}
        >{t('Restore shown bet history')}</CustomButton>

      </div>
    </div>
  );
}

export default PlayerPermission;
