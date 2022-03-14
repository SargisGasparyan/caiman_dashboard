import { useRef } from 'react';
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import s from '../Header.module.scss';
import { useOutsideClick } from '../../../../../hooks/useOutsideClick';
import { LANGUAGES_LIST } from '../../../../../constants/lists';
import { toggleLanguage } from '../../../../../redux/ducks/userDuck';

const LanguageDropdown = ({ dropdownsInfo, setDropdownsInfo, dropdownHandler }) => {
  const dispatch = useDispatch();
  const { locale = '' } = useSelector(state => state.userInfo);
  const ref = useRef(null);
  useOutsideClick(ref, () => setDropdownsInfo(prev => ({ ...prev, language: false })));

  const langClick = (lang) => {
    dispatch(toggleLanguage({
      value: lang,
    }));
    dropdownHandler('language');
  };

  return (
    <div ref={ref} className={classnames(s.headerItem)}>
      <div className='flex-c-c' onClick={() => dropdownHandler('language')}>
        <div className={classnames(s.flags, s[`flag-${locale}`])} />
        <div className={s.languageContainer}>{locale.toUpperCase()}</div>
        <div className={classnames(s.arrowDown, { [s.arrowTop]: dropdownsInfo.language })} />
      </div>
      {dropdownsInfo.language && (
      <div className={s.dropdown}>
        <div className={s.languageDropdown}>
          {LANGUAGES_LIST.map((lang) => {
            if (lang === locale) return null;
            return (
              <div
                key={lang}
                onClick={() => langClick(lang)}
                className={classnames(s.dropdownItem, 'dark', s.langItem)}>
                <div className={classnames(s.flags, s[`flag-${lang}`], 'mr-5')} />
                <div>{lang}</div>
              </div>
            );
          })}
        </div>
      </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
