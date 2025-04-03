'use client';

import { useRef, useState } from 'react';
import cn from 'classnames';
import styles from './Video.module.scss';

interface VideoProps {
  width: number;
  height: number;
  src: string;
  type: string;
  poster?: string;
  className?: string;
}

export function Video({ src, type, poster, width, height, className }: Readonly<VideoProps>) {
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

  const noPlayedVideo = () => {
    if (videoRef.current) {
      setIsPlayed(false);
      videoRef.current.controls = false;
    }
  };

  const buttonPlay = (
    <button
      className={cn(styles.Video__ButtonPlay)}
      onClick={handlePlayVideo}
      style={{ width: `calc(53 / ${width} * 100%)`, height: `calc(62 / ${height} * 100%)` }}></button>
  );

  return (
    <div className={cn(styles.Video, className)} style={{ maxWidth: `${width}px` }}>
      <video
        className={styles.Video__Item}
        style={{ aspectRatio: `${width}/${height}` }}
        preload="none"
        poster={poster}
        ref={videoRef}
        onPlay={playVideo}
        onEnded={noPlayedVideo}
        onPause={noPlayedVideo}>
        <source src={src} type={type} />
        Ваш браузер не поддерживает воспроизведение видео.
      </video>
      {!isPlayed && buttonPlay}
    </div>
  );
}
