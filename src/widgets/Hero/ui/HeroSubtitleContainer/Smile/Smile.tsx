import cn from 'classnames';
import styles from './Smile.module.scss';

interface SmileProps {
  className?: string;
}

export function Smile({ className }: Readonly<SmileProps>) {
  return <div className={cn(styles.Smile, className)}></div>;
}
