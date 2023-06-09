import { cls } from '@goser/common';
import { FC } from 'react';

type Props = {
    className?: string
};

export const Button: FC<Props> = ({ className }) => {
    return <button className={cls(className, 'main')}>

    </button>;
};