import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AXIOS } from '../../../../../../../api/axios';
import { LOADING_IDS } from '../../../../../../../constants/ids';
import { useTranslation } from '../../../../../../../context/LanguageProvider';
import { addLoading, removeLoading } from '../../../../../../../redux/ducks/loadingDuck';
import Spinner from '../../../../../../Common/Loaders/Spinner/Spinner';
import {
  CustomButton, CustomInput, CustomModal, CustomSelect,
} from '../../../../../../Custom';
import { deleteTransactionInitialState, userIdOptions } from '../../../helpers/constants';

const DeleteBalanceModal = ({ setIsModalActive }) => {
  const [ initialState, setInitialState ] = useState(deleteTransactionInitialState);
  const [ userId, setUserId ] = useState(userIdOptions[0]);
  const [ value, setValue ] = useState('');
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const activeLoadings = useSelector(state => state.activeLoadings);
  const isLoading = activeLoadings.includes(LOADING_IDS.SIGN_IN);

  const onAmountChange = (e) => {
    setInitialState({ ...initialState, amount: e.target.value });
  };

  const onUserIdChange = (e) => {
    setValue(e.target.value);
    if (userId.value === 'User ID') {
      setInitialState({ ...initialState, userId: e.target.value });
    } else {
      setInitialState({ ...initialState, phone_number: +e.target.value });
    }
  };

  const onSaveClick = async () => {
    try {
      dispatch(addLoading(LOADING_IDS.SIGN_IN));
      const response = await AXIOS.post('transactions/createTransaction', { ...initialState });
      console.log('>>>>>>', response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsModalActive(false);
      dispatch(removeLoading(LOADING_IDS.SIGN_IN));
    }
  };

  return (

    <CustomModal onClose={() => setIsModalActive(false)}>
      <div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <CustomInput
              type='number'
              value={value}
              onChange={onUserIdChange}
              style={{ width: '300px', marginBottom: '20px', marginRight: '30px' }}
              label={userId.label}
              />
            <CustomInput
              value={initialState.amount}
              onChange={onAmountChange}
              style={{ width: '300px', marginBottom: '20px', marginRight: '30px' }}
              label='Amount'
              />
          </div>

          <div>
            <CustomSelect
              isClearable={false}
              value={userId}
              onChange={item => setUserId(item)}
              options={userIdOptions}
              style={{ width: '300px' }}
              />
          </div>
        </div>

        <div style={{
          marginTop: '30px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}>
          <CustomButton
            style={{ width: '30px', marginRight: '10px' }}
            onClick={() => setIsModalActive(false)}>
            Cancel
          </CustomButton>
          <CustomButton
            style={{ width: '30px' }}
            onClick={onSaveClick}
            disabled={isLoading}
          >
            { isLoading ? <Spinner /> : 'Save'}
          </CustomButton>
        </div>

      </div>

    </CustomModal>
  );
};

export default DeleteBalanceModal;
