import cn from 'classnames';
import { ElementStar } from '@/shared/ui';
import { ElementImage } from '../ElementImage';
import styles from './ImageContainer.module.scss';

interface ImageContainerProps {
  className?: string;
}

export function ImageContainer({ className }: Readonly<ImageContainerProps>) {
  return (
    <div className={cn(styles.ImageContainer, className)}>
      <ElementImage className={styles.ImageContainer__Image} />
      <ElementStar className={styles.ImageContainer__Star1} icon="hero1" />
      <ElementStar className={styles.ImageContainer__Star2} icon="hero2" />
    </div>
  );
}
