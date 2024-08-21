import { createBrowserRouter } from "react-router-dom";
import { Contacts } from "pages/Contacts";
import { WithHeaderLayout } from "pages/layouts/WithHeaderLayout";
import { ErrorPage } from "pages/ErrorPage";
import { New } from "pages/New/New";
import { MainPage } from "pages/Main/MainPage";
import { Staff } from "pages/Staff/Staff";

export enum AppRoutes {
  MAIN = "main",
  ARTICLE = "article",
  STAFF = "staff",
  CONTACTS = "contacts",
  SERVICES = "services",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ARTICLE]: "/article/:id",
  [AppRoutes.STAFF]: "/staff",
  [AppRoutes.CONTACTS]: "/contacts",
  [AppRoutes.SERVICES]: "/services",
  [AppRoutes.NOT_FOUND]: "*",
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <WithHeaderLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: RoutePath.article,
        element: <New />,
      },
      {
        path: RoutePath.staff,
        element: <Staff />,
      },
      {
        path: RoutePath.contacts,
        element: <Contacts />,
      },
      {
        path: RoutePath.not_found,
        element: <>NOT FOUND</>,
      },
    ],
  },
  {
    path: "*",
    element: <>NOT FOUND</>,
  },
]);
