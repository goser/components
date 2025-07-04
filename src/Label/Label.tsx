import {cls} from '@goser/common'
import {type PropsWithChildren} from 'react'
import {type PropsWithStyle} from '../types/PropsWithStyle'
import styles from './Label.module.css'

type Props = PropsWithStyle & PropsWithChildren & {
    disabled?: boolean
}

export function Label({className, children, disabled}: Props) {
    return <div className={cls(className, styles.main, !disabled || styles.disabled)}>
        {children}
    </div>
}