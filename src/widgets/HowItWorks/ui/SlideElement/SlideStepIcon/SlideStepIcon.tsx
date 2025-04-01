import cn from 'classnames';
import { StepSlide } from '@/shared/lib/types';
import styles from './SlideStepIcon.module.scss';

interface SlideStepIconProps {
  icon: StepSlide;
  className?: string;
}

export function SlideStepIcon({ icon, className }: Readonly<SlideStepIconProps>) {
  let classIcon: string;

  switch (icon) {
    case '01':
      classIcon = styles.SlideStepIcon_01;
      break;
    case '02':
      classIcon = styles.SlideStepIcon_02;
      break;
    case '03':
      classIcon = styles.SlideStepIcon_03;
      break;
    case '04':
      classIcon = styles.SlideStepIcon_04;
      break;
    case '05':
      classIcon = styles.SlideStepIcon_05;
      break;
    default:
      throw Error('SlideStepIcon: unknown icon.');
  }

  return <div className={cn(styles.SlideStepIcon, classIcon, className)}></div>;
}
