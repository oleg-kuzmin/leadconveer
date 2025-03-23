import cn from 'classnames';
import styles from './ElementTab.module.scss';

interface ElementTabProps {
  text: string;
  className?: string;
}

export function ElementTab({ text, className }: Readonly<ElementTabProps>) {
  return <div className={cn(styles.ElementTab, className)}>{text}</div>;
}
