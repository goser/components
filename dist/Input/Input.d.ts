import { type HTMLInputTypeAttribute } from 'react';
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
export declare function Input({ className, value, onChange, type, onBlur, max, min, placeholder, invalid, title, autoFocus, disabled }: Props): import("react/jsx-runtime").JSX.Element;
export {};
