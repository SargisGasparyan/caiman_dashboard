import React, { useState } from 'react';
import classNames from 'classnames';
import { addPlayerFirstLine, playerAddInitialState } from '../../../helpers/constant';
import CustomInput from '../../../../../../Custom/CustomInput/CustomInput';
import s from '../../PlayersReport.module.scss';
import { AXIOS } from '../../../../../../../api/axios/index';
import CustomBootstrapModal from '../../../../../../Custom/CustomBootstrapModal/CustomBootstrapModal';

function AddPlayersModal({ closePopup }) {
  const [ state, setState ] = useState(playerAddInitialState);

  const onChangeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSaveClick = async () => {
    try {
      const response = await AXIOS.post('/players/addPlayer', { ...state });
    } catch (error) {
      console.log(error);
    } finally {
      closePopup();
    }
  };
  return (
    <CustomBootstrapModal title={'Add Player'} onClose={closePopup} width={'60%'} className={'modal-lg'} onSave={onSaveClick}>
      <div className={classNames(s.filter_items_block, 'container-fliud')} >
        {addPlayerFirstLine.map(row => <div className='row'>
          {Object.keys(row).map(col => <div className='col' style={{ margin: '8px 0' }}>
            <CustomInput
              label={row[col]}
              value={state[col]}
              name={col}
              onChange={onChangeHandler}
              style={{ minWidth: 200 }}
            />
          </div>)}
        </div>)}
      </div>
    </CustomBootstrapModal>
  );
}

export default AddPlayersModal;
