import { USER_ROLES } from '../../../../../constants/names';
import Bets from '../Components/Financial/Bets/Bets';
import Log from '../Components/Financial/Log/Log';
import Transaction from '../Components/Financial/Transaction/Transaction';
import Messages from '../Components/General/Messages/Messages';
import PlayerInfo from '../Components/General/PlayerInfo/PlayerInfo';
import PlayerPermission from '../Components/PlayerSettings/PlayerPermission/PlayerPermission';

const { SUPER_ADMIN, ADMIN } = USER_ROLES;
const allRoles = Object.values(USER_ROLES);

export const PLAYER_ROUTES_CONFIGS = [
  {
    multi: true,
    name: 'General',
    path: '/general',
    roles: [ allRoles ],
    childs: [
      {
        name: 'Players Info',
        path: '/playerInfo',
        Component: PlayerInfo,
        roles: [ allRoles ],
      },
      {
        name: 'Messages',
        path: '/messages',
        Component: Messages,
        roles: [ allRoles ],
      },
    ],
  },

  {
    multi: true,
    name: 'Financial',
    path: '/financial',
    roles: [ allRoles ],
    childs: [
      {
        name: 'Balance Log',
        path: '/balanceLog',
        Component: Log,
        roles: [ allRoles ],
      },
      {
        name: 'Transaction',
        path: '/transaction',
        Component: Transaction,
        roles: [ allRoles ],
      },
    ],
  },

  {
    multi: true,
    name: 'Bets',
    path: '/bets',
    roles: [ allRoles ],
    childs: [
      {
        name: 'Bet History',
        path: '/betHistory',
        Component: Bets,
        roles: [ allRoles ],
      },
    ],
  },

  {
    multi: true,
    name: 'Settings',
    path: '/settings',
    roles: [ allRoles ],
    childs: [
      {
        name: 'Player permission',
        path: '/playerPermission',
        Component: PlayerPermission,
        roles: [ allRoles ],
      },
    ],
  },
];
