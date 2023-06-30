import {cls} from '@goser/common';
import {ChangeEventHandler, FC, HTMLInputTypeAttribute} from 'react';
import {PropsWithStyle} from '../types/PropsWithStyle';
import styles from './Input.module.css';

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

export const Input: FC<Props> = ({className, value, onChange, type, onBlur, max, min, placeholder, invalid, title, autoFocus, disabled}) => {
    const onInputChange: ChangeEventHandler<HTMLInputElement> | undefined = onChange ? (event) => {
        onChange(event.currentTarget.value);
    } : undefined;
    return <input
        className={cls(className, styles.main, invalid && styles.invalid)}
        disabled={disabled}
        type={type || 'text'}
        value={value}
        onChange={onInputChange}
        onBlur={onBlur}
        max={max}
        min={min}
        placeholder={placeholder}
        title={title}
        autoFocus={autoFocus}
    />;
};