import cn from 'classnames';
import styles from './CardText.module.scss';

interface CardTextProps {
  children: React.ReactNode;
  className?: string;
}

export function CardText({ children, className }: Readonly<CardTextProps>) {
  return <p className={cn(styles.CardText, className)}>{children}</p>;
}
