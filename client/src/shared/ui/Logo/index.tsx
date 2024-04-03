import { FC } from "react";
import cn from "classnames";
import { RoutePath } from "shared/config/routeConfig";

import cls from "./index.module.css";
import { ReactComponent as LogoIcon } from "shared/assets/logo.svg";

interface LogoProps extends React.SVGProps<SVGSVGElement> {}
export const Logo: FC<LogoProps> = (props) => {
  const { className, ...rest } = props;

  return (
    <a href={RoutePath.main} className={cls.Logo__link} target="_self">
      <LogoIcon
        width="64"
        height="64"
        className={cn(cls.Logo__icon, className)}
        {...rest}
      />

      <p>
        <span className={cls.Logo__firstString}>КАРТИНГ</span>
        <span>ЦАМК</span>
      </p>
    </a>
  );
};
