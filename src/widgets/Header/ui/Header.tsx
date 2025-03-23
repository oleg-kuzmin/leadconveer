'use client';

import { useState } from 'react';
import cn from 'classnames';
import { Content } from '@/shared/ui';
import { Contacts } from './Contacts';
import { ElementButtonBurger } from './ElementButtonBurger';
import { ElementLogo } from './ElementLogo';
import { Navigation } from './Navigation';
import styles from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: Readonly<HeaderProps>) {
  const [isActiveBurgerMenu, setIsActiveBurgerMenu] = useState(false);

  const handleClickBurgerMenu = () => {
    setIsActiveBurgerMenu(!isActiveBurgerMenu);
  };

  return (
    <header className={cn(styles.Header, className)}>
      <Content className={styles.Header__Content}>
        <ElementLogo className={styles.Header__Logo} />
        <ElementButtonBurger
          className={styles.Header__ButtonBurger}
          isActive={isActiveBurgerMenu}
          onClick={handleClickBurgerMenu}
        />
        <Navigation className={styles.Header__Navigation} />
        <Contacts className={styles.Header__Contacts} />
      </Content>
    </header>
  );
}
