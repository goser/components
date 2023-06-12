import {cls} from '@goser/common';
import {FC} from 'react';
import styles from './Button.module.css';

type Props = {
    className?: string;
    label?: string;
};

export const Button: FC<Props> = ({className, label}) => {
    return <button className={cls(className, styles.main)}>
        <span className={cls(styles.label)}>{label}</span>
    </button>;
};