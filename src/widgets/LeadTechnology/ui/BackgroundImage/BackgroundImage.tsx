import cn from 'classnames';
import { Star } from '@/shared/ui';
import styles from './BackgroundImage.module.scss';

interface BackgroundImageProps {
  className?: string;
}

export function BackgroundImage({ className }: Readonly<BackgroundImageProps>) {
  return (
    <div className={cn(styles.BackgroundImage, className)}>
      <Star className={styles.BackgroundImage__Star1} icon="technology1" />
      <Star className={styles.BackgroundImage__Star2} icon="technology2" />
    </div>
  );
}
