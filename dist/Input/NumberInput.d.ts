import { type PropsWithStyle } from '../types/PropsWithStyle';
type Props = {
    value: number;
    onChange?: (newValue: number) => void;
    min?: number | undefined;
    max?: number | undefined;
    invalid?: boolean;
    disabled?: boolean;
} & PropsWithStyle;
export declare function NumberInput({ className, value, onChange, min, max, invalid, disabled }: Props): import("react/jsx-runtime").JSX.Element;
export {};
