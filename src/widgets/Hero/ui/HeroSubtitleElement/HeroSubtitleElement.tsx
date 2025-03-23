import cn from 'classnames';
import styles from './HeroSubtitleElement.module.scss';

interface HeroSubtitleElementProps {
  className?: string;
}

export function HeroSubtitleElement({ className }: Readonly<HeroSubtitleElementProps>) {
  return (
    <p className={cn(styles.HeroSubtitleElement, className)}>
      Покупайте только целевые лиды по фиксированной цене от 300 ₽
    </p>
  );
}
