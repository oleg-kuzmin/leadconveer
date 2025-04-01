import cn from 'classnames';
import { Theme } from '@/shared/lib/types';
import styles from './ElementCardLabel.module.scss';

interface ElementCardLabelProps {
  text: string;
  theme: Theme;
  className?: string;
}

export function ElementCardLabel({ text, theme, className }: Readonly<ElementCardLabelProps>) {
  let classTheme: string;

  switch (theme) {
    case 'light':
      classTheme = styles.ElementCardLabel_LightTheme;
      break;
    case 'dark':
      classTheme = styles.ElementCardLabel_DarkTheme;
      break;
    default:
      throw Error('ElementCardLabel: unknown theme.');
  }

  return <div className={cn(styles.ElementCardLabel, classTheme, className)}>{text}</div>;
}
