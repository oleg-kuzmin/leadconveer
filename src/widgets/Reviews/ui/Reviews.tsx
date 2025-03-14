import cn from 'classnames';
import styles from './Reviews.module.scss';

interface ReviewsProps {
  className?: string;
}

export function Reviews({ className }: Readonly<ReviewsProps>) {
  return (
    <div className={cn(styles.Reviews, className)}></div>
  );
}