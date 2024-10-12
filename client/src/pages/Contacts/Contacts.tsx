import cn from "classnames";

import { useQuery } from "@tanstack/react-query";
import { YaMap } from "features/YaMap";
import { Telephone } from "shared/ui/Telephone";
import { Text } from "shared/ui/Text";
import { ContactsService } from "services/ContactsService";
import { BackButton } from "shared/ui/BackButton/BackButton";

import { ReactComponent as ClockIcon } from "shared/assets/clock.svg";
import { ReactComponent as BusIcon } from "shared/assets/bus.svg";
import { ReactComponent as PointIcon } from "shared/assets/point.svg";

import cls from "./index.module.css";

const Contacts = () => {
  const { data: result } = useQuery(ContactsService.getContactsQuery());
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
      <BackButton to="/">Главная</BackButton>

      <div className={cls.Contacts}>
        <div className={cls.block}>
          <div className={cls.contactsBlock}>
            <h1 className={cls.heading}>Контакты:</h1>
            <div>
              <ul className={cls.contactsTelephonesList}>
                {telephones?.map((telephone, index) => (
                  <li className={cls.contactsTelephoneItem} key={telephone}>
                    {index !== 0 && <span className={cls.redDot} />}
                    <Telephone
                      className={cls.contactsTelephone}
                      href={telephone}
                    >
                      {telephone}
                    </Telephone>
                  </li>
                ))}
              </ul>
              <Text className={cn(cls.semibold, cls.address)}>{address}</Text>
            </div>
          </div>

          <div className={cls.contactsBlock}>
            <Text className={cls.workingHours} type={"semibold"}>
              <ClockIcon className={cn(cls.clock, cls.contactsIcon)} />
              Режим работы:
            </Text>

            <div className={cls.hours}>
              {openingHours?.map((hours) => (
                <div key={hours}>
                  {hours.split("&").map((item, index) => (
                    <Text
                      type={index === 0 ? "semibold" : undefined}
                      className={cls.noMargin}
                      key={item}
                    >
                      {item}
                    </Text>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className={cn(cls.contactsBlock, cls.scheme)}>
            <BusIcon className={cn(cls.contactsIcon, cls.busIcon)} />

            <div className={cls.dots} />

            <div className={cls.buses}>
              <div className={cls.transportText}>
                <Text className={cls.transportName} type="semibold">
                  Автобусы:
                </Text>
                {buses}
              </div>

              <div className={cls.transportText}>
                <Text className={cls.transportName} type="semibold">
                  Маршрутное такси:
                </Text>
                {shuttles}
              </div>
            </div>

            <PointIcon className={cn(cls.contactsIcon, cls.busStopIcon)} />
            <Text className={cls.busStop}>{busStop}</Text>
          </div>
        </div>

        <div className={cls.mapWrapper}>
          <YaMap className={cls.map} />
        </div>
      </div>
    </section>
  );
};

export default Contacts;