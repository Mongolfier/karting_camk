import { createBrowserRouter } from 'react-router-dom'
import { Contacts } from 'pages/Contacts';
import { WithHeaderLayout } from 'pages/layouts/WithHeaderLayout';
import { ErrorPage } from 'pages/ErrorPage';

import { NewsList } from 'pages/NewsList/NewsList';
import { New } from 'pages/New/New';

export enum AppRoutes {
  MAIN = 'main',
  CONTACTS = 'contacts',
  KARTING = 'karting',
  SERVICES = 'services',
  NOT_FOUND = 'not_found',
  ARTICLE = 'article'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.CONTACTS]: '/contacts',
  [AppRoutes.KARTING]: '/karting',
  [AppRoutes.SERVICES]: '/services',
  [AppRoutes.ARTICLE]: '/article/:id',
  [AppRoutes.NOT_FOUND]: '*'
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <WithHeaderLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <NewsList />,
      },
      {
        path: RoutePath.article,
        element: <New />
      },
      // {
      //   path: RoutePath.karting,
      //   element: <>Картинг</>,
      // },
      // {
      //   path: RoutePath.services,
      //   element: <>Услуги</>,
      // },
      {
        path: RoutePath.contacts,
        element: <Contacts />
      },
      {
        path: RoutePath.not_found,
        element: <>NOT FOUND</>
      }
    ],
  },
  {
    path: "*",
    element: <>NOT FOUND</>,
  },
]);
