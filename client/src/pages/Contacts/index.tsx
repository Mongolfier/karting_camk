import { Telephone } from "shared/ui/Telephone";
import { Text } from "shared/ui/Text";
import { ReactComponent as ClockIcon } from "shared/assets/clock.svg";
import { ReactComponent as BusIcon } from "shared/assets/bus.svg";
import { ReactComponent as PointIcon } from "shared/assets/point.svg";

import cls from "./index.module.css";

export const Contacts = () => {
  return (
    <section className={cls.Contacts}>
      <div className={cls.contactsWrapper}>
        <div>
          <h2>Контакты:</h2>
          <div>
            <ul>
              <li>
                <Telephone href="+7(929) 519-42-17">
                  {"+7(929) 519-42-17"}
                </Telephone>
              </li>
              <li>
                <Telephone href="+7(929) 519-42-97">
                  {"+7(929) 519-42-97"}
                </Telephone>
              </li>
            </ul>
            <Text>
              124489, г. Москва, г. Зеленоград, Сосновая аллея, дом 4, строение
              3
            </Text>
          </div>
        </div>

        <div>
          <Text type={"semibold"}>
            <ClockIcon className={cls.clock} /> Часы работы:
          </Text>
          <div>
            <div>
              <Text type="semibold">Пн-Пт</Text>
              <Text>14:00 - 22:00</Text>
            </div>

            <div>
              <Text type="semibold">Сб, Вс, Праздники</Text>
              <Text>11:00 - 22:00</Text>
            </div>
          </div>
        </div>

        <div>
          <BusIcon />
          <Text>
            <Text type="semibold">Автобусы:</Text>1, 2, 27, 7
          </Text>
          <Text>
            <Text type="semibold">Маршрутное такси:</Text>903
          </Text>
          <PointIcon />
          <Text>
            Остановка <Text type="semibold">«Водоканал»</Text>
          </Text>
        </div>

        <p></p>
      </div>

      <div className={cls.map}>Карта</div>
    </section>
  );
};
