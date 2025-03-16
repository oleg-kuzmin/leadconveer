import cn from 'classnames';
import { SlideIcon } from './SlideIcon';
import { SlideNumber } from './SlideNumber';
import styles from './SlideStep.module.scss';

interface SlideStepProps {
  step: '01' | '02' | '03' | '04' | '05';
  className?: string;
}

export function SlideStep({ step, className }: Readonly<SlideStepProps>) {
  return (
    <div className={cn(styles.SlideStep, className)}>
      <SlideNumber text={step} />
      <SlideIcon step={step} />
    </div>
  );
}
