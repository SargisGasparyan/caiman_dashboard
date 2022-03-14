import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import s from '../Transaction.module.scss';
import {
  CustomButton, CustomInput, CustomModal, CustomTable,
} from '../../../../../../../Custom';
import { AXIOS } from '../../../../../../../../api/axios';
import { moveTransactionHeader } from './helpers/constants';

const MoveTransactionModal = ({ modalTransactionInfo, onClose, onApply }) => {
  const {
    id, f_name, l_name, balance,
  } = useSelector(state => state.currentPlayer);
  const { meta } = useSelector(state => state.currentPlayer);
  const { transActions } = useSelector(state => state.currentPlayer);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ searchId, setSearchId ] = useState('');
  const [ searchUser, setSearchUser ] = useState({});

  const seacrhUserTableHeader = useMemo(() => moveTransactionHeader.slice(0, -2), []);

  const onMoveClick = async () => {
    try {
      const response = await AXIOS.post('transactions/saveTransApplay', {
        id: modalTransactionInfo.id,
        fromUserId: id,
        toUserId: searchId,
      });
      onApply();
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const onSearchIdChange = (e) => {
    const { value } = e.target;
    const re = /^[0-9\b]+$/;
    if (value === '' || re.test(value)) {
      setSearchId(value);
    }
  };

  const onSearchId = async () => {
    if (!searchId || +searchId === id) return;
    try {
      const response = await AXIOS.get(`players/getPlayer/${searchId}`);
      setSearchUser(response);
    } catch (error) {
      console.log(error);
    }
  };

  return <div>
    <CustomModal
      onClose={onClose}
      title='Move Transaction'
         >
      <div className={s.tableChange}>
        <CustomTable className={s.tableChange}loading={isLoading}>
          <CustomTable.Header>
            <CustomTable.Row>
              {
           moveTransactionHeader.map(header => (
             <CustomTable.HeaderCell
               key={header.key}>
               {header.name}
             </CustomTable.HeaderCell>
           ))
       }
            </CustomTable.Row>
          </CustomTable.Header>
          <CustomTable.Body>
            <CustomTable.Row>
              <CustomTable.Cell>
                {`${f_name} ${l_name}`}
              </CustomTable.Cell>
              <CustomTable.Cell>
                {`${balance}`}
              </CustomTable.Cell>
              <CustomTable.Cell>
                {
                !meta.phone.TIGO ? <div style={{ textAlign: 'center' }}>-</div> : (
                  meta.phone.TIGO.map(item => <div key={item}>{item}</div>))
              }
              </CustomTable.Cell>
              <CustomTable.Cell>
                {
                !meta.phone.AIRTEL ? <div style={{ textAlign: 'center' }}>-</div> : (
                  meta.phone.AIRTEL.map(item => <div key={item}>{item}</div>))
              }
              </CustomTable.Cell>
              <CustomTable.Cell>
                {
                !meta.phone.HALOTEL ? <div style={{ textAlign: 'center' }}>-</div> : (
                  meta.phone.HALOTEL.map(item => <div key={item}>{item}</div>))
              }
              </CustomTable.Cell>
              <CustomTable.Cell>
                {
                !meta.phone.MPESA ? <div style={{ textAlign: 'center' }}>-</div> : (
                  meta.phone.MPESA.map(item => <div key={item}>{item}</div>))
              }
              </CustomTable.Cell>
              <CustomTable.Cell>
                {`${modalTransactionInfo.id}`}
              </CustomTable.Cell>
              <CustomTable.Cell>
                {`${modalTransactionInfo.amount}`}
              </CustomTable.Cell>
            </CustomTable.Row>
          </CustomTable.Body>
        </CustomTable>
      </div>

      <div className={s.searchField}>
        <CustomInput
          value={searchId}
          onChange={onSearchIdChange}
          width={'50%'}
          label={'Search Player'}
          placeholder={'ID'}
          type='tel'
     />
        <CustomButton onClick={onSearchId} className={s.applyButton}>Apply</CustomButton>
      </div>

      <div className={s.tableChange}>
        <CustomTable className={s.tableChange} loading={isLoading}>
          <CustomTable.Header>
            <CustomTable.Row>
              {
           seacrhUserTableHeader.map(header => (
             <CustomTable.HeaderCell
               key={header.key}>
               {header.name}
             </CustomTable.HeaderCell>
           ))
       }
            </CustomTable.Row>
          </CustomTable.Header >
          <CustomTable.Body>
            <CustomTable.Row>
              <CustomTable.Cell >
                {!searchUser.data ? <div>-</div> : `${searchUser.data.f_name}
               ${searchUser.data.l_name}`}
              </CustomTable.Cell>
              <CustomTable.Cell>
                {!searchUser.data ? <div>-</div> : searchUser.data.balance}
              </CustomTable.Cell>
              <CustomTable.Cell >
                {
                (searchUser.data && searchUser.data.meta.phone.TIGO) ? (
                  searchUser.data.meta.phone.TIGO.map(item => <div key={item}>{item}</div>)
                ) : <div style={{ textAlign: 'center' }}>-</div>
              }
              </CustomTable.Cell>
              <CustomTable.Cell>
                {
                (searchUser.data && searchUser.data.meta.phone.AIRTEL) ? (
                  searchUser.data.meta.phone.AIRTEL.map(item => <div key={item}>{item}</div>)
                ) : <div style={{ textAlign: 'center' }}>-</div>
              }
              </CustomTable.Cell>
              <CustomTable.Cell>
                {
                (searchUser.data && searchUser.data.meta.phone.HALOTEL) ? (
                  searchUser.data.meta.phone.HALOTEL.map(item => <div key={item}>{item}</div>)
                ) : <div style={{ textAlign: 'center' }}>-</div>
              }
              </CustomTable.Cell>
              <CustomTable.Cell>
                {
                (searchUser.data && searchUser.data.meta.phone.MPESA) ? (
                  searchUser.data.meta.phone.MPESA.map(item => <div key={item}>{item}</div>)
                ) : <div style={{ textAlign: 'center' }}>-</div>
              }
              </CustomTable.Cell>

            </CustomTable.Row>
          </CustomTable.Body>
        </CustomTable>
      </div>

      <div className={s.cancelAndMoveButtons}>
        <CustomButton onClick={onMoveClick} className={s.moveButton}>Move</CustomButton>
        <CustomButton onClick={onClose} className={s.cancelButton}>Cancel</CustomButton>
      </div>
    </CustomModal>
  </div>;
};

export default MoveTransactionModal;
