import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "features/Header";
import { Footer } from "features/Footer";

import cls from "./index.module.css";
import { BurgerMenu } from "features/BurgerMenu";

export const WithHeaderLayout = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  function handleBurgerClick() {
    setIsBurgerOpen((prev) => !prev);
  }

  return (
    <>
      <div className={cls.WithHeaderLayout}>
        <Header
          handleBurgerClick={handleBurgerClick}
          isBurgerOpen={isBurgerOpen}
        />
        <main className={cls.content}>
          <Outlet />

          {isBurgerOpen && <BurgerMenu isOpen={isBurgerOpen} />}
        </main>
        <Footer />
      </div>
    </>
  );
};
