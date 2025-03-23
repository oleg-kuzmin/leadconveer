import cn from 'classnames';
import styles from './ElementSectionTitle.module.scss';

interface ElementSectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function ElementSectionTitle({ children, className }: Readonly<ElementSectionTitleProps>) {
  return <h2 className={cn(styles.ElementSectionTitle, className)}>{children}</h2>;
}
