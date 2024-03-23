import cls from './index.module.css';

import { ReactComponent as LogoIcon } from 'shared/assets/logo.svg';

export const Logo = () => {
  return (
    <a href='/' className={cls.Logo__link} target='_self'>
      <LogoIcon width='64' height='64' className={cls.Logo__icon} />

      <p>
        <span className={cls.Logo__firstString}>КАРТИНГ</span>
        <span>ЦАМК</span>
      </p>
    </a>
  )
} 