/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import moment from 'moment';
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import Can from '../../../../../../Can';
import { setEditingUser } from '../../../../../../redux/ducks/aclDuck';
import { CustomTable as Table } from '../../../../../Custom';
import { sortNumber, sortString } from '../../../../../../helpers/utils';
import s from './UsersTable.module.scss';

const tableHeader = [
  { name: 'No:' },
  { name: 'ID', key: 'id', sort: sortNumber },
  { name: 'Username', key: 'username', sort: sortString },
  { name: 'Is Active', key: 'is_active' },
  { name: 'Create Date', key: 'created_at' },
  // { name: 'Last Login Date', key: 'lastLoginDate' },
  { name: 'Last Login IP', key: 'last_ip' },
  { name: 'Locale', key: 'locale', sort: sortString },
  { name: 'Edit', can: { path: [ 'acl/users.edit' ], can: [ 'view', 'edit' ]}},
  { name: 'Delete', can: { path: [ 'acl/users.delete' ], can: [ 'view', 'delete' ]}},
];

function UsersTable({ isGroup, isLoading }) {
  const dispatch = useDispatch();
  const { allUsers } = useSelector(state => state.acl);
  const [ sortData, setSortData ] = useState({
    name: null,
    top: false,
  });

  const onEditClick = user => (isGroup ? () => {} : dispatch(setEditingUser(user)));

  const onSortClick = (name) => {
    if (name === sortData.name) {
      return setSortData(prev => ({ ...prev, top: !prev.top }));
    }
    return setSortData({ name, top: true });
  };

  console.log('allUsers', allUsers);

  return (
    <Table loading={isLoading} isEmpty={!allUsers.length}>
      <Table.Header>
        <Table.Row>
          {tableHeader.map((item) => {
            if (item.sort) {
              return (
                <Table.HeaderCell
                  onClick={() => onSortClick(item.name)}
                  sort={sortData}
                  key={item.name}>
                  {item.name}
                </Table.HeaderCell>
              );
            }
            if (item.can) {
              return <Can IF={item.can} key={item.name}>
                <Table.HeaderCell>{item.name}</Table.HeaderCell>
              </Can>;
            }
            return (
              <Table.HeaderCell
                key={item.name}>
                {item.name}
              </Table.HeaderCell>
            );
          })}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {allUsers.map((user, index) => (
          <Table.Row
            key={index}>
            <Table.Cell>{index + 1}</Table.Cell>
            {tableHeader.map((item) => {
              if (!item.key) return null;
              if (item.key === 'created_at') {
                return <Table.Cell key={item.key}>
                  {moment(user[item.key]).format('DD.MM.YYYY')}
                </Table.Cell>;
              }
              if (item.key === 'is_active') {
                return <Table.Cell key={item.key}>
                  {user[item.key] ? 'yes' : 'no'}
                </Table.Cell>;
              }
              return (
                <Table.Cell key={item.key}>
                  {user[item.key]}
                </Table.Cell>
              );
            })}
            <Can IF={{ path: [ 'acl/users.edit' ], can: [ 'view', 'edit' ]}}>
              <Table.Cell
                onClick={() => onEditClick(user)}
                className="c-p"
              >
                <div className='flex-c-c'>
                  <div className={classnames(s.icon, s.editIcon)} />
                </div>
              </Table.Cell>
            </Can>
            {!isGroup && (
              <Can
                IF={{ path: [ 'acl/users.delete' ], can: [ 'view', 'delete' ]}}
              >
                <Table.Cell
                  className="c-p"
                  // onClick={() => deleteCurrentUser(elem['id'])}
                >
                  <div className='flex-c-c'>
                    <div className={classnames(s.icon, s.deleteIcon)} />
                  </div>
                </Table.Cell>
              </Can>
            )}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default React.memo(UsersTable);
