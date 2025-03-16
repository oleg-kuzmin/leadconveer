import cn from 'classnames';
import styles from './Caption.module.scss';

interface CaptionProps {
  children: React.ReactNode;
  className?: string;
}

export function Caption({ children, className }: Readonly<CaptionProps>) {
  return <span className={cn(styles.Caption, className)}>{children}</span>;
}
