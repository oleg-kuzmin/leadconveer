import cn from 'classnames';
import styles from './ElementSmile.module.scss';

interface ElementSmileProps {
  className?: string;
}

export function ElementSmile({ className }: Readonly<ElementSmileProps>) {
  return <div className={cn(styles.ElementSmile, className)}></div>;
}
