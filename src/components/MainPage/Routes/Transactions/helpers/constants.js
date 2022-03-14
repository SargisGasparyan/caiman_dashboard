import moment from 'moment';
import { sortString, sortNumber } from '../../../../../helpers/utils';

export const mainFilters = {
  balance: [ 'ALL', 'PENDING', 'APPROVED', 'DENIED', 'CANCELED', 'SUCCESS', 'WAITGW',
  ],
  units: [
    'ALL', 'IN-UNIT-BONUS', 'IN-UNIT-CB', 'IN-UNIT-FB', 'IN-BO-UNITS', 'OUT-UNIT-SPORT', 'OUT-UNIT-KENO', 'OUT-BO-UNITS',
  ],
};

export const headers = {
  balance: {
    id: { name: 'TRX', key: 'id', sort: sortNumber },
    user_id: { name: 'User ID', key: 'user_id', sort: sortNumber },
    amount: { name: 'Amount', key: 'amount', sort: sortString },
    currency: { name: 'Currency', key: 'currency', sort: sortString },
    created_at: {
      name: 'Created', key: 'created_at', type: 'data', sort: sortString,
    },
    updated_at: {
      name: 'Updated', key: 'updated_at', type: 'data', sort: sortString,
    },
    kind: { name: 'Kind', key: 'kind', sort: sortString },
    status: {
      name: 'Status', key: 'status', sort: sortString,
    },
    code: { name: 'Code', key: 'code', sort: sortNumber },
    gateway_response: { name: 'Payment Transaction ID', key: 'gateway_response', sort: sortString },
    phone: { name: 'Phone', key: 'phone', sort: sortNumber },
    msisdn: { name: 'MSISDN', key: 'msisdn', sort: sortString },
    remote: { name: 'Remote', key: 'remote', sort: sortString },
    details: { name: 'Details', key: 'details', sort: sortString },
    action: { name: 'Action', key: 'action' },
  },

  units: {
    trx: { name: 'Trx', key: 'trx', sort: sortNumber },
    userId: { name: 'User ID', key: 'userId', sort: sortNumber },
    amount: { name: 'Amount', key: 'amount', sort: sortNumber },
    currency: { name: 'Currency', key: 'currency', sort: sortNumber },
    kind: { name: 'Kind', key: 'kind', sort: sortNumber },
    details: { name: 'Details', key: 'details', sort: sortNumber },
    created: { name: 'Created', key: 'created', sort: sortNumber },
    uptated: { name: 'Updated', key: 'uptated', sort: sortNumber },
  },
};

export const dropdownFilters = {
  PMBETTZ: [ 'ALL', 'IN-CASH', 'IN-EW-MPESA', 'IN-EW-HALOPESA', 'IN-BO', 'IN-KIOSK', 'IN-EW-AIRTEL', 'OUT-AIRTEL', 'OUT-CASH', 'OUT-EW-MPESA', 'OUT-EW-HALOPESA', 'OUT-BO', 'OUT-KIOSK', 'OUT-TIGO', 'OUT-EW-AIRTEL', 'CASHBACK-BONUS' ],
  VAMOSETH: [ 'ALL', 'IN-CASH', 'OUT-CASH', 'IN-CBE', 'IN-HELLOCASH', 'OUT-HELLOCASH', 'IN-HELLOCASH-LION', 'OUT-HELLOCASH - LION', 'IN-HELLOCASH - WEGAGEN', 'OUT - HELLOCASH - WEGAGENIN - BO', 'OUT - BO', 'IN - MBIRR', 'OUT - MBIRR' ],
  HABESHAETH: [ 'ALL', 'IN-CASH', 'OUT-CASH', 'IN-CBE', 'IN-HELLOCASH', 'OUT-HELLOCASH', 'IN-HELLOCASH-LION', 'OUT-HELLOCASH-LION', 'IN-HELLOCASH-WEGAGEN', 'OUT-HELLOCASH-WEGAGEN', 'IN-BO', 'OUT-BO', 'IN-MBIRR', 'OUT-MBIRR' ],
  PMBETKE: [ 'ALL', 'CASHBACK-BONUS', 'IN-CASH', 'IN-SAFARICOM', 'IN-SAFARICOM-ONLINE', 'IN-IPAY', 'IN-KE-AIRTEL', 'IN-BO', 'OUT-CASH', 'OUT-SAFARICOM', 'OUT-IPAY', 'OUT-KE-AIRTEL', 'OUT-BO' ],
  PMBETZM: [ 'ALL', 'CASHBACK-BONUS', 'IN-ZM-AIRTEL', 'OUT-ZM-AIRTEL', 'IN-PCK', 'IN-MTN', 'IN-AIRTEL', 'IN-BO', 'IN-CASH', 'OUT-PCK', 'OUT-MTN', 'OUT-AIRTEL', 'OUT-BO', 'OUT-CASH', 'IN-ZAMTEL', 'OUT-ZAMTEL' ],
  MLOTT: [ 'ALL', 'CASHBACK-BONUS', 'IN-CASH', 'IN - AGENT', 'IN-ORANGE', 'IN-CD-MPESA', 'IN-BO', 'OUT-CASH', 'OUT-AGENT', 'OUT-ORANGE', 'OUT-CD-MPESA', 'OUT-BO' ],
  TOTOBOOM: [ 'ALL', 'CASHBACK-BONUS', 'IN-AGENT', 'IN-BO', 'OUT-BANK', 'OUT-AGENT', 'OUT-BO' ],
  BETWIM: [],
  YULDUZBET: [ 'ALL', 'IN-FREELANCE', 'OUT-FREELANCE', 'IN-BO', 'OUT-BO' ],
  CASHBAHIS: [],
  PINEAPPLE: [],
  PMBETNG: [],
  SHOOT: [ 'ALL', 'CASHBACK-BONUS', 'IN-BO', 'IN-ANINDA-HAVALE', 'IN-ANINDA-PAPARA', 'IN-ANINDA-QR', 'IN-ANINDA-MEFETA', 'IN-ANINDA-BTC', 'IN-ANINDA-KK', 'IN-FAVEXPRO', 'OUT-BO', 'OUT-ANINDA-HAVALE', 'OUT-ANINDA-PAPARA', 'OUT-ANINDA-KKCEKIM', 'OUT-ANINDA-MEFETA', 'OUT-ANINDA-BTC', 'OUT-ANINDA-FAVEXPRO',
    'FOR SPINGAME' ],
  BONUSBET: [],
};

export const fakeTransactions = {
  docs: [{
    key: '1', paymentID: '1', status: '!', code: '123', phone: 'asdas', msisds: 'remote', detais: 'sasd',
  },
  {
    key: '1', paymentID: '1', status: '!', code: '123', phone: 'asdas', msisds: 'remote', detais: 'sasd',
  },
  {
    key: '1', paymentID: '1', status: '!', code: '123', phone: 'asdas', msisds: 'remote', detais: 'sasd',
  },
  {
    key: '1', paymentID: '1', status: '!', code: '123', phone: 'asdas', msisds: 'remote', detais: 'sasd',
  },
  ],
  count: 4,
};

export const filtersInitials = (type, currentProject) => {
  const obj = {
    balance: {
      from: { value: moment().format('YYYY-MM-DD'), label: new Date() },
      to: { value: moment().format('YYYY-MM-DD'), label: new Date() },
      timeFrom: { hour: '00', minutes: '00' },
      timeTo: { hour: '23', minutes: '59' },
      amountFrom: '',
      amountTo: '',
      status: [ ...mainFilters[type] ],
      type: [ ...dropdownFilters[currentProject] ],
    },
    units: {
      from: { value: moment().format('YYYY-MM-DD'), label: new Date() },
      to: { value: moment().format('YYYY-MM-DD'), label: new Date() },
      timeFrom: { hour: '00', minutes: '00' },
      timeTo: { hour: '23', minutes: '59' },
      amountFrom: '',
      amountTo: '',
      status: [ ...mainFilters[type] ],
    },
  };
  return obj[type];
};

export const getInitials = (type) => {

};

export const userIdOptions = [
  { value: 'User ID', label: 'User ID' },
  { value: 'Phone Number', label: 'Phone Number' },
];

export const kindOptions = [
  { value: 'IN-BO', label: 'IN-BO' },
  { value: 'IN-CBE', label: 'IN-CBE' },
];

export const addTransactionInitialState = {
  amount: '',
  amount_percent: '',
  phone_number: null,
  kindoptype: 'amountPercent',
  op_type: '',
  check_percent: false,
  plusOrMinus: true,
  userId: '',
};

export const deleteTransactionInitialState = {
  amount: '',
  phone_number: null,
  plusOrMinus: false,
  userId: '',
};
