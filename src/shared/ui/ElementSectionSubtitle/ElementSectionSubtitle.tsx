import cn from 'classnames';
import styles from './ElementSectionSubtitle.module.scss';

interface ElementSectionSubtitleProps {
  children: React.ReactNode;
  className?: string;
}

export function ElementSectionSubtitle({ children, className }: Readonly<ElementSectionSubtitleProps>) {
  return <p className={cn(styles.ElementSectionSubtitle, className)}>{children}</p>;
}
