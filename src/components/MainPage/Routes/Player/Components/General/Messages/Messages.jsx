import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import classNames from 'classnames';
import s from './Messages.module.scss';
import CustomButton from '../../../../../../Custom/CustomButton/CustomButton';
import CustomTable from '../../../../../../Custom/CustomTable/CustomTable';
import CustomSelect from '../../../../../../Custom/CustomSelect/CustomSelect';
import { CustomDoubleDatepicker, CustomPagination, usePagination } from '../../../../../../Custom';
import { useTranslation } from '../../../../../../../context/LanguageProvider';
import { getMessages } from '../../../../../../../redux/thunks/messagesThunk';
import AddMessage from './AddMessage/AddMessage';
import { LOADING_IDS } from '../../../../../../../constants/ids';

export const headers = [
  { name: 'Date', key: 'inserted_at', type: 'date' },
  { name: 'Message ID', key: 'login' },
  { name: 'Message', key: 'message_body' },
  { name: 'Status', key: 'status' },
  { name: 'Subject', key: 'message_title' },
  { name: 'Author', key: 'author' },
];

const statusSelect = {
  options: [
    { label: 'All', value: 'ALL' },
    { label: 'Read', value: 'READ' },
    { label: 'Unread', value: 'UNREAD' },
  ],
  placeholder: 'All',
  label: 'Status',
};

const initialState = {
  date_from: '',
  date_to: '',
  status: '',
};

function Messages() {
  const { t } = useTranslation();
  const [ openModule, setOpenModule ] = useState(false);
  const [ state, setState ] = useState(initialState);
  const params = useParams();
  const dispatch = useDispatch();
  const {
    messages, count,
  } = useSelector(messagesState => messagesState.messagesReducer);
  useEffect(() => {
    if (!openModule) dispatch(getMessages(params.id));
  }, [ params.id, openModule ]);

  const setDate = (value, name) => {
    setState({ ...state, [name]: { value: moment(value).format('YYYY-MM-DD'), label: value }});
  };

  const onApply = () => {
    dispatch(getMessages(params.id,
      page,
      perPage.value,
      state.date_from.value,
      state.date_to.value,
      state.status.value));
  };

  const onReset = () => {
    setState(initialState);
  };

  const {
    page,
    perPage,
    middlePage,
    totalPages,
    onPerpageChange,
    onPageChange,
    onPageEnter,
    setPage,
  } = usePagination(count, 30);

  const openPopup = () => {
    setOpenModule(prev => !prev);
  };

  const activeLoadings = useSelector(messagesState => messagesState.activeLoadings);

  const isLoading = activeLoadings.includes(LOADING_IDS.MESSAGES);

  return (
    <>
      <div className={classNames(s.content_container)}>
        <p className={s.title}>{t('Filter')}</p>
        <div className='container-fluid' style={{ margin: 0, padding: 0 }}>
          <div className={classNames(s.datepicker_select, 'row')}>
            <div className='col-auto'>
              <CustomDoubleDatepicker
                width={230}
                style={{ marginRight: '25px' }}
                startDate={state.date_from.label}
                endDate={state.date_to.label}
                setStartDate={(value) => { setDate(value, 'date_from'); }}
                setEndDate={(value) => { setDate(value, 'date_to'); }}
          />
            </div>
            <div className='col-auto'>
              <CustomSelect
                width={230}
                label={statusSelect.label}
                options={statusSelect.options}
                value={state.status}
                onChange={item => setState({ ...state, status: item })}
          />
            </div>
          </div>
          <div className={classNames(s.apply_reset_btn, 'row')} style={{ margin: 0 }}>
            <CustomButton
              style={{ width: 100, marginRight: '2%' }}
              onClick={onApply} >
              {t('Apply')}
            </CustomButton>
            <CustomButton
              style={{ width: 100, background: '#e0e1e2', color: 'rgba(0, 0, 0, 0.6)' }}
              onClick={onReset} >
              {t('Reset')}
            </CustomButton>
          </div>
        </div>
      </div>
      <div className={s.content_container}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }} >
          <p className={s.title}>{t('Messages list')}</p>
          <div className={s.search__add_message}>
            <CustomButton
              style={{ width: 150, padding: '10px 20px' }}
              onClick={openPopup}>
              {t('Add message')}
            </CustomButton>
            {openModule && <AddMessage closePopup={openPopup} />}
          </div>
        </div>
        <div className={s.messages_table}>
          <CustomTable isEmpty={messages.length === 0} loading={isLoading}>
            <CustomTable.Header>
              <CustomTable.Row >
                {headers.map((item) => {
                  if (item.sort) {
                    return (
                      <CustomTable.HeaderCell
                        key={item.key}>
                        {item.name}
                      </CustomTable.HeaderCell>
                    );
                  }
                  return (
                    <CustomTable.HeaderCell
                      key={item.key}>
                      {item.name}
                    </CustomTable.HeaderCell>
                  );
                })}
              </CustomTable.Row>
            </CustomTable.Header>
            <CustomTable.Body>
              {messages.length > 0 && messages.map((item, idx) => (
                <CustomTable.Row key={idx}>
                  {headers.map((cell, idc) => (
                    (cell && !item[cell.key] && <CustomTable.Cell key={idc} style={{ textAlign: 'center' }}>-</CustomTable.Cell>)
                  || ((cell && cell.type && <CustomTable.Cell key={idc} style={{ textAlign: 'center' }}>
                    {moment(item[cell.key]).format('DD-MM-YYYY')}</CustomTable.Cell>)
                  || (cell && <CustomTable.Cell key={idc} style={{ textAlign: 'center' }}>{cell.key === 'message_body'
                    ? <div className={s.test}>{item[cell.key]}</div>
                    : item[cell.key]
                  }
                    </CustomTable.Cell>))
                  ))}
                </CustomTable.Row>
              ))}
            </CustomTable.Body>
          </CustomTable>{ messages.length > 0 && <CustomPagination
            page={page}
            perPage={perPage}
            middlePage={middlePage}
            totalPages={totalPages}
            onPerpageChange={onPerpageChange}
            onPageChange={onPageChange}
            onPageEnter={onPageEnter}
            paginateCount={30}
            setPage={setPage}
         />
        }
        </div>
      </div>
    </>
  );
}

export default Messages;
