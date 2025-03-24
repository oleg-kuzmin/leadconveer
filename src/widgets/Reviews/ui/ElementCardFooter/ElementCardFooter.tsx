import cn from 'classnames';
import styles from './ElementCardFooter.module.scss';

interface ElementCardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function ElementCardFooter({ children, className }: Readonly<ElementCardFooterProps>) {
  return <p className={cn(styles.ElementCardFooter, className)}>{children}</p>;
}
