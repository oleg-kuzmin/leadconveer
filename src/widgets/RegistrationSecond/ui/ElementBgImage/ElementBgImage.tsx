import cn from 'classnames';
import { StarIcon } from '@/shared/ui';
import styles from './ElementBgImage.module.scss';

interface ElementBgImageProps {
  className?: string;
}

export function ElementBgImage({ className }: Readonly<ElementBgImageProps>) {
  return (
    <div className={cn(styles.ElementBgImage, className)}>
      <StarIcon className={styles.ElementBgImage__Star1} icon="registrationSecond1" />
      <StarIcon className={styles.ElementBgImage__Star2} icon="registrationSecond2" />
    </div>
  );
}
