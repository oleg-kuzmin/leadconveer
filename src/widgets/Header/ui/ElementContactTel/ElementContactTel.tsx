import cn from 'classnames';
import styles from './ElementContactTel.module.scss';

interface ElementContactTelProps {
  text: string;
  className?: string;
}

export function ElementContactTel({ text, className }: Readonly<ElementContactTelProps>) {
  return <span className={cn(styles.ElementContactTel, className)}>{text}</span>;
}
