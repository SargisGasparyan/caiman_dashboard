import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import {
  CustomTable, CustomPagination, CustomButton,
} from '../../../../../Custom';
import { LOADING_IDS } from '../../../../../../constants/ids';
import s from './Table.module.scss';
import fS from '../Filters/Filters.module.scss';
import { copyTableToClipboard } from '../../../../../../helpers/utils';
import SettingsModale from './SettingsModale/SettingsModale';
import { IMAGES } from '../../../../../../assets/images/index.js';

const { PLAYERS } = LOADING_IDS;

function Table({
  balanceHeaders,
  type,
  headers,
  tableData,
  page,
  perPage,
  middlePage,
  totalPages,
  onPerpageChange,
  onPageChange,
  onPageEnter,
  setPage,
}) {
  const activeLoadings = useSelector(state => state.activeLoadings);
  const [ settingsModal, setSettingsModal ] = useState(false);
  const [ activeHeaders, setActiveHeaders ] = useState(balanceHeaders);

  const headersList = useMemo(() => Object.values(headers), [ headers ]);

  const [ sortData, setSortData ] = useState({
    key: null,
    top: false,
  });

  const onSettingsClick = () => {
    setSettingsModal(prev => !prev);
  };

  const sortedData = useMemo(() => {
    const { key } = sortData;
    if (!key) return tableData;
    const tableCopy = [ ...tableData ];
    tableCopy.sort((a, b) => headers[key].sort(a[key], b[key], sortData.top));
    return tableCopy;
  }, [ tableData, sortData ]);

  const onSortClick = (key) => {
    if (key === sortData.key) {
      return setSortData(prev => ({ ...prev, top: !prev.top }));
    }
    return setSortData({ key, top: true });
  };

  const actualHeaders = type === 'balance' ? Object.values(activeHeaders) : headersList;

  return (
    <div className={fS.wrapper}>
      <div className={s.table_title}>
        <div className={s.table_title_left}>
          <p className={fS.title} style={{ paddingTop: '12px' }}>{type[0].toUpperCase() + type.slice(1)}</p>

          {
           type === 'balance'
           && <div className={s.settingsLogoWrapper} onClick={onSettingsClick}>
             <img alt={IMAGES.settings.alt} src={IMAGES.settings.src} />
           </div>
          }

        </div>
        <div className={s.table_title_left}>
          <CustomButton onClick={() => copyTableToClipboard('transactionsId')}>
            Copy to clipboard
          </CustomButton>
        </div>
      </div>
      <div >
        <CustomTable id="transactionsId" style={{ cursor: 'pointer' }} isEmpty={!sortedData.length} loading={activeLoadings.includes(PLAYERS)} >
          <CustomTable.Header>
            <CustomTable.Row>

              { actualHeaders.map((item) => {
                if (item && item.sort) {
                  return (
                    <CustomTable.HeaderCell
                      onClick={() => onSortClick(item.key)}
                      sort={sortData}
                      sortKey={item.key}
                      key={item.key}
                    >
                      {item.name}
                    </CustomTable.HeaderCell>
                  );
                }
                if (item) {
                  return (
                    <CustomTable.HeaderCell
                      key={item.key}>
                      {item.name}
                    </CustomTable.HeaderCell>
                  );
                }
                return null;
              })

                  }

            </CustomTable.Row>
          </CustomTable.Header>
          <CustomTable.Body>
            {sortedData.map(row => (
              <CustomTable.Row
                key={row.id}
           >
                {actualHeaders.map((cell, idx) => (
                  (cell && !row[cell.key] && <CustomTable.Cell key={idx}>-</CustomTable.Cell>)
              || ((cell
                 && cell.type
                 && <CustomTable.Cell key={idx}>
                   {moment(row[cell.key]).format('DD-MM-YYYY')}</CustomTable.Cell>)
              || (cell && <CustomTable.Cell key={idx}>
                  {row[cell.key]}
                </CustomTable.Cell>))
                ))}
              </CustomTable.Row>
            ))}
          </CustomTable.Body>
        </CustomTable>

        <div>
          { settingsModal && <SettingsModale
            balanceHeaders={balanceHeaders}
            activeHeaders={activeHeaders}
            setActiveHeaders={setActiveHeaders}
            closePopup={() => setSettingsModal(false)} />}
        </div>

      </div>
      { tableData.length !== 0
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

export default Table;
