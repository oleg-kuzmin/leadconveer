import cn from 'classnames';
import styles from './SlideStep.module.scss';

interface SlideStepProps {
  children: React.ReactNode;
  className?: string;
}

export function SlideStep({ children, className }: Readonly<SlideStepProps>) {
  return <div className={cn(styles.SlideStep, className)}>{children}</div>;
}
