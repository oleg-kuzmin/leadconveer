import cn from 'classnames';
import styles from './SectionTitle.module.scss';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className }: Readonly<SectionTitleProps>) {
  return <h2 className={cn(styles.SectionTitle, className)}>{children}</h2>;
}
