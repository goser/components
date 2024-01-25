import { jsx as _jsx } from "react/jsx-runtime";
import styles from './HBox.module.css';
import { cls } from '@goser/common';
export const HBox = ({ className, children }) => {
    return _jsx("div", { className: cls(className, styles.main), children: children });
};
