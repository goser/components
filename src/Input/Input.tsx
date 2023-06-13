import { ChangeEventHandler, FC, HTMLInputTypeAttribute } from 'react';
import styles from './Input.module.css';

type Props = {
    value: string
    onChange?: (value: string) => void
    type?: HTMLInputTypeAttribute | undefined;
    onBlur?: () => void
    min?: number | string | undefined;
    max?: number | string | undefined;
};

export const Input: FC<Props> = ({ value, onChange, type, onBlur, max, min }) => {
    const onInputChange: ChangeEventHandler<HTMLInputElement> | undefined = onChange ? (event) => {
        onChange(event.currentTarget.value);
    } : undefined;
    return <input type={type || 'text'} className={styles.main} value={value} onChange={onInputChange} onBlur={onBlur} max={max} min={min} />;
}