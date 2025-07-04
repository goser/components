import { type PropsWithChildren } from 'react';
import { type PropsWithStyle } from '../types';
type Props = {
    checked?: boolean;
    onChange?: (value: boolean) => void;
} & PropsWithStyle & PropsWithChildren;
export declare function Checkbox({ className, children, checked, onChange }: Props): import("react/jsx-runtime").JSX.Element;
export {};
