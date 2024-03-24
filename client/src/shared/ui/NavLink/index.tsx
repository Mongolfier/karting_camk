import { FC } from "react";
import {
  NavLink as NavRouterLink,
  NavLinkProps as NavRouterLinkProps,
} from "react-router-dom";
import cn from "classnames";

import cls from "./inedx.module.css";

interface NavLinkProps extends NavRouterLinkProps {}
export const NavLink: FC<NavLinkProps> = (props) => {
  const { className, ...rest } = props;

  return <NavRouterLink {...rest} className={cn(cls.NavLink, className)} />;
};
