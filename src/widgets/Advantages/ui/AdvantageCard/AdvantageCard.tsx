import cn from 'classnames';
import { StarElement } from '@/shared/ui';
import { CardBgElement } from './CardBgElement';
import { CardDescription } from './CardDescription';
import { CardHeader } from './CardHeader';
import { CardImageElement } from './CardImageElement';
import { CardSubtitleElement } from './CardSubtitleElement';
import { CardTitleElement } from './CardTitleElement';
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
      <CardDescription className={styles.AdvantageCard__Description}>
        <CardHeader className={styles.AdvantageCard__Header}>
          <CardTitleElement text={title} />
          <StarElement className={styles.AdvantageCard__Star} icon="advantageCard" />
        </CardHeader>
        <CardSubtitleElement text={text} />
      </CardDescription>
      <CardImageElement className={styles.AdvantageCard__ImageElement} src={imgSrc} alt={imgAlt} />
      <CardBgElement className={styles.AdvantageCard__BgElement} />
    </div>
  );
}
