import { ICONS } from '../assets/images/sidebarIcons';
import AclUsers from '../components/MainPage/Routes/Acl/AclUsers/AclUsers';
import Dashboard from '../components/MainPage/Routes/Dashboard/Dashboard';
import Players from '../components/MainPage/Routes/Players/Players';
import ReportsPlayers from '../components/MainPage/Routes/Reports/ReportsPlayers/ReportsPlayers';
import { USER_ROLES } from '../constants/names';
import Stakes from '../components/MainPage/Routes/Stakes/Stakes';
import Segments from '../components/MainPage/Routes/Segments/Segments';
import Transactions from '../components/MainPage/Routes/Transactions/Transactions';
import StatisticsTransaction from '../components/MainPage/Routes/Statistics/Transaction/StatisticsTransaction';
import Player from '../components/MainPage/Routes/Player/Player';
import PromotionPage from '../components/MainPage/Routes/CMS/Promotions/PromotionsPage';
import Favorite from '../components/MainPage/Routes/Favorite/Favorite';
import AclResources from '../components/MainPage/Routes/Acl/AclResources/AclResources';
import Cms from '../components/MainPage/Routes/CMS/cms';
import Promotions from '../components/MainPage/Routes/CMS/Promotions/Promotions';

const { SUPER_ADMIN, ADMIN } = USER_ROLES;
const allRoles = Object.values(USER_ROLES);

export const MAIN_PAGE_ROUTES = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    Component: Dashboard,
    roles: allRoles,
    icon: ICONS.dashboard,
  },
  {
    name: 'Players',
    path: '/players',
    Component: Players,
    roles: [ SUPER_ADMIN, ADMIN ],
    icon: ICONS.players,
  },
  {
    hidden: true,
    path: '/players/:id',
    Component: Player,
    roles: [ SUPER_ADMIN, ADMIN ],
  },

  {
    name: 'Stakes',
    path: '/stakes',
    Component: Stakes,
    roles: [ SUPER_ADMIN, ADMIN ],
    icon: ICONS.stakes,
  },

  {
    name: 'Favorite',
    path: '/favorite',
    Component: Favorite,
    roles: [ SUPER_ADMIN, ADMIN ],
    icon: ICONS.favorite,
  },
  {
    multi: true,
    name: 'CMS',
    path: '/',
    roles: [ SUPER_ADMIN, ADMIN ],
    icon: ICONS.reports,
    childs: [
      {
        name: 'Home',
        path: '/reports_players',
        Component: ReportsPlayers,
        roles: [ SUPER_ADMIN, ADMIN ],
      },
      {
        name: 'Promotions',
        path: 'promotion',
        Component: PromotionPage,
        roles: [ SUPER_ADMIN, ADMIN ],
      },
      {
        name: 'Casino',
        path: '/casino',
        Component: Players,
        roles: [ SUPER_ADMIN, ADMIN ],
      },
      {
        name: 'Pop-Ups',
        path: '/pop_ups',
        Component: Players,
        roles: [ SUPER_ADMIN, ADMIN ],
      },
      {
        name: 'Library',
        path: '/library',
        Component: Players,
        roles: [ SUPER_ADMIN, ADMIN ],
      },
      {
        name: 'Footer',
        path: '/footer',
        Component: Players,
        roles: [ SUPER_ADMIN, ADMIN ],
      },
    ],
  },

  {

    name: 'Transaction',
    path: '/transaction',
    Component: Transactions,
    roles: [ SUPER_ADMIN, ADMIN ],
    icon: ICONS.transaction,
  },

  {
    name: 'Segments',
    path: '/segments',
    Component: Segments,
    roles: [ SUPER_ADMIN, ADMIN ],
    icon: ICONS.segments,
  },
  // {
  //   multi: true,
  //   name: 'Reports',
  //   path: '/reports',
  //   roles: [ SUPER_ADMIN, ADMIN ],
  //   icon: ICONS.reports,
  //   childs: [
  //     {
  //       name: 'Players Report',
  //       path: '/players',
  //       Component: ReportsPlayers,
  //       roles: [ SUPER_ADMIN, ADMIN ],
  //     },
  //     {
  //       name: 'Games Report',
  //       path: '/games',
  //       Component: Players,
  //       roles: [ SUPER_ADMIN, ADMIN ],
  //     },
  //     {
  //       name: 'Stakes Report',
  //       path: '/stakes',
  //       Component: Players,
  //       roles: [ SUPER_ADMIN, ADMIN ],
  //     },
  //   ],
  // },
  {
    multi: true,
    name: 'Statistics',
    path: '/statistics',
    roles: [ SUPER_ADMIN, ADMIN ],
    icon: ICONS.statistics,
    childs: [
      {
        name: 'Players',
        path: '/players',
        Component: Players,
        roles: [ ADMIN ],
      },
      {
        name: 'Channels',
        path: '/channels',
        Component: Players,
        roles: [ SUPER_ADMIN, ADMIN ],
      },
      {
        name: 'Bets',
        path: '/bets',
        Component: Players,
        roles: [ SUPER_ADMIN, ADMIN ],
      },
      {
        name: 'Transaction',
        path: '/transaction',
        Component: StatisticsTransaction,
        roles: [ SUPER_ADMIN, ADMIN ],
      },
    ],
  },
  // {
  //   multi: true,
  //   name: 'ACL',
  //   path: '/acl',
  //   roles: [ SUPER_ADMIN, ADMIN ],
  //   icon: ICONS.acl,
  //   childs: [
  //     {
  //       name: 'Users',
  //       path: '/users',
  //       Component: AclUsers,
  //       roles: [ SUPER_ADMIN, ADMIN ],
  //     },
  //     {
  //       name: 'Groups',
  //       path: '/groups',
  //       Component: Players,
  //       roles: [ SUPER_ADMIN, ADMIN ],
  //     },
  //   ],
  // },
  {
    name: 'ACL',
    path: '/AclUsers',
    Component: AclUsers,
    roles: [ SUPER_ADMIN, ADMIN ],
    icon: ICONS.acl,
  },
  // {
  //   multi: true,
  //   name: 'CMS',
  //   path: '/cms',
  //   Component: Cms,
  //   roles: [ SUPER_ADMIN, ADMIN ],
  //   icon: ICONS.cms,
  //   childs: [
  //     {
  //       name: 'Home',
  //       path: '/home',
  //       Component: Cms,
  //       roles: [ ADMIN ],
  //     },
  //     {
  //       name: 'Promotions',
  //       path: '/promotions',
  //       Component: Promotions,
  //       roles: [ SUPER_ADMIN, ADMIN ],
  //     },
  //     {
  //       name: 'Casino',
  //       path: '/casino',
  //       Component: Cms,
  //       roles: [ SUPER_ADMIN, ADMIN ],
  //     },
  //     {
  //       name: 'Pop-ups',
  //       path: '/popUps',
  //       Component: Cms,
  //       roles: [ SUPER_ADMIN, ADMIN ],
  //     },
  //     {
  //       name: 'Library',
  //       path: '/library',
  //       Component: Cms,
  //       roles: [ SUPER_ADMIN, ADMIN ],
  //     },
  //     {
  //       name: 'Footer',
  //       path: '/footer',
  //       Component: Cms,
  //       roles: [ SUPER_ADMIN, ADMIN ],
  //     },
  //   ],
  // },
  {
    name: 'ACL Resources',
    path: '/aclManagment',
    Component: AclResources,
    roles: [ SUPER_ADMIN, ADMIN ],
    icon: ICONS.acl,
  },
];

export const getValidRoutes = (role) => {
  if (!role) return [];
  const filteredChildsRoutes = MAIN_PAGE_ROUTES.map((route) => {
    if (!route.multi) return route;
    const copyRoute = { ...route };
    copyRoute.childs = copyRoute.childs.filter(child => child.roles.includes(role));
    return copyRoute;
  });
  return filteredChildsRoutes.filter(route => route.roles.includes(role));
};
