import cn from 'classnames';
import styles from './HeroTitleElement.module.scss';

interface HeroTitleElementProps {
  className?: string;
}

export function HeroTitleElement({ className }: Readonly<HeroTitleElementProps>) {
  return (
    <h1 className={cn(styles.HeroTitleElement, className)}>
      <strong className="accent-color">Лидогенерация</strong>
      <span> для&nbsp;бизнеса </span>
    </h1>
  );
}
