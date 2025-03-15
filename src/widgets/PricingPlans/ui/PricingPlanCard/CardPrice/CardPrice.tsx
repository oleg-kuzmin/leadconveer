import cn from 'classnames';
import styles from './CardPrice.module.scss';

interface CardPriceProps {
  children: React.ReactNode;
  invert?: boolean;
  className?: string;
}

export function CardPrice({ children, invert, className }: Readonly<CardPriceProps>) {
  return (
    <div className={cn(styles.CardPrice, { [styles.CardPrice_Invert]: invert }, className)}>
      <span>за </span>
      <span className="accent-price-color">{children} ₽</span>
    </div>
  );
}
