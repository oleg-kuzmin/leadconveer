import cn from 'classnames';
import { VideoContainer } from '../VideoContainer';
import styles from './VideoList.module.scss';

interface VideoListProps {
  className?: string;
}

export function VideoList({ className }: Readonly<VideoListProps>) {
  return (
    <div className={cn(styles.VideoList, className)}>
      <VideoContainer caption="Отзыв 1: название" src="/leadconveer/video/video.mp4" type="video/mp4" />
      <VideoContainer caption="Отзыв 2: название" src="/leadconveer/video/video.mp4" type="video/mp4" />
      <VideoContainer caption="Отзыв 3: название" src="/leadconveer/video/video.mp4" type="video/mp4" />
    </div>
  );
}
