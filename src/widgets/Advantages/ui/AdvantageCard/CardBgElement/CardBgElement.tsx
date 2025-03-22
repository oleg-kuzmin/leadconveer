import cn from 'classnames';
import styles from './CardBgElement.module.scss';

interface CardBgElementProps {
  className?: string;
}

export function CardBgElement({ className }: Readonly<CardBgElementProps>) {
  return <div className={cn(styles.CardBgElement, className)}></div>;
}
