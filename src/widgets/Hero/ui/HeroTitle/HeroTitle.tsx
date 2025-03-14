import cn from 'classnames';
import styles from './HeroTitle.module.scss';

interface HeroTitleProps {
  className?: string;
}

export function HeroTitle({ className }: Readonly<HeroTitleProps>) {
  return (
    <h1 className={cn(styles.HeroTitle, className)}>
      <span className="accent-color">Лидогенерация</span>
      <span> для бизнеса </span>
    </h1>
  );
}
