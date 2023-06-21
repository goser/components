import { FC, HTMLInputTypeAttribute } from 'react';
import { PropsWithStyle } from '../types/PropsWithStyle';
type Props = {
    value: string;
    onChange?: (value: string) => void;
    type?: HTMLInputTypeAttribute;
    onBlur?: () => void;
    min?: number | string;
    max?: number | string;
    placeholder?: string;
    invalid?: boolean;
} & PropsWithStyle;
export declare const Input: FC<Props>;
export {};
