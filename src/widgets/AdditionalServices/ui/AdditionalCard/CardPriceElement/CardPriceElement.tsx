import cn from 'classnames';
import styles from './CardPriceElement.module.scss';

interface CardPriceElementProps {
  price: string;
  className?: string;
}

export function CardPriceElement({ price, className }: Readonly<CardPriceElementProps>) {
  return (
    <div className={cn(styles.CardPriceElement, className)}>
      <span className={styles.CardPriceElement__Span}>от</span>
      <span className={styles.CardPriceElement__Accent}>{price} ₽</span>
    </div>
  );
}
