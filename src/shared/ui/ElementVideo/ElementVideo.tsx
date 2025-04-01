'use client';

import { useRef, useState } from 'react';
import cn from 'classnames';
import styles from './ElementVideo.module.scss';

interface ElementVideoProps {
  width: number;
  height: number;
  src: string;
  type: string;
  poster?: string;
  className?: string;
}

export function ElementVideo({ src, type, poster, width, height, className }: Readonly<ElementVideoProps>) {
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
      className={cn(styles.ElementVideo__ButtonPlay)}
      onClick={handlePlayVideo}
      style={{ width: `calc(53 / ${width} * 100%)`, height: `calc(62 / ${height} * 100%)` }}></button>
  );

  return (
    <div className={cn(styles.ElementVideo, className)} onClick={handlePlayVideo} style={{ maxWidth: `${width}px` }}>
      <video
        className={styles.ElementVideo__Item}
        style={{ aspectRatio: `${width}/${height}` }}
        preload="none"
        poster={poster}
        ref={videoRef}
        onPlay={playVideo}
        onEnded={endVideo}
        onPause={pauseVideo}>
        <source src={src} type={type} />
        Ваш браузер не поддерживает воспроизведение видео.
      </video>
      {!isPlayed && buttonPlay}
    </div>
  );
}
