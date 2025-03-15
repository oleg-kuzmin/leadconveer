import cn from 'classnames';
import styles from './CardFooter.module.scss';

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function CardFooter({ children, className }: Readonly<CardFooterProps>) {
  return <p className={cn(styles.CardFooter, className)}>{children}</p>;
}
