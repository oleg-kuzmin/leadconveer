import cn from 'classnames';
import styles from './SlideNumber.module.scss';

interface SlideNumberProps {
  text: string;
  className?: string;
}

export function SlideNumber({ text, className }: Readonly<SlideNumberProps>) {
  return <span className={cn(styles.SlideNumber, className)}>{text}</span>;
}
