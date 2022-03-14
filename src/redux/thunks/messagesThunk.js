import { AXIOS } from '../../api/axios/index';
import { setMessages } from '../ducks/messagesDuck';
import { LOADING_IDS } from '../../constants/ids';
import { addLoading, removeLoading } from '../ducks/loadingDuck';

const { MESSAGES } = LOADING_IDS;

export function getMessages(id, page, perpage, from, to, status) {
  return async (dispatch) => {
    try {
      dispatch(addLoading(MESSAGES));
      const url = `/players/getMessages/${id}?page=${page}&limit=${perpage}${from ? `&from=${from}` : ''}${to ? `&to=${to}` : ''}${status ? `&status=${status}` : ''}`;
      const response = await AXIOS.get(url);
      dispatch(setMessages(response.data));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(removeLoading(MESSAGES));
    }
  };
}
