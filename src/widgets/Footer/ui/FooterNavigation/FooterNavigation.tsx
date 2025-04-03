import cn from 'classnames';
import { NavElement } from './NavElement';
import styles from './FooterNavigation.module.scss';

interface FooterNavigationProps {
  className?: string;
}

export function FooterNavigation({ className }: Readonly<FooterNavigationProps>) {
  return (
    <ul className={cn(styles.FooterNavigation, className)}>
      <NavElement text="Блог" href="#" />
      <NavElement text="Договор-оферта" href="#" />
      <NavElement text="Политика конфиденциальности" href="#" />
      <NavElement text="Соглашение об обработке данных" href="#" />
      <NavElement text="Вход в личный кабинет" href="#" noBr />
    </ul>
  );
}
