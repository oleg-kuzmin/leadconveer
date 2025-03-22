import cn from 'classnames';
import styles from './SectionSubtitleElement.module.scss';

interface SectionSubtitleElementProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionSubtitleElement({ children, className }: Readonly<SectionSubtitleElementProps>) {
  return <p className={cn(styles.SectionSubtitleElement, className)}>{children}</p>;
}
