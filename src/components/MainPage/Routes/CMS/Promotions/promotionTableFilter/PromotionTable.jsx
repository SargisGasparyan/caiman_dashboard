import React, { useState, useMemo } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CustomTable } from '../../../../../Custom';
import { LOADING_IDS } from '../../../../../../constants/ids';
import { PLAYER_ROUTES_CONFIGS } from '../../../Player/configs/playerConfigs';
import st from './PromotionTableFilter.module.scss';
import { IMAGES } from '../../../../../../assets/images';

const { PLAYERS } = LOADING_IDS;

function PromotionTable({ tableData, headers }) {
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
  const classArray = [ 'th_priority', 'th_title', 'th_url', 'th_published', 'th_expires', 'th_tags', 'th_lang', 'th_actions' ];

  return (
    <div>
      <CustomTable
        style={{ cursor: 'pointer' }}
        isEmpty={!sortedData.length}
        loading={activeLoadings.includes(PLAYERS)}
      >
        <CustomTable.Header>
          <CustomTable.Row>
            {[{ name: 'priority' }, { name: 'title' }, { name: 'url' }, { name: 'published' }, { name: 'txpires' }, { name: 'tags' }, { name: 'lang' }, { name: 'actions' }].map((item, index) => {
              if (item && item.sort) {
                return (
                  <CustomTable.HeaderCell
                    className={classArray[index]}
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
                    className={classArray[index]}
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
          {sortedData.map((row, index) => (
            <CustomTable.Row
              // onMouseOver={function (e) {
              //   console.log(e.target.target, '--------------------------kkkkk');
              // }}
              key={row.id}
              onClick={() => { onTableRowClick(row.id); }}
           >
              {[{ name: 'th_priority' }, { name: 'th_title' }, { name: 'th_url' }, { name: 'th_published' }, { name: 'th_expires' }, { name: 'th_tags' }, { name: 'th_lang' }, { name: 'th_actions' }].map((cell, idx) => (
                (cell && !row[cell.key] && <CustomTable.Cell key={idx}>
                  {cell.name === 'th_actions'
                    ? <div className={st.td_action}>
                      <span className={st.ic_menu_point}>
                        <svg id="Icon_menu_point_h_outline" xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4">
                          <path id="Path" d="M4,2A2,2,0,1,1,2,0,2,2,0,0,1,4,2Z" fill="#cbcdd1" />
                          <path id="Path-2" data-name="Path" d="M4,2A2,2,0,1,1,2,0,2,2,0,0,1,4,2Z" transform="translate(6)" fill="#cbcdd1" />
                          <path id="Path-3" data-name="Path" d="M2,4A2,2,0,1,0,0,2,2,2,0,0,0,2,4Z" transform="translate(12)" fill="#cbcdd1" />
                        </svg>

                        {/* <img src={IMAGES.menuPoint.src} alt="ic_menu_point" /> */}
                      </span>
                      <span className={st.ic_create}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17.002" height="17.003" viewBox="0 0 17.002 17.003" >
                          <g id="ic_border_color_24px" transform="translate(-4 -2)" className='apple'>
                            <path id="Контур_81" data-name="Контур 81" d="M17.75,7,14,3.25l-10,10V17H7.75Zm2.96-2.96a1,1,0,0,0,0-1.41L18.37.29a1,1,0,0,0-1.41,0L15,2.25,18.75,6Z" transform="translate(0 2.003)" fill="#cbcdd1" />
                          </g>
                        </svg>
                        {/* <img src={IMAGES.rename.src} alt="ic_create" /> */}
                      </span>
                      <span className={st.ic_view}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20.062" height="14" viewBox="0 0 20.062 14">
                          <g id="Icon_view_outline" transform="translate(-0.966)">
                            <path id="Shape" d="M10.033,14C3.606,14,.7,9.593.068,7.263L0,7.011l.063-.254C.648,4.42,3.485,0,10.033,0a10.781,10.781,0,0,1,7.219,2.5A8.7,8.7,0,0,1,20,6.757l.059.233-.054.235a8.559,8.559,0,0,1-2.762,4.347A10.889,10.889,0,0,1,10.033,14Zm0-12A8.819,8.819,0,0,0,4.318,3.844,6.892,6.892,0,0,0,2.076,6.989a7.35,7.35,0,0,0,2.254,3.122A8.714,8.714,0,0,0,10.033,12a8.927,8.927,0,0,0,5.747-1.81A6.571,6.571,0,0,0,18,7.01a6.961,6.961,0,0,0-2.232-3.153A8.813,8.813,0,0,0,10.033,2Z" transform="translate(0.966)" fill="#cbcdd1" />
                            <path id="Shape-2" data-name="Shape" d="M3,6A3,3,0,1,1,6,3,3,3,0,0,1,3,6ZM3,2A1,1,0,1,0,4,3,1,1,0,0,0,3,2Z" transform="translate(8 4)" fill="#cbcdd1" />
                          </g>
                        </svg>
                        {/* <img src={IMAGES.viewOutline.src} alt="ic_create" /> */}
                      </span>
                    </div> : <span>-</span>}
                  </CustomTable.Cell>)
              || ((cell && cell.type
              && <CustomTable.Cell key={idx}>{moment(row[cell.key])
                .format('DD-MM-YYYY')}</CustomTable.Cell>)
              || (cell && <CustomTable.Cell key={idx}>
                  {row[cell.key]}
                </CustomTable.Cell>))
              ))}
            </CustomTable.Row>
          ))}
        </CustomTable.Body>
      </CustomTable>
    </div>
  );
}

export default PromotionTable;
