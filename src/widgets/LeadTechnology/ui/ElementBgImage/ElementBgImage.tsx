import cn from 'classnames';
import { StarIcon } from '@/shared/ui';
import styles from './ElementBgImage.module.scss';

interface ElementBgImageProps {
  className?: string;
}

export function ElementBgImage({ className }: Readonly<ElementBgImageProps>) {
  return (
    <div className={cn(styles.ElementBgImage, className)}>
      <StarIcon icon="technology1" className={styles.ElementBgImage__Star1} />
      <StarIcon icon="technology2" className={styles.ElementBgImage__Star2} />
    </div>
  );
}
