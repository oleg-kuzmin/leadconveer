import cn from 'classnames';
import { HeroTabElement } from './HeroTabElement';
import styles from './HeroTabs.module.scss';

interface HeroTabsProps {
  className?: string;
}

export function HeroTabs({ className }: Readonly<HeroTabsProps>) {
  return (
    <div className={cn(styles.HeroTabs, className)}>
      <HeroTabElement text="Лидогенерация в b2b" />
      <HeroTabElement text="Биржа лидов" />
      <HeroTabElement text="Сервис по Лидгену" />
      <HeroTabElement text="Лиды для производства" />
      <HeroTabElement text="Клиенты для бизнеса" />
      <HeroTabElement text="Определить телефон посетителя сайта" />
    </div>
  );
}
