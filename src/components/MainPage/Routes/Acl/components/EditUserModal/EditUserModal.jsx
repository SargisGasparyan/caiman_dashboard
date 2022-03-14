import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AXIOS } from '../../../../../../api/axios';
import CustomModal from '../../../../../Custom/CustomModal/CustomModal';
import CreateEditUserForm from '../CreateEditUserForm/CreateEditUserForm';
import EditUserResources from './components/EditUserResources/EditUserResources';
import { RESPONSE_STATUSES } from '../../../../../../constants/names';
import { setEditingUser } from '../../../../../../redux/ducks/aclDuck';

const EditUserModal = () => {
  const dispatch = useDispatch();
  const { editingUser } = useSelector(state => state.acl);
  const [ recourcesData, setRecourcesData ] = useState({});

  useEffect(() => {
    fetchUserResources();
  }, []);

  // const panes = useMemo(() => [{
  //   menuItem: 'User Info',
  //   render: () => (
  //     <Tab.Pane attached={false}>
  //       <CreateEditUserForm isEdit />
  //     </Tab.Pane>
  //   ),
  // },
  // {
  //   menuItem: 'Resources',
  //   render: () => (
  //     <Tab.Pane attached={false}>
  //       <EditUserResources
  //         recourcesData={recourcesData}
  //         setRecourcesData={setRecourcesData} />
  //     </Tab.Pane>
  //   ),
  // }], [ recourcesData ]);

  return (
    <CustomModal title={`Edit User with id - ${editingUser.id}`}>
      {/* <Modal.Content>
        <div className="check-box">
          <Tab
            menu={{ inverted: true, attached: false, tabular: false }}
            panes={panes}
            style={{ marginTop: '3%' }}
            />
        </div>
      </Modal.Content> */}
      {/* <Modal.Actions>
        // <div className={requestMessage.error ? 'req-mess err' : 'req-mess'}>
        //   {requestMessage.message}
        // </div>
        <Button color="black" onClick={() => dispatch(setEditingUser(null))}>
          Close
        </Button>

      </Modal.Actions> */}
    </CustomModal>
  );

  async function fetchUserResources() {
    try {
      const response = await AXIOS.get(`/resource/get/${editingUser.id}`);
      if (response.status === RESPONSE_STATUSES.SUCCESS) {
        setRecourcesData(response.data);
      }
    } catch (error) {
      console.log('fetchUserResources error', error);
    }
  }
};

export default EditUserModal;
