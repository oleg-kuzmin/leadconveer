import { JSX } from 'react';
import cn from 'classnames';
import { HandleClickSliderBullet } from '@/shared/lib/types';
import { SliderBullet } from './SliderBullet/SliderBullet';
import styles from './SliderBullets.module.scss';

interface SliderBulletsProps {
  onClick: HandleClickSliderBullet;
  length: number;
  indexActive: number;
  className?: string;
}

export function SliderBullets({ indexActive, length, onClick, className }: Readonly<SliderBulletsProps>) {
  const mapFn = (_: JSX.Element, index: number) => {
    return <SliderBullet key={index} index={index} isActive={indexActive === index} onClick={() => onClick(index)} />;
  };

  const bulletElements = Array.from({ length: length }, mapFn);

  return <div className={cn(styles.SliderBullets, className)}>{bulletElements}</div>;
}
