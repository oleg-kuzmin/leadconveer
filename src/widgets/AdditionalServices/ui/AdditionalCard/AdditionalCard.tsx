import cn from 'classnames';
import { MainButtonElement, StarElement } from '@/shared/ui';
import { CardPriceElement } from './CardPriceElement';
import { CardTitleElement } from './CardTitleElement';
import styles from './AdditionalCard.module.scss';

interface AdditionalCardProps {
  title: string;
  price: string;
  className?: string;
}

export function AdditionalCard({ title, price, className }: Readonly<AdditionalCardProps>) {
  return (
    <div className={cn(styles.AdditionalCard, className)}>
      <CardTitleElement className={styles.AdditionalCard__Title}>{title}</CardTitleElement>
      <div>
        <CardPriceElement className={styles.AdditionalCard__Price} price={price} />
        <MainButtonElement text="купить" />
      </div>
      <StarElement className={styles.AdditionalCard__Star} icon="additionalServiceCard" />
    </div>
  );
}
