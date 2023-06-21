import {cls} from '@goser/common';
import {FC, MouseEventHandler, PropsWithChildren} from 'react';
import styles from './Button.module.css';
import {PropsWithStyle} from '../types/PropsWithStyle';

type Props = {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
} & PropsWithStyle & PropsWithChildren;

export const Button: FC<Props> = ({className, children, onClick}) => {
    return <button className={cls(className, styles.main)} onClick={onClick}>{children}</button>;
}; 