import cn from 'classnames';
import styles from './HeroSubtitle.module.scss';

interface HeroSubtitleProps {
  text: React.ReactNode;
  className?: string;
}

export function HeroSubtitle({ text, className }: Readonly<HeroSubtitleProps>) {
  return <p className={cn(styles.HeroSubtitle, className)}>{text}</p>;
}
