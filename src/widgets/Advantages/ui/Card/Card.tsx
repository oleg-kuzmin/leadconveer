import cn from 'classnames';
import { Star } from '@/shared/ui';
import { CardImage } from './CardImage';
import { CardSubtitle } from './CardSubtitle';
import { CardTitle } from './CardTitle';
import styles from './Card.module.scss';

interface CardProps {
  title: string;
  text: string;
  imgSrc: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
  className?: string;
}

export function Card({ title, text, imgSrc, imgAlt, imgWidth, imgHeight, className }: Readonly<CardProps>) {
  return (
    <div className={cn(styles.Card, className)}>
      <div className={styles.Card__Description}>
        <div className={styles.Card__Header}>
          <CardTitle text={title} />
          <Star icon="4" />
        </div>
        <CardSubtitle text={text} />
      </div>
      <CardImage className={styles.Card__Image} src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} />
    </div>
  );
}
