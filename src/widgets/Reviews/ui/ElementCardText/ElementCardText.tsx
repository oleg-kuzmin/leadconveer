import cn from 'classnames';
import styles from './ElementCardText.module.scss';

interface ElementCardTextProps {
  children: React.ReactNode;
  className?: string;
}

export function ElementCardText({ children, className }: Readonly<ElementCardTextProps>) {
  return <p className={cn(styles.ElementCardText, className)}>{children}</p>;
}
