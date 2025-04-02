import cn from 'classnames';
import styles from './SmallCardText.module.scss';

interface SmallCardTextProps {
  children: React.ReactNode;
  className?: string;
}

export function SmallCardText({ children, className }: Readonly<SmallCardTextProps>) {
  return <p className={cn(styles.SmallCardText, className)}>{children}</p>;
}
