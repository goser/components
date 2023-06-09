import { cls } from '@goser/common';
import { FC } from 'react';

type Props = {
    className?: string
    label?: string
};

export const Button: FC<Props> = ({ className, label }) => {
    return <button className={cls(className, 'main')}>
        {label}
    </button>;
};