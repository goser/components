import {cls} from '@goser/common'
import type {FC, PropsWithChildren} from 'react'
import type {PropsWithStyle} from '../types/PropsWithStyle'
import styles from './VBox.module.css'

type Props = PropsWithStyle & PropsWithChildren

export const VBox: FC<Props> = ({className, children}) => {
    return <div className={cls(className, styles.main)}>{children}</div>
}