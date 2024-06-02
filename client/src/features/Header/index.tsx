import { FC } from "react";
import cn from "classnames";
import { useQuery } from "@tanstack/react-query";
import { isDesktop } from "react-device-detect";

import { Logo } from "shared/ui/Logo";
import { Nav } from "features/Nav";
import { Telephone } from "shared/ui/Telephone";
import { ContactsService } from "services/ContactsService";
import { BurgerMenuButton } from "features/BurgerMenuButton";

import buttonCls from "shared/ui/Button/index.module.css";
import cls from "./index.module.css";

export interface HeaderProps {
  isBurgerOpen: boolean;
  handleBurgerClick: () => void;
}
export const Header: FC<HeaderProps> = (props) => {
  const { isBurgerOpen, handleBurgerClick } = props;

  const { data: contacts } = useQuery(ContactsService.getContactsQuery());
  const firtsTelephone = contacts?.data[0].attributes.telephone.split("&")[0];

  return (
    <header className={cn(cls.Header)}>
      <Logo
        className={cn(cls.headerLogo)}
        textClassName={cls.logoText}
        firstLexemClassName={cls.logoFirstLexem}
      />

      {isDesktop && <Nav className={cls.headerNav} />}

      <div className={cls.booking}>
        {isDesktop ? (
          <Telephone href={firtsTelephone}>{firtsTelephone}</Telephone>
        ) : (
          <div className={cls.rightSide}>
            <a
              className={cn(buttonCls.Button, cls.call)}
              href={`tel:${firtsTelephone}`}
            >
              Позвонить
            </a>
            <BurgerMenuButton
              isOpen={isBurgerOpen}
              handleIsOpenClick={handleBurgerClick}
            />
          </div>
        )}
      </div>
    </header>
  );
};
