import { type FC, type PropsWithChildren } from 'react';
export declare const useWordingContext: () => {};
type WordingResolver = (locale: string) => Promise<any>;
type Props = PropsWithChildren & {
    wordingResolver: WordingResolver;
};
export declare const WordingContextProvider: FC<Props>;
export {};
