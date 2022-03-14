import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from '../../../../../context/LanguageProvider';
import s from '../../Stakes/Stakes.module.scss';
import { addLoading } from '../../../../../redux/ducks/loadingDuck';
import { applyTransactionsData, fromToTransactionsData } from '../../../../../redux/thunks/transactionThunk';
import { resetTransactions } from '../../../../../redux/ducks/transactionsDuck';
import { CustomChart } from '../../../../Custom/CustomChart/CustomChart';
import { LOADING_IDS } from '../../../../../constants/ids';

const getDateString = dateValue => `${new Date(dateValue).getFullYear()}-${(`0${new Date(dateValue).getMonth() + 1}`).slice(-2)}-${(`0${new Date(dateValue).getDate()}`).slice(-2)}`;

function StatisticsTransaction() {
  const [ startDate, setStartDate ] = useState(
    new Date(new Date().setDate(new Date().getDate() - 1)),
  );
  const [ endDate, setEndDate ] = useState(new Date());
  const [ INKeys, setINKeys ] = useState([]);
  const [ OUTKeys, setOUTKeys ] = useState([]);
  const [ transactionType, setTransactionType ] = useState('transactionIN');
  const {
    IN, OUT, allTransactions,
  } = useSelector(({ transactionsData }) => transactionsData);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    getTransactions();
    return () => {
      dispatch(resetTransactions());
    };
  }, [ startDate, endDate ]);

  const getTransactions = (set = 0) => {
    dispatch(addLoading(LOADING_IDS.STATISTICS));
    const yesterdayString = getDateString(startDate);
    const todayString = getDateString(endDate);
    const urlEnd = `/transactions/find?${yesterdayString !== ''
      ? `from=${yesterdayString}&` : ''}${todayString !== ''
      ? `to=${todayString}&` : ''}limit=50&offset=${set}`;
    dispatch(applyTransactionsData(urlEnd));
    dispatch(fromToTransactionsData(yesterdayString, todayString));
  };

  useEffect(() => {
    const setIn = new Set();
    for (const inElement of IN.rows) {
      setIn.add(inElement.type);
    }
    setINKeys([ ...setIn ]);
    const setOut = new Set();
    for (const outElement of OUT.rows) {
      setOut.add(outElement.type);
    }
    setOUTKeys([ ...setOut ]);
  }, [ IN, OUT ]);

  const getDataAmount = (value) => {
    const dateArr = getDates(startDate, endDate);
    const res = dateArr.reduce((accumulator, currentValue) => (
      { ...accumulator, [currentValue]: 0 }), {});
    for (const element of allTransactions.rows) {
      if (element.kind === value) {
        res[getDateString(element.updated_at)] += +element.amount;
      }
    }
    return res;
  };

  function getDates(startDay, stopDay) {
    const dateArray = [];
    let currentDate = startDay;
    while (currentDate <= stopDay) {
      dateArray.push(getDateString(currentDate));
      const nextDay = new Date(currentDate);
      nextDay.setDate(currentDate.getDate() + 1);
      currentDate = nextDay;
    }
    return dateArray;
  }

  const data = {
    labels: getDates(startDate, endDate),
    datasets: transactionType === 'transactionIN' ? INKeys.map((value, index) => ({
      label: value,
      data: getDataAmount(value),
      fill: false,
      backgroundColor: `hsl(${360 / (INKeys.length + 1) * index}, 80%, 60%)`,
      borderColor: `hsl(${360 / (INKeys.length + 1) * index}, 80%, 60%)`,
    })) : OUTKeys.map((value, index) => ({
      label: value,
      data: getDataAmount(value),
      fill: false,
      backgroundColor: `hsl(${360 / (OUTKeys.length + 1) * index}, 80%, 60%)`,
      borderColor: `hsl(${360 / (OUTKeys.length + 1) * index}, 80%, 60%)`,
    })),
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <div>
        <p className={s.stakes_title}>{ t('Transaction Statistics')}</p>
      </div>
      <CustomChart
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        transactionType={transactionType}
        setTransactionType={setTransactionType}
        data={data}
        options={options}
      />
    </>
  );
}

export default StatisticsTransaction;
