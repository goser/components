import {cls} from '@goser/common'
import {type PropsWithChildren} from 'react'
import {type PropsWithStyle} from '../types/PropsWithStyle'
import styles from './HBox.module.css'

type Props = PropsWithStyle & PropsWithChildren

export function HBox({className, children}: Props) {
    return <div className={cls(className, styles.main)}>{children}</div>
}