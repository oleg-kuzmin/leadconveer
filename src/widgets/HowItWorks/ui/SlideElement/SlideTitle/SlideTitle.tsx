import cn from 'classnames';
import styles from './SlideTitle.module.scss';

interface SlideTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SlideTitle({ children, className }: Readonly<SlideTitleProps>) {
  return <h3 className={cn(styles.SlideTitle, className)}>{children}</h3>;
}
