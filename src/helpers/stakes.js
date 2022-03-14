export const stakesSelectors = {
  status: {
    options: [
      { label: 'Unprocessed', value: 'Unprocessed' },
      { label: 'Won(all)', value: 'Won(all)' },
      { label: 'Won(not paid)', value: 'Won(not paid)' },
      { label: 'Won(paid)', value: 'Won(paid)' },
      { label: 'Processed', value: 'Processed' },
      { label: 'Loss', value: 'Loss' },
    ],
    placeholder: 'Status',
  },
  interval: {
    options: [
      { label: 'Admission', value: 'Admission' },
      { label: 'Payout', value: 'Payout' },
      { label: 'Calculation', value: 'Calculation' },
    ],
    placeholder: 'Interval',
  },
  sport: {
    options: [
      { label: 'Live', value: 'Live' },
      { label: 'Prematch', value: 'Prematch' },
    ],
    placeholder: 'Sport',
  },
  source: {
    options: [
      { label: 'Internet', value: 'Internet' },
      { label: 'Shop', value: 'Shop' },
    ],
    placeholder: 'Source',
  },
  ticketKind: {
    options: [
      { label: 'Express', value: 'Express' },
      { label: 'Ordinar', value: 'Ordinar' },
    ],
    placeholder: 'Ticket Kind',
  },
  payoutOption: {
    options: [
      { label: 'Super Cash Out', value: 'Super Cash Out' },
      { label: 'Cancel Bet', value: 'Cancel Bet' },
      { label: 'Free Bet', value: 'Free Bet' },
    ],
    placeholder: 'Payout Option',
  },
};
