import cn from 'classnames';
import styles from './SmallCardTitle.module.scss';

interface SmallCardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SmallCardTitle({ children, className }: Readonly<SmallCardTitleProps>) {
  return <span className={cn(styles.SmallCardTitle, className)}>{children}</span>;
}
