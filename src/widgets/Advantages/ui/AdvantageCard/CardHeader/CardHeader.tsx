import cn from 'classnames';
import styles from './CardHeader.module.scss';

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: Readonly<CardHeaderProps>) {
  return <div className={cn(styles.CardHeader, className)}>{children}</div>;
}
