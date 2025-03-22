import cn from 'classnames';
import styles from './HeroSubtitleElement.module.scss';

interface HeroSubtitleElementProps {
  text: React.ReactNode;
  className?: string;
}

export function HeroSubtitleElement({ text, className }: Readonly<HeroSubtitleElementProps>) {
  return <p className={cn(styles.HeroSubtitleElement, className)}>{text}</p>;
}
