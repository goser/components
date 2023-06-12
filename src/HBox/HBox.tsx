import {FC, PropsWithChildren} from 'react';
import styles from './HBox.module.css';
import {cls} from '@goser/common';

type Props = {
    className?: string;
} & PropsWithChildren;

export const HBox: FC<Props> = ({className, children}) => {
    return <div className={cls(className, styles.main)}>{children}</div>;
};