import cn from 'classnames';
import styles from './DescriptionText.module.scss';

interface DescriptionTextProps {
  children: React.ReactNode;
  className?: string;
}

export function DescriptionText({ children, className }: Readonly<DescriptionTextProps>) {
  return <div className={cn(styles.DescriptionText, className)}>{children}</div>;
}
