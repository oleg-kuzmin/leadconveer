import cn from 'classnames';
import { Theme } from '@/shared/lib/types';
import styles from './ElementCardPrice.module.scss';

interface ElementCardPriceProps {
  children: React.ReactNode;
  theme: Theme;
  className?: string;
}

export function ElementCardPrice({ children, theme, className }: Readonly<ElementCardPriceProps>) {
  let classTheme: string;

  switch (theme) {
    case 'light':
      classTheme = styles.ElementCardPrice__Span_LightTheme;
      break;
    case 'dark':
      classTheme = styles.ElementCardPrice__Span_DarkTheme;
      break;
    default:
      throw Error('ElementCardPrice: unknown theme.');
  }

  return (
    <div className={cn(styles.ElementCardPrice, className)}>
      <span className={cn(styles.ElementCardPrice__Span, classTheme)}>за </span>
      <span>{children} ₽</span>
    </div>
  );
}
