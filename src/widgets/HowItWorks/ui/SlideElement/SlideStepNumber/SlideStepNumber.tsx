import cn from 'classnames';
import { StepSlide } from '@/shared/lib/types';
import styles from './SlideStepNumber.module.scss';

interface SlideStepNumberProps {
  text: StepSlide;
  className?: string;
}

export function SlideStepNumber({ text, className }: Readonly<SlideStepNumberProps>) {
  return <span className={cn(styles.SlideStepNumber, className)}>{text}</span>;
}
