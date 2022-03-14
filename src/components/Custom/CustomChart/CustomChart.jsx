import { Line } from 'react-chartjs-2';
import React from 'react';
import { useSelector } from 'react-redux';
import s from '../../MainPage/Routes/Stakes/Stakes.module.scss';
import CustomDoubleDatepicker from '../CustomDatepicker/CustomDoubleDatepicker';
import tS from './CustomChart.module.scss';
import CubeLoader from '../../Common/Loaders/CubeLoader/CubeLoader';
import { useTranslation } from '../../../context/LanguageProvider';
import { LOADING_IDS } from '../../../constants/ids';

export const CustomChart = ({
  startDate, endDate, setStartDate, setEndDate, transactionType, setTransactionType, data, options,
}) => {
  const { t } = useTranslation();
  const activeLoadings = useSelector(state => state.activeLoadings);

  return (
    <div className={`${s.stakes__table_container} ${s.stakes__container}`}>
      <CustomDoubleDatepicker
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate} />
      <div className={tS.radioButtons}>
        <label>
          <input
            checked={transactionType === 'transactionIN'}
            type="radio"
            name='transaction'
            value='transactionIN'
            onClick={e => setTransactionType(e.target.value)}
          />
          <div>{t('Transaction IN')}</div>
        </label>
        <label>
          <input
            checked={transactionType === 'transactionOUT'}
            type="radio"
            name='transaction'
            value='transactionOUT'
            onClick={e => setTransactionType(e.target.value)}
          />
          <div>{t('Transaction OUT')}</div>
        </label>
      </div>
      {activeLoadings.includes(LOADING_IDS.STATISTICS) && <div className={s.tableLoading}>
        <CubeLoader size={25} />
      </div>}
      <Line data={data} options={options} />
    </div>
  );
};
