import {cls} from '@goser/common';
import {FC, MouseEventHandler, PropsWithChildren} from 'react';
import styles from './Button.module.css';
import {PropsWithStyle} from '../types/PropsWithStyle';

type Props = {
    autoFocus?: boolean
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    disabled?: boolean;
    title?: string;
} & PropsWithStyle & PropsWithChildren;

export const Button: FC<Props> = ({className, children, onClick, disabled, title, autoFocus}) => {
    return <button
        autoFocus={autoFocus}
        className={cls(className, styles.main)}
        onClick={onClick}
        disabled={disabled}
        title={title}
    >{children}</button>;
}; 