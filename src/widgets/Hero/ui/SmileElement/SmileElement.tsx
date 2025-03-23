import cn from 'classnames';
import styles from './SmileElement.module.scss';

interface SmileElementProps {
  className?: string;
}

export function SmileElement({ className }: Readonly<SmileElementProps>) {
  return <div className={cn(styles.SmileElement, className)}></div>;
}
