import cn from 'classnames';
import styles from './ElementAccentText.module.scss';

interface ElementAccentTextProps {
  children: React.ReactNode;
  className?: string;
}

export function ElementAccentText({ children, className }: Readonly<ElementAccentTextProps>) {
  return <strong className={cn(styles.ElementAccentText, className)}>{children}</strong>;
}
