import cn from 'classnames';
import styles from './PresentationHeader.module.scss';

interface PresentationHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function PresentationHeader({ children, className }: Readonly<PresentationHeaderProps>) {
  return <div className={cn(styles.PresentationHeader, className)}>{children}</div>;
}
