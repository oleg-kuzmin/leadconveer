import cn from 'classnames';
import { StarIcon } from '@/shared/ui';
import styles from './ElementBgImage.module.scss';

interface ElementBgImageProps {
  className?: string;
}

export function ElementBgImage({ className }: Readonly<ElementBgImageProps>) {
  return (
    <div className={cn(styles.ElementBgImage, className)}>
      <StarIcon className={styles.ElementBgImage__Star} icon="registrationFirst" />
    </div>
  );
}
