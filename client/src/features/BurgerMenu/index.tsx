import { FC } from 'react';
import { Nav } from 'features/Nav';

import cls from './index.module.css';

export interface BurgerMenuProps {
    isOpen: boolean;
    handleToggleBurgerMenu?: () => void;
}
export const BurgerMenu: FC<BurgerMenuProps> = (props) => {
    const { handleToggleBurgerMenu } = props;

    return (
        <div className={cls.burgerMenu} onClick={handleToggleBurgerMenu}>
            <Nav className={cls.burgerMenuNav} classNameItem={cls.burgerMenuNavItem} />
        </div>
    )
}