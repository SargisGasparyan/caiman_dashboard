import React, { useEffect } from 'react';
// import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import s from './Balance.module.scss';
import Table from './Table/Table';
import Filters from './Filters/Filters';
import { headers, filtersInitials } from '../helpers/constants';
import usePagination from '../../../../Custom/CustomPagination/usePagination';
import { getTransactions } from '../../../../../redux/thunks/transactionThunk';
import { resetTransactions } from '../../../../../redux/ducks/transactionsDuck';

function Component({
  type, filterData, setFilterData, currentProject,
}) {
  const dispatch = useDispatch();
  const { count, transactions } = useSelector(tr => tr.transactionsData);

  const onApply = () => {
    dispatch(getTransactions(type, page, perPage.value, filterData));
  };

  const onReset = () => {
    setFilterData(filtersInitials(type, currentProject.name));
    dispatch(resetTransactions(type));
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
  } = usePagination(count[type], 10);

  useEffect(() => {
    dispatch(getTransactions(type, page, perPage.value, filterData));
  }, []);

  useEffect(() => {
    if (transactions[type].length > 0) {
      dispatch(getTransactions(type, page, perPage.value, filterData));
    }
  }, [ page, perPage ]);

  return (
    <div className={s.container} >
      <Filters
        type={type}
        currentProject={currentProject}
        state={filterData}
        setState={setFilterData}
        onApply={onApply}
        onReset={onReset}
      />
      <Table
        type={type}
        balanceHeaders={headers.balance}
        headers={headers[type]}
        tableData={transactions[type]}
        page={page}
        perPage={perPage}
        middlePage={middlePage}
        totalPages={totalPages}
        onPerpageChange={onPerpageChange}
        onPageChange={onPageChange}
        onPageEnter={onPageEnter}
        setPage={setPage}
      />
    </div>
  );
}

export default React.memo(Component);
