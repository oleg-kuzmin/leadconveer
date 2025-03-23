import cn from 'classnames';
import styles from './AccentTextElement.module.scss';

interface AccentTextElementProps {
  children: React.ReactNode;
  className?: string;
}

export function AccentTextElement({ children, className }: Readonly<AccentTextElementProps>) {
  return <strong className={cn(styles.AccentTextElement, className)}>{children}</strong>;
}
