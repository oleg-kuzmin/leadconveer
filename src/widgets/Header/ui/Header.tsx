import cn from 'classnames';
import { Contacts } from './Contacts';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import styles from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: Readonly<HeaderProps>) {
  return (
    <header className={cn(styles.Header, className)}>
      {/* <Logo /> */}
      {/* <Navigation /> */}
      {/* <Contacts /> */}
    </header>
  );
}
