import Messages from './Components/General/Messages/Messages';
import Notes from './Components/General/Notes/Notes';
import PlayerInfo from './Components/General/PlayerInfo/PlayerInfo';
import SportsbookSettings from './Components/PlayerSettings/SportsbookSettings/SportsbookSettings';
import SocialPreferences from './Components/PlayerSettings/SocialPreferences/SocialPreferences';
import PlayerKPIs from './Components/Financial/PlayerKPIs/PlayerKPIs';
import PlayerBalances from './Components/Financial/PlayerBalances/PlayerBalances';
import Transaction from './Components/Financial/Transaction/Transaction';
import PlayerPermission from './Components/PlayerSettings/PlayerPermission/PlayerPermission';
import Log from './Components/Financial/Log/Log';
import Bets from './Components/Financial/Bets/Bets';

export const playerInfoMenu = [
  {
    name: 'General',
    childs: [ 'Player info', 'Messages' ],
  },
  {
    name: 'Financial',
    childs: [ 'Transaction', 'Balance Log', 'Bets' ],
  },
  // {
  //   name: 'Reports',
  //   childs: [ '1', '2', '3' ],
  // },
  {
    name: 'Settings',
    // childs: [ 'Player permission', 'Sportsbook settings', 'Social preferences',
    //  'Payment types', 'Limit change history', 'Change limit request', 'Casino limits' ],
    childs: [ 'Player permission' ],
  },
];

export const playerInfoComponents = {
  'Player info': <PlayerInfo />,
  'Player permission': <PlayerPermission />,
  'Balance Log': <Log />,
  // Notes: <Notes />,
  Messages: <Messages />,
  'Sportsbook settings': <SportsbookSettings />,
  // 'Social preferences': <SocialPreferences />,
  // 'Players KPIs': <PlayerKPIs />,
  'Player Balances': <PlayerBalances />,
  Transaction: <Transaction />,
  Bets: <Bets />,

};
