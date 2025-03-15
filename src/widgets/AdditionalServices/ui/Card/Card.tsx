import cn from 'classnames';
import { MainButton, Star } from '@/shared/ui';
import { CardPrice } from './CardPrice';
import { CardTitle } from './CardTitle';
import styles from './Card.module.scss';

interface CardProps {
  title: string;
  price: string;
  className?: string;
}

export function Card({ title, price, className }: Readonly<CardProps>) {
  return (
    <div className={cn(styles.Card, className)}>
      <Star className={styles.Card__Star} icon="5" />
      <CardTitle className={styles.Card__Title}>{title}</CardTitle>
      <CardPrice className={styles.Card__CardPrice}>{price}</CardPrice>
      <MainButton text="купить" />
    </div>
  );
}
