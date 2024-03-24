import { Header } from "features/Header";
import { Outlet } from "react-router-dom";

import cls from "./index.module.css";

export const WithHeaderLayout = () => {
  return (
    <div className={cls.WithHeaderLayout}>
      <Header />
      <Outlet />
    </div>
  );
};
