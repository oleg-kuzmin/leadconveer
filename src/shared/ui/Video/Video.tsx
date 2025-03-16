'use client';

import { useRef, useState } from 'react';
import cn from 'classnames';
import { VideoButton } from './VideoButton';
import styles from './Video.module.scss';

interface VideoProps {
  src: string;
  type: string;
  poster?: string;
  className?: string;
}

export function Video({ src, type, poster, className }: Readonly<VideoProps>) {
  const videoRef = useRef<null | HTMLVideoElement>(null);
  const [isPlayed, setIsPlayed] = useState(false);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.controls = true;
      setIsPlayed(true);
    }
  };

  const handlePauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const endVideo = () => {
    if (videoRef.current) {
      setIsPlayed(false);
      videoRef.current.controls = false;
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      setIsPlayed(false);
      videoRef.current.controls = false;
    }
  };

  return (
    <div className={cn(styles.Video, className)}>
      {isPlayed && <VideoButton className={styles.Video__Button} icon="pause" onClick={handlePauseVideo} />}
      {!isPlayed && <VideoButton className={styles.Video__Button} icon="play" onClick={handlePlayVideo} />}
      <video
        className={styles.Video__Element}
        preload="none"
        ref={videoRef}
        poster={poster}
        onEnded={endVideo}
        onPause={pauseVideo}
      >
        <source src={src} type={type} />
        Ваш браузер не поддерживает воспроизведение видео.
      </video>
    </div>
  );
}
