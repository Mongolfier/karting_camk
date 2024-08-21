import cx from "classnames";

import { useQuery } from "@tanstack/react-query";
import { StaffService } from "services/StaffService";
import { BackButton } from "shared/ui/BackButton/BackButton";
import { ReactComponent as PhoneIcon } from "shared/assets/phoneIcon.svg";
import { ReactComponent as EmailIcon } from "shared/assets/emailIcon.svg";
import { ReactComponent as TelegramIcon } from "shared/assets/telegramIcon.svg";
import { ReactComponent as WhatsUpIcon } from "shared/assets/whatsUpIcon.svg";

import cls from "./Staff.module.css";

export const Staff = () => {
  const baseUrl = process.env.REACT_APP_API_HOST;
  const { data: rawStaffList } = useQuery(StaffService.getStaffQuery());

  const staffList = rawStaffList?.data;

  return (
    <section className={cls.staffWrapper}>
      <BackButton to="/">Главная</BackButton>

      <div className={cls.container}>
        <h1 className={cls.header}>Сотрудники</h1>

        <div className={cls.Staff}>
          {staffList &&
            staffList.map((rawStaff) => {
              const photoUrl = `${baseUrl}${rawStaff.attributes.photo.data.attributes.formats.small.url}`;
              const staff = rawStaff.attributes;

              return (
                <div key={staff.fullName}>
                  <img src={photoUrl} className={cls.image} />
                  <p className={cx(cls.fullname)}>{staff.fullName}</p>
                  <p className={cx(cls.text, cls.responsibility)}>
                    {staff.responsibility}
                  </p>
                  {staff.phone && (
                    <div className={cls.contactWrapper}>
                      <PhoneIcon width={20} />
                      <a
                        href={`tel:${staff.phone}`}
                        target="_blank"
                        className={cls.text}
                      >
                        {staff.phone}
                      </a>
                    </div>
                  )}
                  {staff.email && (
                    <div className={cls.contactWrapper}>
                      <EmailIcon width={20} />
                      <a
                        href={`mailto:${staff.email}`}
                        target="_blank"
                        className={cls.text}
                      >
                        {staff.email}
                      </a>
                    </div>
                  )}
                  {staff.telegram && (
                    <div className={cls.contactWrapper}>
                      <TelegramIcon width={20} />
                      <a
                        href={staff.telegram}
                        target="_blank"
                        className={cls.text}
                      >
                        {staff.telegram}
                      </a>
                    </div>
                  )}
                  {staff.whatsUp && (
                    <div className={cls.contactWrapper}>
                      <WhatsUpIcon width={20} />
                      <a
                        href={`https://api.whatsapp.com/send?phone=${staff.whatsUp}`}
                        target="_blank"
                        className={cls.text}
                      >
                        {staff.whatsUp}
                      </a>
                    </div>
                  )}
                  <p className={cls.text}>{staff.workSchedule}</p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};
