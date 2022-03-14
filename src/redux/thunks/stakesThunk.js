import { AXIOS } from '../../api/axios/index';
import { getStakes } from '../ducks/stakesDuck';
import { LOADING_IDS } from '../../constants/ids';
import { addLoading, removeLoading } from '../ducks/loadingDuck';

const { STAKES } = LOADING_IDS;

export function getStakesData(params, page = 1, perpage = 30) {
  return async (dispatch) => {
    try {
      dispatch(addLoading(STAKES));
      const response = await AXIOS.post(`/stakes/find?page=${page}&limit=${perpage}`, { ...params });
      dispatch(getStakes(response.data));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(removeLoading(STAKES));
    }
  };
}
