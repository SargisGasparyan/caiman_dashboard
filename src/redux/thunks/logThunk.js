import { setLogs } from '../ducks/logDuck';
import { AXIOS } from '../../api/axios/index';
import { LOADING_IDS } from '../../constants/ids';
import { addLoading, removeLoading } from '../ducks/loadingDuck';

const { LOGS } = LOADING_IDS;

export function getLogs(id, page, perpage, from, to, type) {
  return async (dispatch) => {
    try {
      dispatch(addLoading(LOGS));
      const url = `/players/getLogs/${id}?page=${page}&limit=${perpage}${from ? `&from=${from}` : ''}${to ? `&to=${to}` : ''}&type=${type}`;
      const response = await AXIOS.get(url);
      dispatch(setLogs(response.data));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(removeLoading(LOGS));
    }
  };
}
