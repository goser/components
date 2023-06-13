import { FC, HTMLInputTypeAttribute } from 'react';
type Props = {
    value: string;
    onChange?: (value: string) => void;
    type?: HTMLInputTypeAttribute | undefined;
    onBlur?: () => void;
    min?: number | string | undefined;
    max?: number | string | undefined;
};
export declare const Input: FC<Props>;
export {};
