import cn from 'classnames';
import styles from './CardTitle.module.scss';

interface CardTitleProps {
  text: string;
  className?: string;
}

export function CardTitle({ text, className }: Readonly<CardTitleProps>) {
  return <h3 className={cn(styles.CardTitle, className)}>{text}</h3>;
}
