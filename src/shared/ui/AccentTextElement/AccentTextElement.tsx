import cn from 'classnames';
import styles from './AccentTextElement.module.scss';

interface AccentTextElementProps {
  tag: 'span' | 'strong';
  children: React.ReactNode;
  className?: string;
}

export function AccentTextElement({ tag, children, className }: Readonly<AccentTextElementProps>) {
  switch (tag) {
    case 'span':
      return <span className={cn(styles.AccentTextElement, className)}>{children}</span>;
    case 'strong':
      return <strong className={cn(styles.AccentTextElement, className)}>{children}</strong>;
    default:
      return <span className={cn(styles.AccentTextElement, className)}>{children}</span>;
  }
}
