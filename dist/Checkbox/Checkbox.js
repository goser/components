import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cls } from '@goser/common';
import {} from 'react';
import {} from '../types';
import styles from './Checkbox.module.css';
export function Checkbox({ className, children, checked, onChange }) {
    const onInputChange = onChange ? (event) => {
        onChange(event.target.checked);
    } : undefined;
    return _jsxs("label", { className: cls(className, styles.main), children: [_jsx("input", { type: 'checkbox', className: styles.checkbox, checked: checked, onChange: onInputChange }), _jsx("span", { children: children })] });
}
