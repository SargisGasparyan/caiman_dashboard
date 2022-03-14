import React, { useState } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from '../../../../../context/LanguageProvider';
import s from '../Stakes.module.scss';
import CustomSelect from '../../../../Custom/CustomSelect/CustomSelect';
import CustomDoubleDatepicker from '../../../../Custom/CustomDatepicker/CustomDoubleDatepicker';
import CustomInput from '../../../../Custom/CustomInput/CustomInput';
import CustomButton from '../../../../Custom/CustomButton/CustomButton';
import {
  fromToInputs,
  inputsPart,
  intervalSelection, kindRadioButtons, moneySelection, payoutOptionSelection, statusSelection,
} from '../constants';
import {
  CustomDoubleTimepicker,
  CustomFromToInput, CustomRadioButton, usePagination,
} from '../../../../Custom';
import filter from '../../../../../assets/images/balanceFilter.svg';
import arrow from '../../../../../assets/images/arrow-down-red.svg';
import { getStakesData } from '../../../../../redux/thunks/stakesThunk';

const initialState = {
  interval: null,
  time: null,
  currency: null,
  from: '',
  to: '',
  playerId: '',
  eventId: '',
  shop_id: '',
  packageId: '',
  payoutOption: null,
  contentCount: [ null, null ],
  amount: [ null, null ],
  win: [ null, null ],
  status: null,
  sport: null,
  source: null,
  ticketKind: null,
  market_type: null,
};

function StakesFilter() {
  const { t } = useTranslation();
  const [ state, setState ] = useState(initialState);
  const [ arrowDown, setArrowDown ] = useState(false);
  // const [ parameters, setParameters ] = useState();
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
    console.log(params);
    // setParameters(params);
    // setPage(1);
    dispatch(getStakesData(params));
  };

  // console.log(state);

  return (
    <>
      <div className={s.stakes__container}>
        <div className={s.title}>{t('Filter')}</div>
        <div className={s.container}>
          <div className={s.interval_container}>
            <CustomSelect
              width={200}
              label={t('Ticket status')}
              options={intervalSelection}
              style={{ marginRight: '20px' }}
              value={state.interval}
              onChange={item => setState({ ...state, interval: item })}
          />
            {/* <CustomDoubleTimepicker /> */}
            <CustomDoubleDatepicker
              style={{ marginRight: '20px' }}
              label={'Interval'}
              startDate={state.from.label}
              endDate={state.to.label}
              setStartDate={(value) => { setDate(value, 'from'); }}
              setEndDate={(value) => { setDate(value, 'to'); }}
          />
          </div>
          <div className={s.selections}>
            <CustomSelect
              width={200}
              label={t('Money')}
              options={moneySelection}
              style={{ marginRight: '20px' }}
              value={state.currency}
              onChange={item => setState({ ...state, currency: item })}
          />
            { inputsPart.map((item, idx) => <CustomInput
              label={item.label}
              key={idx}
              width={200}
              value={state[item.key]}
              onChange={e => setState({ ...state, [item.key]: e.target.value })}
          />)}
          </div>
          <div className={s.content_container}>
            {fromToInputs.map((item, idx) => <CustomFromToInput
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
            />)}
          </div>
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
        {arrowDown && <div className={s.additionalFilters}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <CustomSelect
              label={'Status'}
              options={statusSelection}
              value={state.status}
              onChange={item => setState({ ...state, status: item })}
            />
            <CustomSelect
              label={'Payout Options'}
              options={payoutOptionSelection}
              value={state.payoutOption}
              onChange={item => setState({ ...state, payoutOption: item })}
            />
          </div>
          <div className={s.kind}>
            <table>
              <caption>{t('Kind')}</caption>
              <tr>
                <td><CustomRadioButton
                  label={'All'}
                  name={'sport'}
                  id={'allLive'}
                  checked={!state.sport && 'allLive'}
                  onRadioChange={onRadioChange}
                /></td>
                <td><CustomRadioButton
                  label={'Live'}
                  name={'sport'}
                  id={'live'}
                  checked={state.sport}
                  onRadioChange={onRadioChange}
                /></td>
                <td><CustomRadioButton
                  label={'Prematch'}
                  name={'sport'}
                  id={'prematch'}
                  checked={state.sport}
                  onRadioChange={onRadioChange}
                /></td>
              </tr>
              <tr>
                <td><CustomRadioButton
                  label={'All'}
                  name={'source'}
                  id={'allInternet'}
                  checked={!state.source && 'allInternet'}
                  onRadioChange={onRadioChange}
                /></td>
                <td><CustomRadioButton
                  label={'Internet'}
                  name={'source'}
                  id={'internet'}
                  checked={state.source}
                  onRadioChange={onRadioChange}
                /></td>
                <td><CustomRadioButton
                  label={'Shop'}
                  name={'source'}
                  id={'shop'}
                  checked={state.source}
                  onRadioChange={onRadioChange}
                /></td>
              </tr>
              <tr>
                <td><CustomRadioButton
                  label={'All'}
                  name={'ticketKind'}
                  id={'allExpress'}
                  checked={!state.ticketKind && 'allExpress'}
                  onRadioChange={onRadioChange}
                /></td>
                <td><CustomRadioButton
                  label={'Express'}
                  name={'ticketKind'}
                  id={'express'}
                  checked={state.ticketKind}
                  onRadioChange={onRadioChange}
                /></td>
                <td><CustomRadioButton
                  label={'Ordinar'}
                  name={'ticketKind'}
                  id={'ordinar'}
                  checked={state.ticketKind}
                  onRadioChange={onRadioChange}
                /></td>
              </tr>
              <tr>
                <td><CustomRadioButton
                  label={'All'}
                  name={'market_type'}
                  id={'allStatistics'}
                  checked={!state.market_type && 'allStatistics'}
                  onRadioChange={onRadioChange}
                /></td>
                <td><CustomRadioButton
                  label={'Statistics'}
                  name={'market_type'}
                  id={'statistics'}
                  checked={state.market_type}
                  onRadioChange={onRadioChange}
                /></td>
              </tr>
              {/* {Object.keys(kindRadioButtons).map((item, idx) => <tr>
                {kindRadioButtons[item].map((rowItem, index) => <td>
                  <CustomRadioButton
                    label={rowItem.label}
                    name={rowItem.name}
                    id={rowItem.id}
                    checked={!state[rowItem.name] && rowItem.id}
                    onRadioChange={onRadioChange}
                />
                </td>)}
              </tr>)} */}
            </table>
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
