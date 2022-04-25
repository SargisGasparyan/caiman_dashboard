import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { CustomButton, CustomButtonPromotion } from '../../../../../Custom';
import { addTabAction, activeTabAction } from '../../../../../../redux/ducks/controlTab';
import st from './PromotionTableFilter.module.scss';
import s from '../../../../../Custom/CustomButton/CustomButton.module.scss';

const PromotionsFilter = ({ changeText, change_banner }) => {
  const [ activeDropdown, setActiveDropdown ] = React.useState(null);
  const [ name, setName ] = React.useState('Active');
  const partners = useSelector(state => state.tabReducers.partners);
  const dispatch = useDispatch();
  return (
    <div className={st.promotions_section__head}>
      <div className={st.list_mode}>
        <span className={st.desk_mob__modes}>
          <a href="">Desktop</a>
          <span className={st.fw_slash}>/</span>
          <a href="">Mobile</a>
        </span>
      </div>
      <div className={st.head__right_elems}>
        <div className={st.action_mode}>
          <span className={classNames(st.mode_type, { [st.active]: name === 'Active' })} onClick={() => setName('Active')}>Active</span>
          <span className={classNames(st.mode_type, { [st.active]: name === 'Expected' })} onClick={() => setName('Expected')}>Expected</span>
          <span className={classNames(st.mode_type, { [st.active]: name === 'Saved' })} onClick={() => setName('Saved')}>Saved</span>
          <span className={classNames(st.mode_type, { [st.active]: name === 'Archive' })} onClick={() => setName('Archive')}>Archive</span>
        </div>
        {!change_banner ? <NavLink to={'change_banner'} >
          <CustomButtonPromotion
            onClick={() => {
              const partnerTabs = partners.find(partner => partner.partner === `${localStorage.getItem('partner_name')}`).tabs;
              setActiveDropdown(null);
              partnerTabs.includes('Change banner') === false && dispatch(addTabAction({
                partner: `${localStorage.getItem('partner_name')}`,
                text: 'Change banner',
              }));
              dispatch(activeTabAction({
                partner: `${localStorage.getItem('partner_name')}`,
                tabName: 'Change banner',
              }));
            }}
            // onClick={onApply}

               >
            { changeText}
          </CustomButtonPromotion>
        </NavLink> : <NavLink to={'create_new_promo'} >
          <CustomButtonPromotion
            onClick={() => {
              const partnerTabs = partners.find(partner => partner.partner === `${localStorage.getItem('partner_name')}`).tabs;
              setActiveDropdown(null);
              partnerTabs.includes('Create new promo') === false && dispatch(addTabAction({
                partner: `${localStorage.getItem('partner_name')}`,
                text: 'Create new promo',
              }));
              dispatch(activeTabAction({
                partner: `${localStorage.getItem('partner_name')}`,
                tabName: 'Create new promo',
              }));
            }}
            // onClick={onApply}

               >
            { changeText}
          </CustomButtonPromotion>
        </NavLink>}
      </div>
    </div>
  );
};

export default PromotionsFilter;
