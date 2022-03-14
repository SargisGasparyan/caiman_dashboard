import { AXIOS } from '../../api/axios';
import { RESPONSE_STATUSES } from '../../constants/names';
import { removeLoading } from '../ducks/loadingDuck';
import { LOADING_IDS } from '../../constants/ids';
import { playersReportAction } from '../ducks/playersReportDuck';

const { SUCCESS } = RESPONSE_STATUSES;

export const getPlayersReport = urlEnd => async (dispatch) => {
  try {
    const response = await AXIOS.get(urlEnd);
    if (response.status === SUCCESS) {
      dispatch(playersReportAction(response.data));
      dispatch(removeLoading(LOADING_IDS.CONTENT));
    }
  } catch (error) {
    console.log(error);
  }
};
