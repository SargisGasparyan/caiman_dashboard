import { sortNumber, sortString } from '../../../../../helpers/utils';

export const firstLineFields = [
  { type: 'input', name: 'id', label: 'Player ID' },
  { type: 'input', name: 'username', label: 'Username' },
  { type: 'input', name: 'e_mail', label: 'Email' },
  {
    type: 'input', name: 'phone', label: 'General phone', placeholder: '+ 000 000 000 000',
  },
  {
    type: 'input', name: 'additionalPhone', label: 'Additional phone', placeholder: '+ 000 000 000 000',
  },
  {
    type: 'select',
    name: 'gender',
    label: 'Gender',
    options: [
      { value: 'MALE', label: 'Male' },
      { value: 'FEMALE', label: 'Female' },
      { value: 'NA', label: 'NA' },
    ],
  },
];

export const secondLineFields = [
  { type: 'input', name: 'f_name', label: 'First name' },
  { type: 'input', name: 'l_name', label: 'Last name' },
  {
    type: 'select',
    name: 'kind',
    label: 'Registration type',
    options: [
      { value: 'INTERNET', label: 'Internet' },
      { value: 'KIOSK', label: 'Kiosk' },
      { value: 'LINKED', label: 'Linked' },
      { value: 'POS-INTERNET', label: 'Pos-internet' },
      { value: 'GAME-BOT', label: 'Game-bot' },
    ],
  },
  {
    type: 'select',
    name: 'deleted',
    label: 'Is deleted',
    options: [
      { value: '1', label: 'Deleted' },
      { value: '0', label: 'Not deleted' },
    ],
  },
  {
    type: 'select',
    name: 'active',
    label: 'Is active',
    options: [
      { value: '1', label: 'Active' },
      { value: '0', label: 'Not active' },
    ],
  },
  {
    type: 'select',
    name: 'monitored',
    label: 'Is monitored',
    options: [
      { value: '1', label: 'Monitored' },
      { value: '0', label: 'Base' },
    ],
  },
];

export const addPlayerInputs = [
  {
    type: 'input', name: 'username', label: 'Username',
  },
  {
    type: 'input', name: 'password', label: 'Password',
  },
  { type: 'input', name: 'firstName', label: 'First name' },
  { type: 'input', name: 'lastName', label: 'Last name' },
  {
    type: 'input', name: 'phoneNumber', label: 'Phone', placeholder: '+ 000 000 000 000 ',
  },
];

export const initialState = {
  id: '',
  username: '',
  e_mail: '',
  phone: '',
  additionalPhone: '',
  gender: '',
  f_name: '',
  l_name: '',
  kind: '',
  deleted: '',
  active: '',
  monitored: '',
  minBalance: '',
  maxBalance: '',
  minBonus: '',
  maxBonus: '',
  birthdayFrom: '',
  birthdayTo: '',
  to: '',
  from: '',
};

export const playerAddInitialState = {
  username: null,
  password: null,
  firstName: null,
  lastName: null,
  phoneNumber: null,
  currency: 'TZS',
};

export const addPlayerFirstLine = [
  {
    username: 'Username',
    password: 'Password',
    firstName: 'First name',
  },
  {
    lastName: 'Last name',
    phoneNumber: 'Phone number',
  },
];

export const headers = {
  id: { name: 'Player ID', key: 'id', sort: sortNumber },
  username: { name: 'Username', key: 'username', sort: sortString },
  created: {
    name: 'Registration date', key: 'created', type: 'date', sort: sortString,
  },
  f_name: { name: 'First name', key: 'f_name', sort: sortString },
  l_name: { name: 'Last name', key: 'l_name', sort: sortString },
  gender: { name: 'Gender', key: 'gender', sort: sortString },
  e_mail: { name: 'Email', key: 'e_mail', sort: sortString },
  birthday: { name: 'Birthday', key: 'birthday', sort: sortString },
  phone: { name: 'Phone', key: 'phone', sortString },
  balance: { name: 'Balance', key: 'balance', sort: sortNumber },
};

export const transactionHeader = [
  { name: 'ID', key: 'id' },
  { name: 'Type', key: 'kind' },
  { name: 'Amount', key: 'amount' },
  { name: 'Status', key: 'status' },
  { name: 'Payment transaction ID', key: 'gateway_response' },
  { name: 'Created', key: 'created_at' },
  { name: 'Updated', key: 'updated_at' },
];

export const selectStatusOptions = [
  { value: 'all', label: 'All' },
  { value: 'pending', label: 'Pending' },
  { value: 'approved', label: 'Approved' },
  { value: 'denied', label: 'Denied' },
  { value: 'canceled', label: 'Canceled' },
  { value: 'success', label: 'Success' },
  { value: 'waitgw', label: 'Waitgw' },
];

export const selectTypeOptions = [
  { value: 'All', label: 'All' },
  { value: 'IN-Cash', label: 'IN-Cash' },
  { value: 'IN-EW-Mpesa', label: 'IN-EW-Mpesa' },
  { value: 'IN-EW-Halopesa', label: 'IN-EW-Halopesa' },
  { value: 'IN-BO', label: 'IN-BO' },
  { value: 'IN-KIOSK', label: 'IN-KIOSK' },
  { value: 'IN-EW-Tigo', label: 'IN-EW-Tigo' },
  { value: 'IN-EW-Airtel', label: 'IN-EW-Airtel' },
  { value: 'Out-Cash', label: 'Out-Cash' },
  { value: 'Out-EW-Halopesa', label: 'Out-EW-Halopesa' },
  { value: 'Out-BO', label: 'Out-BO' },
  { value: 'Out-Kiosk', label: 'Out-Kiosk' },
  { value: 'Out-Tigo', label: 'Out-Tigo' },
  { value: 'Out-EW-Airtel', label: 'Out-EW-Airtel' },
  { value: 'Cashback-Bonus', label: 'Cashback-Bonus' },
];
