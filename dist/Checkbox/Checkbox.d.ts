import { type FC, type PropsWithChildren } from 'react';
import { type PropsWithStyle } from '../types';
type Props = {
    checked?: boolean;
    onChange?: (value: boolean) => void;
} & PropsWithStyle & PropsWithChildren;
export declare const Checkbox: FC<Props>;
export {};
