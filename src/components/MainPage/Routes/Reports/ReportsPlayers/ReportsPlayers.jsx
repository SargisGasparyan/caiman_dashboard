import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import rS from './ReportPlayers.module.scss';
import { useTranslation } from '../../../../../context/LanguageProvider';
import { CustomButton, CustomSingleDatepicker } from '../../../../Custom';
import { addLoading } from '../../../../../redux/ducks/loadingDuck';
import { getPlayersReport } from '../../../../../redux/thunks/playersReportThunk';
import { setPlayerReportInitialDataAction } from '../../../../../redux/ducks/playersReportDuck';
import CustomPagination from '../../../../Custom/CustomPagination/CustomPagination';
import { LOADING_IDS } from '../../../../../constants/ids';

const arr = [ 'Unit', 'Balance' ];
const arrr = [ 'Start', 'End' ];
const arr1 = [ 'BET', 'WIN', 'GGR' ];
const arr2 = [ 'Quantity', 'Amount', 'Quantity', 'Amount', 'Percent(%)', 'Amount' ];

const getDateString = dateValue => `${new Date(dateValue).getFullYear()}
-${(`0${new Date(dateValue).getMonth() + 1}`).slice(-2)}
-${(`0${new Date(dateValue).getDate()}`).slice(-2)}`;

const ReportsPlayers = () => {
  const [ date, setDate ] = useState(new Date());
  const activeLoadings = useSelector(state => state.activeLoadings);
  const { playersReport } = useSelector(state => state.playersReportData);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [ totals, setTotals ] = useState({});

  useEffect(() => {
    applyFilter(0);
    getTotals();
    return () => {
      dispatch(setPlayerReportInitialDataAction());
    };
  }, []);

  useEffect(() => {
    getTotals();
  }, [ playersReport.data ]);

  const applyFilter = (set = 0) => {
    dispatch(addLoading(LOADING_IDS.CONTENT));
    const dateString = getDateString(date);
    const urlEnd = `/reports/players?${dateString !== ''
      ? `from=${dateString}&` : ''}${dateString !== ''
      ? `to=${dateString}&` : ''}limit=30&offset=${set}`;
    dispatch(getPlayersReport(urlEnd));
  };

  const resetFilter = () => {
    setDate(new Date());
  };

  const getTotals = () => {
    const obj = {};
    console.log(playersReport);
    Object.keys(playersReport.data).forEach((title) => {
      obj[title] = {};
      if (title !== 'units') {
        obj[title].betQuantity = 0;
        obj[title].betAmount = 0;
        obj[title].winQuantity = 0;
        obj[title].winAmount = 0;
        obj[title].percent = 0;
        obj[title].ggrAmount = 0;
        playersReport.users.forEach((identification) => {
          obj[title].betQuantity += +playersReport.data[title][identification].betCount;
          obj[title].betAmount += +playersReport.data[title][identification].bet;
          obj[title].winQuantity += +playersReport.data[title][identification].winCount;
          obj[title].winAmount += +playersReport.data[title][identification].win;
          obj[title].ggrAmount += +playersReport.data[title][identification].bet
            - +playersReport.data[title][identification].win;
        });
        obj[title].percent = Math.round(
          (obj[title].betAmount - obj[title].winAmount) / obj[title].betAmount * 1000,
        ) / 10 || 0;
      } else {
        obj[title].unitStart = 0;
        obj[title].unitEnd = 0;
        obj[title].balanceStart = 0;
        obj[title].balanceEnd = 0;
        playersReport.users.forEach((identification) => {
          obj[title].unitStart += +playersReport.data[title][identification].unitStart || 0;
          obj[title].unitEnd += +playersReport.data[title][identification].unitEnd || 0;
          obj[title].balanceStart += +playersReport.data[title][identification].balanceStart || 0;
          obj[title].balanceEnd += +playersReport.data[title][identification].balanceEnd || 0;
        });
      }
    });
    console.log(obj);
    setTotals(obj);
  };

  return (
    <>
      <div>
        <p className={rS.report_title}>{t('Players Reports')}</p>
      </div>
      <div className={rS.container}>
        <CustomSingleDatepicker
          selected={date}
          onChange={setDate}
          label='DataPicker'
        />
        <div className={rS.buttons}>
          <CustomButton
            className={rS.apply__button}
            onClick={() => applyFilter(0, true)}
            disabled={
              activeLoadings.includes(LOADING_IDS.CONTENT)
            }>{t('Apply')}</CustomButton>
          <CustomButton
            className={rS.reset__button}
            onClick={() => resetFilter()}
            disabled={
              activeLoadings.includes(LOADING_IDS.CONTENT)
            }>{t('Reset')}</CustomButton>
        </div>
        <div className={rS.reportTables}>
          { !!Object.keys(playersReport.data).length && <table className={rS.idTable}>
            <thead>
              <tr className={rS.userIdContainer}>
                <th className={rS.userId}>User ID</th>
              </tr>
              <tr>
                <th style={{ height: 45 }} />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classnames(rS.centering, rS.total, rS.totalContainer)}>Total</td>
              </tr>
              {playersReport.users.map(value => <tr>
                <td className={
                classnames(rS.centering, rS.totalContainer, rS.keysTitle)
              }>{value}</td>
              </tr>)}
            </tbody>
          </table>}
          <div className={rS.scrollable}>
            {Object.keys(playersReport.data).map((title, index) => <table className={rS.dataTable}>
              {title !== 'units' ? <>
                <thead>
                  <tr className={rS.firstTitleContainer}>
                    <th
                      style={{ backgroundColor: `hsl(${360 / (Object.keys(playersReport.data).length + 2) * index}, 80%, 60%)` }}
                      className={rS.firstTitle}
                      colSpan={6}>{title}</th>
                  </tr>
                  <tr className={rS.secondTitleContainer}>
                    {arr1.map(value1 => <th className={rS.secondTitle} colSpan={2}>{value1}</th>)}
                  </tr>
                  <tr className={rS.thirdTitleContainer}>
                    {arr2.map(value2 => <th className={rS.thirdTitle}>{value2}</th>)}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={
                    classnames(rS.centering, rS.totalContainer, rS.totalValues)
                  }>{totals[title] ? totals[title].betQuantity : 0.0}</td>
                    <td className={
                    classnames(rS.centering, rS.totalContainer, rS.totalValues)
                  }>{totals[title] ? totals[title].betAmount : 0.0}</td>
                    <td className={
                    classnames(rS.centering, rS.totalContainer, rS.totalValues)
                  }>{totals[title] ? totals[title].winQuantity : 0.0}</td>
                    <td className={
                    classnames(rS.centering, rS.totalContainer, rS.totalValues)
                  }>{totals[title] ? totals[title].winAmount : 0.0}</td>
                    <td className={
                    classnames(rS.centering, rS.totalContainer, rS.totalValues)
                  }>{totals[title] ? totals[title].percent : 0}%
                    </td>
                    <td className={
                    classnames(rS.centering, rS.totalContainer, rS.totalValues)
                  }>{totals[title] ? totals[title].ggrAmount : 0.0}</td>
                  </tr>
                  {playersReport.users.map(identification => <tr>
                    <td className={
                    classnames(rS.centering, rS.totalContainer, rS.quantityAmount)
                  }>{playersReport.data[title][identification].betCount}</td>
                    <td className={
                    classnames(rS.centering, rS.totalContainer, rS.quantityAmount)
                  }>{playersReport.data[title][identification].bet}</td>
                    <td className={
                    classnames(rS.centering, rS.totalContainer, rS.quantityAmount)
                  }>{playersReport.data[title][identification].winCount}</td>
                    <td className={
                    classnames(rS.centering, rS.totalContainer, rS.quantityAmount)
                  }>{playersReport.data[title][identification].win}</td>
                    <td className={
                    classnames(rS.centering, rS.totalContainer, rS.quantityAmount)
                  }>{Math.round((+playersReport.data[title][identification].bet
                      - +playersReport.data[title][identification].win)
                    / +playersReport.data[title][identification].bet * 1000) / 10 || 0}%
                    </td>
                    <td className={
                    classnames(rS.centering, rS.totalContainer, rS.quantityAmount)
                  }>{
                    (playersReport.data[title][identification].bet
                      - playersReport.data[title][identification].win)
                  }</td>
                  </tr>)}
                </tbody>
              </> : <>
                <thead>
                  <tr className={rS.firstTitleContainer}>
                    <th
                      style={{ backgroundColor: `hsl(${360 / (Object.keys(playersReport.data).length + 2) * index}, 80%, 60%)` }}
                      className={rS.firstTitle}
                      colSpan={4}>{title}</th>
                  </tr>
                  <tr>
                    {arr.map(value1 => <th className={rS.secondTitle} colSpan={2}>{value1}</th>)}
                  </tr>
                  <tr>
                    {arrr.map(value2 => <th className={rS.thirdTitle}>{value2}</th>)}
                    {arrr.map(value2 => <th className={rS.thirdTitle}>{value2}</th>)}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={
                    classnames(rS.centering, rS.totalContainer, rS.totalValues)
                  }>{totals[title] ? totals[title].unitStart : 0.0}</td>
                    <td className={
                    classnames(rS.centering, rS.totalContainer, rS.totalValues)
                  }>{totals[title] ? totals[title].unitEnd : 0.0}</td>
                    <td className={
                    classnames(rS.centering, rS.totalContainer, rS.totalValues)
                  }>{totals[title] ? totals[title].balanceStart : 0.0}</td>
                    <td className={
                    classnames(rS.centering, rS.totalContainer, rS.totalValues)
                  }>{totals[title] ? totals[title].balanceEnd : 0.0}</td>
                  </tr>
                  {playersReport.users.map(identification => <tr>
                    <td className={
                    classnames(rS.centering, rS.totalContainer, rS.quantityAmount)
                  }>{playersReport.data[title][identification].unitStart}</td>
                    <td className={
                    classnames(rS.centering, rS.totalContainer, rS.quantityAmount)
                  }>{playersReport.data[title][identification].unitEnd}</td>
                    <td className={
                    classnames(rS.centering, rS.totalContainer, rS.quantityAmount)
                  }>{playersReport.data[title][identification].balanceStart}</td>
                    <td className={
                    classnames(rS.centering, rS.totalContainer, rS.quantityAmount)
                  }>{playersReport.data[title][identification].balanceEnd}</td>
                  </tr>)}
                </tbody>
              </>}
            </table>)}
          </div>
        </div>
      </div>
      <CustomPagination
        pageCount={Math.round(playersReport.count / 30)}
        applyFilter={applyFilter.bind(this)}
        loadingType={'TRANSACTION'}
      />
    </>
  );
};

export default ReportsPlayers;
