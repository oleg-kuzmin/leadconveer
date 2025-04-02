import cn from 'classnames';
import { AccentText } from '@/shared/ui';
import styles from './ElementTitle.module.scss';

interface ElementTitleProps {
  className?: string;
}

export function ElementTitle({ className }: Readonly<ElementTitleProps>) {
  return (
    <h1 className={cn(styles.ElementTitle, className)}>
      <AccentText>Лидогенерация</AccentText>
      <span> для&nbsp;бизнеса </span>
    </h1>
  );
}
