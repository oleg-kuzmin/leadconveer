import cn from 'classnames';
import { MainButton, Star } from '@/shared/ui';
import { CardPrice } from './CardPrice';
import { CardTitle } from './CardTitle';
import styles from './AdditionalServiceCard.module.scss';

interface AdditionalServiceCardProps {
  title: string;
  price: string;
  className?: string;
}

export function AdditionalServiceCard({ title, price, className }: Readonly<AdditionalServiceCardProps>) {
  return (
    <div className={cn(styles.AdditionalServiceCard, className)}>
      <Star className={styles.AdditionalServiceCard__Star} icon="additionalServiceCard" />
      <CardTitle className={styles.AdditionalServiceCard__Title}>{title}</CardTitle>
      <CardPrice className={styles.AdditionalServiceCard__CardPrice}>{price}</CardPrice>
      <MainButton text="купить" />
    </div>
  );
}
