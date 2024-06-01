import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import cls from "./BackButton.module.css";
import { ReactComponent as ArrowIcon } from "shared/assets/arrow.svg";

export interface BackButtonProps extends PropsWithChildren {
  to: string;
  className?: string;
}
export const BackButton: FC<BackButtonProps> = (props) => {
  const { to, className, children } = props;

  return (
    <Link to={to} className={cn(cls.buttonBack, className)}>
      <ArrowIcon className={cls.arrow} />
      {children}
    </Link>
  );
};
