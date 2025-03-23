import cn from 'classnames';
import styles from './ElementCardTitle.module.scss';

interface ElementCardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function ElementCardTitle({ children, className }: Readonly<ElementCardTitleProps>) {
  return <div className={cn(styles.ElementCardTitle, className)}>{children}</div>;
}
