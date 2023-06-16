import {ChangeEventHandler, FC, HTMLInputTypeAttribute} from 'react';
import styles from './Input.module.css';

type Props = {
    value: string;
    onChange?: (value: string) => void;
    type?: HTMLInputTypeAttribute;
    onBlur?: () => void;
    min?: number | string;
    max?: number | string;
    placeholder?: string;
};

export const Input: FC<Props> = ({value, onChange, type, onBlur, max, min, placeholder}) => {
    const onInputChange: ChangeEventHandler<HTMLInputElement> | undefined = onChange ? (event) => {
        onChange(event.currentTarget.value);
    } : undefined;
    return <input
        type={type || 'text'}
        className={styles.main}
        value={value}
        onChange={onInputChange}
        onBlur={onBlur}
        max={max}
        min={min}
        placeholder={placeholder}
    />;
};