import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import s from './Log.module.scss';
import { useTranslation } from '../../../../../../../context/LanguageProvider';
import {
  CustomButton, CustomDoubleDatepicker, CustomTable, usePagination, CustomPagination, CustomSelect,
} from '../../../../../../Custom';
import { getLogs } from '../../../../../../../redux/thunks/logThunk';
import { LOADING_IDS } from '../../../../../../../constants/ids';

const tableHeaders = [
  { name: 'ID', key: 'id' },
  { name: 'Date', key: 'dt', type: 'date' },
  { name: 'Before', key: 'm0' },
  { name: 'Transaction', key: 'md' },
  { name: 'After', key: 'm1' },
  { name: 'Before', key: 'u0' },
  { name: 'Bonus Use', key: 'ud' },
  { name: 'After', key: 'u1' },
  { name: 'Operation', key: 'op' },
];

const initialState = {
  date_from: '',
  date_to: '',
  type: '',
};

const typeSelect = {
  options: [
    { label: 'All', value: 'all' },
    { label: 'Balance', value: 'balance' },
    { label: 'Units', value: 'units' },
  ],
  placeholder: 'All',
  label: 'Type',
};

function Log() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const params = useParams();
  const [ state, setState ] = useState(initialState);
  const {
    logs, total,
  } = useSelector(logsState => logsState.logsReducer);
  const {
    page,
    perPage,
    middlePage,
    totalPages,
    onPerpageChange,
    onPageChange,
    onPageEnter,
    setPage,
  } = usePagination(total, 30);

  useEffect(() => {
    dispatch(getLogs(
      params.id, page,
      perPage.value,
      state.date_from.value,
      state.date_to.value,
      state.type.value ? state.type.value : 'all',
    ));
  }, [ params.id, page, perPage ]);

  const setDate = (value, name) => {
    setState({ ...state, [name]: { value: moment(value).format('YYYY-MM-DD'), label: value }});
  };

  const onApply = () => {
    dispatch(getLogs(params.id,
      page,
      perPage.value,
      state.date_from.value,
      state.date_to.value,
      state.type.value));
  };

  const activeLoadings = useSelector(loadingState => loadingState.activeLoadings);

  const isLoading = activeLoadings.includes(LOADING_IDS.LOGS);

  return (
    <div className={s.background}>
      <p className={s.title}>{t('Date')}</p>
      <div className={classNames('container', s.date__buttons)} style={{ padding: 0 }}>
        <div className='row'>
          <div className={classNames(s.date__picker_container, 'col')}>
            <CustomDoubleDatepicker
              startDate={state.date_from.label}
              endDate={state.date_to.label}
              setStartDate={(value) => { setDate(value, 'date_from'); }}
              setEndDate={(value) => { setDate(value, 'date_to'); }}
          />
          </div>
          <div className={s.apply__audit_buttons}>
            <div className='col'>
              <CustomSelect
                options={typeSelect.options}
                // width={150}
                placeholder={typeSelect.placeholder}
                label={typeSelect.label}
                style={{ margin: '0 20px' }}
                onChange={item => setState({ ...state, type: item })}
          />
            </div>
            <div className='col'>
              <CustomButton
                style={{ width: '100px', marginRight: '30px' }}
                onClick={onApply}
            >{t('Apply')}</CustomButton>
            </div>
          </div>
        </div>
      </div>
      <div className={s.table_container}>
        <CustomTable isEmpty={logs.length <= 0} loading={isLoading}>
          <CustomTable.Header>
            <CustomTable.Row>
              {tableHeaders.map(item => (
                <CustomTable.HeaderCell
                  key={item.key}>
                  {item.name}
                </CustomTable.HeaderCell>
              ))}
            </CustomTable.Row>
          </CustomTable.Header>
          <CustomTable.Body>
            {logs.length > 0 && logs.map((item, idx) => (
              <CustomTable.Row>
                {tableHeaders.map((cell, idc) => (
                  (cell && !item[cell.key] && <CustomTable.Cell key={idx}>-</CustomTable.Cell>)
                  || ((cell && cell.type && <CustomTable.Cell key={idx}>
                    {moment(item[cell.key]).format('DD-MM-YYYY')}</CustomTable.Cell>)
                  || (cell && <CustomTable.Cell key={idx}>{item[cell.key]}</CustomTable.Cell>))
                ))}
              </CustomTable.Row>
            ))}
          </CustomTable.Body>
        </CustomTable>
        { logs.length > 0
          && <CustomPagination
            page={page}
            perPage={perPage}
            middlePage={middlePage}
            totalPages={totalPages}
            onPerpageChange={onPerpageChange}
            onPageChange={onPageChange}
            onPageEnter={onPageEnter}
            paginateCount={10}
            setPage={setPage}
         />
        }
      </div>
    </div>
  );
}

export default Log;
