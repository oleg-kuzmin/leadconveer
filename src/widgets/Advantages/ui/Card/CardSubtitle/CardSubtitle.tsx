import cn from 'classnames';
import styles from './CardSubtitle.module.scss';

interface CardSubtitleProps {
  text: string;
  className?: string;
}

export function CardSubtitle({ text, className }: Readonly<CardSubtitleProps>) {
  return <p className={cn(styles.CardSubtitle, className)}>{text}</p>;
}
