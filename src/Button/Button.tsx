import {cls} from '@goser/common';
import {FC, MouseEventHandler, PropsWithChildren} from 'react';
import styles from './Button.module.css';
import {PropsWithStyle} from '../types/PropsWithStyle';

type Props = {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    disabled?: boolean;
} & PropsWithStyle & PropsWithChildren;

export const Button: FC<Props> = ({className, children, onClick, disabled}) => {
    return <button
        className={cls(className, styles.main)}
        onClick={onClick}
        disabled={disabled}>{children}</button>;
}; 