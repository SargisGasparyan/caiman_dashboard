import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './CreateEditUserForm.module.scss';
import { createUserThunk } from '../../../../../../redux/thunks/aclThunk';
import { toggleCreateModal } from '../../../../../../redux/ducks/aclDuck';

const languageOptions = [
  { key: 'en', value: 'EN', text: 'English' },
  { key: 'ru', value: 'RU', text: 'Russian' },
];

const CreateEditUserForm = ({ isEdit }) => {
  const dispatch = useDispatch();
  const { editingUser } = useSelector(state => state.acl);

  const [ formData, setFormData ] = useState({
    username: isEdit ? editingUser.username : '',
    password: '',
    confirmPassword: '',
    language: isEdit ? editingUser.locale : '',
    isActive: isEdit ? !!editingUser.is_active : false,
  });

  const [ formErrors, setFormErrors ] = useState({
    username: '',
    password: '',
  });
  const [ requestMessage, setRequestMessage ] = useState({ error: false, message: '' });

  const inputHandler = (e) => {
    const { value, name } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const clickHandler = () => {
    const {
      username, password, confirmPassword, isActive, language,
    } = formData;
    let errName = '';
    let errPass = '';
    if (username.length <= 7 || !username.length) {
      errName = 'Username must be at least 8 characters';
    }
    if (password.length <= 7 || !password.length) {
      errPass = 'Password must be at least 8 characters';
    }
    if (password !== confirmPassword) {
      errPass = 'Password and confirm password not the same';
    }
    if (errName.length || errPass.length) {
      setFormErrors(prev => ({ ...prev, username: errName, password: errPass }));
    } else {
      const data = isEdit
        ? { username }
        : {
          username, password, confirmPassword, isActive: isActive ? '1' : '0', language,
        };
      dispatch(isEdit ? dispatch()
        : createUserThunk(data, setRequestMessage));
    }
  };

  return (
    <div>
      <div className="input-box" style={{ marginTop: '6%' }}>
        <div>
          <div className="label">Username:</div>
          {/* <Input
            value={formData.username}
            placeholder="Username"
            name='username'
            onChange={inputHandler}
          /> */}
          <span className="error-mes">{formErrors.username}</span>
        </div>
        <div>
          <div className="label">Password:</div>
          {/* <Input
            value={formData.password}
            placeholder="Password"
            name={'password'}
            onChange={inputHandler}
            type="password"
                                /> */}
        </div>
        <div>
          <div className="label">Confirm password:</div>
          {/* <Input
            value={formData.confirmPassword}
            placeholder="Confirm password"
            name={'confirmPassword'}
            onChange={inputHandler}
            type="password"
                                /> */}
          <span className="error-mes">{formErrors.password}</span>
        </div>
      </div>
      <div className="check-box">
        <div> Is-Active</div>
        {/* <Checkbox
          toggle
          checked={formData.isActive}
          onChange={(_, data) => setFormData(prev => ({ ...prev, isActive: data.checked }))}
        /> */}
      </div>

      {/* <div className="check-box"> */}
      {/*    <Select */}
      {/*        className="game-select filter-item  _message  own__placeholder " */}
      {/*        classNamePrefix="select own" */}
      {/*        placeholder='All' */}
      {/*        isMulti */}
      {/*        selection */}
      {/*        options={ !!groupReducer ? groupReducer.map((el) => ({ */}
      {/*                    key:el.id+'', */}
      {/*                    label:el.title, */}
      {/*                    value: el.title, */}
      {/*                })) */}
      {/*            : []} */}
      {/*       onChange={this.ch} */}
      {/*    /> */}

      {/* </div> */}

      <div className="check-box">
        {/* {isEdit && <Select
          // defaultValue={}
          className="game-select filter-item  _message  own__placeholder"
          classNamePrefix="select own"
          placeholder='All'
          selection
          options={[]}
          // onChange={ch}
                />} */}
        {/* <Select
          placeholder="Select your language"
          options={languageOptions}
          value={formData.language}
          name='language'
          onChange={(_, data) => setFormData(prev => ({ ...prev, language: data.value }))}
                            /> */}
      </div>
      {<div className={s.actions}>
        <div className={requestMessage.error ? 'req-mess err' : 'req-mess'}>
          {requestMessage.message }
        </div>
        {/* {!isEdit && <Button color='black' onClick={() => dispatch(toggleCreateModal(false))}>
          Cancel
        </Button>} */}
        {/* <Button
          positive
          icon="checkmark"
          labelPosition="right"
          content={isEdit ? 'save' : 'Create User'}
          onClick={clickHandler}
        /> */}
      </div>}
    </div>
  );
};

export default CreateEditUserForm;
