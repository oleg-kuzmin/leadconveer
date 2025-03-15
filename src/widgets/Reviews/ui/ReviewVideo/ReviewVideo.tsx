'use client';

import { useRef, useState } from 'react';
import cn from 'classnames';
import styles from './ReviewVideo.module.scss';

interface ReviewVideoProps {
  caption: string;
  className?: string;
}

export function ReviewVideo({ caption, className }: Readonly<ReviewVideoProps>) {
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
      setIsPlayed(false);
    }
  };

  const endVideo = () => {
    if (videoRef.current) {
      setIsPlayed(false);
      videoRef.current.controls = false;
    }
  };

  return (
    <div className={cn(styles.ReviewVideo, className)}>
      {isPlayed && <button className={styles.ReviewVideo__PauseButton} onClick={handlePauseVideo}></button>}
      {!isPlayed && <button className={styles.ReviewVideo__PlayButton} onClick={handlePlayVideo}></button>}
      <video
        className={styles.ReviewVideo__Video}
        preload="none"
        ref={videoRef}
        poster="/leadconveer/video/poster.jpg"
        onEnded={endVideo}
      >
        <source src="/leadconveer/video/video.mp4" type="video/mp4" />
        Ваш браузер не поддерживает воспроизведение видео.
      </video>
      <span className={styles.ReviewVideo__Caption}>{caption}</span>
    </div>
  );
}
