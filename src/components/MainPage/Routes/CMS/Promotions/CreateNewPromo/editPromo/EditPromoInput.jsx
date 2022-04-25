import React from 'react';
import { CustomInput, CustomTextarea } from '../../../../../../Custom';

import s from '../../Promotion.module.scss';

const EditPromoInput = () => (
  <div className={`${s.margin_top_filter} ${s.filters_block}`} style={{ width: '49%', marginRight: '2%', height: '500px' }} >
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex' }} >
        <div style={{ width: '49%', marginRight: '20px' }}><CustomInput label={'Title'} /></div>
        <div style={{ width: '49%' }}><CustomInput label={'Description'} /></div>
      </div>
      <div>
        <div style={{ height: '300px' }}><CustomTextarea label={'Body'} wrapperStyle={{ height: '250px' }} /></div>
      </div>
      <div style={{ display: 'flex' }} >
        <div style={{ width: '49%', marginRight: '20px' }}><CustomInput label={'Seo title'} /></div>
        <div style={{ width: '49%' }}><CustomInput label={'Seo description'} /></div>
      </div>
      <div>
        <div ><CustomInput label={'Tags'} size={'plplplpllp'} /></div>
      </div>
    </div>
  </div>
);

export default EditPromoInput;
