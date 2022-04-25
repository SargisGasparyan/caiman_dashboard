import React from 'react';
import s from '../../Promotion.module.scss';
import { CustomAddButton } from '../../../../../../Custom';

const EditPromoAdd = () => (
  <div className={`${s.margin_top_filter} ${s.filters_block}`} style={{ width: '49%', height: '450px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={{ height: '200px', width: '40%' }}><CustomAddButton label={'Body'} wrapperStyle={{ height: '150px' }} /></div>
      <div style={{ height: '200px', width: '40%' }}><CustomAddButton label={'Body'} wrapperStyle={{ height: '150px' }} /></div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={{ height: '200px', width: '40%' }}><CustomAddButton label={'Body'} wrapperStyle={{ height: '150px' }} /></div>
      <div style={{ height: '200px', width: '40%' }} />
    </div>
  </div>
);

export default EditPromoAdd;
