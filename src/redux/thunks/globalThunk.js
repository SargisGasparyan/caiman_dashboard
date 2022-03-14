import { AXIOS } from '../../api/axios';
import { LOADING_IDS } from '../../constants/ids';
import { RESPONSE_STATUSES } from '../../constants/names';
import { fakePermissions } from '../../fakeData';
import { setErrorMessage } from '../ducks/errorDuck';
import { addLoading, removeLoading } from '../ducks/loadingDuck';
import { resetUserData, setUserData } from '../ducks/userDuck';

const { GLOBAL, SIGN_IN } = LOADING_IDS;
const { SUCCESS } = RESPONSE_STATUSES;

export function loginThunk(formData) {
  return async (dispatch) => {
    try {
      dispatch(addLoading(SIGN_IN));
      const response = await AXIOS.post('/users/signIn', formData);
      const partner_id = localStorage.getItem('partner_id');
      if (response.status === SUCCESS) {
        const { data } = response;
        dispatch(setUserData({ ...data, permissions: { ...data.permissions, ...fakePermissions }}));
        localStorage.setItem('token', data.user_token);
        AXIOS.defaults.headers.common['authorization'] = data.user_token;
        // await AXIOS.patch(`/users/updateUserCurrentProject/${partner_id}`);
      } else {
        dispatch(setErrorMessage('Something Went Wrong'));
      }
    } catch (err) {
      dispatch(setErrorMessage(err?.errors?.username?.msg || err?.message || 'Something Went Wrong'));
    } finally {
      dispatch(removeLoading(SIGN_IN));
    }
  };
}

export function logoutThunk() {
  return (dispatch) => {
    localStorage.removeItem('token');
    AXIOS.defaults.headers.common['authorization'] = '';
    dispatch(resetUserData());
  };
}

export function getUserConfigsThunk(token) {
  return async (dispatch) => {
    try {
      const response = await AXIOS.post('/acl-projects/getConfigs', { token }, { headers: { authorization: token }});
      if (response.status === SUCCESS) {
        const { data } = response;
        dispatch(setUserData({ ...data, permissions: { ...data.permissions, ...fakePermissions }}));
        AXIOS.defaults.headers.common['authorization'] = data.user_token || token;
      }
    } catch (error) {
      localStorage.removeItem('token');
    } finally {
      dispatch(removeLoading(GLOBAL));
    }
  };
}
