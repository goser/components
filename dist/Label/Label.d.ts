import { type PropsWithChildren } from 'react';
import { type PropsWithStyle } from '../types/PropsWithStyle';
type Props = PropsWithStyle & PropsWithChildren & {
    disabled?: boolean;
};
export declare function Label({ className, children, disabled }: Props): import("react/jsx-runtime").JSX.Element;
export {};
