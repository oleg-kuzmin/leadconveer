import cn from 'classnames';
import styles from './CardTitle.module.scss';

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTitle({ children, className }: Readonly<CardTitleProps>) {
  return <h3 className={cn(styles.CardTitle, className)}>{children}</h3>;
}
