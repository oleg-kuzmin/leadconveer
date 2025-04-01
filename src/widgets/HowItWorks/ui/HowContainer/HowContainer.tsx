import cn from 'classnames';
import styles from './HowContainer.module.scss';

interface HowContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function HowContainer({ children, className }: Readonly<HowContainerProps>) {
  return <div className={cn(styles.HowContainer, className)}>{children}</div>;
}
