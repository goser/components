import { jsx as _jsx } from "react/jsx-runtime";
import { cls } from '@goser/common';
import styles from './Label.module.css';
export const Label = ({ className, children, disabled }) => {
    return _jsx("div", { className: cls(className, styles.main, !disabled || styles.disabled), children: children });
};
