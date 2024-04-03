import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { YaMap } from "features/YaMap";
import { Telephone } from "shared/ui/Telephone";
import { Text } from "shared/ui/Text";
import { ContactsServiceService } from "services/ContactsService";
import { ReactComponent as ClockIcon } from "shared/assets/clock.svg";
import { ReactComponent as BusIcon } from "shared/assets/bus.svg";
import { ReactComponent as PointIcon } from "shared/assets/point.svg";
import { ReactComponent as ArrowIcon } from "shared/assets/arrow.svg";

import cls from "./index.module.css";

export const Contacts = () => {
  const { data: result } = useQuery(
    ContactsServiceService.getContactsQuery()
  );
  const contacts = result?.data[0].attributes!;

  if (!contacts) {
    return <></>;
  }

  const telephones = contacts.telephone.split("&");
  const address = contacts.address;
  const openingHours = contacts.openingHours.split("&&");
  const buses = contacts.bus;
  const shuttles = contacts.shuttle;
  const busStop = contacts.busStop;

  return (
    <section className={cls.contactsWrapper}>
      <Link to={'/'} className={cls.buttonBack}><ArrowIcon className={cls.arrow} />Главная</Link>

      <div className={cls.Contacts}>

        <div className={cls.contactsWrapper}>
          <div>
            <h2>Контакты:</h2>
            <div>
              <ul>
                {telephones?.map((telephone) => (
                  <li>
                    <Telephone href={telephone}>{telephone}</Telephone>
                  </li>
                ))}
              </ul>
              <Text>{address}</Text>
            </div>
          </div>

          <div>
            <Text type={"semibold"}>
              <ClockIcon className={cls.clock} /> Часы работы:
            </Text>

            <div>
              {openingHours?.map((hours) => (
                <div>
                  {hours.split("&").map((item, index) => (
                    <Text type={index === 0 ? "semibold" : undefined}>
                      {item}
                    </Text>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div>
            <BusIcon />
            <Text>
              <Text type="semibold">Автобусы:</Text>
              {buses}
            </Text>
            <Text>
              <Text type="semibold">Маршрутное такси:</Text>
              {shuttles}
            </Text>
            <PointIcon />
            <Text>{busStop}</Text>
          </div>

          <p></p>
        </div>

        <div className={cls.map}>
          <YaMap />
        </div>
      </div>
    </section>
  );
};
