'use client';

import { useRef, useState } from 'react';
import cn from 'classnames';
import styles from './ElementVideo.module.scss';

interface ElementVideoProps {
  src: string;
  type: string;
  poster?: string;
  className?: string;
}

export function ElementVideo({ src, type, poster, className }: Readonly<ElementVideoProps>) {
  const videoRef = useRef<null | HTMLVideoElement>(null);
  const [isPlayed, setIsPlayed] = useState(false);

  const handlePlayVideo = () => {
    if (videoRef.current) videoRef.current.play();
  };

  const playVideo = () => {
    if (videoRef.current) {
      setIsPlayed(true);
      videoRef.current.controls = true;
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

  const buttonPlay = (
    <button
      className={cn(styles.ElementVideo__Button, styles.ElementVideo__Button_Play)}
      onClick={handlePlayVideo}
    ></button>
  );

  return (
    <div className={cn(styles.ElementVideo, className)} onClick={handlePlayVideo}>
      <video
        className={styles.ElementVideo__Item}
        preload="none"
        poster={poster}
        ref={videoRef}
        onPlay={playVideo}
        onEnded={endVideo}
        onPause={pauseVideo}
      >
        <source src={src} type={type} />
        Ваш браузер не поддерживает воспроизведение видео.
      </video>
      {!isPlayed && buttonPlay}
    </div>
  );
}
