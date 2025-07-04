import {cls} from '@goser/common'
import {type FC, type PropsWithChildren} from 'react'
import {type PropsWithStyle} from '../types/PropsWithStyle'
import styles from './Label.module.css'

type Props = PropsWithStyle & PropsWithChildren & {
    disabled?: boolean
}

export const Label: FC<Props> = ({className, children, disabled}) => {
    return <div className={cls(className, styles.main, !disabled || styles.disabled)}>
        {children}
    </div>
}