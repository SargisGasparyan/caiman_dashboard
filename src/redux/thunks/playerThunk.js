import { setPlayerBets } from '../ducks/playerDuck';
import { addLoading, removeLoading } from '../ducks/loadingDuck';
import { LOADING_IDS } from '../../constants/ids';
import { AXIOS } from '../../api/axios';

const { PLAYERS } = LOADING_IDS;

export function getPlayerBets(id, page, perpage, from, to, status) {
  return async (dispatch) => {
    try {
      dispatch(addLoading(PLAYERS));
      const response = await AXIOS.get(`/players/getBets/${id}?limit=${perpage}&page=${page}${from ? `&from=${from}` : ''}${to ? `&to=${to}` : ''}${status ? `&status=${status}` : ''}`);
      dispatch(setPlayerBets(response.data));
    } catch (error) {
      console.log(error, id);
    } finally {
      dispatch(removeLoading(PLAYERS));
    }
  };
}
