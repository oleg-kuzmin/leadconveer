import cn from 'classnames';
import styles from './CardContent.module.scss';

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className }: Readonly<CardContentProps>) {
  return <div className={cn(styles.CardContent, className)}>{children}</div>;
}
