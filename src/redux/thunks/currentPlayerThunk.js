import { AXIOS } from '../../api/axios';
import { LOADING_IDS } from '../../constants/ids';
import {
  addPlayerNote, setCurrentPlayer, setCurrentPlayerTransactions, setPlayerSeverity,
} from '../ducks/currentPlayerDuck';
import { addLoading, removeLoading } from '../ducks/loadingDuck';

export const getCurrentPlayerTransactionData = (id, type = 'All', status = 'All', page = 1, perpage = 30) => async (dispatch) => {
  try {
    dispatch(addLoading(LOADING_IDS.CONTENT));
    const response = await AXIOS.get(`/transactions/getPlayerTransactions/${id}?type=${type}&status=${status}&limit=${perpage}&page=${page}`);
    dispatch(setCurrentPlayerTransactions(response.data));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(removeLoading(LOADING_IDS.CONTENT));
  }
};

export const addPlayerNoteThunk = ({ id, note, author }) => async (dispatch) => {
  try {
    const response = await AXIOS.post('/players/addPlayerNote', { id, note });
    dispatch(addPlayerNote({ note, author, date: Date.now() }));
  } catch (error) {
    console.log(error);
  }
};

export const addPlayerSeverityThunk = (id, severity) => async (dispatch) => {
  try {
    const response = await AXIOS.post(`/players/update/${id}`, { severity });
    dispatch(setPlayerSeverity(response.data.severity));
  } catch (error) {
    console.log(error);
  }
};

export const getPlayersReport = id => async (dispatch) => {
  try {
    dispatch(addLoading(LOADING_IDS.CONTENT));
    const response = await AXIOS.get(`players/getPlayer/${id}`);
    dispatch(setCurrentPlayer(response.data));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(removeLoading(LOADING_IDS.CONTENT));
  }
};
