import cn from 'classnames';
import { NavLink } from './NavLink';
import styles from './Navigation.module.scss';

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: Readonly<NavigationProps>) {
  return (
    <nav className={cn(styles.Navigation, className)}>
      <ul className={styles.Navigation__List}>
        <li>
          <NavLink href="#" text="Как это работает" />
        </li>
        <li>
          <NavLink href="#" text="Цена" />
        </li>
        <li>
          <NavLink href="#" text="Отзывы" />
        </li>
        <li>
          <NavLink href="#" text="Контакты" />
        </li>
      </ul>
    </nav>
  );
}
