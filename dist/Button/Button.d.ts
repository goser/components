import { type FC, type MouseEventHandler, type PropsWithChildren } from 'react';
import { type PropsWithStyle } from '../types/PropsWithStyle';
type Props = {
    autoFocus?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    disabled?: boolean;
    title?: string;
} & PropsWithStyle & PropsWithChildren;
export declare const Button: FC<Props>;
export {};
