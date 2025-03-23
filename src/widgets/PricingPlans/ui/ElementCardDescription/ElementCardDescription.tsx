import cn from 'classnames';
import styles from './ElementCardDescription.module.scss';

interface ElementCardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function ElementCardDescription({ children, className }: Readonly<ElementCardDescriptionProps>) {
  return <p className={cn(styles.ElementCardDescription, className)}>{children}</p>;
}
