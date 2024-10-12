import { RoutePath } from "shared/config/routeConfig/routes";

interface NavConfigIte {
  title: string;
  link: string;
}

export const navConfig: NavConfigIte[] = [
  {
    title: "Главная",
    link: RoutePath.main,
  },
  {
    title: "Услуги",
    link: RoutePath.services,
  },
  {
    title: "Сотрудники",
    link: RoutePath.staff,
  },
  // {
  //     title: 'Новости',
  //     link: '/karting',
  // },
  {
    title: "Контакты",
    link: RoutePath.contacts,
  },
];
