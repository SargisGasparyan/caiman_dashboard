import React from 'react';
import s from '../Promotion.module.scss';
import st from './newPromotion.module.scss';
import { CustomInput, CustomLine, CustomDoubleDatepicker } from '../../../../../Custom';
import CreateEditPromo from './editPromo/create_edit_promo/CreateEditPromo';

import EditPromo from './editPromo/EditPromo';

const NewPromoPage = () => {
  const [ eng, setEng ] = React.useState(false);
  const [ sw, setSw ] = React.useState(false);
  return (
    <div>
      <CreateEditPromo />

      <div>
        <CustomLine style={{ display: 'flex' }} className={st.line} text={'English'} onClick={() => setEng(!eng)} />
      </div>

      {eng && <EditPromo />}

      <div>
        <CustomLine style={{ display: 'flex' }} className={st.line} text={'Swahili'} onClick={() => setSw(!sw)} />
      </div>

      {sw && <EditPromo />}
    </div>);
};

export default NewPromoPage;
