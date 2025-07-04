import { type FC } from 'react';
import { type PropsWithStyle } from '../types/PropsWithStyle';
type Props = {
    value: number;
    onChange?: (newValue: number) => void;
    min?: number | undefined;
    max?: number | undefined;
    invalid?: boolean;
    disabled?: boolean;
} & PropsWithStyle;
export declare const NumberInput: FC<Props>;
export {};
