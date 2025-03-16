import cn from 'classnames';
import styles from './SlideTitle.module.scss';

interface SlideTitleProps {
  text: string;
  className?: string;
}

export function SlideTitle({ text, className }: Readonly<SlideTitleProps>) {
  return <h3 className={cn(styles.SlideTitle, className)}>{text}</h3>;
}
