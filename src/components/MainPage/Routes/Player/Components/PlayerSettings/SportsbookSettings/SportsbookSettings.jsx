import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import CustomTable from '../../../../../../Custom/CustomTable/CustomTable';
import CustomSelect from '../../../../../../Custom/CustomSelect/CustomSelect';
import ss from '../../../Player.module.scss';
import s from './SportsbookSettings.module.scss';
import CustomInput from '../../../../../../Custom/CustomInput/CustomInput';
import ss_delete_png from '../../../../../../../assets/images/ss_delete_png.png';
import ss_edit_png from '../../../../../../../assets/images/ss_edit_png.png';
import ss_save_png from '../../../../../../../assets/images/ss_save_png.png';
/// / HELPING INPORTS
import { sortNumber, sortString } from '../../../../../../../helpers/utils';

/// / ICONS
import football from '../../../../../../../assets/images/Player Settings/football.png';
import americanfootball from '../../../../../../../assets/images/Player Settings/americanfootball.png';
import athlethics from '../../../../../../../assets/images/Player Settings/athletics.png';
import aussierulese from '../../../../../../../assets/images/Player Settings/aussierules.png';
import badminton from '../../../../../../../assets/images/Player Settings/badminton.png';
import basketball from '../../../../../../../assets/images/Player Settings/basketball.png';
import icehockey from '../../../../../../../assets/images/Player Settings/icehockey.png';
import tennis from '../../../../../../../assets/images/Player Settings/tennis.png';
import vooleyball from '../../../../../../../assets/images/Player Settings/vooleyball.png';
import bandy from '../../../../../../../assets/images/Player Settings/bandy.png';
import { LOADING_IDS } from '../../../../../../../constants/ids';

const headers = [
  { name: 'Sport name', key: 'sportName', sort: sortNumber },
  { name: 'Live', key: 'live', sort: sortString },
  { name: 'Pre-match %', key: 'preMatch', sort: sortString },
  { name: 'Additional delay', key: 'additionalDelay', sort: sortString },
];
const competitionHeaders = [
  { name: 'Competition', key: 'competition', sort: sortNumber },
  { name: 'Live', key: 'live', sort: sortString },
  { name: 'Pre-match %', key: 'preMatch', sort: sortString },
  { name: 'Additional delay', key: 'additionalDelay', sort: sortString },
];

const items = [
  {
    name: 'Football', icon: football, live: '100', preMatch: '100', additionalDelay: '100',
  },
  {
    name: 'American football', icon: americanfootball, live: '100', preMatch: '100', additionalDelay: '100',
  },
  {
    name: 'Athlethics', icon: athlethics, live: '100', preMatch: '100', additionalDelay: '100',
  },
  {
    name: 'Aussie rulese', icon: aussierulese, live: '100', preMatch: '100', additionalDelay: '100',
  },
  {
    name: 'Badminton', icon: badminton, live: '100', preMatch: '100', additionalDelay: '100',
  },
  {
    name: 'Basketball', icon: basketball, live: '100', preMatch: '100', additionalDelay: '100',
  },
  {
    name: 'Icehockey', icon: icehockey, live: '100', preMatch: '100', additionalDelay: '100',
  },
  {
    name: 'Tennis', icon: tennis, live: '100', preMatch: '100', additionalDelay: '100',
  },
  {
    name: 'Vooleyball', icon: vooleyball, live: '100', preMatch: '100', additionalDelay: '100',
  },
  {
    name: 'Bandy', icon: bandy, live: '100', preMatch: '100', additionalDelay: '100',
  },

];

const { PLAYERS } = LOADING_IDS;

function SportsbookSettings() {
  const activeLoadings = useSelector(state => state.activeLoadings);
  const tableData = { body: items };
  const [ sortData, setSortData ] = useState({
    name: null,
    top: false,
  });
  const sortedData = useMemo(() => {
    const { name } = sortData;
    if (!name) return tableData;
    // const tableCopy = { ...tableData };
    const tableCopy = { body: tableData.body.map(item => Object.values(item)) };
    const index = headers.findIndex(item => item.name === name);
    tableCopy.body.sort((a, b) => headers[index].sort(a[index - 1],
      b[index - 1], sortData.top));
    return tableCopy;
  }, [ tableData, sortData ]);

  const onSortClick = (name) => {
    if (name === sortData.name) {
      return setSortData(prev => ({ ...prev, top: !prev.top }));
    }
    return setSortData({ name, top: true });
  };
  console.log(s);
  return (
    <>
      <div className={ss.content_container}>
        <div className={s.global_limits}>
          <p>
            Sportsbook
          </p>
          <div className={s.glimits_buttons}>
            <div className={`${s.button} ${s.light}`}>
              <img className={s.images} src={ss_save_png} alt={'save'} />
            </div>
            <div className={`${s.button} ${s.light}`}>
              <img className={s.images} src={ss_delete_png} alt={'save'} />
            </div>
            <div className={`${s.button} ${s.dark}`}>
              <img className={s.images} src={ss_edit_png} alt={'save'} />
            </div>
          </div>
        </div>
        <div className={ss.input_block} >
          <CustomInput
            label={'Live selection limit (%)'}
            width={200}
            />
          <CustomInput
            label={'Live selection limit (%)'}
            width={200}
            />
          <CustomInput
            label={'Live selection limit (%)'}
            width={200}
            />
        </div>
      </div>
      <div className={s.limits_container}>
        <div className={s.global_limits}>
          <p>
            Sportsbook
          </p>
          <div className={s.glimits_buttons}>
            <div className={`${s.button} ${s.light}`}>
              <img className={s.images} src={ss_save_png} alt={'save'} />
            </div>
            <div className={`${s.button} ${s.light}`}>
              <img className={s.images} src={ss_delete_png} alt={'save'} />
            </div>
            <div className={`${s.button} ${s.dark}`}>
              <img className={s.images} src={ss_edit_png} alt={'save'} />
            </div>
          </div>
        </div>
      </div>
      <div className={s.sportsbook_container}>
        <CustomTable
          noItems={!sortedData.body.length}
          loading={activeLoadings.includes(PLAYERS)}
          className={s.table}
      >
          <CustomTable.Header>
            <CustomTable.Row>
              {headers.map(item => (
                <CustomTable.HeaderCell
                  className={s.table_header}
                  onClick={() => onSortClick(item.name)}
                  sort={sortData}
                  key={item.key}>
                  {item.name}
                </CustomTable.HeaderCell>
              ))}
            </CustomTable.Row>
          </CustomTable.Header>
          <CustomTable.Body className={s.table_body}>
            {sortedData.body.map((row, i) => (
              <CustomTable.Row key={i} className={s.table_row}>
                <CustomTable.Cell className={s.table_cell}>
                  <div className={s.table_cell_item_first}>
                    <img src={row.icon} alt={row.name} className={s.icon} />
                    <p className={s.table_text}>{row.name}</p>
                  </div>
                </CustomTable.Cell >
                <CustomTable.Cell className={s.table_cell}>
                  <div className={s.table_cell_item}>
                    <CustomInput
                      className={s.table_input}
                      wrapperStyle={{ height: '30px', boxShadow: 'none' }}
                      width={170}
                  />
                    <p className={s.table_text}>{row.live}</p>
                  </div>
                </CustomTable.Cell>
                <CustomTable.Cell className={s.table_cell}>
                  <div className={s.table_cell_item}>
                    <CustomInput
                      className={s.table_input}
                      wrapperStyle={{ height: '30px', boxShadow: 'none' }}
                      width={170}
                />
                    <p className={s.table_text}>{row.preMatch}</p>
                  </div>
                </CustomTable.Cell>
                <CustomTable.Cell className={s.table_cell}>
                  <div className={s.table_cell_item}>
                    <CustomInput
                      className={s.table_input}
                      wrapperStyle={{ height: '30px', boxShadow: 'none' }}
                      width={170}
                      value={row.additionalDelay}
                  />
                  </div>
                </CustomTable.Cell>
              </CustomTable.Row>
            ))}
          </CustomTable.Body>
        </CustomTable>
        {/* <Pagination className={s.pagiNation} /> */}
      </div>

      <div className={ss.content_container}>
        <div className={s.competition_header}>
          <p>Competition limits</p>
          <div className={`${s.button} ${s.light} ${s.competition_edit_button}`}>
            <img className={s.images} src={ss_edit_png} alt={'save'} style={{ color: 'black' }} />
          </div>
        </div>
        <CustomSelect />
        <CustomTable
          noItems={!sortedData.body.length}
          loading={activeLoadings.includes(PLAYERS)}
          className={s.table}
      >
          <CustomTable.Header>
            <CustomTable.Row>
              {headers.map(item => (
                <CustomTable.HeaderCell
                  className={s.table_header}
                  onClick={() => onSortClick(item.name)}
                  sort={sortData}
                  key={item.key}>
                  {item.name}
                </CustomTable.HeaderCell>
              ))}
            </CustomTable.Row>
          </CustomTable.Header>
          <CustomTable.Body className={s.table_body}>
            {sortedData.body.map((row, i) => (
              <CustomTable.Row key={i} className={s.table_row}>
                <CustomTable.Cell className={s.table_cell}>
                  <div className={s.table_cell_item}>
                    <img src={row.icon} alt={row.name} className={s.icon} />
                    <p className={s.table_text}>{row.name}</p>
                  </div>
                </CustomTable.Cell >
                <CustomTable.Cell className={s.table_cell}>
                  <div className={s.table_cell_item}>
                    <CustomInput
                      className={s.table_input}
                      width={170}
                  />
                    <p className={s.table_text}>{row.live}</p>
                  </div>
                </CustomTable.Cell>
                <CustomTable.Cell className={s.table_cell}>
                  <div className={s.table_cell_item}>
                    <CustomInput
                      className={s.table_input}
                      width={170}
                />
                    <p className={s.table_text}>{row.preMatch}</p>
                  </div>
                </CustomTable.Cell>
                <CustomTable.Cell className={s.table_cell}>
                  <div className={s.table_cell_item}>
                    <CustomInput
                      className={s.table_input}
                      width={170}
                  />
                    <p className={s.table_text}>{row.additionalDelay}</p>
                  </div>
                </CustomTable.Cell>
              </CustomTable.Row>
            ))}
          </CustomTable.Body>
        </CustomTable>
        {/* <Pagination classNames={s.pagiNation} /> */}
      </div>
    </>
  );
}

export default SportsbookSettings;
