import React, { useState } from 'react';
import { useTranslation } from '../../../../../../context/LanguageProvider';
import styles from '../../Segments.module.scss';
import SegmentsTable from './SegmentsTable/SegmentsTable';
import CustomInput from '../../../../../Custom/CustomInput/CustomInput';
import CustomSingleDatepicker from '../../../../../Custom/CustomDatepicker/CustomSingleDatepicker';
import CustomSelect from '../../../../../Custom/CustomSelect/CustomSelect';
import { stakesSelectors } from '../../../../../../helpers/stakes';
import s from '../../../Stakes/Stakes.module.scss';
import CustomButton from '../../../../../Custom/CustomButton/CustomButton';

const initialState = {
  id: '',
  title: '',
  type: null,
  createDate: null,
  lastUpdate: null,
};

function SegmentsActive() {
  const { t } = useTranslation();
  const [ data, setData ] = useState();
  const [ state, setState ] = useState(initialState);

  const handleSelectChange = (value) => {
    setState({ ...state, type: value });
  };

  const handleInputChange = (value, id) => {
    setState({ ...state, [id]: value });
  };

  const handleCalendarChanges = (value, id) => {
    setState({ ...state, [id]: value });
  };

  const apply = () => {
    fetch('http://localhost:8889/stakes/find', {
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        status: '',
        from: '',
        interval: '',
        limit: null,
        offset: null,
        to: '',
      }),
    }).then(res => res.json())
      .then(json => setData(json));
  };

  const reset = () => {
    setState(initialState);
  };

  return (
    <>
      <div className={styles.active__container}>
        <div className={styles.selectors__container}>
          <CustomInput
            label={t('ID')}
            value={state.id}
            width={200}
            id={'id'}
            onChange={e => handleInputChange(e.target.value, 'id')}
          />
          <CustomInput
            label={t('Title')}
            value={state.title}
            width={200}
            id={'title'}
            onChange={e => handleInputChange(e.target.value, 'title')}
          />
          <CustomSelect
            options={stakesSelectors.status.options}
            label={t('Type')}
            value={state.type}
            placeholder={t('Type')}
            width={200}
            onChange={handleSelectChange}
          />
          <CustomSingleDatepicker
            label={t('Create Date')}
            selected={state.createDate}
            id={'createDate'}
            onChange={e => handleCalendarChanges(e, 'createDate')}
          />
          <CustomSingleDatepicker
            label={t('Last Update')}
            selected={state.lastUpdate}
            id={'lastUpdate'}
            onChange={e => handleCalendarChanges(e, 'lastUpdate')}
          />
        </div>
        <div className={s.stakes__buttons}>
          <CustomButton
            style={{
              width: 100,
              marginRight: 20,
            }}
            onClick={() => apply()}>{ t('Apply') }
          </CustomButton>
          <CustomButton
            style={{
              width: 100,
              background: '#e0e1e2',
              color: 'rgba(0,0,0,.6)',
            }}
            onClick={() => reset()}>{ t('Reset') }
          </CustomButton>
        </div>
      </div>
      <SegmentsTable
        id={state.id}
        title={state.title}
        type={state.type ? state.type.value : ''}
        createDate={state.createDate}
        lastUpdate={state.lastUpdate}
       />
    </>
  );
}
export default SegmentsActive;
