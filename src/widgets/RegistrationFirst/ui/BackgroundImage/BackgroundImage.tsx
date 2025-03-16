import cn from 'classnames';
import { Star } from '@/shared/ui';
import styles from './BackgroundImage.module.scss';

interface BackgroundImageProps {
  className?: string;
}

export function BackgroundImage({ className }: Readonly<BackgroundImageProps>) {
  return (
    <div className={cn(styles.BackgroundImage, className)}>
      <Star icon="registrationFirst" className={styles.BackgroundImage__Star} />
    </div>
  );
}
