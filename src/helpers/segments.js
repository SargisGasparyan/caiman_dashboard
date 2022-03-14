export const segmentsFilters = {
  activity: {
    Registration: {
      includesList: true,
      properties: {
        'Registration Date': 'Registration Date',
        'Registration Origin': {
          options: [],
        },
      },
    },
    Login: {
      includesList: true,
      properties: {
        'Login Date': 'Login Date',
        'Last login date': 'Last login date',
        'Daily login': 'Daily login',
        'Average login count': 'Average login count',
      },
    },
    Deposit: {
      includesList: true,
      properties: {
        'Deposit amount': 'Deposit amount',
        'Deposit date': 'Deposit date',
        'Deposit count': 'Deposit count',
        'Deposit sum amount': 'Deposit sum amount',
        'Average deposit amount': 'Average deposit amount',
        'Average deposit interval': 'Average deposit interval',
        'Last deposit date': 'Last deposit date',
      },
    },
    Withdraw: {
      includesList: true,
      properties: {
        'Withdraw amount': 'Withdraw amount',
        'Withdraw date': 'Withdraw date',
        'Withdraw count': 'Withdraw count',
        'Average withdraw amount': 'Average withdraw amount',
        'Last withdrawal date': 'Last withdrawal date',
      },
    },
    'Withdraw request': {
      includesList: true,
      properties: {
        'Request date': 'Request date',
        'Request type': {
          options: [
            { label: 'Reject', value: 'Reject' },
            { label: 'Cancel', value: 'Cancel' },
          ],
        },
      },
    },
    Bet: {
      includesList: true,
      properties: {
        'Bet Amount': 'Bet Amount',
        'Bet date': 'Bet date',
        'Bet activity': {
          options: [
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
          ],
        },
        'Daily bettors': 'Daily bettors',
        'Last bet day': 'Last bet day',
      },
    },
  },
  payment: {
    Currency: {
      options: [],
    },
    'Payment System': {
      options: [],
    },
    'Payment Count': 'Payment Count',
  },
  profile: {
    Gender: {
      options: [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
      ],
    },
    'Phone operator': {
      options: [],
    },
    'Birth day': 'Birth day',
    Locked: {
      options: [
        { label: 'Yes', value: 'Yes' },
        { label: 'No', value: 'No' },
      ],
    },
  },
  sportsbook: {
    'Sportsbook Bet Date': 'Sportsbook Bet Date',
    'Sportsbook Bet Count': 'Sportsbook Bet Count',
    Competitions: {
      options: [],
    },
    Sport: {
      options: [],
    },
    'Live Bet': {
      options: [],
    },
    'Bet Amount': 'Bet Amount',
    'Bet Selection Count': 'Bet Selection Count',
    'Total Odds': 'Total Odds',
  },
  casino: {
    Games: {
      options: [],
    },
    Products: {
      options: [],
    },
    Providers: {
      options: [],
    },
    'Casino Bet Date': 'Casino Bet Date',
    'Casino Bet Amount': 'Casino Bet Amount',
  },
  games: {
    Keno: 'Keno',
    WOF: 'WOF',
    'Turbo Keno': 'Turbo Keno',
    'Turbo WOF': 'Turbo WOF',
    'Crazy Rocket': 'Crazy Rocket',
  },
};

export const segmentTypesVariables = {
  DYNAMIC: 'Dynamic',
  HYBRID: 'Hybrid',
  STATIC: 'Static',
};
