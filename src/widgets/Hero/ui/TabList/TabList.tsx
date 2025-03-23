import cn from 'classnames';
import { ElementTab } from '../ElementTab';
import styles from './TabList.module.scss';

interface TabListProps {
  className?: string;
}

export function TabList({ className }: Readonly<TabListProps>) {
  return (
    <div className={cn(styles.TabList, className)}>
      <ElementTab text="Лидогенерация в b2b" />
      <ElementTab text="Биржа лидов" />
      <ElementTab text="Сервис по Лидгену" />
      <ElementTab text="Лиды для производства" />
      <ElementTab text="Клиенты для бизнеса" />
      <ElementTab text="Определить телефон посетителя сайта" />
    </div>
  );
}
