import { jsx as _jsx } from "react/jsx-runtime";
import { cls } from '@goser/common';
import styles from './Button.module.css';
export const Button = ({ className, children, onClick, disabled, title }) => {
    return _jsx("button", { className: cls(className, styles.main), onClick: onClick, disabled: disabled, title: title, children: children });
};
