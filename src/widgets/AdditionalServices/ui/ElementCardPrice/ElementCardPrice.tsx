import cn from 'classnames';
import styles from './ElementCardPrice.module.scss';

interface ElementCardPriceProps {
  price: string;
  className?: string;
}

export function ElementCardPrice({ price, className }: Readonly<ElementCardPriceProps>) {
  return (
    <div className={cn(styles.ElementCardPrice, className)}>
      <span className={styles.ElementCardPrice__Span}>от</span>
      <span className={styles.ElementCardPrice__Accent}>{price} ₽</span>
    </div>
  );
}
