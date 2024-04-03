import cn from "classnames";
import { Logo } from "shared/ui/Logo";
// import { Button } from 'shared/ui/Button';
import { Nav } from "features/Nav";
import { Telephone } from "shared/ui/Telephone";
import { useQuery } from "@tanstack/react-query";
import { ContactsServiceService } from "services/ContactsService";

import cls from "./index.module.css";

export const Header = () => {
  const { data: contacts } = useQuery(
    ContactsServiceService.getContactsQuery()
  );
  const firtsTelephone = contacts?.data[0].attributes.telephone.split("&")[0];

  return (
    <header className={cn(cls.Header)}>
      <Logo className={cls.headerLogo} />

      <Nav className={cls.headerNav} />

      <div className={cls.booking}>
        <Telephone href={firtsTelephone}>{firtsTelephone}</Telephone>
        {/* <Button>Забронировать</Button> */}
      </div>
    </header>
  );
};
