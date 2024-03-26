import { AnchorHTMLAttributes, FC } from "react";
import cn from "classnames";

import cls from './index.module.css';

interface TelephoneProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Telephone: FC<TelephoneProps> = (props) => {
  const { href, children, className } = props;

  if (!children) return null;

  return <a href={`tel:${href}`} className={cn(cls.Telephone, className)}>{children}</a>;
};
