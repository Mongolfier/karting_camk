import { FC } from "react";
import cn from "classnames";
import { RoutePath } from "shared/config/routeConfig/routes";

import cls from "./index.module.css";
import { ReactComponent as LogoIcon } from "shared/assets/logo.svg";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  containerClassName?: string;
  firstLexemClassName?: string;
  textClassName?: string;
}
export const Logo: FC<LogoProps> = (props) => {
  const {
    className,
    containerClassName,
    firstLexemClassName,
    textClassName,
    ...rest
  } = props;

  return (
    <a
      href={RoutePath.main}
      className={cn(cls.Logo__link, containerClassName)}
      target="_self"
    >
      <LogoIcon className={cn(cls.Logo__icon, className)} {...rest} />

      <p className={textClassName}>
        <span className={cn(cls.Logo__firstString, firstLexemClassName)}>
          КАРТИНГ
        </span>
        <span>ЦАМК</span>
      </p>
    </a>
  );
};
