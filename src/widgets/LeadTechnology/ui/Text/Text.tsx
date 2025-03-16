import cn from 'classnames';
import styles from './Text.module.scss';

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export function Text({ children, className }: Readonly<TextProps>) {
  return <div className={cn(styles.Text, className)}>{children}</div>;
}
