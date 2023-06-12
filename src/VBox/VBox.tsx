import {cls} from '@goser/common';
import {FC, PropsWithChildren} from 'react';
import styles from './VBox.module.css'

type Props = {
    className?: string;
} & PropsWithChildren;

export const VBox: FC<Props> = ({className, children}) => {
    return <div className={cls(className, styles.main)}>{children}</div>;
};