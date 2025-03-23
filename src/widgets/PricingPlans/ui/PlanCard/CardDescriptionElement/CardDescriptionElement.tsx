import cn from 'classnames';
import styles from './CardDescriptionElement.module.scss';

interface CardDescriptionElementProps {
  children: React.ReactNode;
  className?: string;
}

export function CardDescriptionElement({ children, className }: Readonly<CardDescriptionElementProps>) {
  return <p className={cn(styles.CardDescriptionElement, className)}>{children}</p>;
}
