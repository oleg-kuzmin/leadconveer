import cn from 'classnames';
import { theme } from '../PlanCard';
import styles from './CardTitleElement.module.scss';

interface CardTitleElementProps {
  children: React.ReactNode;
  theme: theme;
  className?: string;
}

export function CardTitleElement({ children, theme, className }: Readonly<CardTitleElementProps>) {
  let classTheme: string;

  switch (theme) {
    case 'light':
      classTheme = styles.CardTitleElement_LightTheme;
      break;
    case 'dark':
      classTheme = styles.CardTitleElement_DarkTheme;
      break;
    default:
      throw Error('CardTitleElement: unknown theme.');
  }

  return <div className={cn(styles.CardTitleElement, classTheme, className)}>{children}</div>;
}
