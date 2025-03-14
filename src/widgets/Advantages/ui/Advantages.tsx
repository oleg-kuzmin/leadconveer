import cn from 'classnames';
import styles from './Advantages.module.scss';

interface AdvantagesProps {
  className?: string;
}

export function Advantages({ className }: Readonly<AdvantagesProps>) {
  return (
    <div className={cn(styles.Advantages, className)}></div>
  );
}