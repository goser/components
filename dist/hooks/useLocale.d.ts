import { type PropsWithChildren } from 'react';
export declare const useLocale: () => string;
type Props = {
    locale: string;
} & PropsWithChildren;
export declare function LocaleContextProvider({ children, locale }: Props): import("react/jsx-runtime").JSX.Element;
export {};
