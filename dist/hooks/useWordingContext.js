import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState } from 'react';
import { useLocale } from './useLocale';
const DEFAULT = {};
const CONTEXT = createContext(DEFAULT);
export const useWordingContext = () => useContext(CONTEXT);
export const WordingContextProvider = ({ children, wordingResolver }) => {
    const locale = useLocale();
    const [value, setValue] = useState(DEFAULT);
    useEffect(() => {
        let resultHandler = (result) => setValue(result.default);
        let errorHandler = (reason) => {
            console.log(`Failed to load wordings for locale ${locale}. Reason:`, reason);
            setValue(DEFAULT);
        };
        wordingResolver(locale)
            .then(resultHandler)
            .catch(errorHandler);
        return () => {
            resultHandler = () => { };
            errorHandler = () => { };
        };
    }, [locale, wordingResolver]);
    const Provider = CONTEXT.Provider;
    return _jsx(Provider, { value: value, children: value !== DEFAULT && children });
};
