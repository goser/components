import { type PropsWithChildren } from 'react';
export declare const useWordingContext: () => {};
type WordingResolver = (locale: string) => Promise<any>;
type Props = PropsWithChildren & {
    wordingResolver: WordingResolver;
};
export declare function WordingContextProvider({ children, wordingResolver }: Props): import("react/jsx-runtime").JSX.Element;
export {};
