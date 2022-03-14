import React, { useState } from 'react';
import moment from 'moment';
import s from './Filters.module.scss';
import { useTranslation } from '../../../../../../context/LanguageProvider';
import {
  CustomCheckbox,
  CustomFromToInput,
  CustomButton,
  CustomDoubleDatepicker,
  CustomDoubleTimepicker,
} from '../../../../../Custom';
import { dropdownFilters, mainFilters } from '../../helpers/constants';
// import clock from '../../../../../../assets/images/headerClock.svg';
import filter from '../../../../../../assets/images/balanceFilter.svg';
import arrow from '../../../../../../assets/images/arrow-down-red.svg';
import DeleteBalanceModal from './AddDeleteModal/DeleteBalanceModal';
import AddBalanceModal from './AddDeleteModal/AddBalanceModal';

function Filters({
  type,
  currentProject,
  state,
  setState,
  onApply,
  onReset,
}) {
  const { t } = useTranslation();
  const [ dropdown, setDropdown ] = useState(false);
  const [ isPlusModalActive, setIsPlusModalActive ] = useState(false);
  const [ isMinusModalActive, setIsMinusModalActive ] = useState(false);
  const onDateChange = (value, name) => {
    if (name !== 'timeFrom' && name !== 'timeTo') {
      if (moment(value).format('YYYY-MM-DD') === state.from.value
      || moment(value).format('YYYY-MM-DD') === state.to.value
      ) {
        setState({
          ...state,
          [name]: { value: moment(value).format('YYYY-MM-DD'), label: value },
          timeTo: { hour: '23', minutes: '59' },
        });
      } else {
        setState({ ...state, [name]: { value: moment(value).format('YYYY-MM-DD'), label: value }});
      }
    } else {
      setState({ ...state, [name]: value });
    }
  };
  const onAmountChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onCheckBoxChange = (name, place, e) => {
    e.preventDefault();
    const arr = state[place];
    if (name === 'ALL') {
      arr.includes(name)
        ? setState({ ...state, [place]: []})
        : setState({ ...state, [place]: place === 'type' ? [ ...dropdownFilters[currentProject] ] : [ ...mainFilters[type] ]});
    } else if (arr.includes(name)) {
      arr.includes('ALL') && arr.splice(arr.indexOf('ALL'), 1);
      arr.splice(arr.indexOf(name), 1);
      setState({ ...state, [place]: arr });
    } else {
      (arr.length === dropdownFilters[currentProject].length - 2 && !arr.includes(name))
      || (arr.length === mainFilters[type].length - 2 && !arr.includes(name))
        ? setState({ ...state, [place]: [ 'ALL', ...arr, name ]})
        : setState({ ...state, [place]: [ ...arr, name ]});
    }
  };

  const onPlusClick = () => {
    setIsPlusModalActive(true);
  };

  const onMinusClick = () => {
    setIsMinusModalActive(true);
  };

  return (
    <>
      <div className={s.wrapper}>
        <p className={s.title}>Filters</p>
        <div className={s.filters}>
          <CustomDoubleDatepicker
            width={150}
            label={t('Registration Date')}
            startDate={state.from.label}
            endDate={state.to.label}
            setStartDate={(value) => { onDateChange(value, 'from'); }}
            setEndDate={(value) => { onDateChange(value, 'to'); }}
          />
          {type === 'balance' && <CustomDoubleTimepicker
            width={150}
            label={t('Registration Hour')}
            startTime={state.timeFrom}
            endTime={state.timeTo}
            timeFrom="timeFrom"
            timeTo='timeTo'
            setTime={onDateChange}
            sameDay={state.from.value === state.to.value}
          />}

          {isPlusModalActive && type === 'balance'
          && <AddBalanceModal
            currentProject={currentProject}
            isModalActive={isPlusModalActive}
            setIsModalActive={setIsPlusModalActive} />}

          {isMinusModalActive && type === 'balance'
          && <DeleteBalanceModal
            isModalActive={isMinusModalActive}
            setIsModalActive={setIsMinusModalActive} />}

          <CustomFromToInput
            width={150}
            label={t('Amount')}
            placeholders={{ first: 'Amount From', second: 'Amount To' }}
            name={'amount'}
            from={state.amountFrom}
            to={state.amountTo}
            onFromChange={onAmountChange}
            onToChange={onAmountChange}
          />
          <div className={s.apply_reset_buttons}>
            <CustomButton
              onClick={() => { onApply(); }}
              style={{ width: 50, marginRight: 10 }}>
              {t('Apply')}
            </CustomButton>
            <CustomButton
              style={{ width: 50, background: '#e0e1e2', color: 'rgba(0, 0, 0, 0.6)' }}
              onClick={() => { onReset(); }}
              >
              {t('Reset')}
            </CustomButton>
          </div>
        </div>
        <div className={s.upload_and_modal}>
          <div className={s.modal_buttons}>
            <CustomButton
              onClick={onPlusClick}
              className={s.m_button}
            >
              +
            </CustomButton

            >
            <CustomButton
              onClick={onMinusClick}
              classNames={s.m_button}
            >
              -
            </CustomButton>
          </div>
        </div>
      </div>
      <div className={s.checkbox_container} >
        <div className={s.checkboxs_wrapper}>
          {mainFilters[type].map((checkbox, idc) => (
            <CustomCheckbox
              header={checkbox}
              checked={state.status.includes(checkbox)}
              key={`${type}-${idc}`}
              name={checkbox}
              onClick={(e) => { onCheckBoxChange(checkbox, 'status', e); }}
            />
          ))}
        </div>
        <div
          className={s.filters_dropdown_button}
          onClick={() => { setDropdown(prev => !prev); }}
        >
          {type === 'balance' && dropdownFilters[currentProject].length !== 0
           && <img src={arrow} alt='arrow' className={dropdown ? s.filter_icons_rotate : s.filter_icons} />
           }
          <p>{t('FILTERS')}</p>
          <img src={filter} alt='filter' className={s.filter_icons_right} />
        </div>
      </div>
      {
        type === 'balance' && dropdown && dropdownFilters[currentProject].length !== 0
          && <div className={s.dropdown_checkbox}>
            {
              dropdownFilters[currentProject].map((checkbox, idc) => (
                <CustomCheckbox
                  header={checkbox}
                  checked={state.type.includes(checkbox)}
                  key={`${type}-${idc}`}
                  onClick={(e) => { onCheckBoxChange(checkbox, 'type', e); }}
                />
              ))
            }
          </div>
      }
    </>
  );
}

export default Filters;
