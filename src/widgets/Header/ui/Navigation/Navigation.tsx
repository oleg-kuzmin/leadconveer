import cn from 'classnames';
import { NavLinkElement } from './NavLinkElement';
import styles from './Navigation.module.scss';

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: Readonly<NavigationProps>) {
  return (
    <nav className={cn(styles.Navigation, className)}>
      <ul className={styles.Navigation__List}>
        <li>
          <NavLinkElement href="#" text="Как это работает" />
        </li>
        <li>
          <NavLinkElement href="#" text="Цена" />
        </li>
        <li>
          <NavLinkElement href="#" text="Отзывы" />
        </li>
        <li>
          <NavLinkElement href="#" text="Контакты" />
        </li>
      </ul>
    </nav>
  );
}
