import cn from 'classnames';
import { HeroTab } from './HeroTab';
import styles from './HeroTabs.module.scss';

interface HeroTabsProps {
  className?: string;
}

export function HeroTabs({ className }: Readonly<HeroTabsProps>) {
  return (
    <div className={cn(styles.HeroTabs, className)}>
      <HeroTab text="Лидогенерация в b2b" />
      <HeroTab text="Биржа лидов" />
      <HeroTab text="Сервис по Лидгену" />
      <HeroTab text="Лиды для производства" />
      <HeroTab text="Клиенты для бизнеса" />
      <HeroTab text="Определить телефон посетителя сайта" />
    </div>
  );
}
