import cn from 'classnames';
import styles from './SectionTitleElement.module.scss';

interface SectionTitleElementProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitleElement({ children, className }: Readonly<SectionTitleElementProps>) {
  return <h2 className={cn(styles.SectionTitleElement, className)}>{children}</h2>;
}
