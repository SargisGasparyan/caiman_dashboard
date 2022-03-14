import { useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import s from '../Header.module.scss';
import { useOutsideClick } from '../../../../../hooks/useOutsideClick';
import CustomInput from '../../../../Custom/CustomInput/CustomInput';
import { AXIOS } from '../../../../../api/axios/index';
import { setUserData } from '../../../../../redux/ducks/userDuck';

const PartnersDropdown = ({ dropdownsInfo, setDropdownsInfo, dropdownHandler }) => {
  const [ input, setInput ] = useState('');
  const storagePartner_id = localStorage.getItem('partner_id') || '1';
  const dispatch = useDispatch();
  const { projects, currentProject } = useSelector(state => state.userInfo);
  const ref = useRef(null);
  useOutsideClick(ref, () => setDropdownsInfo(prev => ({ ...prev, partners: false })));

  const filteredPartners = useMemo(() => (
    !input.trim()
      ? projects
      : projects.filter(
        item => item.name.toUpperCase().includes(input.toUpperCase()),
      )), [ input ]);
  const onPartnerClick = async (partner) => {
    try {
      const response = await AXIOS.patch(`/users/updateUserCurrentProject/${partner.project_id}`);
      dispatch(setUserData(response.data.userData));
    } catch (error) {
      console.log(error);
    } finally {
      setDropdownsInfo(prev => ({ ...prev, partners: false }));
    }
  };
  return (
    <div ref={ref} className={classnames(s.headerItem)}>
      <div className='flex-c-c' onClick={() => dropdownHandler('partners')}>
        <div>PARTNERS</div>
        <div className={classnames(s.arrowDown, { [s.arrowTop]: dropdownsInfo.partners })} />
      </div>
      {dropdownsInfo.partners && (
      <div className={classnames(s.dropdown, s.partners)}>
        <CustomInput
          value={input}
          onChange={e => setInput(e.target.value)}

          placeholder='Search'
          style={{ minWidth: '220px', width: 'calc(100% - 20px)', marginTop: '20px' }}
          className={'m-rl-10'} />
        <div className={s.partnersWrapper}>
          <div className={classnames(s.listRow, s.listHeader)}>
            <div>Partners</div>
            <div>ID</div>
          </div>
          <div className={s.projects}>
            {filteredPartners.length ? filteredPartners.map(partner => (
              <div
                className={classnames(s.listRow, s.partnersItem,
                  { [s.activePartner]: +storagePartner_id === partner.project_id })}
                key={partner.project_id}
                onClick={() => {
                  onPartnerClick(partner);
                  localStorage.setItem('partner_name', partner.name);
                  localStorage.setItem('partner_id', partner.project_id);
                  window.location.reload();
                }}>
                <div>{partner.name}</div>
                <div>{partner.project_id}</div>
              </div>
            ))
              : <div className={s.noItem}>
                <div>No Partners</div>
              </div>}
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default PartnersDropdown;
