import cn from 'classnames';
import { StarIcon } from '@/shared/ui';
import { ElementCardBg } from '../ElementCardBg';
import { ElementCardImage } from '../ElementCardImage';
import { ElementCardSubtitle } from '../ElementCardSubtitle';
import { ElementCardTitle } from '../ElementCardTitle';
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
          <ElementCardTitle text={title} />
          <StarIcon className={styles.AdvantageCard__Star} icon="advantageCard" />
        </div>
        <ElementCardSubtitle text={text} />
      </div>
      <ElementCardImage className={styles.AdvantageCard__Image} src={imgSrc} alt={imgAlt} />
      <ElementCardBg className={styles.AdvantageCard__Bg} />
    </div>
  );
}
