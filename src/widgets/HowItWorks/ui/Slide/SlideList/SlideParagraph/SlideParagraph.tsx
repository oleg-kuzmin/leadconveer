import cn from 'classnames';
import styles from './SlideParagraph.module.scss';

interface SlideParagraphProps {
  text: string;
  className?: string;
}

export function SlideParagraph({ text, className }: Readonly<SlideParagraphProps>) {
  return <p className={cn(styles.SlideParagraph, className)}>{text}</p>;
}
