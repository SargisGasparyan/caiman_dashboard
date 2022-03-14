import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import s from './AclUsers.module.scss';
import CreateUserModal from '../components/CreateUserModal/CreateUserModal';
import EditUserModal from '../components/EditUserModal/EditUserModal';
import UsersTable from '../components/UsersTable/UsersTable';
import CustomSelect from '../../../../Custom/CustomSelect/CustomSelect';
import Can from '../../../../../Can';
import { getAclUsers } from '../../../../../redux/thunks/aclThunk';
import { hasPermissions } from '../../../../../helpers/general';
import { toggleCreateModal } from '../../../../../redux/ducks/aclDuck';
import { CustomButton, CustomInput, CustomSwitcher } from '../../../../Custom';

const rowItems = [
  { label: '10 rows', value: '10' },
  { label: '20 rows', value: '20' },
  { label: '50 rows', value: '50' },
  { label: '100 rows', value: '100' },
];

const AclUsers = () => {
  const dispatch = useDispatch();
  const { id: userId } = useSelector(state => state.userInfo);
  const { allUsers, editingUser, isCreateModalActive } = useSelector(state => state.acl);

  const [ isLoading, setIsLoading ] = useState(false);
  const [ rowsCount, setRowsCount ] = useState(rowItems[0]);
  const [ isActive, setIsActive ] = useState(false);
  const [ searchName, setSearchName ] = useState('');
  const [ page, setPage ] = useState(1);

  const getUsers = () => dispatch(getAclUsers({
    limit: rowsCount.value, page, isActive, searchName, setIsLoading,
  }));

  useEffect(() => {
    getUsers();
  }, [ rowsCount, page, isActive ]);

  return (
    <div className='whiteBackground'>
      {/* ----- modals ------ */}
      {isCreateModalActive && <CreateUserModal />}
      {editingUser && <EditUserModal currentUser={editingUser} />}
      {/* ------------------- */}

      <div className={s.header}>
        <div className={s.title}>Users list</div>
        <div className={s.searchWrapper}>
          <CustomInput
            placeholder={'Search by Username...'}
            value={searchName}
            onChange={e => setSearchName(e.target.value)}
          />
        </div>
        <div className={false ? 'req-mess err' : 'req-mess'}>
          {/* {requestMessage.message} */}
        </div>
        <div className={s.createButtonWrapper}>
          <Can IF={{ path: [ 'acl/users.create' ], can: [ 'view', 'edit' ]}} >
            <CustomButton
              className={s.createButton}
              onClick={() => dispatch(toggleCreateModal(true))}
            >
              Create User
            </CustomButton>
          </Can>
        </div>
      </div>
      <div className='flex-sb-c'>
        <div className='flex-c-c'>
          <Can IF={{ path: [ 'acl/users.create' ], can: [ 'view' ]}}>
            <div
              className={classnames(s.switcherLabel, 'mr-10 u-s-n')}
                >
              Active Users:
            </div>
            <div>
              <CustomSwitcher
                checked={isActive}
                disabled={!hasPermissions([ 'acl/users.create' ], [ 'view', 'edit' ])}
                onChange={() => setIsActive(prev => !prev)}
                />
            </div>
          </Can>
        </div>
        <div>
          <div>
            <CustomSelect
              value={rowsCount}
              width={160}
              label='Rows count per page'
              options={rowItems}
              onChange={item => setRowsCount(item)}
              isClearable={false}
              />
          </div>
        </div>
      </div>
      <UsersTable isLoading={isLoading} />

      {/* <Pagination */}
      {/*    activePage={activePage} */}
      {/*    defaultActivePage={1} */}
      {/*    totalPages={totalPagesReducer} */}
      {/*    className="pagi-own nr" */}
      {/*    onPageChange={totalPagesReducer > 1 ? onPageChange : null} */}
      {/* /> */}
    </div>
  );
};

export default AclUsers;
