import cn from 'classnames';
import styles from './ElementCardBg.module.scss';

interface ElementCardBgProps {
  className?: string;
}

export function ElementCardBg({ className }: Readonly<ElementCardBgProps>) {
  return <div className={cn(styles.ElementCardBg, className)}></div>;
}
