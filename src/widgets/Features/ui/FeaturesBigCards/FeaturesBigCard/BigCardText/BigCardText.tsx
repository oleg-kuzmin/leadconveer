import cn from 'classnames';
import styles from './BigCardText.module.scss';

interface BigCardTextProps {
  children: React.ReactNode;
  className?: string;
}

export function BigCardText({ children, className }: Readonly<BigCardTextProps>) {
  return <p className={cn(styles.BigCardText, className)}>{children}</p>;
}
