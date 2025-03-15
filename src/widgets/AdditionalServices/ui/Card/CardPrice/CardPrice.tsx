import cn from 'classnames';
import styles from './CardPrice.module.scss';

interface CardPriceProps {
  children: React.ReactNode;
  className?: string;
}

export function CardPrice({ children, className }: Readonly<CardPriceProps>) {
  return (
    <div className={cn(styles.CardPrice, className)}>
      <span className={styles.CardPrice__Span}>от</span>
      <span className={cn(styles.CardPrice__Text, 'accent-price-color')}>{children} ₽</span>
    </div>
  );
}
