import { createContext, useState, useMemo, useCallback } from 'react';

export type LanguageContextData = {
  userLocale: string;
  setUserLocale: (locale: string) => void;
};

export const languageDefaultValue: LanguageContextData = {
  userLocale: 'en-US',
  setUserLocale: () => null,
};

export const LanguageContext = createContext<LanguageContextData>(
  languageDefaultValue
);

export const useLanguageContextValue = (): LanguageContextData => {
  const [userLocale, setUserLanguage] = useState(
    languageDefaultValue.userLocale
  );

  const setUserLocale = useCallback(
    async (locale: string) => {
      setUserLanguage(locale);
    },
    [setUserLanguage]
  );

  return useMemo(
    () => ({
      userLocale,
      setUserLocale,
    }),
    [userLocale, setUserLocale]
  );
};
