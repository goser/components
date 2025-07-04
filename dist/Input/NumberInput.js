import { jsx as _jsx } from "react/jsx-runtime";
import {} from 'react';
import {} from '../types/PropsWithStyle';
import { Input } from './Input';
export const NumberInput = ({ className, value, onChange, min, max, invalid, disabled }) => {
    let onInputChange;
    let onBlur;
    if (onChange) {
        onInputChange = value => onChange(parseInt(value));
        onBlur = () => {
            let newValue = value;
            if (min !== undefined) {
                newValue = Math.max(min, newValue);
            }
            if (max !== undefined) {
                newValue = Math.min(max, newValue);
            }
            if (newValue !== value) {
                onChange(newValue);
            }
        };
    }
    return _jsx(Input, { className: className, disabled: disabled, value: value.toString(), onChange: onInputChange, type: 'number', onBlur: onBlur, min: min, max: max, invalid: invalid });
};
