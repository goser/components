import { FC, HTMLInputTypeAttribute } from 'react';
type Props = {
    value: string;
    onChange?: (value: string) => void;
    type?: HTMLInputTypeAttribute;
    onBlur?: () => void;
    min?: number | string;
    max?: number | string;
    placeholder?: string;
};
export declare const Input: FC<Props>;
export {};
