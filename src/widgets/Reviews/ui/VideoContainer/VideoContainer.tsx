import cn from 'classnames';
import { Video } from '@/shared/ui';
import { ElementVideoCaption } from '../ElementVideoCaption';
import styles from './VideoContainer.module.scss';

interface VideoContainerProps {
  src: string;
  type: string;
  caption: string;
  poster?: string;
  className?: string;
}

export function VideoContainer({ src, type, caption, poster, className }: Readonly<VideoContainerProps>) {
  return (
    <div className={cn(styles.VideoContainer, className)}>
      <Video src={src} type={type} poster={poster} width={580} height={320} />
      <ElementVideoCaption>{caption}</ElementVideoCaption>
    </div>
  );
}
