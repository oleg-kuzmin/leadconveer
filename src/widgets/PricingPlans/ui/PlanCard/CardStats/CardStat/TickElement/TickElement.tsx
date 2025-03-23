import cn from 'classnames';
import { theme } from '@/shared/lib/types';
import styles from './TickElement.module.scss';

interface TickElementProps {
  theme: theme;
  className?: string;
}

export function TickElement({ theme, className }: Readonly<TickElementProps>) {
  let classTheme: string;

  switch (theme) {
    case 'dark':
      classTheme = styles.TickElement_DarkTheme;
      break;
    case 'light':
      classTheme = styles.TickElement_LightTheme;
      break;
    default:
      throw Error('TickElement: unknown theme.');
  }

  return <span className={cn(styles.TickElement, classTheme, className)}></span>;
}
