import React from 'react';
import moment from 'moment';
import { CustomInput, CustomDoubleDatepicker } from '../../../../../../../Custom';
import s from '../../../Promotion.module.scss';
import EditPromoInfo from './EditPromoInfo';

import { firstLineFields, secondLineFields, initialState } from '../../../../../Players/helpers/constant';

const CreateEditPromo = () => {
  const [ state, setState ] = React.useState(initialState);
  const setDate = (value, name) => {
    setState({ ...state, [name]: { value: moment(value).format('YYYY-MM-DD'), label: value }});
  };

  return (
    <div>
      <div>
        <EditPromoInfo />
      </div>
      <div className={`${s.margin_top_filter} ${s.filters_block}`}>
        <div className={`${s.margin_top_filter} ${s.filters_block}`} style={{ width: '100%', marginRight: '2%' }}>
          <div><h1>settings</h1></div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '33%' }}>
              <CustomInput label={'Link'} />
            </div>
            <div style={{
              width: '66%', display: 'flex', marginLeft: '2%', justifyContent: 'space-around',
            }}>
              <div>
                <CustomInput value={'ok'} label={'Priority'} style={{ width: '50px' }} />
              </div>
              <div>
                <CustomDoubleDatepicker
                  label="Birthday"
                  startDate={state.birthdayFrom.label}
                  endDate={state.birthdayTo.label}
                  setStartDate={(value) => { setDate(value, 'birthdayFrom'); }}
                  setEndDate={(value) => { setDate(value, 'birthdayTo'); }}
                />
              </div>
              <div>
                <CustomDoubleDatepicker
                  label="121212"
                  startDate={state.birthdayFrom.label}
                  endDate={state.birthdayTo.label}
                  setStartDate={(value) => { setDate(value, 'birthdayFrom'); }}
                  setEndDate={(value) => { setDate(value, 'birthdayTo'); }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEditPromo;
