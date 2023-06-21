import { FC } from 'react';
import { PropsWithStyle } from '../types/PropsWithStyle';
type Props = {
    value: number;
    onChange?: (newValue: number) => void;
    min?: number | undefined;
    max?: number | undefined;
} & PropsWithStyle;
export declare const NumberInput: FC<Props>;
export {};
