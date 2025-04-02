import cn from 'classnames';
import { StarIcon } from '@/shared/ui';
import { ElementImage } from '../ElementImage';
import styles from './ImageContainer.module.scss';

interface ImageContainerProps {
  className?: string;
}

export function ImageContainer({ className }: Readonly<ImageContainerProps>) {
  return (
    <div className={cn(styles.ImageContainer, className)}>
      <ElementImage className={styles.ImageContainer__Image} />
      <StarIcon className={styles.ImageContainer__Star1} icon="hero1" />
      <StarIcon className={styles.ImageContainer__Star2} icon="hero2" />
    </div>
  );
}
