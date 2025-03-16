import cn from 'classnames';
import { Star } from '@/shared/ui';
import styles from './BackgroundImage.module.scss';

interface BackgroundImageProps {
  className?: string;
}

export function BackgroundImage({ className }: Readonly<BackgroundImageProps>) {
  return (
    <div className={cn(styles.BackgroundImage, className)}>
      <Star icon="registrationSecond1" className={styles.BackgroundImage__Star1} />
      <Star icon="registrationSecond2" className={styles.BackgroundImage__Star2} />
    </div>
  );
}
