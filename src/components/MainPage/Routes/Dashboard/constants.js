import FirstWidgetExample from './Monitoring/Monitoring';
import ThirdWidgetExample from './ThirdWidgetExample/ThirdWidgetExample';
import ForthWidgetExample from './ForthWidgetExample/ForthWidgetExample';
import { IMAGES } from '../../../../assets/images';

// export const fakeData = [
//   {
//     id: 0,
//     title: 'First Widget',
//     order: 1,
//     component: <FirstWidgetExample />,
//   },
//   {
//     id: 1,
//     title: 'Second Widget',
//     order: 2,
//     component: <SecondWidgetExample />,
//   },
//   {
//     id: 2,
//     title: 'Third Widget',
//     order: 3,
//     component: <SecondWidgetExample />,
//   },
//   {
//     id: 3,
//     title: 'Forth Widget',
//     order: 4,
//     component: <SecondWidgetExample />,
//   },
// ];

export const monitoring = [
  {
    title: 'Users',
    icon: IMAGES.identify.src,
    total: 245.587,
    alt: IMAGES.identify.alt,
  },
  {
    title: 'Active Session',
    icon: IMAGES.activeSession.src,
    total: 245.587,
    alt: IMAGES.activeSession.alt,
  },
  {
    title: 'Pending Bet',
    icon: IMAGES.alarm.src,
    total: 245.587,
    alt: IMAGES.alarm.alt,
  },
  {
    title: 'Balance',
    icon: IMAGES.balance.src,
    total: 245.587,
    alt: IMAGES.balance.alt,
  },
];

export const overviewFirstLine = [
  {
    src: IMAGES.registrations.src,
    alt: IMAGES.registrations.alt,
    title: 'Registrations',
    total: 125.658,
    withDeposit: 123.548,
  },
  {
    src: IMAGES.done.src,
    alt: IMAGES.done.alt,
    title: 'Logged In',
    total: 125.658,
    unique: 123.548,
  },
  {
    src: IMAGES.deposit.src,
    alt: IMAGES.deposit.alt,
    title: 'Deposit',
    total: 125.658,
  },
  {
    src: IMAGES.exit.src,
    alt: IMAGES.exit.alt,
    title: 'Withdraw',
    total: 125.658,
  },
];
