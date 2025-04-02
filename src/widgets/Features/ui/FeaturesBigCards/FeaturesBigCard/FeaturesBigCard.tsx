import cn from 'classnames';
import { StarIcon } from '@/shared/ui';
import { BigCardNumber } from './BigCardNumber';
import { BigCardText } from './BigCardText';
import styles from './FeaturesBigCard.module.scss';

interface FeaturesBigCardProps {
  number: string;
  text: string;
  className?: string;
}

export function FeaturesBigCard({ number, text, className }: Readonly<FeaturesBigCardProps>) {
  return (
    <li className={cn(styles.FeaturesBigCard, className)}>
      <BigCardNumber className={styles.FeaturesBigCard__Number}>{number}</BigCardNumber>
      <BigCardText>{text}</BigCardText>
      <StarIcon className={styles.FeaturesBigCard__Star} icon="featureCard" />
    </li>
  );
}
