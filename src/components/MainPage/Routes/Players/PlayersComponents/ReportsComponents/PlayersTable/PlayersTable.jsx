import React, { useState, useMemo } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CustomTable from '../../../../../../Custom/CustomTable/CustomTable';
import { LOADING_IDS } from '../../../../../../../constants/ids';
import { PLAYER_ROUTES_CONFIGS } from '../../../../Player/configs/playerConfigs';

const { PLAYERS } = LOADING_IDS;

function PlayersTable({ tableData, headers }) {
  const activeLoadings = useSelector(state => state.activeLoadings);
  const history = useHistory();
  const [ sortData, setSortData ] = useState({
    key: null,
    top: false,
  });
  const onTableRowClick = (id) => {
    history.push(`/players/${id}/${PLAYER_ROUTES_CONFIGS[0].path}/${PLAYER_ROUTES_CONFIGS[0].childs[0].path}`);
  };
  const sortedData = useMemo(() => {
    const { key } = sortData;
    if (!key) return tableData;
    const tableCopy = [ ...tableData ];
    tableCopy.sort((a, b) => headers[key].sort(a[key], b[key], sortData.top));
    return tableCopy;
  }, [ tableData, sortData ]);

  const headersList = useMemo(() => Object.values(headers), [ headers ]);

  const onSortClick = (key) => {
    if (key === sortData.key) {
      return setSortData(prev => ({ ...prev, top: !prev.top }));
    }
    return setSortData({ key, top: true });
  };
  return (
    <CustomTable
      style={{ cursor: 'pointer' }}
      isEmpty={!sortedData.length}
      loading={activeLoadings.includes(PLAYERS)}
      >
      <CustomTable.Header>
        <CustomTable.Row>
          {headersList.map((item) => {
            if (item && item.sort) {
              return (
                <CustomTable.HeaderCell
                  onClick={() => onSortClick(item.key)}
                  sort={sortData}
                  sortKey={item.key}
                  key={item.key}>
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
          })}
        </CustomTable.Row>
      </CustomTable.Header>
      <CustomTable.Body>
        {sortedData.map(row => (
          <CustomTable.Row
            key={row.id}
            onClick={() => { onTableRowClick(row.id); }}
           >
            {Object.values(headers).map((cell, idx) => (
              (cell && !row[cell.key] && <CustomTable.Cell key={idx}>-</CustomTable.Cell>)
              || ((cell && cell.type && <CustomTable.Cell key={idx}>{moment(row[cell.key]).format('DD-MM-YYYY')}</CustomTable.Cell>)
              || (cell && <CustomTable.Cell key={idx}>
                  {row[cell.key]}
                </CustomTable.Cell>))
            ))}
          </CustomTable.Row>
        ))}
      </CustomTable.Body>
    </CustomTable>
  );
}

export default PlayersTable;
