import cn from 'classnames';
import styles from './ElementSubtitle.module.scss';

interface ElementSubtitleProps {
  className?: string;
}

export function ElementSubtitle({ className }: Readonly<ElementSubtitleProps>) {
  return (
    <p className={cn(styles.ElementSubtitle, className)}>
      Покупайте только целевые лиды по фиксированной цене от 300 ₽
    </p>
  );
}
