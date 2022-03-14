export const initialState = {
  ticketStatus: null,
  interval_from: null,
  interval_to: null,
  time_from: null,
  time_to: null,
  money: null,
  account: null,
  event_id: null,
  cashbox_id: null,
  package_id: null,
  cc_from: null,
  cc_to: null,
  amount_from: null,
  amount_to: null,
  win_from: null,
  win_to: null,
  status: null,
  payout_option: null,
  kind_live: null,
  kind_internet: null,
  kind_express: null,
  kind_statistics: null,
};

export const intervalSelection = [
  { value: 'admission', label: 'Admission' },
  { value: 'payout', label: 'Payout' },
  { value: 'calculation', label: 'Calculation' },
];

export const moneySelection = [
  { value: 'All', label: 'All' },
  { value: 'Real money', label: 'Real money' },
  { value: 'Unit', label: 'Unit' },
];

export const statusSelection = [
  { value: 'unprocessed', label: 'All' },
  { value: 'processed', label: 'Unprocessed' },
  { value: 'Processed', label: 'Processed' },
  { value: 'won_all', label: 'Won(All)' },
  { value: 'won_not_paid', label: 'Won(Not paid)' },
  { value: 'won_paid', label: 'Won(Paid)' },
  { value: 'loss', label: 'Loss' },
  { value: 'Finished not paid', label: 'Finished not paid' },
  { value: 'Lost in one event', label: 'Lost in one event' },
];

export const payoutOptionSelection = [
  { value: 'All', label: 'All' },
  { value: 3, label: 'Free Bet' },
  { value: 1, label: 'Super Cash Out' },
  { value: 4, label: 'Cash Back' },
  { value: 2, label: 'Cancel Bet' },
];

export const tableHeaders = [
  { key: 'player_id', name: 'Owner' },
  { key: 'package_id', name: 'Ticket' },
  { key: 'date_created', name: 'Admition' },
  { key: 'bet_amount', name: 'Amount' },
  { key: 'rate', name: 'Rate' },
  { key: 'payout_amount', name: 'Win' },
  { key: 'date_calculated', name: 'Calculation' },
  { key: 'date_paid', name: 'Paid' },
  { key: 'paid_shop_id', name: 'Paid shop' },
  { key: 'status', name: 'Status' },
  { key: 'cl', name: 'CL' },
  { key: 'unit', name: 'U' },
  { key: 'mr', name: 'MR' },
  { key: 'total', name: 'T' },
];

export const inputsPart = [
  { label: 'Account', key: 'playerId' },
  { label: 'Event ID', key: 'eventId' },
  { label: 'Cashbox ID', key: 'shop_id' },
  { label: 'Package ID', key: 'packageId' },
];

export const fromToInputs = [
  { label: 'Content count', key: 'contentCount' },
  { label: 'Amount', key: 'amount' },
  { label: 'Win', key: 'win' },
];

export const kindRadioButtons = {
  firstRow: [
    { label: 'All', name: 'sport', id: 'allLive' },
    { label: 'Live', name: 'sport', id: 'live' },
    { label: 'Prematch', name: 'sport', id: 'prematch' },
  ],
  secondRow: [
    { label: 'All', name: 'source', id: 'allInternet' },
    { label: 'Internet', name: 'source', id: 'internet' },
    { label: 'Shop', name: 'source', id: 'shop' },
  ],
  thirdRow: [
    { label: 'All', name: 'ticketKind', id: 'allExpress' },
    { label: 'Express', name: 'ticketKind', id: 'express' },
    { label: 'Ordinar', name: 'ticketKind', id: 'ordinar' },
  ],
  forthRow: [
    { label: 'All', name: 'market_type', id: 'allStatistics' },
    { label: 'Statistics', name: 'market_type', id: 'statistics' },
  ],
};
