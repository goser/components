import { FC, MouseEventHandler, PropsWithChildren } from 'react';
import { PropsWithStyle } from '../types/PropsWithStyle';
type Props = {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
} & PropsWithStyle & PropsWithChildren;
export declare const Button: FC<Props>;
export {};
