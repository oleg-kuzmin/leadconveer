import cn from 'classnames';
import { CardFooter } from './CardFooter';
import { CardHeader } from './CardHeader';
import { CardText } from './CardText';
import styles from './ReviewCard.module.scss';

interface ReviewCardProps {
  rating: string;
  text: string;
  alcove: string;
  className?: string;
}

export function ReviewCard({ rating, text, alcove, className }: Readonly<ReviewCardProps>) {
  return (
    <div className={cn(styles.ReviewCard, className)}>
      <CardHeader className={styles.ReviewCard__Header} rating={rating} />
      <CardText className={styles.ReviewCard__Text}>{text}</CardText>
      <CardFooter>{alcove}</CardFooter>
    </div>
  );
}
