import { FC } from 'react';
import { Nav } from 'features/Nav';

import cls from './index.module.css';

export interface BurgerMenuProps {
    isOpen: boolean;
}
export const BurgerMenu: FC<BurgerMenuProps> = (props) => {
    return (
        <div className={cls.burgerMenu}>
            <Nav className={cls.burgerMenuNav} classNameItem={cls.burgerMenuNavItem} />
        </div>
    )
}