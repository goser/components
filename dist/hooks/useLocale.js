import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
const DEFAULT_VALUE = 'en';
const CONTEXT = createContext(DEFAULT_VALUE);
export const useLocale = () => useContext(CONTEXT);
export function LocaleContextProvider({ children, locale }) {
    const Provider = CONTEXT.Provider;
    return _jsx(Provider, { value: locale, children: children });
}
