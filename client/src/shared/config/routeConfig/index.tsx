import { createBrowserRouter, RouteObject } from 'react-router-dom'
import { Contacts } from 'pages/Contacts';

export enum AppRoutes {
  MAIN = 'main',
  CONTACTS = 'contacts',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.CONTACTS]: '/contacts',
  [AppRoutes.NOT_FOUND]: '*'
}

const routeConfig: RouteObject[] = [
  {
    path: RoutePath.main,
    element: <>MAIN PAGE</>
  },
  {
    path: RoutePath.contacts,
    element: <Contacts />
  },
  {
    path: RoutePath.not_found,
    element: <>NOT FOUND</>
  }
];

export const router = createBrowserRouter(routeConfig);