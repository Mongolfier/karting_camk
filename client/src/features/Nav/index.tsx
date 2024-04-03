import { FC } from "react";
import cn from "classnames";
import { NavLink } from "shared/ui/NavLink";
import { navConfig } from "./config";

import cls from "./index.module.css";

interface NavProps {
  className?: string;
  classNameItem?: string;
}
export const Nav: FC<NavProps> = (props) => {
  const { className, classNameItem } = props;

  return (
    <ul className={cn(cls.NavBar, className)}>
      {navConfig.map((navLink) => (
        <li key={navLink.title} className={cls.NavBarItem}>
          {
            <NavLink
              to={navLink.link}
              className={cn(cls.NavBarItem, classNameItem)}
            >
              {navLink.title}
            </NavLink>
          }
        </li>
      ))}
    </ul>
  );
};
