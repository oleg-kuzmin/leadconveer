import cn from 'classnames';
import { theme } from '@/shared/lib/types';
import styles from './CardLabelElement.module.scss';

interface CardLabelElementProps {
  text: string;
  theme: theme;
  className?: string;
}

export function CardLabelElement({ text, theme, className }: Readonly<CardLabelElementProps>) {
  let classTheme: string;

  switch (theme) {
    case 'light':
      classTheme = styles.CardLabelElement_LightTheme;
      break;
    case 'dark':
      classTheme = styles.CardLabelElement_DarkTheme;
      break;
    default:
      throw Error('CardLabelElement: unknown theme.');
  }

  return <div className={cn(styles.CardLabelElement, classTheme, className)}>{text}</div>;
}
