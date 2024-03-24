import { NavLink } from "shared/ui/NavLink";
import { navConfig } from "./config";

import cls from "./index.module.css";

export const Nav = () => {
  return (
    <ul className={cls.NavBar}>
      {navConfig.map((navLink) => (
        <li>{<NavLink to={navLink.link} className={cls.NavBarItem}>{navLink.title}</NavLink>}</li>
      ))}
    </ul>
  );
};
