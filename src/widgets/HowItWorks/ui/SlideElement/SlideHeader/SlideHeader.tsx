import cn from 'classnames';
import styles from './SlideHeader.module.scss';

interface SlideHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function SlideHeader({ children, className }: Readonly<SlideHeaderProps>) {
  return <div className={cn(styles.SlideHeader, className)}>{children}</div>;
}
