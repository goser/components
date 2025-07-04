import { jsx as _jsx } from "react/jsx-runtime";
import { cls } from '@goser/common';
import {} from 'react';
import {} from '../types/PropsWithStyle';
import styles from './HBox.module.css';
export const HBox = ({ className, children }) => {
    return _jsx("div", { className: cls(className, styles.main), children: children });
};
