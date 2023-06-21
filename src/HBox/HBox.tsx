import {FC, PropsWithChildren} from 'react';
import styles from './HBox.module.css';
import {cls} from '@goser/common';
import {PropsWithStyle} from '../types/PropsWithStyle';

type Props = PropsWithStyle & PropsWithChildren;

export const HBox: FC<Props> = ({className, children}) => {
    return <div className={cls(className, styles.main)}>{children}</div>;
};