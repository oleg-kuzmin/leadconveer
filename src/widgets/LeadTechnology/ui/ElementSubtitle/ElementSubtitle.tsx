import cn from 'classnames';
import styles from './ElementSubtitle.module.scss';

interface ElementSubtitleProps {
  children: React.ReactNode;
  className?: string;
}

export function ElementSubtitle({ children, className }: Readonly<ElementSubtitleProps>) {
  return <div className={cn(styles.ElementSubtitle, className)}>{children}</div>;
}
