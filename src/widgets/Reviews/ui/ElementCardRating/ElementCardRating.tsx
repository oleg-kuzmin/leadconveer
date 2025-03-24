import cn from 'classnames';
import styles from './ElementCardRating.module.scss';

interface ElementCardRatingProps {
  rating: string;
  className?: string;
}

export function ElementCardRating({ rating, className }: Readonly<ElementCardRatingProps>) {
  return <span className={cn(styles.ElementCardRating, className)}>{rating}</span>;
}
