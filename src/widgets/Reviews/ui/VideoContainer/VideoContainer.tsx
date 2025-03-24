import cn from 'classnames';
import { ElementVideo } from '../ElementVideo';
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
      <ElementVideo src={src} type={type} poster={poster} />
      <ElementVideoCaption>{caption}</ElementVideoCaption>
    </div>
  );
}
