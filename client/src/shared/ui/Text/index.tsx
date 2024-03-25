import { FC, HTMLAttributes } from "react";
import cn from "classnames";

import cls from "./index.module.css";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
    type?: 'semibold'
}
export const Text: FC<TextProps> = (props) => {
  const { className, children, type, ...rest } = props;

  return (
    <p {...rest} className={cn(cls.Text, className, {[cls.semibold]: type === 'semibold'})}>
      {children}
    </p>
  );
};
