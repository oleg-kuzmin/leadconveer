import cn from 'classnames';
import { Star } from '@/shared/ui';
import styles from './CardHeader.module.scss';

interface CardHeaderProps {
  rating: string;
  className?: string;
}

export function CardHeader({ rating, className }: Readonly<CardHeaderProps>) {
  return (
    <div className={cn(styles.CardHeader, className)}>
      <span className={styles.CardHeader__Rating}>{rating}</span>
      <div className={styles.CardHeader__Stars}>
        <Star icon="reviewCard" />
        <Star icon="reviewCard" />
        <Star icon="reviewCard" />
        <Star icon="reviewCard" />
        <Star icon="reviewCard" />
      </div>
    </div>
  );
}
