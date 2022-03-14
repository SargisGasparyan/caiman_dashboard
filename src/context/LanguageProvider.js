import React, { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import getActiveLanguage from '../assets/languages';

const LanguageContext = React.createContext({});

const LanguageProvider = ({ children }) => {
  const [ languageData, setLanguageData ] = useState(getActiveLanguage());
  const { locale } = useSelector(state => state.userInfo);

  const t = text => languageData[text] || text;

  useEffect(() => {
    if (locale) {
      setLanguageData(getActiveLanguage(locale.toLowerCase()));
    }
  }, [ locale ]);

  return (
    <LanguageContext.Provider value={{ t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);

export default LanguageProvider;
