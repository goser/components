import { FC, MouseEventHandler, PropsWithChildren } from 'react';
import { PropsWithStyle } from '../types/PropsWithStyle';
type Props = {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    disabled?: boolean;
    title?: string;
} & PropsWithStyle & PropsWithChildren;
export declare const Button: FC<Props>;
export {};