import cn from 'classnames';
import { Video } from '@/shared/ui';
import { Caption } from './Caption';
import styles from './ReviewVideo.module.scss';

interface ReviewVideoProps {
  caption: string;
  src: string;
  type: string;
  poster?: string;
  className?: string;
}

export function ReviewVideo({ src, type, caption, poster, className }: Readonly<ReviewVideoProps>) {
  return (
    <div className={cn(styles.ReviewVideo, className)}>
      <Video className={styles.ReviewVideo__Element} src={src} type={type} poster={poster} />
      <Caption>{caption}</Caption>
    </div>
  );
}
