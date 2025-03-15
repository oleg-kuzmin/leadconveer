import cn from 'classnames';
import styles from './SectionSubtitle.module.scss';

interface SectionSubtitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionSubtitle({ children, className }: Readonly<SectionSubtitleProps>) {
  return <p className={cn(styles.SectionSubtitle, className)}>{children}</p>;
}
