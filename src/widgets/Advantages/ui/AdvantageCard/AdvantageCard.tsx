import cn from 'classnames';
import { Star } from '@/shared/ui';
import { CardBg } from './CardBg';
import { CardImage } from './CardImage';
import { CardSubtitle } from './CardSubtitle';
import { CardTitle } from './CardTitle';
import styles from './AdvantageCard.module.scss';

interface AdvantageCardProps {
  title: string;
  text: string;
  imgSrc: string;
  imgAlt: string;
  className?: string;
}

export function AdvantageCard({ title, text, imgSrc, imgAlt, className }: Readonly<AdvantageCardProps>) {
  return (
    <div className={cn(styles.AdvantageCard, className)}>
      <div className={styles.AdvantageCard__Description}>
        <div className={styles.AdvantageCard__Header}>
          <CardTitle text={title} />
          <Star className={styles.AdvantageCard__Star} icon="advantageCard" />
        </div>
        <CardSubtitle text={text} />
      </div>
      <CardImage className={styles.AdvantageCard__Image} src={imgSrc} alt={imgAlt} />
      <CardBg className={styles.AdvantageCard__Bg} />
    </div>
  );
}
