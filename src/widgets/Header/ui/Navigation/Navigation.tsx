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
          <ElementNavLink href="#howItWorks" text="Как это работает" />
        </li>
        <li>
          <ElementNavLink href="#pricingPlans" text="Цена" />
        </li>
        <li>
          <ElementNavLink href="#reviews" text="Отзывы" />
        </li>
        <li>
          <ElementNavLink href="#contacts" text="Контакты" />
        </li>
      </ul>
    </nav>
  );
}
