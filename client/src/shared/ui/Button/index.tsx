import { ButtonHTMLAttributes, FC } from "react";
import cn from 'classnames';

import cls from './index.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, ...rest } = props; 

    return <button {...rest} className={cn(cls.Button, className)}>{children}</button>
}