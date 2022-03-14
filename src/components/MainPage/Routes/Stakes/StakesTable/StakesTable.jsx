import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useTranslation } from '../../../../../context/LanguageProvider';
import s from '../Stakes.module.scss';
import { CustomTable, usePagination, CustomPagination } from '../../../../Custom';
import { getStakesData } from '../../../../../redux/thunks/stakesThunk';
import { tableHeaders } from '../constants';
import { LOADING_IDS } from '../../../../../constants/ids';

function StakesTable() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const activeLoadings = useSelector(stakesState => stakesState.activeLoadings);
  const isLoading = activeLoadings.includes(LOADING_IDS.STAKES);
  const { stakes, count } = useSelector(stakesState => stakesState.stakesReducer);
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

  useEffect(() => {
    count < 1 && dispatch(getStakesData(
      page,
      perPage.value,
    ));
  }, [ page, perPage ]);
  // console.log('stakes', stakes);

  return (
    <div className={`${s.stakes__table_container} ${s.stakes__container}`}>
      <CustomTable isEmpty={!stakes || stakes.length === 0} loading={isLoading}>
        <CustomTable.Header>
          <CustomTable.Row>
            {tableHeaders.map(item => <CustomTable.HeaderCell
              key={item.key}>
              {t(`${item.name}`)}
            </CustomTable.HeaderCell>)}
          </CustomTable.Row>
        </CustomTable.Header>
        <CustomTable.Body>
          {stakes && stakes.length > 0 && stakes.map((item, idx) => (
            <CustomTable.Row>
              {tableHeaders.map((cell, idc) => (
                (cell && item[cell.key] === null
                  && <CustomTable.Cell key={idx}>-</CustomTable.Cell>)
                  || ((cell && cell.type && <CustomTable.Cell key={idx}>
                    {moment(item[cell.key]).format('DD-MM-YYYY')}</CustomTable.Cell>)
                  || (cell && <CustomTable.Cell key={idx}>{t(`${item[cell.key]}`)}</CustomTable.Cell>))
              ))}
            </CustomTable.Row>
          ))}
        </CustomTable.Body>
      </CustomTable>
      {stakes && stakes.length > 0
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
  );
}

export default StakesTable;
