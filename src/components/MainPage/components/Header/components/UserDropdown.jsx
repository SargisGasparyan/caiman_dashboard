import { useRef } from 'react';
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import s from '../Header.module.scss';
import { logoutThunk } from '../../../../../redux/thunks/globalThunk';
import { removeTabsAction } from '../../../../../redux/ducks/controlTab';
import { useOutsideClick } from '../../../../../hooks/useOutsideClick';

const UserDropdown = ({ dropdownsInfo, setDropdownsInfo, dropdownHandler }) => {
  const dispatch = useDispatch();
  const { username = '' } = useSelector(state => state.userInfo);
  const ref = useRef(null);
  useOutsideClick(ref, () => setDropdownsInfo(prev => ({ ...prev, user: false })));
  const clearLocalStorage = () => {
    const partnerName = localStorage.getItem('partner_name');
    const partnerId = localStorage.getItem('partner_id');
    localStorage.clear();
    localStorage.setItem('partner_name', partnerName);
    localStorage.setItem('partner_id', partnerId);
  };

  return (
    <div ref={ref} className={classnames(s.headerItem)}>
      <div className='flex-c-c' onClick={() => dropdownHandler('user')}>
        <div className={classnames(s.iconWrapper, s.userIcon, 'mr-10')} />
        <div>{username.toUpperCase()}</div>
        <div className={classnames(s.arrowDown, { [s.arrowTop]: dropdownsInfo.user })} />
      </div>
      {dropdownsInfo.user && (
      <div className={s.dropdown}>
        <div className={s.dropdownItem}>
          <div className={classnames(s.dropIcon, 'settingsIcon')} />
          <div>Settings</div>
        </div>
        <div className={s.dropdownItem}>
          <div className={classnames(s.dropIcon, 'lockIcon')} />
          <div>Change Password</div>
        </div>
        <div
          onClick={() => {
            clearLocalStorage();
            dispatch(logoutThunk());
            dispatch(removeTabsAction());
          }}
          className={s.dropdownItem}>
          <div className={classnames(s.dropIcon, s.logoutIcon)} />
          <div>Log off</div>
        </div>
      </div>
      )}
    </div>
  );
};

export default UserDropdown;
