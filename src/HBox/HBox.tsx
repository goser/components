import {cls} from '@goser/common'
import {type FC, type PropsWithChildren} from 'react'
import {type PropsWithStyle} from '../types/PropsWithStyle'
import styles from './HBox.module.css'

type Props = PropsWithStyle & PropsWithChildren

export const HBox: FC<Props> = ({className, children}) => {
    return <div className={cls(className, styles.main)}>{children}</div>
}