import { FC, PropsWithChildren } from 'react';
import { PropsWithStyle } from '../types/PropsWithStyle';
type Props = PropsWithStyle & PropsWithChildren & {
    disabled?: boolean;
};
export declare const Label: FC<Props>;
export {};
