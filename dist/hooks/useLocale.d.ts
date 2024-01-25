import { FC, PropsWithChildren } from 'react';
export declare const useLocale: () => string;
type Props = {
    locale: string;
} & PropsWithChildren;
export declare const LocaleContextProvider: FC<Props>;
export {};
