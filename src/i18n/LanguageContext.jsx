import React, { createContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const LanguageContext = createContext({});

export const LanguageProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [lang, setLang] = useState('es');

  // helper: update query string without reloading
  const updateUrlLang = (newLang) => {
    const params = new URLSearchParams(location.search);
    params.set('lang', newLang);
    // remove shorthand flags in case they were used
    params.delete('en');
    params.delete('es');
    navigate({ pathname: location.pathname, search: params.toString() }, { replace: true });
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    let urlLang = params.get('lang');
    if (!urlLang) {
      // support shorthand like ?en or ?es
      if (params.has('en')) urlLang = 'en';
      if (params.has('es')) urlLang = 'es';
    }
    if (urlLang && ['en', 'es'].includes(urlLang)) {
      setLang(urlLang);
    } else {
      // no param; detect from browser
      const browser = (navigator.language || navigator.userLanguage || '').toLowerCase();
      const detected = browser.startsWith('en') ? 'en' : 'es';
      setLang(detected);
      updateUrlLang(detected);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  const changeLanguage = (newLang) => {
    if (newLang === lang) return;
    setLang(newLang);
    updateUrlLang(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => React.useContext(LanguageContext);
