import cn from 'classnames';
import styles from './AccentText.module.scss';

interface AccentTextProps {
  children: React.ReactNode;
  className?: string;
}

export function AccentText({ children, className }: Readonly<AccentTextProps>) {
  return <strong className={cn(styles.AccentText, className)}>{children}</strong>;
}
