import { type MouseEventHandler, type PropsWithChildren } from 'react';
import { type PropsWithStyle } from '../types/PropsWithStyle';
type Props = {
    autoFocus?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    disabled?: boolean;
    title?: string;
} & PropsWithStyle & PropsWithChildren;
export declare function Button({ className, children, onClick, disabled, title, autoFocus }: Props): import("react/jsx-runtime").JSX.Element;
export {};
