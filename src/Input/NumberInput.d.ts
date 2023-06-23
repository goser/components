import { FC } from 'react';
import { PropsWithStyle } from '../types/PropsWithStyle';
type Props = {
    value: number;
    onChange?: (newValue: number) => void;
    min?: number | undefined;
    max?: number | undefined;
    invalid?: boolean;
} & PropsWithStyle;
export declare const NumberInput: FC<Props>;
export {};
