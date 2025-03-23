import cn from 'classnames';
import styles from './CardTitleElement.module.scss';

interface CardTitleElementProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTitleElement({ children, className }: Readonly<CardTitleElementProps>) {
  return <div className={cn(styles.CardTitleElement, className)}>{children}</div>;
}
