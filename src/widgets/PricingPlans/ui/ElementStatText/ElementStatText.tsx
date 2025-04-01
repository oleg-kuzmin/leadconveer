import cn from 'classnames';
import { Theme } from '@/shared/lib/types';
import styles from './ElementStatText.module.scss';

interface ElementStatTextProps {
  children: React.ReactNode;
  theme: Theme;
  bold?: boolean;
  className?: string;
}

export function ElementStatText({ children, theme, bold, className }: Readonly<ElementStatTextProps>) {
  let classTheme: string;

  switch (theme) {
    case 'dark':
      classTheme = styles.ElementStatText_ThemeDark;
      break;
    case 'light':
      classTheme = styles.ElementStatText_ThemeLight;
      break;
    default:
      throw Error('ElementStatText: unknown theme.');
  }

  return (
    <span className={cn(styles.ElementStatText, { [styles.ElementStatText_Bold]: bold }, classTheme, className)}>
      {children}
    </span>
  );
}
