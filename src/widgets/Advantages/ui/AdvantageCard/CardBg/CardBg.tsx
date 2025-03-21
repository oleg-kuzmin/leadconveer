import cn from 'classnames';
import styles from './CardBg.module.scss';

interface CardBgProps {
  className?: string;
}

export function CardBg({ className }: Readonly<CardBgProps>) {
  return <div className={cn(styles.CardBg, className)}></div>;
}
