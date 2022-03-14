import React from 'react';
import ss from '../../../Player.module.scss';
import s from './PlayerKPIs.module.scss';
import CustomDoubleleDatepicker from '../../../../../../Custom/CustomDatepicker/CustomDoubleDatepicker';
import LASTBET from '../../../../../../../assets/images/Player Settings/KPIs/last_bet.svg';
import TOTALBETAMOUNT from '../../../../../../../assets/images/Player Settings/KPIs/total_bet_amount.svg';
import TOTALWINNIGS from '../../../../../../../assets/images/Player Settings/KPIs/total_winnings.svg';
import WITHDRAWAMOUNT from '../../../../../../../assets/images/Player Settings/KPIs/withdraw_amount.svg';

const kpis = [
  {
    icon: LASTBET,
    color: '#EBC16D',
    childs: [
      { name: 'TURBO KENO LAST BET', key: '1' },
      { name: 'LAST WITHDRAW DATE', key: '2' },
      { name: 'TURBO KENO LAST BET', key: '3' },
      { name: 'TURBO KENO LAST BET', key: '4' },
      { name: 'TURBO KENO LAST BET', key: '5' },
      { name: 'TURBO KENO LAST BET', key: '6' },
      { name: 'TURBO KENO LAST BET', key: '7' },
    ],
  },
  {
    icon: WITHDRAWAMOUNT,
    color: '#58ADBC',
    childs: [
      { name: 'WITHDRAW AMOUNT', key: 'withdrawAmount' },
      { name: 'FIRST DEPOSIT DATE', key: 'firstDepositDate' },
      { name: 'WITHDRAW COUNT', key: 'withdrawCount' },
      { name: 'DEPOSIT COUNT', key: 'depositCount' },
      { name: 'NET REVENUE', key: 'netRevenue' },
      { name: 'DEPOSIT', key: 'deposit' },
    ],
  },
  {
    icon: TOTALBETAMOUNT,
    color: '#E1D5BE',
    childs: [
      { name: 'TOTAL CASINO BETS AMOUNT', key: 'totalCasinoBetsAmount' },
      { name: 'GAMINGS TOTAL BETS COUNT', key: 'gamingsTotalBetsCount' },
      { name: 'SPORT TOTAL BETS AMOUNT', key: 'sportTotalBetsAmount' },
      { name: 'TOTAL CASION BETS COUNT', key: 'totalCasinoBetsCount' },
      { name: 'SPORT TOTAL BETS COUNT', key: 'sportTotalBetsCount' },
    ],
  },
  {
    icon: TOTALWINNIGS,
    color: '#8F76B4',
    childs: [
      { name: 'GAMING TOTAL WINNINGS', key: 'gamingTotalWinnings' },
      { name: 'TOTAL CASINO WINNINGS', key: 'totalCasinoWinnings' },
      { name: 'SPORTAL TOTAL WINNINGS', key: 'sportalTotalWinnings' },
    ],
  },
];

function PlayerKPIs() {
  return (
    <div className={ss.content_container}>
      <div className={ss.flex_between}>
        <p>Player KPIs</p>
        <div className={s.datepicker_container}>
          <CustomDoubleleDatepicker />
        </div>
      </div>
      <div className={s.info_container}>
        {
          kpis.map(item => (
            <div key={item.color} className={s.info_items_wrapper}>
              <div className={s.info_item_header} style={{ borderBottom: `2px solid ${item.color}` }}>
                <img src={item.icon} alt='icon' className={s.info_header_icon} />
              </div>
              <div className={s.info_item_main}>
                {
                item.childs.map(child => (
                  <div key={child.key} className={s.info_child}>
                    <p className={s.child_name}>{child.name}</p>
                    <p className={s.child_value}>0.00</p>
                  </div>
                ))
              }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default PlayerKPIs;
