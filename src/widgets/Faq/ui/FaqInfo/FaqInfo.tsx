import cn from 'classnames';
import styles from './FaqInfo.module.scss';

interface FaqInfoProps {
  children: React.ReactNode;
  className?: string;
}

export function FaqInfo({ children, className }: Readonly<FaqInfoProps>) {
  return <div className={cn(styles.FaqInfo, className)}>{children}</div>;
}
