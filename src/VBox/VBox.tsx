import {cls} from '@goser/common'
import type {PropsWithChildren} from 'react'
import type {PropsWithStyle} from '../types/PropsWithStyle'
import styles from './VBox.module.css'

type Props = PropsWithStyle & PropsWithChildren

export function VBox({className, children}: Props) {
    return <div className={cls(className, styles.main)}>{children}</div>
}