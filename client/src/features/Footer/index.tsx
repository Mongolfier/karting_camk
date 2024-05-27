import { useQuery } from "@tanstack/react-query";
import { isDesktop } from "react-device-detect";
import cn from "classnames";
import { ContactsServiceService } from "services/ContactsService";
import { Nav } from "features/Nav";
import { Text } from "shared/ui/Text";
import { Logo } from "shared/ui/Logo";
import { Telephone } from "shared/ui/Telephone";

import cls from "./index.module.css";

export const Footer = () => {
  const { data: result } = useQuery(ContactsServiceService.getContactsQuery());
  const supportEmail = result?.data[0].attributes.supportEmail;
  const telephones = result?.data[0].attributes.telephone.split("&");
  const address = result?.data[0].attributes.address;

  return (
    <footer className={cls.Footer}>
      <div className={cls.footerWrapper}>
        <div className={cls.footerBlock}>
          <h3 className={cls.footerHeader}>Контакты</h3>

          <ul className={cls.footerTelephonesList}>
            {telephones?.map((telephone, index) => (
              <li className={cls.contactsTelephoneItem} key={telephone}>
                {index !== 0 && <span className={cls.redDot} />}
                <Telephone className={cls.contactsTelephone} href={telephone}>
                  {telephone}
                </Telephone>
              </li>
            ))}
          </ul>

          <Text className={cls.address}>{address}</Text>
        </div>
        <div className={cls.footerBlock}>
          <h3 className={cls.footerHeader}>Карта сайта</h3>
          <Nav className={cls.footerNav} classNameItem={cls.footerNavItem} />
        </div>
        <div className={cn(cls.footerBlock, cls.textBlock)}>
          <Logo
            className={cls.logoIcon}
            containerClassName={cls.footerLogo}
            firstLexemClassName={cls.firstLexem}
          />

          <Text className={cls.subscription}>ПОУ ЦАМК ДОСААФ России, 2024</Text>

          {isDesktop && <hr className={cls.divider} />}

          <Text className={cls.support}>
            По вопросам пожеланиям и ошибкам на сайте пишите на почту&nbsp;
            <a className={cls.link} href={`mailto:${supportEmail}`}>
              {supportEmail}
            </a>
          </Text>
        </div>
      </div>
    </footer>
  );
};
