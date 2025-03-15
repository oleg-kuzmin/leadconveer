import cn from 'classnames';
import { Star } from '@/shared/ui';
import { CardLabel } from '../CardLabel';
import styles from './CardHeader.module.scss';

interface CardHeaderProps {
  name: string;
  invert?: boolean;
  className?: string;
}

export function CardHeader({ name, invert = false, className }: Readonly<CardHeaderProps>) {
  return (
    <div className={cn(styles.CardHeader, className)}>
      <CardLabel text={name} invert={invert} />
      {invert ? <Star icon="1-white" /> : <Star icon="1-black" />}
    </div>
  );
}
