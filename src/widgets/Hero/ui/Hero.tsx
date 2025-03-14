import cn from 'classnames';
import styles from './Hero.module.scss';

interface HeroProps {
  className?: string;
}

export function Hero({ className }: Readonly<HeroProps>) {
  return (
    <div className={cn(styles.Hero, className)}></div>
  );
}