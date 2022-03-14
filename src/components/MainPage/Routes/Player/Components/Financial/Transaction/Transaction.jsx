import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import {
  CustomButton, CustomPagination, CustomSelect, CustomTable, usePagination,
} from '../../../../../../Custom';
import { selectStatusOptions, selectTypeOptions } from '../../../../Players/helpers/constant';
import { useTranslation } from '../../../../../../../context/LanguageProvider';
import s from './Transaction.module.scss';
import { getCurrentPlayerTransactionData } from '../../../../../../../redux/thunks/currentPlayerThunk';
import MoveTransactionModal from './MoveTransactionModal/MoveTransactionModal';
import { transactionHeader } from './MoveTransactionModal/helpers/constants';
import { AXIOS } from '../../../../../../../api/axios';

const Transaction = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [ type, setType ] = useState(selectTypeOptions[0]);
  const [ status, setStatus ] = useState(selectStatusOptions[0]);
  const [ totalAmount, setTotalAmount ] = useState();
  const [ isLoading, setIsLoading ] = useState(false);
  const { t } = useTranslation();
  const { transactions, id } = useSelector(state => state.currentPlayer);
  const [ modalTransactionInfo, setModalTransactionInfo ] = useState(null);
  const rowColor = {
    success: '#9EC49F',
    pending: '#D2D695',
    canceled: '#D6AEB0',
  };

  const paginateCount = 30;
  const {
    page,
    perPage,
    middlePage,
    totalPages,
    onPerpageChange,
    onPageChange,
    onPageEnter,
    setPage,
  } = usePagination(transactions.count, paginateCount);

  useEffect(async () => {
    if (transactions.docs.length) {
      dispatch(
        getCurrentPlayerTransactionData(
          params.id, type.value, status.value, page, perPage.value,
        ),
      );
    }
    try {
      const response = await AXIOS.get(`/transactions/getSumOfTransInOut?user_id=${id}`);
      setTotalAmount(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [ page, perPage ]);

  const onApply = () => {
    dispatch(getCurrentPlayerTransactionData(params.id, type.value, status.value));
  };

  useEffect(() => {
    dispatch(getCurrentPlayerTransactionData(params.id, type.value, status.value));
  }, []);

  return (

    <div className={s.transactionContainer}>
      {modalTransactionInfo
    && <MoveTransactionModal
      modalTransactionInfo={modalTransactionInfo}
      onClose={() => setModalTransactionInfo(null)}
      onApply={onApply}
    /> }
      <div>
        <div className={classNames(s.selectAndButtonBlock, 'container')} style={{ margin: 0 }}>
          <div className='row' style={{ display: 'flex', alignItems: 'flex-end' }}>
            <div className='col'>
              <CustomSelect
                isClearable={false}
                value={status}
                width={200}
                onChange={item => setStatus(item)}
                options={selectStatusOptions}
                label='Select status'
                className={s.selectStatus} />
            </div>
            <div className='col-auto'>
              <CustomSelect
                isClearable={false}
                value={type}
                width={200}
                onChange={item => setType(item)}
                options={selectTypeOptions}
                label='Select type'
                className={s.selectType} />
            </div>
            <div className='col-auto'>
              <CustomButton
                onClick={onApply}
                className={s.applyButton}>
                {t('Apply')}
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <CustomTable loading={isLoading} isEmpty={!transactions.docs.length}>
          <CustomTable.Header>
            <CustomTable.Row>
              {transactionHeader.map((item, i) => (
                <CustomTable.HeaderCell
                  key={i}>
                  {item.name}
                </CustomTable.HeaderCell>
              ))}
            </CustomTable.Row>
          </CustomTable.Header>
          <CustomTable.Body>
            {transactions.docs.map(row => <CustomTable.Row key={row.id} >
              {transactionHeader.map((cell) => {
                if ((cell.key === 'action' && row['op_type']?.split('-')[0].toUpperCase() === 'IN')) {
                  return <CustomTable.Cell
                    key={cell.key}
                    className={s.moveTable}
                    bgColor={(row.status === 'SUCCESS' && rowColor.success)
                    || (row.status === 'CANCELED' && rowColor.canceled)
                    || (row.status === 'PENDING' && rowColor.pending)}>
                    <CustomButton
                      className={s.tableButton}
                      onClick={() => setModalTransactionInfo(row)}
                   >Move</CustomButton></CustomTable.Cell>;
                }
                if (!row[cell.key]) {
                  return <CustomTable.Cell
                    key={cell.key}
                    bgColor={(row.status === 'SUCCESS' && rowColor.success)
                    || (row.status === 'CANCELED' && rowColor.canceled)
                    || (row.status === 'PENDING' && rowColor.pending)} >
                    -</CustomTable.Cell>;
                }
                if (cell.key === 'created_at' || cell.key === 'updated_at') {
                  return <CustomTable.Cell
                    bgColor={(row.status === 'SUCCESS' && rowColor.success)
                    || (row.status === 'CANCELED' && rowColor.canceled)
                    || (row.status === 'PENDING' && rowColor.pending)}>
                    {moment(row[cell.key]).format('DD-MM-YYYY')}</CustomTable.Cell>;
                }
                return <CustomTable.Cell
                  key={cell.key}
                  bgColor={(row.status === 'SUCCESS' && rowColor.success)
                  || (row.status === 'CANCELED' && rowColor.canceled)
                  || (row.status === 'PENDING' && rowColor.pending)} >{row[cell.key]}</CustomTable.Cell>;
              })}
            </CustomTable.Row>)}
          </CustomTable.Body>
        </CustomTable>
        <div className={s.totalRow}>
          <div style={{ marginRight: 15 }}>Total: </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginRight: 15, fontSize: 14 }}>In {totalAmount?.IN?.sum}</div>
            |
            <div style={{ marginLeft: 15, fontSize: 14 }}>Out {totalAmount?.OUT?.sum} </div>
          </div>
        </div>
        {
      transactions.docs.length > 0 && <CustomPagination
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
    </div>
  );
};
export default Transaction;
