import cn from 'classnames';
import styles from './CardTitleElement.module.scss';

interface CardTitleElementProps {
  text: string;
  className?: string;
}

export function CardTitleElement({ text, className }: Readonly<CardTitleElementProps>) {
  return <h3 className={cn(styles.CardTitleElement, className)}>{text}</h3>;
}
