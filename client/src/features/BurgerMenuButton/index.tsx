import { FC } from "react";
import cn from "classnames";

import cls from "./index.module.css";

export interface BurgerMenuButtonProps {
  isOpen: boolean;
  handleIsOpenClick: () => void;
}
export const BurgerMenuButton: FC<BurgerMenuButtonProps> = (props) => {
  const { isOpen, handleIsOpenClick } = props;

  return (
    <div className={cn(cls.container, { [cls.opened]: isOpen })} onClick={handleIsOpenClick}>
      <div className={cls.bar1}></div>
      <div className={cls.bar2}></div>
      <div className={cls.bar3}></div>
    </div>
  );
};
