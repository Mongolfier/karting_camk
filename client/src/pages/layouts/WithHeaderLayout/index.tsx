import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "features/Header";
import { Footer } from "features/Footer";
import { BurgerMenu } from "features/BurgerMenu";

import cls from "./index.module.css";

export const WithHeaderLayout = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  function handleBurgerClick() {
    setIsBurgerOpen((prev) => !prev);
  }

  return (
    <>
      <div className={cls.WithHeaderLayout}>
        <div className={cls.container}>
          <Header
            handleBurgerClick={handleBurgerClick}
            isBurgerOpen={isBurgerOpen}
          />
          <main className={cls.content}>
            <Outlet />

            {isBurgerOpen && (
              <BurgerMenu
                isOpen={isBurgerOpen}
                handleToggleBurgerMenu={handleBurgerClick}
              />
            )}
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};
