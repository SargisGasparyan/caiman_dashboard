import React from 'react';
import s from '../../Promotion.module.scss';
import EditPromoInput from './EditPromoInput';
import EditPromoAdd from './EditPromoAdd';

const EditPromo = () => (
  <div style={{ display: 'flex', width: '100%' }}>
    <EditPromoInput />
    <EditPromoAdd />

  </div>
);

export default EditPromo;
