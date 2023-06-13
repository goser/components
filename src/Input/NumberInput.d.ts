import { FC } from 'react';
type Props = {
    value: number;
    onChange?: (newValue: number) => void;
    min?: number | undefined;
    max?: number | undefined;
};
export declare const NumberInput: FC<Props>;
export {};
