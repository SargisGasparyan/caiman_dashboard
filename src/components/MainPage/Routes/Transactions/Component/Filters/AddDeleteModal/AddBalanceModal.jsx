import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CustomButton, CustomCheckbox, CustomInput, CustomModal, CustomSelect,
} from '../../../../../../Custom';
import { addTransactionInitialState, kindOptions, userIdOptions } from '../../../helpers/constants';
import s from './AddDelete.module.scss';
import { AXIOS } from '../../../../../../../api/axios';
import { addLoading, removeLoading } from '../../../../../../../redux/ducks/loadingDuck';
import { LOADING_IDS } from '../../../../../../../constants/ids';
import Spinner from '../../../../../../Common/Loaders/Spinner/Spinner';

const AddBalanceModal = ({ setIsModalActive, currentProject }) => {
  const [ userId, setUserId ] = useState(userIdOptions[0]);
  // const [ kind, setKind ] = useState(kindOptions[null]);
  const [ isTable, setIsTable ] = useState(true);
  const [ initialState, setInitialState ] = useState(addTransactionInitialState);
  const [ value, setValue ] = useState('');
  const [ opType, setOpType ] = useState(initialState.op_type);

  const activeLoadings = useSelector(state => state.activeLoadings);
  const isLoading = activeLoadings.includes(LOADING_IDS.SIGN_IN);

  const dispatch = useDispatch();

  const onChangePercent = (e) => {
    setInitialState({ ...initialState, amount_percent: +e.target.value });
  };

  const onChangePhoneNumber = (e) => {
    setValue(e.target.value);
    if (userId.value === 'User ID') {
      setInitialState({ ...initialState, userId: e.target.value });
    } else {
      setInitialState({ ...initialState, phone_number: +e.target.value });
    }
  };

  const onChangeAmount = (e) => {
    setInitialState({ ...initialState, amount: e.target.value });
  };

  const onKindSelecetChangeHandler = (state) => {
    setOpType(state);
    setInitialState({ ...initialState, op_type: state.value });
  };

  const onChangeCheckbox = () => {
    setIsTable(prev => !prev);
    setInitialState({ ...initialState, check_percent: isTable });
  };

  const onSaveClick = async () => {
    try {
      dispatch(addLoading(LOADING_IDS.SIGN_IN));
      const response = await AXIOS.post('transactions/createTransaction', { ...initialState });
      console.log('>>>>>>', response);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(removeLoading(LOADING_IDS.SIGN_IN));
      setIsModalActive(false);
    }
  };

  return (

    <CustomModal onClose={() => setIsModalActive(false)}>

      <div>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }}>

            <CustomInput
              value={value}
              onChange={onChangePhoneNumber}
              label={userId.label}
              style={{ width: '300px', marginBottom: '20px', marginRight: '30px' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <CustomInput
                value={initialState.amount_percent || ''}
                onChange={onChangePercent}
                label='Amount percent'
                type={initialState.check_percent ? 'number' : 'hidden'}
                min="0"
                max="100"
                style={{ width: '300px', marginBottom: '20px', marginRight: '30px' }} />
              <CustomCheckbox
                value={initialState.check_percent}
                style={{ }}
                onChange={onChangeCheckbox}
                 />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column' }}>

            <CustomSelect
              label='Type'
              isClearable={false}
              value={userId}
              onChange={item => setUserId(item)}
              options={userIdOptions}
              style={{ width: '300px', marginBottom: '20px' }} />

            <CustomInput
              value={initialState.amount}
              onChange={onChangeAmount}
              label='Amount'
              style={{ width: '300px', marginBottom: '20px' }} />

            <CustomSelect
              isClearable={false}
              value={opType}
              onChange={onKindSelecetChangeHandler}
              options={
                [ 'VAMOSETH', 'HABESHAETH' ].includes(currentProject) ? kindOptions : kindOptions.slice(0, 1)
              }
              label='Kind'
              style={{ marginTop: '20px' }} />

          </div>
        </div>

        <div style={{
          marginTop: '30px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}>
          <CustomButton style={{ width: '30px', marginRight: '10px' }} onClick={() => setIsModalActive(false)}>Cancel</CustomButton>
          <CustomButton style={{ width: '30px' }} onClick={onSaveClick}>
            { isLoading ? <Spinner /> : 'Save'}
          </CustomButton>
        </div>

      </div>

    </CustomModal>
  );
};

export default AddBalanceModal;
