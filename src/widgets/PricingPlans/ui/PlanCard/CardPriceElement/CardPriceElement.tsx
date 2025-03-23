import cn from 'classnames';
import { theme } from '@/shared/lib/types';
import styles from './CardPriceElement.module.scss';

interface CardPriceElementProps {
  children: React.ReactNode;
  theme: theme;
  className?: string;
}

export function CardPriceElement({ children, theme, className }: Readonly<CardPriceElementProps>) {
  let classTheme: string;

  switch (theme) {
    case 'light':
      classTheme = styles.CardPriceElement__Span_LightTheme;
      break;
    case 'dark':
      classTheme = styles.CardPriceElement__Span_DarkTheme;
      break;
    default:
      throw Error('CardPriceElement: unknown theme.');
  }

  return (
    <div className={cn(styles.CardPriceElement, className)}>
      <span className={cn(styles.CardPriceElement__Span, classTheme)}>за </span>
      <span>{children} ₽</span>
    </div>
  );
}
