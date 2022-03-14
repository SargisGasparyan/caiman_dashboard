import { setPlayers } from '../ducks/playersDuck';
import { addLoading, removeLoading } from '../ducks/loadingDuck';
import { LOADING_IDS } from '../../constants/ids';
import { AXIOS } from '../../api/axios/index';

const { PLAYERS } = LOADING_IDS;

export function getPlayers(params, page, perpage) {
  return async (dispatch) => {
    try {
      dispatch(addLoading(PLAYERS));
      const response = await AXIOS.post(`/players/find/?page=${page}&limit=${perpage}`, { ...params });
      dispatch(setPlayers(response.data));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(removeLoading(PLAYERS));
    }
  };
}
