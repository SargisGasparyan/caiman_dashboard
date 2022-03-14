import { useState } from 'react';
import Select from 'react-select';
import ResourcesSwitcher from '../../../../../../../Common/ResourcesSwitcher/ResourcesSwitcher';
import s from './EditUserResources.module.scss';

const EditUserResources = ({ recourcesData, currentUser, setRecourcesData }) => {
  const [ selectedResource, setSelectedResource ] = useState(null);

  const selectHandler = (e) => {
    setSelectedResource(e);
  };

  console.log('selectedResource', selectedResource);

  return (
    <div>
      Resources
      <Select
        className="basic-single res"
        classNamePrefix="select own"
        isDisabled={false}
        isLoading={false}
        isClearable
        isRtl={false}
        isSearchable
        options={recourcesData.all ? recourcesData.all.map(el => ({
          label: el.path,
          value: el.path,
          kind: el.kind,
          id: el.id,
        })) : []}
        onChange={selectHandler}
    />
      {selectedResource && <ResourcesSwitcher
        currentResource={selectedResource}
        currentUser={currentUser}
        recourcesData={recourcesData}
        setRecourcesData={setRecourcesData}
        isEditUser
        />
    }

    </div>
  );
};

export default EditUserResources;
