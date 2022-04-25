import React, { useState } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { useTranslation } from '../../../../../context/LanguageProvider';
import s from '../Stakes.module.scss';
import CustomSelect from '../../../../Custom/CustomSelect/CustomSelect';
import CustomDoubleDatepicker from '../../../../Custom/CustomDatepicker/CustomDoubleDatepicker';
import CustomInput from '../../../../Custom/CustomInput/CustomInput';
import CustomButton from '../../../../Custom/CustomButton/CustomButton';
import {
  fromToInputs,
  inputsPart,
  intervalSelection, moneySelection, payoutOptionSelection, statusSelection,
} from '../constants';
import {
  CustomFromToInput, CustomRadioButton, usePagination,
} from '../../../../Custom';
import filter from '../../../../../assets/images/balanceFilter.svg';
import arrow from '../../../../../assets/images/arrow-down-red.svg';
import { getStakesData } from '../../../../../redux/thunks/stakesThunk';
import StakesFilterKind from '../StakesFilterKinds/StakesFilterKind';
import { initialState } from './helpers.js';

function StakesFilter() {
  const { t } = useTranslation();
  const [ state, setState ] = useState(initialState);
  const [ arrowDown, setArrowDown ] = useState(false);
  const dispatch = useDispatch();
  const { count } = useSelector(stakesState => stakesState.stakesReducer);
  const {
    page,
    perPage,
    middlePage,
    totalPages,
    onPerpageChange,
    onPageChange,
    onPageEnter,
    setPage,
  } = usePagination(count, 10);

  const onRadioChange = (e) => {
    setState({
      ...state,
      [e.target.name]:
      e.target.id === 'allLive' || e.target.id === 'allInternet'
      || e.target.id === 'allExpress' || e.target.id === 'allStatistics'
        ? null : e.target.id,
    });
  };
  const setDate = (value, name) => {
    setState({ ...state, [name]: { value: moment(value).format('YYYY-MM-DD'), label: value }});
  };
  const onApply = () => {
    const params = {};
    for (const item in state) {
      if (state[item]) {
        typeof state[item] === 'object' && state[item].value ? params[item] = state[item].value : params[item] = state[item];
      }
    }
    dispatch(getStakesData(params));
  };

  return (
    <>
      <div className={s.stakes__container}>
        <div className={s.title}>{t('Filter')}</div>
        <div className={classNames(s.container, 'container-fluid')}>
          <div className={classNames(s.interval_container, 'row')}>
            <div className='col-auto'>
              <CustomSelect
                width={200}
                label={t('Ticket status')}
                options={intervalSelection}
                style={{ marginRight: '20px' }}
                value={state.interval}
                onChange={item => setState({ ...state, interval: item })}
           />
            </div>
            <div className='col-auto'>
              <CustomDoubleDatepicker
                style={{ marginRight: '20px' }}
                label={'Interval'}
                startDate={state.from.label}
                endDate={state.to.label}
                setStartDate={(value) => { setDate(value, 'from'); }}
                setEndDate={(value) => { setDate(value, 'to'); }}
          />
            </div>
          </div>
          <div className={classNames(s.selections, 'row')}>
            <div className='col'>
              <CustomSelect
                width={200}
                label={t('Money')}
                options={moneySelection}
                style={{ marginRight: '20px' }}
                value={state.currency}
                onChange={item => setState({ ...state, currency: item })}
          />
            </div>
            { inputsPart.map((item, idx) => <div className='col'>
              <CustomInput
                label={item.label}
                key={idx}
                width={200}
                value={state[item.key]}
                onChange={e => setState({ ...state, [item.key]: e.target.value })}
          />
            </div>)}
          </div>
          {/* <div className={classNames(s.content_container, 'row')}>
            {fromToInputs.map((item, idx) => <div className='col-auto'><CustomFromToInput
              label={item.label}
              placeholders={{ first: 'Min', second: 'Max' }}
              width={150}
              key={idx}
              style={{ marginRight: 15 }}
              from={state[item.key][0]}
              to={state[item.key][1]}
              onFromChange={e => setState({
                ...state,
                [item.key]: [ Number(e.target.value), state[item.key][1] ],
              })}
              onToChange={e => setState({
                ...state,
                [item.key]: [ state[item.key][0], Number(e.target.value) ],
              })}
            /></div>)}
          </div> */}
        </div>
      </div>
      <div className={s.filterRow}>
        <div className={s.row}>
          <div style={{ display: 'flex' }} onClick={() => setArrowDown(!arrowDown)}>
            {arrowDown ? <img src={arrow} alt={'Arrow'} width={13} style={{ transform: 'rotate(180deg)', cursor: 'pointer' }} />
              : <img src={arrow} alt={'Arrow'} width={13} cursor={'pointer'} />}
            <div style={{ fontSize: 16, margin: '0 8px', cursor: 'pointer' }}>{t('Additional Filters')}</div>
            <img src={filter} alt={'Filter svg'} width={15} />
          </div>
        </div>
        {arrowDown && <div className={classNames(s.additionalFilters, 'container-fluid')}>
          <div className='row'>
            <div style={{ display: 'flex', flexDirection: 'column' }} className='col-auto'>
              <CustomSelect
                width={200}
                label={'Status'}
                options={statusSelection}
                value={state.status}
                onChange={item => setState({ ...state, status: item })}
                style={{ marginBottom: 10 }}
            />
              <CustomSelect
                label={'Payout Options'}
                options={payoutOptionSelection}
                value={state.payoutOption}
                onChange={item => setState({ ...state, payoutOption: item })}
            />
            </div>
            <StakesFilterKind state={state} onChange={onRadioChange} className='col-auto' />
          </div>
        </div>}
      </div>
      <div className={s.buttons}>
        <CustomButton
          onClick={() => onApply()}
          style={{ width: 110, marginRight: '2%' }}>
          {t('Apply')}
        </CustomButton>
        <CustomButton
          onClick={() => setState(initialState)}
          style={{ width: 110, background: '#e0e1e2', color: 'rgba(0, 0, 0, 0.6)' }}>
          {t('Reset')}
        </CustomButton>
      </div>
    </>
  );
}

export default StakesFilter;
