export const CURRENT_PLAYER_KEYS = [
  { key: 'username', name: 'Username' },
  { key: 'f_name', name: 'First name' },
  { key: 'l_name', name: 'Last name' },
  { key: 'phone', name: 'Phone' },
  { key: 'additionalPhoneNumber', name: 'Additional phone number' },
  { key: 'e_mail', name: 'Email' },
  { key: 'birthday', name: 'Birthday' },
  { key: 'gender', name: 'Gender' },
  { key: 'lastLoginDate', name: 'Last login date' },
  { key: 'verification_id', name: 'Verification ID' },
  { key: 'balance', name: 'Balance' },
  { key: 'registrationType', name: 'Registration type' },
  { key: 'units', name: 'Bonus(Units)' },
  { key: 'cardId', name: 'ID card(national ID number)' },
  { key: 'country', name: 'Country' },
  { key: 'city', name: 'City' },
  { key: 'address', name: 'Address' },
  { key: 'currency', name: 'Currency' },
];

export const RATE_STAR_COLORS = {
  1: '#000000',
  2: '#913CCD ',
  3: '#F15F74',
  4: '#F73BCA ',
  5: '#F7D842',
  6: '#2DA8C2',
  7: '#98CB4A',
  8: '#839098',
  9: '#5481E6',
  10: '#940083',
};

export const KEYS = {
  firstPart: {
    firstCol: [
      { key: 'username', name: 'Username' },
      { key: 'f_name', name: 'First name' },
      { key: 'l_name', name: 'Last name' },
    ],
    secondCol: [
      { key: 'birthday', name: 'Birthday' },
      { key: 'cardId', name: 'ID card(national ID number)' },
      { key: 'e_mail', name: 'Email' },
    ],
  },
  secondPart: {
    firstCol: [
      { key: 'gender', name: 'Gender' },
      { key: 'verification_id', name: 'Verification ID' },
      { key: 'address', name: 'Address' },
    ],
    secondCol: [
      { key: 'country', name: 'Country' },
      { key: 'city', name: 'City' },
      { key: 'currency', name: 'Currency' },
    ],
  },
};

export const FIRST_PART = {
  firstCol: [
    { key: 'f_name', name: 'First name' },
    { key: 'l_name', name: 'Last name' },
    { key: 'phone', name: 'Phone' },
  ],
  secondCol: [
    { key: 'birthday', name: 'Birthday' },
    { key: 'cardId', name: 'ID card(national ID number)' },
    { key: 'e_mail', name: 'Email' },
  ],
};

export const SECOND_PART = {
  firstCol: [
    { key: 'gender', name: 'Gender' },
    { key: 'verification_id', name: 'Verification ID' },
    { key: 'address', name: 'Address' },
  ],
  secondCol: [
    { key: 'country', name: 'Country' },
    { key: 'city', name: 'City' },
    { key: 'currency', name: 'Currency' },
  ],
};

export const FIRST_ROW = {
  firstCol: [
    [{ key: 'id', name: 'User ID' }],
    [
      { key: 'created', name: 'Registration date' },
      { key: 'username', name: 'Username' },
    ],
  ],
  secondCol: [
    [
      { key: 'winningAmount', name: 'Winning amount' },
      { key: 'bet_limit', name: 'Bet limit' },
    ],
    [
      { key: 'balance', name: 'Balance' },
      { key: 'units', name: 'Unit' },
    ],
  ],
};

export const SECOND_ROW = {
  firstCol: [
    [
      { key: 'f_name', name: 'First name' },
      { key: 'l_name', name: 'Last name' },
      { key: 'phone', name: 'Phone' },
    ],
    [
      { key: 'birthday', name: 'Birthday' },
      { key: 'cardId', name: 'ID card(national ID number)' },
      { key: 'e_mail', name: 'Email' },
    ],
    [
      { key: 'additionalPhoneNumber', name: 'Additional phone number' },
      { key: 'registrationType', name: 'Registration type' },
    ],
  ],
  secondCol: [
    [
      { key: 'gender', name: 'Gender' },
      { key: 'verification_id', name: 'Verification ID' },
      { key: 'address', name: 'Address' },
    ],
    [
      { key: 'country', name: 'Country' },
      { key: 'city', name: 'City' },
      { key: 'currency', name: 'Currency' },
    ],
    [
      { key: 'live_delay', name: 'Live delay' },
    ],
  ],
};
