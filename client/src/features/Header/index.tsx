import cn from "classnames";
import { Logo } from "shared/ui/Logo";
// import { Button } from 'shared/ui/Button';
import { Nav } from "features/Nav";
import { Telephone } from "shared/ui/Telephone";
import { useInjection } from "inversify-react";
import { useQuery } from "@tanstack/react-query";
import { TelephonesService } from "services/TelephoneService";

import cls from "./index.module.css";

export const Header = () => {
  const telephoneService = useInjection(TelephonesService);

  const { data: telephones } = useQuery(telephoneService.getTelephonesQuery());
  const firtsTelephone =
    telephones?.data[0].attributes.telephone.split("&")[0];

  return (
    <header className={cn(cls.Header)}>
      <Logo />

      <Nav />

      <div className={cls.booking}>
        <Telephone href={firtsTelephone}>{firtsTelephone}</Telephone>
        {/* <Button>Забронировать</Button> */}
      </div>
    </header>
  );
};
