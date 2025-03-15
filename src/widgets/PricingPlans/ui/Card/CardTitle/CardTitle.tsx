import cn from 'classnames';
import styles from './CardTitle.module.scss';

interface CardTitleProps {
  children: React.ReactNode;
  invert?: boolean;
  className?: string;
}

export function CardTitle({ children, invert, className }: Readonly<CardTitleProps>) {
  return <h3 className={cn(styles.CardTitle, { [styles.CardTitle_Invert]: invert }, className)}>{children}</h3>;
}
