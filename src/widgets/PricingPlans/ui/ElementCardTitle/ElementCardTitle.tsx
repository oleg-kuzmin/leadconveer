import cn from 'classnames';
import { Theme } from '@/shared/lib/types';
import styles from './ElementCardTitle.module.scss';

interface ElementCardTitleProps {
  children: React.ReactNode;
  theme: Theme;
  className?: string;
}

export function ElementCardTitle({ children, theme, className }: Readonly<ElementCardTitleProps>) {
  let classTheme: string;

  switch (theme) {
    case 'light':
      classTheme = styles.ElementCardTitle_LightTheme;
      break;
    case 'dark':
      classTheme = styles.ElementCardTitle_DarkTheme;
      break;
    default:
      throw Error('ElementCardTitle: unknown theme.');
  }

  return <div className={cn(styles.ElementCardTitle, classTheme, className)}>{children}</div>;
}
