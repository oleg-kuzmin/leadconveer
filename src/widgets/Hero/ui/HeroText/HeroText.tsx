import cn from 'classnames';
import styles from './HeroText.module.scss';

interface HeroTextProps {
  children: React.ReactNode;
  className?: string;
}

export function HeroText({ children, className }: Readonly<HeroTextProps>) {
  return <div className={cn(styles.HeroText, className)}>{children}</div>;
}
