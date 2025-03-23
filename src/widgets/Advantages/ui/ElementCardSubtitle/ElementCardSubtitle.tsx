import cn from 'classnames';
import styles from './ElementCardSubtitle.module.scss';

interface ElementCardSubtitleProps {
  text: string;
  className?: string;
}

export function ElementCardSubtitle({ text, className }: Readonly<ElementCardSubtitleProps>) {
  return <p className={cn(styles.ElementCardSubtitle, className)}>{text}</p>;
}
