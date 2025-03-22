import cn from 'classnames';
import styles from './CardSubtitleElement.module.scss';

interface CardSubtitleElementProps {
  text: string;
  className?: string;
}

export function CardSubtitleElement({ text, className }: Readonly<CardSubtitleElementProps>) {
  return <p className={cn(styles.CardSubtitleElement, className)}>{text}</p>;
}
