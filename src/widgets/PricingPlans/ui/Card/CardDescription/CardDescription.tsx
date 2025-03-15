import cn from 'classnames';
import styles from './CardDescription.module.scss';

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function CardDescription({ children, className }: Readonly<CardDescriptionProps>) {
  return <p className={cn(styles.CardDescription, className)}>{children}</p>;
}
