'use client';

import { useState } from 'react';
import cn from 'classnames';
import { ButtonBurger } from './ButtonBurger';
import { Contacts } from './Contacts';
import { Logo } from './Logo';
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
      <Logo className={styles.Header__Logo} />
      <ButtonBurger
        className={styles.Header__ButtonBurger}
        isActive={isActiveBurgerMenu}
        onClick={handleClickBurgerMenu}
      />
      <Navigation className={styles.Header__Navigation} />
      <Contacts className={styles.Header__Contacts} />
    </header>
  );
}
