import {ChangeEventHandler, FC, HTMLInputTypeAttribute} from 'react';
import styles from './Input.module.css';
import {PropsWithStyle} from '../types/PropsWithStyle';
import {cls} from '@goser/common';

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

export const Input: FC<Props> = ({className, value, onChange, type, onBlur, max, min, placeholder, invalid}) => {
    const onInputChange: ChangeEventHandler<HTMLInputElement> | undefined = onChange ? (event) => {
        onChange(event.currentTarget.value);
    } : undefined;
    return <input
        className={cls(className, styles.main, invalid && styles.invalid)}
        type={type || 'text'}
        value={value}
        onChange={onInputChange}
        onBlur={onBlur}
        max={max}
        min={min}
        placeholder={placeholder}
    />;
};