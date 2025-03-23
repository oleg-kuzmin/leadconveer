import cn from 'classnames';
import { theme } from '@/shared/lib/types';
import styles from './ElementTick.module.scss';

interface ElementTickProps {
  theme: theme;
  className?: string;
}

export function ElementTick({ theme, className }: Readonly<ElementTickProps>) {
  let classTheme: string;

  switch (theme) {
    case 'dark':
      classTheme = styles.ElementTick_DarkTheme;
      break;
    case 'light':
      classTheme = styles.ElementTick_LightTheme;
      break;
    default:
      throw Error('ElementTick: unknown theme.');
  }

  return <span className={cn(styles.ElementTick, classTheme, className)}></span>;
}
