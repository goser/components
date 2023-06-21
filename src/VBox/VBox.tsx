import {cls} from '@goser/common';
import {FC, PropsWithChildren} from 'react';
import styles from './VBox.module.css';
import {PropsWithStyle} from '../types/PropsWithStyle';

type Props = PropsWithStyle & PropsWithChildren;

export const VBox: FC<Props> = ({className, children}) => {
    return <div className={cls(className, styles.main)}>{children}</div>;
};