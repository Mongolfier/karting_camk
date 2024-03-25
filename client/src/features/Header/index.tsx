import cn from 'classnames';
import { Logo } from 'shared/ui/Logo';
// import { Button } from 'shared/ui/Button';
import { Nav } from 'features/Nav';

import cls from './index.module.css';
import { Telephone } from 'shared/ui/Telephone';

export const Header = () => {
  return (
    <header className={cn(cls.Header)}>
      <Logo />

      <Nav />

      <div className={cls.booking}>
        <Telephone href={'+7 (929)-519-42-17'}>+7 (929)-519-42-17</Telephone> {/* TODO: принимать из запроса */}

        {/* <Button>Забронировать</Button> */}
      </div>
    </header>
  );
}