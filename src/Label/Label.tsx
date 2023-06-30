import {cls} from '@goser/common';
import {FC, PropsWithChildren} from 'react';
import {PropsWithStyle} from '../types/PropsWithStyle';
import styles from './Label.module.css';

type Props = PropsWithStyle & PropsWithChildren & {
    disabled?: boolean;
};

export const Label: FC<Props> = ({className, children, disabled}) => {
    return <div className={cls(className, styles.main, !disabled || styles.disabled)}>
        {children}
    </div>;
};