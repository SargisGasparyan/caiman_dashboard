import { useEffect, useState } from 'react';
// import { Checkbox, Icon } from 'semantic-ui-react';
import classNames from 'classnames';
import s from './ResourcesSwitcher.module.scss';
import { AXIOS } from '../../../api/axios';
import { USER_ABILITY_LISTS } from '../../../configs/ability';

const ResourcesSwitcher = ({
  isEditUser, currentResource, url, kinds = [], recourcesData, forGroups, currentUser,
  setRecourcesData,
}) => {
  const { all: allRes, userRes, groupRes } = recourcesData;
  console.log('recourcesData', recourcesData);
  const [ checkBoxData, setCheckBoxData ] = useState({});
  const [ addButton, setAddButton ] = useState(false);
  const [ stateKind, setStateKind ] = useState([]);
  const [ userAbility, setUserAbility ] = useState([]);

  const addResource = () => {
    const currentRes = allRes.find(el => el.path === currentResource.label);
    if (currentRes) {
      const abilityKey = currentRes.kind;
      setUserAbility([]);
      setStateKind(USER_ABILITY_LISTS[abilityKey]);
      setAddButton(false);
    }
  };

  useEffect(() => {
    if (!isEditUser) {
      // prepareCheckboxData();

    } else {
      const userCan = !forGroups ? userRes.find(el => el.path === currentResource.label)
        : groupRes.find(el => el.path === currentResource.label);
      console.log('userCan', userCan);
      setAddButton(false);
      setStateKind([]);
      if (userCan) {
        setStateKind(USER_ABILITY_LISTS[userCan.kind] || []);
        setUserAbility(USER_ABILITY_LISTS[userCan.can] || []);
      } else {
        const userGroupCan = groupRes.filter(el => el.path === currentResource.label);
        if (userGroupCan.length) {
          console.log('userGroupCan anhaskanali if');
        } else {
          // setStateKind(ability['14']);
          setAddButton(true);
        }
      }
    }
  }, [ allRes, currentResource ]);

  const userPermissionChange = (kind) => {
    console.log('userPermissionChange', userAbility);
    const isAddingResourceKind = !userAbility.includes(kind);
    fetchUpdateUserInfo({
      userId: currentUser.id,
      isAddingResourceKind,
      path: currentResource,
      type: kind,
      groupId: currentUser.group_id,
    });
  };

  return (
    <div className={isEditUser ? s.editRoot : 'link-n'}>
      {
            // !isEditUser ? <>
            //   <img alt='link-svg' src="https://img.icons8.com/windows/32/000000/share-2.png" />
            //   <span className={classNames({ [s.editName]: isEditUser })}>
            //     {url || currentResource}
            //   </span></>
            //   :
        // <>
        //   <span className={classNames({ [s.editName]: isEditUser })}>
        //     {currentResource.label}
        //   </span>
        //   {addButton && <span className={classNames({ [s.editName]: isEditUser })}>
        //     <Icon
        //       name='add'
        //       color={'green'}
        //       className={'pointer'}
        //       onClick={addResource} />
        //   </span>}  </>
        }
      <div className={isEditUser ? s.editCheckboxes : 'kinds-n'}>
        {
        // !isEditUser
        //   ? kinds.map(kind => (
        //     <Checkbox
        //       key={kind}
        //       checked={checkBoxData[currentResource]
        //         ? checkBoxData[currentResource].includes(kind.type) : false}
        //       // onChange={() => change(!!checkBoxData && checkBoxData[res]
        //       //   && checkBoxData[res].includes(it.type), res, it.type)}
        //       label={kind.type}
        //       className='margin-l' />
        //   ))
        //   :
          // (stateKind && stateKind.map(kind => (
          //   <Checkbox
          //     key={kind}
          //     checked={userAbility && userAbility.includes(kind)}
          //     // onChange={() => change(usercan ? usercan.includes(it) : false, res, it)}
          //     onChange={() => userPermissionChange(kind)}
          //     label={kind}
          //     className='margin-l' />

          // ))
          // )
            }
      </div>
    </div>
  );

  async function fetchUpdateUserInfo(data) {
    try {
      const response = await AXIOS.put(`/resource/upsert/${data.path.id}`, data);
      if (response.status === 'SUCCESS') {
        console.log('updateUserInfo, response', response);
        setRecourcesData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
};

export default ResourcesSwitcher;
