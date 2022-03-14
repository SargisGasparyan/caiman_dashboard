import { errorInfo } from './ducks/errorDuck';
import { configs } from './ducks/configsDuck';
import { userInfo } from './ducks/userDuck';
import { activePopup } from './ducks/popupDuck';
import { activeLoadings } from './ducks/loadingDuck';
import { acl } from './ducks/aclDuck';
import { transactionsData } from './ducks/transactionsDuck';
import { playersInfo } from './ducks/playersDuck';
import { playersReportData } from './ducks/playersReportDuck';
import { currentPlayer } from './ducks/currentPlayerDuck';
import { logsReducer } from './ducks/logDuck';
import { player } from './ducks/playerDuck';
import { messagesReducer } from './ducks/messagesDuck';
import { stakesReducer } from './ducks/stakesDuck';
import { tabReducers } from './ducks/controlTab';

export const reducers = {
  errorInfo,
  configs,
  userInfo,
  activePopup,
  activeLoadings,
  acl,
  playersInfo,
  transactionsData,
  playersReportData,
  currentPlayer,
  logsReducer,
  player,
  messagesReducer,
  stakesReducer,
  tabReducers,
};
