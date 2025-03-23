import cn from 'classnames';
import { ElementNavLink } from '../ElementNavLink';
import styles from './Navigation.module.scss';

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: Readonly<NavigationProps>) {
  return (
    <nav className={cn(styles.Navigation, className)}>
      <ul className={styles.Navigation__List}>
        <li>
          <ElementNavLink href="#" text="Как это работает" />
        </li>
        <li>
          <ElementNavLink href="#" text="Цена" />
        </li>
        <li>
          <ElementNavLink href="#" text="Отзывы" />
        </li>
        <li>
          <ElementNavLink href="#" text="Контакты" />
        </li>
      </ul>
    </nav>
  );
}
