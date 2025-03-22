'use client';

import { useState } from 'react';
import cn from 'classnames';
import { Content } from '@/shared/ui';
import { ButtonBurgerElement } from './ButtonBurgerElement';
import { Contacts } from './Contacts';
import { LogoElement } from './LogoElement';
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
        <LogoElement className={styles.Header__LogoElement} />
        <ButtonBurgerElement
          className={styles.Header__ButtonBurgerElement}
          isActive={isActiveBurgerMenu}
          onClick={handleClickBurgerMenu}
        />
        <Navigation className={styles.Header__Navigation} />
        <Contacts className={styles.Header__Contacts} />
      </Content>
    </header>
  );
}
