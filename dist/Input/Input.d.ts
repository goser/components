import { type FC, type HTMLInputTypeAttribute } from 'react';
import { type PropsWithStyle } from '../types/PropsWithStyle';
type Props = {
    value: string;
    onChange?: (value: string) => void;
    type?: HTMLInputTypeAttribute;
    onBlur?: () => void;
    min?: number | string;
    max?: number | string;
    placeholder?: string;
    invalid?: boolean;
    title?: string;
    autoFocus?: boolean;
    disabled?: boolean;
} & PropsWithStyle;
export declare const Input: FC<Props>;
export {};
