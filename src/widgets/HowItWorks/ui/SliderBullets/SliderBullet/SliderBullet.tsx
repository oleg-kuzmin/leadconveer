import cn from 'classnames';
import { HandleClickSliderBullet } from '@/shared/lib/types';
import styles from './SliderBullet.module.scss';

interface SliderBulletProps {
  index: number;
  onClick: HandleClickSliderBullet;
  isActive?: boolean;
  className?: string;
}

export function SliderBullet({ isActive, index, onClick, className }: Readonly<SliderBulletProps>) {
  return (
    <button
      className={cn(styles.SliderBullet, { [styles.SliderBullet_Active]: isActive }, className)}
      onClick={() => onClick(index)}></button>
  );
}
