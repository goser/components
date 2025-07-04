import {cls} from '@goser/common'
import {type ChangeEventHandler, type PropsWithChildren} from 'react'
import {type PropsWithStyle} from '../types'
import styles from './Checkbox.module.css'

type Props = {
    checked?: boolean
    onChange?: (value: boolean) => void
} & PropsWithStyle & PropsWithChildren

export function Checkbox({className, children, checked, onChange}: Props) {
    const onInputChange: ChangeEventHandler<HTMLInputElement> | undefined = onChange ? (event) => {
        onChange(event.target.checked)
    } : undefined
    return <label className={cls(className, styles.main)}>
        <input type='checkbox' className={styles.checkbox} checked={checked} onChange={onInputChange} />
        <span>{children}</span>
    </label>
}  