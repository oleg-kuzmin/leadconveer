import cn from 'classnames';
import { SmallCardIcon } from './SmallCardIcon';
import { SmallCardText } from './SmallCardText';
import { SmallCardTitle } from './SmallCardTitle';
import styles from './FeatureSmallCard.module.scss';

export type TypeSmallCardIcon = '100' | 'fire' | 'high-voltage' | 'run' | 'star';

interface FeatureSmallCardProps {
  title: string;
  text: string;
  icon: TypeSmallCardIcon;
  className?: string;
}

export function FeatureSmallCard({ title, text, icon, className }: Readonly<FeatureSmallCardProps>) {
  return (
    <li className={cn(styles.FeatureSmallCard, className)}>
      <SmallCardIcon className={styles.FeatureSmallCard__Icon} icon={icon} />
      <SmallCardTitle>{title}</SmallCardTitle>
      <SmallCardText>{text}</SmallCardText>
    </li>
  );
}
