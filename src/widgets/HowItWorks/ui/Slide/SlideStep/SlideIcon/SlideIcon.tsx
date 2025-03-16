import cn from 'classnames';
import styles from './SlideIcon.module.scss';

interface SlideIconProps {
  step: '01' | '02' | '03' | '04' | '05';
  className?: string;
}

export function SlideIcon({ step, className }: Readonly<SlideIconProps>) {
  let classIcon: string;

  switch (step) {
    case '01':
      classIcon = styles.SlideIcon_01;
      break;
    case '02':
      classIcon = styles.SlideIcon_02;
      break;
    case '03':
      classIcon = styles.SlideIcon_03;
      break;
    case '04':
      classIcon = styles.SlideIcon_04;
      break;
    case '05':
      classIcon = styles.SlideIcon_05;
      break;
    default:
      classIcon = '';
      break;
  }

  return <div className={cn(styles.SlideIcon, classIcon, className)}></div>;
}
