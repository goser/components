import { jsx as _jsx } from "react/jsx-runtime";
import { cls } from '@goser/common';
import styles from './VBox.module.css';
export const VBox = ({ className, children }) => {
    return _jsx("div", { className: cls(className, styles.main), children: children });
};
