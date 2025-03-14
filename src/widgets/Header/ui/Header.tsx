import cn from 'classnames';
import styles from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: Readonly<HeaderProps>) {
  return (
    <div className={cn(styles.Header, className)}></div>
  );
}