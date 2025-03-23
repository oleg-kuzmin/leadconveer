import cn from 'classnames';
import { ElementMainButton, ElementStar } from '@/shared/ui';
import { ElementCardPrice } from '../ElementCardPrice';
import { ElementCardTitle } from '../ElementCardTitle';
import styles from './AdditionalCard.module.scss';

interface AdditionalCardProps {
  title: string;
  price: string;
  className?: string;
}

export function AdditionalCard({ title, price, className }: Readonly<AdditionalCardProps>) {
  return (
    <div className={cn(styles.AdditionalCard, className)}>
      <ElementCardTitle className={styles.AdditionalCard__Title}>{title}</ElementCardTitle>
      <div>
        <ElementCardPrice className={styles.AdditionalCard__Price} price={price} />
        <ElementMainButton text="купить" />
      </div>
      <ElementStar className={styles.AdditionalCard__Star} icon="additionalServiceCard" />
    </div>
  );
}
