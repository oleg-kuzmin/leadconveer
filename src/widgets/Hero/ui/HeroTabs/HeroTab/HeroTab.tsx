import cn from 'classnames';
import styles from './HeroTab.module.scss';

interface HeroTabProps {
  text: string;
  className?: string;
}

export function HeroTab({ text, className }: Readonly<HeroTabProps>) {
  return <div className={cn(styles.HeroTab, className)}>{text}</div>;
}
