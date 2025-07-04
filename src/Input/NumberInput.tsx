import {type PropsWithStyle} from '../types/PropsWithStyle'
import {Input} from './Input'

type Props = {
    value: number
    onChange?: (newValue: number) => void
    min?: number | undefined
    max?: number | undefined
    invalid?: boolean
    disabled?: boolean
} & PropsWithStyle

export function NumberInput({className, value, onChange, min, max, invalid, disabled}: Props) {
    let onInputChange: ((value: string) => void) | undefined
    let onBlur: VoidFunction | undefined
    if (onChange) {
        onInputChange = value => onChange(parseInt(value))
        onBlur = () => {
            let newValue = value
            if (min !== undefined) {
                newValue = Math.max(min, newValue)
            }
            if (max !== undefined) {
                newValue = Math.min(max, newValue)
            }
            if (newValue !== value) {
                onChange(newValue)
            }
        }
    }
    return <Input
        className={className}
        disabled={disabled}
        value={value.toString()}
        onChange={onInputChange}
        type='number'
        onBlur={onBlur}
        min={min}
        max={max}
        invalid={invalid} />
}