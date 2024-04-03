import { Header } from "features/Header";
import { Footer } from "features/Footer";
import { Outlet } from "react-router-dom";

import cls from "./index.module.css";

export const WithHeaderLayout = () => {
  return (
    <>
      <div className={cls.WithHeaderLayout}>
        <Header />
        <div className={cls.content}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};
