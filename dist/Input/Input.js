import { jsx as _jsx } from "react/jsx-runtime";
import { cls } from '@goser/common';
import styles from './Input.module.css';
export const Input = ({ className, value, onChange, type, onBlur, max, min, placeholder, invalid, title, autoFocus, disabled }) => {
    const onInputChange = onChange ? (event) => {
        onChange(event.currentTarget.value);
    } : undefined;
    return _jsx("input", { className: cls(className, styles.main, invalid && styles.invalid), disabled: disabled, type: type || 'text', value: value, onChange: onInputChange, onBlur: onBlur, max: max, min: min, placeholder: placeholder, title: title, autoFocus: autoFocus });
};
