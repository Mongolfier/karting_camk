import { Nav } from "features/Nav";
import { Logo } from "shared/ui/Logo";

import cls from "./index.module.css";

export const Footer = () => {
  return (
    <section className={cls.Footer}>
      <h2 className={"visually-hidden"}>Подвал/футер сайта</h2>

      <div className={cls.footerWrapper}>
        <div className={cls.footerBlock}>
          <h3 className={cls.footerHeader}>Контакты</h3>
        </div>
        <div className={cls.footerBlock}>
          <h3 className={cls.footerHeader}>Карта сайта</h3>
          <Nav className={cls.footerNav} classNameItem={cls.footerNavItem} />
        </div>
        <div className={cls.footerBlock}>
          <Logo />
        </div>
      </div>
    </section>
  );
};
