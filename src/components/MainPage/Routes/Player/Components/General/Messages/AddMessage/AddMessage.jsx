import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CustomButton, CustomInput, CustomModal } from '../../../../../../../Custom';
import { useTranslation } from '../../../../../../../../context/LanguageProvider';
import { AXIOS } from '../../../../../../../../api/axios/index';

const initialState = {
  title: null,
  body: null,
  userId: null,
};
function AddMessage({ closePopup }) {
  const [ state, setState ] = useState(initialState);
  const { t } = useTranslation();
  const params = useParams();
  // useEffect(() => {
  //   setState({ ...state, users: params.id });
  // }, [ params.id ]);
  const onChangeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  console.log(state);
  const onSaveClick = async () => {
    try {
      const response = await AXIOS.post('/players/saveMessage', { ...state, userId: params.id });
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      closePopup();
    }
  };
  return (
    <CustomModal onClose={closePopup} title={'Add message'}>
      <CustomInput label={t('Title')} name={'title'} value={state.title} onChange={onChangeHandler} />
      <CustomInput label={t('Message')} name={'body'} value={state.body} onChange={onChangeHandler} />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }} >
        <CustomButton
          style={{ width: '100px', padding: '8px 16px', marginRight: '10px' }}
          onClick={onSaveClick} >
          {t('Save')}
        </CustomButton>
        <CustomButton
          style={{
            width: '100px', padding: '8px 16px', color: '#5b7077', backgroundColor: '#E9E9E9',
          }}
          onClick={closePopup}>
          {t('Cancel')}
        </CustomButton>
      </div>
    </CustomModal>
  );
}

export default AddMessage;
