import cn from 'classnames';
import styles from './HeroTitle.module.scss';

interface HeroTitleProps {
  className?: string;
}

export function HeroTitle({ className }: Readonly<HeroTitleProps>) {
  return (
    <h1 className={cn(styles.HeroTitle, className)}>
      <strong className="accent-color">Лидогенерация</strong>
      <span> для&nbsp;бизнеса </span>
    </h1>
  );
}
