export const betsHeaders = {
  package_id: { name: 'ID', key: 'package_id' },
  type: { name: 'Type', key: 'type' },
  package_sum: {
    name: 'Amount', key: 'package_sum',
  },
  payout_sum: {
    name: 'Payout', key: 'payout_sum',
  },
  extra: { name: 'Extra', key: 'extra' },
  status: { name: 'Status', key: 'status' },
  ztype: { name: 'Bet Type', key: 'ztype', options: [ 'ordinary', 'notordinary', 'another' ]},
  date: { name: 'Date', key: 'dt', type: 'data' },
  info: { name: 'Info', key: 'info' },
};

export const modalHeaders = {
  status: { name: 'Status', key: 'status' },
  event: { name: 'Event', key: 'event' },
  market: { name: 'Market', key: 'market' },
  price: {
    name: 'Price', key: 'price',
  },
  odd: { name: 'Odd', key: 'odd' },
  handicap: { name: 'Handicap', key: 'handicap' },
  bet: { name: 'Bet', key: 'bet' },
  win: { name: 'Win', key: 'win' },
};

export const fakeBet = [
  {
    status: 'ssas',
    event: 'ssss',
    market: 'ssss',
    price: 'ssss',
    odd: 'ssss',
    handicap: 'ssss',
    bet: 'ssss',
    win: 'ssss',
  },
  {
    status: 'ssas',
    event: 'ssss',
    market: 'ssss',
    price: 'ssss',
    odd: 'ssss',
    handicap: 'ssss',
    bet: 'ssss',
    win: 'ssss',
  },
  {
    status: 'ssas',
    event: 'ssss',
    market: 'ssss',
    price: 'ssss',
    odd: 'ssss',
    handicap: 'ssss',
    bet: 'ssss',
    win: 'ssss',
  },
];
