import { AXIOS } from '../../api/axios';
import { applyTransactionsDataAction, fromToTransactionsDataAction, setTransactions } from '../ducks/transactionsDuck';
import { RESPONSE_STATUSES } from '../../constants/names';
import { addLoading, removeLoading } from '../ducks/loadingDuck';
import { LOADING_IDS } from '../../constants/ids';

const { SUCCESS } = RESPONSE_STATUSES;
const { PLAYERS } = LOADING_IDS;

export const applyTransactionsData = urlEnd => async (dispatch) => {
  try {
    const response = await AXIOS.get(urlEnd);
    if (response.status === SUCCESS) {
      console.log('response', response);
      dispatch(applyTransactionsDataAction(response.data));
      dispatch(removeLoading(LOADING_IDS.TRANSACTION));
    }
  } catch (error) {
    console.log(error);
  }
};

export const fromToTransactionsData = (from, to) => async (dispatch) => {
  try {
    const response = await AXIOS.get(`/transactions/getSumOfTransInOut?from=${from}&to=${to}`);
    if (response.status === SUCCESS) {
      console.log('response', response);
      dispatch(fromToTransactionsDataAction(response.data));
      dispatch(removeLoading(LOADING_IDS.STATISTICS));
    }
  } catch (error) {
    console.log(error);
  }
};

export function getTransactions(types, page, perPage, params) {
  const {
    type, status, from, to, timeFrom, timeTo, ...obj
  } = params;
  if (type && !type.includes('ALL')) obj.type = type;
  if (!status.includes('ALL')) obj.status = status;
  return async (dispatch) => {
    try {
      dispatch(addLoading(PLAYERS));
      const queryfrom = from.value ? `from=${from.value}T${timeFrom.hour}:${timeFrom.minutes}:00Z&` : '';
      const queryto = to.value ? `to=${to.value}T${timeTo.hour}:${timeTo.minutes}:00Z` : '';
      const response = await AXIOS.post(`/transactions/find/${types}?${queryfrom}${queryto}&page=${page}&limit=${perPage}`, obj);
      dispatch(setTransactions({ ...response.data, types }));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(removeLoading(PLAYERS));
    }
  };
}
