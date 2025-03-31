import cn from 'classnames';
import { ElementStar } from '@/shared/ui';
import styles from './ElementBgImage.module.scss';

interface ElementBgImageProps {
  className?: string;
}

export function ElementBgImage({ className }: Readonly<ElementBgImageProps>) {
  return (
    <div className={cn(styles.ElementBgImage, className)}>
      <ElementStar icon="technology1" className={styles.ElementBgImage__Star1} />
      <ElementStar icon="technology2" className={styles.ElementBgImage__Star2} />
    </div>
  );
}
