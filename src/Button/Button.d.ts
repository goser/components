import { FC, MouseEventHandler, PropsWithChildren } from 'react';
type Props = {
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
} & PropsWithChildren;
export declare const Button: FC<Props>;
export {};
