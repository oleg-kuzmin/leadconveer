import cn from 'classnames';
import styles from './ElementCardTitle.module.scss';

interface ElementCardTitleProps {
  text: string;
  className?: string;
}

export function ElementCardTitle({ text, className }: Readonly<ElementCardTitleProps>) {
  return <h3 className={cn(styles.ElementCardTitle, className)}>{text}</h3>;
}
