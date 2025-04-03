import cn from 'classnames';
import styles from './BuyIcon.module.scss';

interface BuyIconProps {
  className?: string;
}

export function BuyIcon({ className }: Readonly<BuyIconProps>) {
  return <div className={cn(styles.BuyIcon, className)}></div>;
}
