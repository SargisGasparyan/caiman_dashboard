import en from './jsons/en.json';

const languages = {
  en,
};

const getActiveLanguage = lang => languages[lang] || languages['en'];

export default getActiveLanguage;
