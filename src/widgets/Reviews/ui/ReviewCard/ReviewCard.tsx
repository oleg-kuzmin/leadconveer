import cn from 'classnames';
import { ElementStar } from '@/shared/ui';
import { ElementCardFooter } from '../ElementCardFooter';
import { ElementCardRating } from '../ElementCardRating';
import { ElementCardText } from '../ElementCardText';
import styles from './ReviewCard.module.scss';

interface ReviewCardProps {
  rating: string;
  children: React.ReactNode;
  footer: string;
  className?: string;
}

export function ReviewCard({ rating, children, footer, className }: Readonly<ReviewCardProps>) {
  return (
    <div className={cn(styles.ReviewCard, className)}>
      <div className={styles.ReviewCard__Header}>
        <ElementCardRating rating={rating} />
        <div className={styles.ReviewCard__Stars}>
          <ElementStar className={styles.ReviewCard__Star} icon="reviewCard" />
          <ElementStar className={styles.ReviewCard__Star} icon="reviewCard" />
          <ElementStar className={styles.ReviewCard__Star} icon="reviewCard" />
          <ElementStar className={styles.ReviewCard__Star} icon="reviewCard" />
          <ElementStar className={styles.ReviewCard__Star} icon="reviewCard" />
        </div>
      </div>
      <ElementCardText className={styles.ReviewCard__Text}>{children}</ElementCardText>
      <ElementCardFooter>{footer}</ElementCardFooter>
    </div>
  );
}
