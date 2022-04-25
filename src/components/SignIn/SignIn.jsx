import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from '../../context/LanguageProvider';
import { AXIOS } from '../../api/axios';
import { loginThunk } from '../../redux/thunks/globalThunk';
import { setUserData } from '../../redux/ducks/userDuck';
import { removeErrorMessage } from '../../redux/ducks/errorDuck';
import s from './SignIn.module.scss';
import CustomInput from '../Custom/CustomInput/CustomInput';
import { addTabAction, activeTabAction } from '../../redux/ducks/controlTab';
import CustomButton from '../Custom/CustomButton/CustomButton';
import Spinner from '../Common/Loaders/Spinner/Spinner';
import { LOADING_IDS } from '../../constants/ids';

function SignIn() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [ formData, setFormData ] = useState({
    username: '',
    password: '',
  });
  const [ currentProjectName, setCurrentProjectName ] = useState(null);
  useEffect(() => {
    setCurrentProjectName(localStorage.getItem('partner_name'));
  }, []);

  const errorInfo = useSelector(state => state.errorInfo);
  const activeLoadings = useSelector(state => state.activeLoadings);

  const isLoading = activeLoadings.includes(LOADING_IDS.SIGN_IN);
  const isDisabled = !formData.username.length || !formData.password.length || isLoading;

  return (
    <div className={s.root}>

      <div className={s.formWrapper}>
        {errorInfo && <div className={s.error}>{errorInfo || ''}</div>}
        <form onSubmit={submitHandler}>
          <CustomInput
            label="Username"
            name='username'
            disabled={isLoading}
            value={formData.username}
            onChange={inputHandler}
            style={{ marginBottom: '20px' }}
/>
          <CustomInput
            type='password'
            label="Password"
            name='password'
            disabled={isLoading}
            value={formData.password}
            onChange={inputHandler}
            style={{ marginBottom: '20px' }}
 />
          <CustomButton
            className={s.button}
            disabled={isDisabled}
            onClick={submitHandler}>
            { isLoading ? <Spinner /> : t('Sign In') }
          </CustomButton>
        </form>
      </div>
    </div>
  );

  function submitHandler(e) {
    if (isDisabled) return;
    // dispatch(addTabAction({
    //   partner: `${localStorage.getItem('partner_name')}`,
    //   text: 'Dashboard',
    // }));
    // dispatch(activeTabAction({
    //   partner: `${localStorage.getItem('partner_name')}`,
    //   tabName: 'Dashboard',
    // }));
    e.preventDefault();
    dispatch(loginThunk(formData));
    errorInfo && dispatch(removeErrorMessage());
    !localStorage.getItem('partner_name') && localStorage.setItem('partner_name', 'PMBETTZ');
  }

  function inputHandler(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    errorInfo && dispatch(removeErrorMessage());
  }
}
export default SignIn;
