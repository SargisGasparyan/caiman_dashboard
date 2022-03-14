import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import { getPlayerBets } from '../../../../../../../redux/thunks/playerThunk';
import { betsHeaders } from '../helpers/constants';
import ss from '../../../Player.module.scss';
import s from './Bets.module.scss';
import {
  usePagination,
  CustomTable, CustomModal, CustomPagination, CustomDoubleDatepicker, CustomButton, CustomSelect,
} from '../../../../../../Custom';
import BetsModal from './BetsModal';
import { LOADING_IDS } from '../../../../../../../constants/ids';
import { AXIOS } from '../../../../../../../api/axios/index';
import inforIcon from '../../../../../../../assets/images/icons/infoIcon.svg';

const { PLAYERS } = LOADING_IDS;

const initialState = {
  date_from: '',
  date_to: '',
  status: '',
};

const selectOptions = {
  options: [
    { label: 'Won', value: 2 },
    { label: 'Lost', value: 3 },
    { label: 'Return', value: 1 },
    { label: 'Pending', value: 0 },
    { label: 'All', value: 'ALL' },
  ],
  placeholder: 'All',
  label: 'Status',
};

function Bets() {
  const dispatch = useDispatch();
  const params = useParams();
  const paginateCount = 10;
  const {
    bets, total,
  } = useSelector(state => state.player);
  const activeLoadings = useSelector(state => state.activeLoadings);
  const [ modal, setModal ] = useState(false);
  const [ betDetails, setBetDetails ] = useState('');
  const [ state, setState ] = useState(initialState);
  const [ totalAmount, setTotalAmount ] = useState([ ]);
  const {
    page,
    perPage,
    middlePage,
    totalPages,
    onPerpageChange,
    onPageChange,
    onPageEnter,
    setPage,
  } = usePagination(total, paginateCount);

  useEffect(() => {
    dispatch(getPlayerBets(
      params.id,
      page,
      perPage.value,
      state.date_from.value,
      state.date_to.value,
      state.status.value,
    ));
  }, [ params.id, perPage.value, page ]);

  useEffect(async () => {
    try {
      const response = await AXIOS.post('/players/getTotalSumBets', { id: params.id });
      setTotalAmount(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onModalClick = async (id) => {
    try {
      const response = await AXIOS.get(`/players/getBetsDetails/${id}`);
      setBetDetails(response.data);
    } catch (error) {
      console.log(error);
    }
    setModal(true);
  };

  const setDate = (value, name) => {
    setState({ ...state, [name]: { value: moment(value).format('YYYY-MM-DD'), label: value }});
  };

  const onApply = () => {
    dispatch(getPlayerBets(params.id,
      page,
      perPage.value,
      state.date_from.value,
      state.date_to.value,
      state.status.value));
  };

  return (
    <div className={ss.content_container}>
      {modal && <CustomModal onClose={() => setModal(false)} className={s.modal}>
        <BetsModal
          onClose={() => setModal(false)}
          bet={betDetails}
        />
      </CustomModal>}
      <div className={classNames(s.datepicker, 'container')} style={{ margin: 0 }}>
        <div className='row' style={{ display: 'flex', alignItems: 'flex-end' }}>
          <div className='col-auto'>
            <CustomDoubleDatepicker
              style={{ margin: '10px 0' }}
              startDate={state.date_from.label}
              endDate={state.date_to.label}
              setStartDate={(value) => { setDate(value, 'date_from'); }}
              setEndDate={(value) => { setDate(value, 'date_to'); }}
        />
          </div>
          <div className='col'>
            <CustomSelect
              style={{ margin: '10px 0' }}
              width={200}
              options={selectOptions.options}
              placeholder={selectOptions.placeholder}
              label={selectOptions.label}
              onChange={item => setState({ ...state, status: item })}
          />
          </div>
          <div className='col'>
            <CustomButton style={{ width: '150px', margin: '10px 0' }} onClick={onApply} >Apply</CustomButton>
          </div>
        </div>
      </div>
      <CustomTable
        className={s.table_container}
        isEmpty={bets && !bets.length}
        loading={activeLoadings.includes(PLAYERS)}
      >
        <CustomTable.Header >
          <CustomTable.Row>
            {
          Object.values(betsHeaders).map((header, idh) => (
            <CustomTable.HeaderCell key={idh}>
              {header.name}
            </CustomTable.HeaderCell>
          ))
          }
          </CustomTable.Row>
        </CustomTable.Header>
        <CustomTable.Body >
          {bets && bets.length > 0 && bets.map((row, idr) => (
            <CustomTable.Row
              key={idr}
              onClick={() => { onModalClick(row.id); }}
            >
              {
               Object.values(betsHeaders).map((cell, idc) => (
                 (!row[cell.key] && cell.key !== 'info' && cell.key !== 'ztype' && <CustomTable.Cell key={idc}>-</CustomTable.Cell>)
              || ((cell.type && <CustomTable.Cell key={idc}>{moment(row[cell.key]).format('DD/MM ss:mm')}</CustomTable.Cell>)
              || ((cell.key === 'info' && <CustomTable.Cell key={idc} className={s.info_cell}><img src={inforIcon} alt='infoIcon' /></CustomTable.Cell>))
              || ((cell.key === 'ztype' && <CustomTable.Cell >{cell.options[row.ztype]}</CustomTable.Cell>))
              || (cell && <CustomTable.Cell key={idc}>
                  {row[cell.key]}
                </CustomTable.Cell>))
               ))
             }
            </CustomTable.Row>))}
        </CustomTable.Body>
      </CustomTable>
      <div className={classNames(s.totalRow, 'container-fluid')} style={{ margin: 0 }}>
        <div className='row'>
          <div className='col-auto' >Total:</div>
          <div className={classNames(s.amountPayout, 'col-auto')} >
            <div style={{ marginRight: 10, fontSize: 14 }}>
              Amount {totalAmount.packageSumTotal || 0}</div>
            |
            <div style={{ marginLeft: 15, fontSize: 14 }}>
              Payout  {totalAmount.payoutSumTotal || 0}</div>
          </div>
        </div>
      </div>

      {
       bets.length > 0 && <CustomPagination
         page={page}
         perPage={perPage}
         middlePage={middlePage}
         totalPages={totalPages}
         onPerpageChange={onPerpageChange}
         onPageChange={onPageChange}
         onPageEnter={onPageEnter}
         paginateCount={paginateCount}
         setPage={setPage}
        />
      }
    </div>
  );
}

export default Bets;
