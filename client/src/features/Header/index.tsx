import cn from 'classnames';

import cls from './index.module.css';
import { Logo } from 'shared/ui/Logo';

export const Header = () => {
  return (
    <header className={cn(cls.Header)}>
      <Logo />
    </header>
  );
}