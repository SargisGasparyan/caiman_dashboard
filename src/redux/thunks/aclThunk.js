import { AXIOS } from '../../api/axios';
import { RESPONSE_STATUSES } from '../../constants/names';
import { setAclUsers, toggleCreateModal } from '../ducks/aclDuck';

const { SUCCESS } = RESPONSE_STATUSES;

export function getAclUsers({
  limit = 30, page = 1, active = false, searchName, setIsLoading,
}) {
  return async (dispatch) => {
    const url = `/users/get?limit=${limit}&page=${page}&active=${active}${searchName ? `&name=${searchName}` : ''}`;
    try {
      setIsLoading(true);
      const response = await AXIOS.get(url);
      if (response.status === SUCCESS) {
        console.log('response', response);
        dispatch(setAclUsers(response.data));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
}

export function createUserThunk(data, setRequestMessage) {
  return async (dispatch) => {
    try {
      const response = await AXIOS.post('/users/createUser', data);
      if (response.status === 'SUCCESS') {
        console.log('create new user', response.data);
        setRequestMessage({ error: false, message: 'success' });
        dispatch(setAclUsers(response.data));
        setTimeout(() => {
          dispatch(toggleCreateModal(false));
        }, 1000);
      }
    } catch (error) {
      setRequestMessage({ error: true, message: 'user not created' });
    }
  };
}
