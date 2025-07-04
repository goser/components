import {cls} from '@goser/common'
import {type MouseEventHandler, type PropsWithChildren} from 'react'
import {type PropsWithStyle} from '../types/PropsWithStyle'
import styles from './Button.module.css'

type Props = {
    autoFocus?: boolean
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
    disabled?: boolean
    title?: string
} & PropsWithStyle & PropsWithChildren

export function Button({className, children, onClick, disabled, title, autoFocus}: Props) {
    return <button
        autoFocus={autoFocus}
        className={cls(className, styles.main)}
        onClick={onClick}
        disabled={disabled}
        title={title}
    >{children}</button>
} 