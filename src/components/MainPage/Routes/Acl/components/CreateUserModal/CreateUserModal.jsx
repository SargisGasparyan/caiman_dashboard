import CustomModal from '../../../../../Custom/CustomModal/CustomModal';
import CreateEditUserForm from '../CreateEditUserForm/CreateEditUserForm';

const CreateUserModal = () => (
  <CustomModal title={'Create New User'}>
    {/* <Modal.Content> */}
    <CreateEditUserForm />
    {/* </Modal.Content> */}
  </CustomModal>
);

export default CreateUserModal;
