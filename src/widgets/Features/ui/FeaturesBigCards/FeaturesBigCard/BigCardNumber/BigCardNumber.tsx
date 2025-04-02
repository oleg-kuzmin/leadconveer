import cn from 'classnames';
import styles from './BigCardNumber.module.scss';

interface BigCardNumberProps {
  children: React.ReactNode;
  className?: string;
}

export function BigCardNumber({ children, className }: Readonly<BigCardNumberProps>) {
  return <span className={cn(styles.BigCardNumber, className)}>{children}</span>;
}
