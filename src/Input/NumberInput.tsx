import { FC } from 'react';
import { Input } from './Input';

type Props = {
    value: number
    onChange?: (newValue: number) => void
    min?: number | undefined;
    max?: number | undefined;
}

export const NumberInput: FC<Props> = ({ value, onChange, min, max }) => {
    let onInputChange: ((value: string) => void) | undefined;
    let onBlur: VoidFunction | undefined;
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
    return <Input value={value.toString()} onChange={onInputChange} type='number' onBlur={onBlur} min={min} max={max} />
}