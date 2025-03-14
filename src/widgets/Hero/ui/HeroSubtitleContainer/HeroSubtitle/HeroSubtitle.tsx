import cn from 'classnames';
import styles from './HeroSubtitle.module.scss';

interface HeroSubtitleProps {
  className?: string;
}

export function HeroSubtitle({ className }: Readonly<HeroSubtitleProps>) {
  return (
    <p className={cn(styles.HeroSubtitle, className)}>Покупайте только целевые лиды по фиксированной цене от 300 ₽</p>
  );
}
