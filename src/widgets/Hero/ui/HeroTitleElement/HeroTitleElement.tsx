import cn from 'classnames';
import { AccentTextElement } from '@/shared/ui';
import styles from './HeroTitleElement.module.scss';

interface HeroTitleElementProps {
  className?: string;
}

export function HeroTitleElement({ className }: Readonly<HeroTitleElementProps>) {
  return (
    <h1 className={cn(styles.HeroTitleElement, className)}>
      <AccentTextElement>Лидогенерация</AccentTextElement>
      <span> для&nbsp;бизнеса </span>
    </h1>
  );
}
