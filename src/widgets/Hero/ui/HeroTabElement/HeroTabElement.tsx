import cn from 'classnames';
import styles from './HeroTabElement.module.scss';

interface HeroTabElementProps {
  text: string;
  className?: string;
}

export function HeroTabElement({ text, className }: Readonly<HeroTabElementProps>) {
  return <div className={cn(styles.HeroTabElement, className)}>{text}</div>;
}
