import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { WithHeaderLayout } from "pages/layouts/WithHeaderLayout";
import { MainPage } from "pages/Main/MainPage";
import { RoutePath } from "./routes";

const Staff = lazy(() => import("pages/Staff/Staff"));
const New = lazy(() => import("pages/New/New"));
const Contacts = lazy(() => import("pages/Contacts/Contacts"));
const ErrorPage = lazy(() => import("pages/ErrorPage"));
const Services = lazy(() => import("pages/Services/Services"));

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
        path: RoutePath.services,
        element: <Services />,
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
